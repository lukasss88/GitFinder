import {Box, Skeleton, Typography} from "@mui/material";
import {useGithubUsers} from "../hooks/useGithubUsers.ts";
import UserCard from "./UserCard.tsx";

export default function UsersList({query}: {query: string}) {
    const {data: users, isLoading, isError} = useGithubUsers(query)

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} variant="rectangular" height={80} sx={{ borderRadius: 2 }} />
                ))}
            </Box>
        );
    }

    if (isError) return <Typography color="error">Error fetching users</Typography>;

    if (!users || users.length === 0) {
        return (
            <Box sx={{ textAlign: "center", p: 4 }}>
                <Typography variant="h6" color="text.secondary">

                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ul>
                {users && users.length && users.map(user => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </ul>
        </Box>
    )
};
