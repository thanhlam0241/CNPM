import { useState, useEffect } from 'react';
import { Fab, MenuItem, Box, TextField } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Add } from '@mui/icons-material';
import styles from '../HoKhauForm/HK.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const genders = [
    { value: 'male', label: 'Nam' },
    { value: 'female', label: 'Nữ' }
]
export default function FormNKComponent() {

    const [value, setValue] = useState(null);
    const [img, setImg] = useState();
    const handleFileImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImg(file);
        e.target.value = null;
    }
    useEffect(() => {

        //clean up function
        return () => {
            img && URL.revokeObjectURL(img.preview);
            //remvove the temporary url if avatar exists
        }
    }, [img])
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField required id="outlined-basic" label="Họ và tên" variant="outlined" />
            <TextField required id="outlined-basic" label="Bí danh" variant="outlined" />
            <TextField required id="outlined-basic" label="Họ và tên chủ hộ" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    required
                    sx={{ fontSize: 12 }}
                    label="Ngày sinh"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <TextField required id="outlined-basic" label="Nơi sinh" variant="outlined" />
            <TextField required id="outlined-basic" label="Nguyên quán" variant="outlined" />
            <TextField required id="outlined-basic" label="Dân tộc" variant="outlined" />
            <TextField required id="outlined-basic" label="Quốc tịch" variant="outlined" />
            <TextField required id="outlined-basic" label="Nghề nghiệp" variant="outlined" />
            <TextField required id="outlined-basic" label="Nơi làm việc" variant="outlined" />
            <TextField required id="outlined-basic" label="CMND/CCCD" variant="outlined" />
            <TextField required id="outlined-basic" label="Quan hệ với chủ hộ" variant="outlined" />
            <TextField required id="outlined-basic" label="Sổ hộ khẩu" variant="outlined" />
            <TextField
                id="standard-select-gender"
                select
                label="Giới tính"
                defaultValue="male"
                variant="standard"
                required
            >
                {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField required id="outlined-basic" label="Quan hệ với chủ hộ" variant="outlined" />
            <TextField required id="outlined-basic" label="Trình độ học vấn" variant="outlined" />
            <TextField id="outlined-basic" label="Tiền án" variant="outlined" />
            <TextField id="outlined-basic" label="Lý do chuyển đến" variant="outlined" />
            <div className={cx('input-image-area')}>
                <label htmlFor="upload-photo" style={{ marginLeft: 10 }}>
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        onChange={handleFileImage}
                    />

                    <Fab
                        color="secondary"
                        size="small"
                        component="span"
                        aria-label="add"
                        variant="extended"
                    >
                        <Add /> Ảnh minh chứng
                    </Fab>
                </label>
                {
                    img && (
                        <div>
                            <img src={img.preview}
                                alt="avatar"
                                width="150" />
                        </div>
                    )
                }

            </div>
        </Box>
    );
}