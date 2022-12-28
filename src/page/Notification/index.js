import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Notification() {
    return (
        <Stack sx={{ width: '100%', fontSize: 15 }} spacing={2}>
            <Alert sx={{ width: '100%', fontSize: 15 }} severity="error">This is an error alert — check it out!</Alert>
            <Alert sx={{ width: '100%', fontSize: 15 }} severity="warning">This is a warning alert — check it out!</Alert>
            <Alert sx={{ width: '100%', fontSize: 15 }} severity="info">This is an info alert — check it out!</Alert>
            <Alert sx={{ width: '100%', fontSize: 15 }} severity="success">This is a success alert — check it out!</Alert>
        </Stack>
    );
}

export default Notification;