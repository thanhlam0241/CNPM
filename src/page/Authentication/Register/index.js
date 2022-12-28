import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react'
//material-ui
import { Button, FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Input from '@mui/material/Input';
//api
import axios, { axiosConfig } from '../../../services/api/axios'
//context 
import { AuthContext } from '~/components/AuthenProvider'
//style
import styles from './Register.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const REGISTER_URL = '/accounts';

export default function Signup({ act }) {
    //use to navigate
    const navigate = useNavigate();

    //auth context
    const { setAuth } = useContext(AuthContext);

    //user state to register
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    //status of register
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');

    //handle register
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${REGISTER_URL}`).then(res => res.data);
            const user = response.find((user) => user.username === username);
            if (user) {
                setMsg('Username already exists');
            }
            else if (password !== confPassword) {
                setMsg('Password and confirm password must be the same');
            }
            else {
                const data = {
                    username: username,
                    password: password
                }
                setAuth(data);
                await axios.post(`${REGISTER_URL}`, data, axiosConfig);
                setTimeout(() => navigate('/profile'), 100)
                setMsg('Register successfully');
            }
        }
        catch (err) {
            if (!err?.response) {
                setMsg('Something went wrong');
            }
            else {
                setMsg(err.response.data.message);
            }
        }
        setStatus(true);
    }

    //render
    return (
        <div className={cx('login')}>
            <div className={cx('login-form')}>
                <div className={cx('login-form__input')}>
                    <FormControl sx={{ margin: '10px 0' }} className={cx('input-login')} variant="standard">
                        <InputLabel sx={{ fontSize: 15 }} htmlFor="input_regis_account">
                            Account
                        </InputLabel>
                        <Input
                            sx={{ fontSize: 15 }}
                            id="input_regis_account"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            value={username || ''}
                            onChange={(e) => setUserName(e.target.value)}
                            autoComplete="off"
                        />
                    </FormControl>
                    <FormControl sx={{ margin: '10px 0' }} variant="standard">
                        <InputLabel sx={{ fontSize: 15 }} htmlFor="input_regis_password">
                            Password
                        </InputLabel>
                        <Input
                            sx={{ fontSize: 15 }}
                            id="input_regis_password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKeyIcon />
                                </InputAdornment>
                            }
                            type="password"
                            value={password || ''}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </FormControl>
                    <FormControl sx={{ margin: '10px 0' }} variant="standard">
                        <InputLabel sx={{ fontSize: 15 }} htmlFor="input_regis_conf_password">
                            Confirm assword
                        </InputLabel>
                        <Input
                            sx={{ fontSize: 15 }}
                            id="input_regis_conf_password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKeyIcon />
                                </InputAdornment>
                            }
                            type="password"
                            value={confPassword || ''}
                            onChange={(e) => setConfPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </FormControl>
                </div>

                <Button variant="contained" color="primary" onClick={handleRegister} >
                    Register
                </Button>
                {status && <p style={{ marginTop: 10, color: 'red' }}>{msg}</p>}
                <hr className={cx('hr-login')} />
                <p>Do you have an account? <span onClick={() => act('1')} className={cx('signin-btn')}>Sign up</span></p>
            </div>
        </div>
    )
}