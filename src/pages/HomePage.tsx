import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Typography variant="h2" component="h1">
                skippy-youtube
            </Typography>
        </div>
    );
}