import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Container, Typography, CircularProgress, Chip } from '@mui/material';

export default function SearchPage() {

    const [timestamps, setTimestamps] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    // move to env
    // const api_url = 'http://127.0.0.1:8090'
    const api_url = 'http://127.0.0.1:5000'
    const api_path = '/api/v2/timestamps'

    const formatSecondsToHHMMSS = (totalSeconds) => {
        console.log(totalSeconds)
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'start_time',
            headerName: 'Start',
            width: 150,
            editable: false,
            valueFormatter: (param: number) => formatSecondsToHHMMSS(param)
        },
        {
            field: 'end_time',
            headerName: 'End',
            width: 150,
            editable: false,
            valueFormatter: (param: number) => formatSecondsToHHMMSS(param)
        },
        {
            field: 'orgs',
            headerName: 'Entities',
            flex: 1,
            editable: false,
            renderCell: (params) => (
                <Box display="flex" alignItems="center" height="100%">
                    <Stack direction="row" spacing={1} alignItems="center">
                        {params.value.map((item, index) => (
                            <Chip
                                variant="outlined"
                                key={index}
                                label={item}
                                color="inherit"
                                sx={{
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    padding: '4px 4px', // fine-tune padding if needed
                                    height: 'auto',   // makes height adapt more naturally
                                }}
                            />
                        ))
                        }
                    </Stack >
                </Box >
            )
        }
    ]

    let handleSearch = (() => {
        setLoading(true);

        let link = search
        const params = new URLSearchParams()
        params.append('link', link)

        fetch(api_url + api_path + '?' + params.toString()).then((response) =>
            response.json()
        ).then((data) => {
            setTimestamps(data)
            setLoading(false)
        }).catch((err) => {
            console.error('Failed to fetch data:', err);
            setLoading(false);
        })
    })

    return (
        <div>
            <ResponsiveAppBar />
            <Box
                sx={{ mx: 'auto', mt: 4 }}
            >
                <Stack spacing={4} sx={{ mx: 'auto', width: '90vw' }}>
                    <Searchbar
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={handleSearch}
                    />
                    {loading ?
                        <Box sx={{ mx: 'auto' }}>
                            <CircularProgress color="inherit" />
                        </Box>
                        :
                        <Box sx={{ mx: 'auto' }}>
                            <DataGrid
                                rows={timestamps}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 10,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                disableRowSelectionOnClick
                                getRowId={(row) => row.id}
                            />
                        </Box>

                    }
                </Stack>
            </Box>
        </div>
    );
}