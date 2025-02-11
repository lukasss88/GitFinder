import { useState } from "react";
import SearchBar from "../components/SearchBar.tsx";
import UsersList from "../components/usersList.tsx";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <h1>Home</h1>
            <SearchBar  onSearch={setSearchQuery}/>
            <div>
                <UsersList query={searchQuery} />
            </div>
        </div>
    );
}
