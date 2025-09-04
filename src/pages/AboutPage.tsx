import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <Typography variant="h2" component="h1">
                This is the About Page
            </Typography>
        </div>
    );
}