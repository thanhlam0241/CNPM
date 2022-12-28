//hooks
import { useCallback, useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
//material-ui
import { Button, FormControl } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Input from '@mui/material/Input';

//api
import { AuthContext } from '../../../components/AuthenProvider'
import axios from '../../../services/api/axios'
//sass
import styles from './Login.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

//url api
const LOGIN_URL = '/accounts';

export default function Login({ act }) {
    //auth context
    const { setAuth } = useContext(AuthContext);
    //user state
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [start, setStart] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    //handle login
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${LOGIN_URL}`).then(res => res.data);
            const user = response.find((user) => user.username === username && user.password === password);
            if (!user) {
                setErrMsg('Invalid username or password');
            }
            else {
                setAuth(user);
                setErrMsg('Login successfully')
                setTimeout(() => navigate('/profile'), 100)
                setUserName('');
                setPassword('');
            }
            setStart(true);
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('Server is not available');
            }
            else if (err?.reponse?.status === 400) {
                setErrMsg('Missing username or password');
            }
            else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            }
            else {
                setErrMsg('Something went wrong');
            }
            errRef.current.focus();
        }
    }

    //handle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), []);
    const handleMouseDownPassword = useCallback((event) => {
        event.preventDefault();
    }, [])

    //render
    return (
        <div className={cx('login')}>
            <div className={cx('login-form')}>
                <div className={cx('login-form__input')} >
                    <FormControl sx={{ margin: '10px 0' }} className={cx('input-login')} variant="standard">
                        <InputLabel sx={{ fontSize: 15 }} htmlFor="input_login_account">
                            Account
                        </InputLabel>
                        <Input
                            ref={userRef}
                            sx={{ fontSize: 15 }}
                            id="input_login_account"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            value={username || ''}
                            onChange={e => setUserName(e.target.value)}
                            required

                        />
                    </FormControl>
                    <FormControl sx={{ margin: '10px 0' }} variant="standard">
                        <InputLabel sx={{ fontSize: 15 }} htmlFor="input_login_password">
                            Password
                        </InputLabel>
                        <Input
                            sx={{ fontSize: 15 }}
                            id="input_login_password"
                            type={showPassword ? 'text' : 'password'}
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKeyIcon />
                                </InputAdornment>
                            }
                            value={password || ''}
                            onChange={e => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            required
                        />
                    </FormControl>
                </div>
                <Button variant="contained" color="primary" onClick={handleSubmit} >
                    Login
                </Button>
                {start && <p style={{ marginTop: 10, color: 'red' }}>{errMsg}</p>}
                <hr className={cx('hr-login')} />
                <p>Don't you have an account? <span onClick={() => act('2')} className={cx('signup-btn')}>Sign up</span></p>
            </div>
        </div>
    )
}