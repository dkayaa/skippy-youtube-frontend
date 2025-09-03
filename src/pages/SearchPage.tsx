import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar'
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Container, Typography, CircularProgress } from '@mui/material';


export default function SearchPage() {

    const [timestamps, setTimestamps] = useState([])
    const [loading, setLoading] = useState(true)

    // move to env
    const api_url = 'http://127.0.0.1:8090'
    const api_path = '/api/v1/timestamps'
    const link = 'https://www.youtube.com/watch?v=cqXwoGrebXs'
    const params = new URLSearchParams()
    params.append('link', link)

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'timestamp',
            headerName: 'Time Stamp (s)',
            width: 150,
            editable: false,
        },
        {
            field: 'label',
            headerName: 'Is Advertisement',
            width: 150,
            editable: false,
        }
    ]

    useEffect(() => {
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
    }, [])

    return (
        <div>
            <Navbar />
            <h1>This is the Search Page</h1>
            <Searchbar />
            {loading ?
                <CircularProgress /> :
                <Box>
                    <DataGrid
                        rows={timestamps}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                        getRowId={(row) => row.timestamp}
                    />
                </Box>
            }
        </div>
    );
}