import styles from './ProfileUser.module.scss';
import classNames from 'classnames/bind';

import { FormControl, Input, InputLabel, Button } from '@mui/material';

import axios from '~/services/api/axios';
import { AuthContext } from '~/components/AuthenProvider'
import { useState, useContext } from 'react';

const cx = classNames.bind(styles);

const ACCOUNT_API = '/accounts';

export default function User() {
    const { auth, setAuth } = useContext(AuthContext);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessageCurrentPassword, setErrorMessageCurrentPassword] = useState('');
    const [errorMessageNewPassword, setErrorMessageNewPassword] = useState('');

    const [success, setSuccess] = useState(false);

    const handleUpdate = async () => {
        if (currentPassword === '') {
            setErrorMessageCurrentPassword('Vui lòng nhập mật khẩu hiện tại');
        }
        else if (newPassword === '') {
            setErrorMessageNewPassword('Vui lòng nhập mật khẩu mới');
        }
        else if (confirmPassword === '') {
            setErrorMessageNewPassword('Vui lòng nhập lại mật khẩu mới');
        }
        else if (newPassword !== confirmPassword) {
            setErrorMessageNewPassword('Mật khẩu không khớp');
        }
        else if (currentPassword !== auth.password) {
            setErrorMessageCurrentPassword('Mật khẩu không đúng');
        }
        else {
            setAuth({ ...auth, password: newPassword });
            await axios.put(ACCOUNT_API + '/' + auth.id, {
                ...auth,
                password: newPassword
            });
            setSuccess(true);
            setErrorMessageCurrentPassword('');
            setErrorMessageNewPassword('');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    }

    return (
        <div className={cx('profile-setting')}>
            {success && <h4 >Change password successfully</h4>}
            <div className={cx('profile-info')}>
                <FormControl variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Old password</InputLabel>
                    <Input type='password' sx={{ fontSize: 15 }}
                        helpertext={errorMessageCurrentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        value={currentPassword}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >New password</InputLabel>
                    <Input type='password' sx={{ fontSize: 15 }}
                        helpertext={errorMessageNewPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Confirm password</InputLabel>
                    <Input type='password' sx={{ fontSize: 15 }}
                        helpertext={errorMessageNewPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </FormControl>
            </div>
            <Button color='primary' variant="contained" sx={{ marginTop: 20, fontSize: 15, zIndex: 1 }} onClick={handleUpdate}>Cập nhật</Button>
        </div>
    )
}