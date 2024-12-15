import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { fetchData } from '../../../services/api';
import { BASE_URL } from "../../../constants";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData(`${BASE_URL}/albums`).then((data) => {      
      setAlbums(data)
    });
  }, []);

  return (
    <div>
      <Typography className="app-text" variant="h4">
        Albums page
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

export default Albums;
