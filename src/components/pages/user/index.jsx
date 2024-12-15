import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { fetchData } from '../../../services/api';
import { BASE_URL } from "../../../constants";

const User = () => {  
  const params = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData(`${BASE_URL}/users/${params.userId}`).then((data) => {      
      setUser(data)
    });
    fetchData(`${BASE_URL}/albums?userId=${params.userId}`).then((data) => {      
      setAlbums(data)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const card = useMemo(() => {
    return user
      ? <Paper>
          <p>
            <strong>Name:</strong>&nbsp;
            { user.name }
          </p>
          <p>
            <strong>Email:</strong>&nbsp;
            { user.email }
          </p>
          <p>
            <strong>Phone:</strong>&nbsp;
            { user.phone }
          </p>
          <p>
            <strong>Website:</strong>&nbsp;
            { user.website }
          </p>
        </Paper>
      : 'Loading...';
  }, [user]);

  return (
    <div>
      <Typography className="app-text" variant="h4">
        User page
      </Typography>
      { card }
      <Typography className="app-text" variant="h5">
        Albums
      </Typography>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
      >
        {
          albums.map((album) => (
            <Link key={album.id} to={`/users/${album.userId}/albums/${album.id}`}>
              <ListItemButton>
                <ListItemText primary={album.title} />
              </ListItemButton>
            </Link>
          ))
        }
      </List>
    </div>
  );
};

export default User;
