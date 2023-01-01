import { Box, TextField } from '@mui/material';

import styles from './household.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Household() {
    return (
        <div className={cx('household-paper')}>
            <div className={cx('household-paper-content')}>
                <div className={cx('household-detail')}>
                    <TextField
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        required
                        label="Số hộ khẩu"
                        defaultValue="123"
                        variant="standard"
                    />
                    <TextField
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        required
                        label="Nơi thường trú"
                        defaultValue="123"
                        variant="standard"
                    />
                    <TextField
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        required
                        label="Danh sách các thành viên"
                        defaultValue="123"
                        variant="standard"
                    />
                    <TextField
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        required
                        label="Chủ hộ"
                        defaultValue="123"
                        variant="standard"
                    />
                    <TextField
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        required
                        label="Tổ phụ trách"
                        defaultValue="123"
                        variant="standard"
                    />
                </div>
                <div className={cx('population-table')}>

                </div>
            </div>
        </div>
    );
}

export default Household;