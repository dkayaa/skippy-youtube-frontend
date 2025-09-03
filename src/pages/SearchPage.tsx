import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar'
import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Container, Typography, CircularProgress } from '@mui/material';


export default function SearchPage() {

    const [timestamps, setTimestamps] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    // move to env
    const api_url = 'http://127.0.0.1:8090'
    //const api_url = 'http://127.0.0.1:5000'
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
            console.log(data)
            setLoading(false)
        }).catch((err) => {
            console.error('Failed to fetch data:', err);
            setLoading(false);
        })
    })

    return (
        <div>
            <Navbar />
            <h1>This is the Search Page</h1>
            <Box
                sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}
            >
                <Stack spacing={4}>
                    <Searchbar
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={handleSearch} />
                    {loading ?
                        <CircularProgress /> :
                        <Box>
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