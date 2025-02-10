import axios from "axios";

export const searchUsers = async (query: string) => {
    // https://api.github.com/search/users?q=John
    if (!query) {
        return [];
    }
    const { data } = await axios.get(`https://api.github.com/search/users?q=${query}`);
    console.log(data.items);
    return data.items;
};