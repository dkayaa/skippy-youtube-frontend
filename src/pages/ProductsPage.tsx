import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
export default function ProductsPage() {
    return (
        <div>
            <ResponsiveAppBar />
            <Typography variant="h2" component="h1">
                This is the Products Page
            </Typography>
        </div>
    );
}