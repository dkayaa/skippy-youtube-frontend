import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Typography from '@mui/material/Typography';

export default function AboutPage() {
    return (
        <div>
            <ResponsiveAppBar />
            <Typography variant="h2" component="h1">
                This is the About Page
            </Typography>
        </div>
    );
}