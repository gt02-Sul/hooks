import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Requisicao() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/carloeira")
            .then((res) => res.json())
            .then((json) => setUser(json))
    }, []);

    return (
        <Grid container spacing={3} justifyContent="center">
            {user && (
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={user.name}
                            height="140"
                            image={user.avatar_url}
                            title={user.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {user.bio}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {user.location}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}