import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PropTypes from 'prop-types';
export default function SimpleDialog({ open, onClose }) {

    const handleClose = () => {
        onClose(!open);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Thông tin hộ khẩu</DialogTitle>
            <p>Hello world</p>
        </Dialog>
    );
}
// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

{/* <List sx={{ pt: 0 }}>
    {emails.map((email) => (
        <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
            </ListItemButton>
        </ListItem>
    ))}

    <ListItem disableGutters>
        <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
        >
            <ListItemAvatar>
                <Avatar>
                    <AddIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
        </ListItemButton>
    </ListItem>
</List> */}