import React from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import StartIcon from '@mui/icons-material/Start';

function Searchbar({ onClick, value, onChange }) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <TextField
                id="link-input"
                label="Enter a link"
                variant="outlined"
                fullWidth
                value={value}
                onChange={onChange}
            />
            <Button
                variant="contained"
                color="inherit"
                onClick={onClick}
                sx={{ alignSelf: 'stretch' }} // 👈 This makes it match height            >
            >
                <StartIcon />
            </Button>
        </Stack >
    )
}

export default Searchbar; 
