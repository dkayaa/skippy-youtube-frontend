import React from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';

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
                color="primary"
                onClick={onClick}
            >
                Go
            </Button>
        </Stack>
    )
}

export default Searchbar; 
