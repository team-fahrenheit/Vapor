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

const AllUsers = (props) => {
  const dispatch = useDispatch();
  const userType = props.userType;

  useEffect(() => {
    dispatch(fetchAllUsers(userType));
  }, []);

  const users = useSelector((state) => {
    return state.allUsers;
  });

  return (
    <div>
      {users && users.length ? (
        <Grid container spacing={5}>
          {users.map((user) => (
            <Grid item key={user.id} xs={8} sm={4} md={2}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {user.userType}
                  </Typography>
                </CardContent>
                <CardMedia component="img" image={user.image} alt="random" />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {user.firstName + " " + user.lastName}
                  </Typography>
                  <Typography>{user.email}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
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
