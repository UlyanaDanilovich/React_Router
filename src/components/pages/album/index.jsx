import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { fetchData } from '../../../services/api';
import { BASE_URL } from "../../../constants";

const Album = () => {  
  const params = useParams();
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData(`${BASE_URL}/users?id=${params.userId}`).then((data) => {           
      setUser(data[0]);
    });
    fetchData(`${BASE_URL}/photos?albumId=${params.albumId}`).then((data) => {      
      setImages(data)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography className="app-text" variant="h4">
        Album page
      </Typography>
      {
        user
          ? <Paper sx={{ marginBottom: 3 }}>
              <strong>Created by:</strong>
              <Link to={`/users/${user.id}/albums`}>
                { user.name }
              </Link>
            </Paper>
          : null
      }
      <ImageList className="app-image-list" cols={3}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={image.thumbnailUrl}
              alt="image"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Album;
