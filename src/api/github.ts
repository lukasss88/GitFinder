import axios from "axios";
import {User} from "../model/User.ts";

export const getUsers = (query: string) => async ({pageParam = 0}: {pageParam: unknown}   ): Promise<User[]> => {
    if (!query) {
        return [];
    }
    const { data } = await axios.get(`https://api.github.com/search/users`, {
        params: {
            q: query,
            page: pageParam,
            per_page: 10
        }
    });
    return data.items;
};