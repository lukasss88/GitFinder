import {getUsers} from "../api/github.ts";
import {useInfiniteQuery} from "@tanstack/react-query";

export const useGithubUsers = (query: string) => {
    // Functional technique: currying
    const getUsersByQuery = getUsers(query);

    return useInfiniteQuery({
        queryKey: ["users", query],
        queryFn: getUsersByQuery,
        initialPageParam: 0,
        enabled: query !== "",
        getNextPageParam: (lastPage, allPages) => {
            if(!lastPage) return false;
            return lastPage.length === 10 ? allPages.length : false
        },
    });
}