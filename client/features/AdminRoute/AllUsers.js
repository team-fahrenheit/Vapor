import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { fetchAllUsers } from "./allUsersSlice";

const AllUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const users = useSelector((state) => {
    return state.allUsers;
  });

  return (
    <div>
      {users && users.length ? (
        <Grid container spacing={4}>
          {users.map((user) => (
            <Grid item key={user.id} xs={8} sm={4} md={2}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>{user.userType}</Typography>
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "16.25%",
                  }}
                  image={user.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {user.firstName + " " + user.lastName}
                  </Typography>
                  <Typography>{user.email}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};

export default AllUsers;
