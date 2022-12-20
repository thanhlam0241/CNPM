import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
]

export default function BoxComponent() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl error variant="standard">
                <InputLabel htmlFor="component-error">Name</InputLabel>
                <Input
                    id="component-error"
                    defaultValue="Composed TextField"
                    aria-describedby="component-error-text"
                />
                <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField
                id="standard-select-gender"
                select
                label="Select"
                defaultValue="male"
                helperText="Please select your gender"
                variant="standard"
            >
                {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}