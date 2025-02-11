import { useState } from "react";
import SearchBar from "../components/SearchBar.tsx";
import UsersList from "../components/UsersList.tsx";
import Grid from '@mui/material/Grid2';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Grid container spacing={2}>
            <Grid size={4}>
                <SearchBar  onSearch={setSearchQuery}/>
            </Grid>
            <Grid size={8}>
                <UsersList query={searchQuery} />
            </Grid>
        </Grid>
    );
}
