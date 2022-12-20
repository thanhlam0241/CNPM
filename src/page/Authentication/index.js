import Login from './Login';
import Register from './Register';
import { AuthProvider } from './AuthenProvider/index.js';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

import classNames from 'classnames/bind';
import styles from './Authentication.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);



function Authentication() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={cx('container-authen')}>
            <Box sx={{ width: '100%', typography: 'body1', marginTop: 1 }} autoComplete="off">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                            <Tab sx={{ fontSize: 15 }} label="Login" value="1" />
                            <Tab sx={{ fontSize: 15 }} label="Register" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <AuthProvider >
                            <Login act={setValue} />
                        </AuthProvider>
                    </TabPanel>
                    <TabPanel value="2"><Register act={setValue} /></TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}

export default Authentication;