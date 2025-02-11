export type User = {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    type: "User" | "Organization";
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
};
