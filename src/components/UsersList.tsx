import {Box, Skeleton, Typography} from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";
import {Fragment} from "react";
import UserCard from "./UserCard.tsx";
import {useGithubUsers} from "../hooks/useGithubUsers.ts";


export default function UsersList({query}: {query: string}) {
    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage,
        isFetching
    } = useGithubUsers(query);

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} variant="rectangular" height={80} sx={{ borderRadius: 2 }} />
                ))}
            </Box>
        );
    }

    return (
            <InfiniteScroll
                dataLength={data?.pages ? data.pages.length : 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={
                    isFetching && (
                        <Box key={0} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {[...Array(3)].map((_, index) => (
                                <Skeleton key={index} variant="rectangular" height={80} sx={{ borderRadius: 2 }} />
                            ))}
                        </Box>
                    )
                }
            >
                {data && data.pages.length > 0 ? (
                    <ul>
                        {data.pages.map((users, i) => (
                            <Fragment key={i}>
                                {users.map(user => (
                                    <UserCard key={user.id} user={user} />
                                ))}
                            </Fragment>
                        ))}
                    </ul>
                ) : (
                    !isFetching && (
                        <Box sx={{ textAlign: "center", p: 4 }}>
                            <Typography variant="h6" color="text.secondary">
                                No data
                            </Typography>
                        </Box>
                    )
                )}
            </InfiniteScroll>
    );
};
