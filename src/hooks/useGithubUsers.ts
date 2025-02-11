import {searchUsers} from "../api/github.ts";
import {useQuery} from "@tanstack/react-query";
import {User} from "../model/User.ts";

export const useGithubUsers = (query: string) => {
    return useQuery<User[]>({
        queryKey: ["githubUsers", query],
        queryFn: () => searchUsers(query)
    });
}