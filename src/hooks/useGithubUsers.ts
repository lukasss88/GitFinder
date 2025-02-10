import {searchUsers} from "../api/github.ts";
import {useQuery} from "@tanstack/react-query";

export const useGithubUsers = (query: string) => {
    return useQuery({
        queryKey: ["githubUsers", query],
        queryFn: () => searchUsers(query)
    });
}