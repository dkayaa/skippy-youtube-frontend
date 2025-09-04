import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function ErrorPage() {
    return (
        <div>
            <Typography variant="h2" component="h1">
                Error: Page Does Not Exist
            </Typography>
            <Typography variant="p" component="h1">
                The page you are looking for does not exist.
            </Typography>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}