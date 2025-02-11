import { Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import {User} from "../model/User.ts";

export default function UserCard({ user }: { user: User}) {
    return (
        <Card sx={{ minWidth: 275, display: 'flex', p: 4, m: 2, alignItems: 'center' }}>
            <CardMedia
                sx={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    marginRight: 2,
                }}
                image={user.avatar_url}
                title="green iguana"
            />
            <CardContent sx={{ height: '100%',  display: 'inline-flex' }}>
                <Typography variant="h5" component="div">
                    {user.login}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                    href={user.html_url}
                    target="_blank"
                >
                    See more
                </Link>
            </CardActions>
        </Card>
    );
};