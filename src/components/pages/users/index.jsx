import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { fetchData } from '../../../services/api';
import { BASE_URL } from "../../../constants";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData(`${BASE_URL}/users`).then((data) => {      
      setUsers(data)
    });
  }, []);

  return (
    <div>
      <Typography className="app-text" variant="h4">
        Users page
      </Typography>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
      >
        {
          users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}/albums`}>
              <ListItemButton>
                <ListItemText primary={user.name} />
              </ListItemButton>
            </Link>
          ))
        }
      </List>
    </div>
  );
};

export default Users;
