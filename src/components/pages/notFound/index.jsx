import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const NotFound = () => {
  return (
    <div>
      <Typography className="app-text" variant="h4">
        Page not found
      </Typography>
      <Paper>
        <p>
          <strong>Go to page:</strong>&nbsp;
          <Link to="/users">Users</Link>
        </p>
        <p>
          <strong>Go to page:</strong>&nbsp;
          <Link to="/albums">Albums</Link>
        </p>
      </Paper>
    </div>
  );
}

export default NotFound;
