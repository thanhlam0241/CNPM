import { useState } from 'react';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { ChangeCircleOutlined } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


import classNames from 'classnames/bind';
import styles from './AccountSetting.module.scss';
const cx = classNames.bind(styles);


export default function AccountSetting() {
    const [isChange, setIsChange] = useState(true);
    const changeState = () => {
        setIsChange(!isChange);
    }
    return (
        <div className={cx('account-setting')}>
            <div className={cx('account-info')}>
                <Button onClick={changeState} sx={{ position: 'absolute', top: -30, right: -20 }}>Thay đổi thông tin <ChangeCircleOutlined /></Button>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} htmlFor="component-simple1">First name</InputLabel>
                    <Input sx={{ fontSize: 15 }}
                        id="component-simple1"
                        defaultValue="Nguyễn Thanh"
                        readOnly={isChange}
                    />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Last name</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="Lâm" />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Phone number</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="375928856" />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Email address</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="thanhlam0241@gmail.com" />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >City</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="Hưng Yên" />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Country</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="Việt Nam" />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Address</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="Việt Nam" />
                </FormControl>
                <FormControl sx={{ width: '30%' }} variant="standard">
                    <InputLabel sx={{ fontSize: 20 }} >Career</InputLabel>
                    <Input readOnly={isChange} sx={{ fontSize: 15 }} defaultValue="Việt Nam" />
                </FormControl>
            </div>
            <Button color='primary' variant="contained" sx={{ marginTop: 20, fontSize: 15, zIndex: 1 }} disabled={isChange} onClick={changeState}>Cập nhật</Button>
        </div>
    )
}