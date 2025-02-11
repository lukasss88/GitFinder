import { Skeleton } from "@mui/material";
import {useGithubUsers} from "../hooks/useGithubUsers.ts";

export default function UsersList({query}: {query: string}) {
    const {data: users, isLoading, isError} = useGithubUsers(query)

    if (isLoading) return (
        <Skeleton variant="circular">
            <div>Loading..</div>
        </Skeleton>
    );
    if (isError) return <p>Error fetching users</p>;

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users && users.map(user => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
        </div>
    )
};
