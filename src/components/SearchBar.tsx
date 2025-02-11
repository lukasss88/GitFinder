import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useDebounce} from "../hooks/useDebounce.ts";
import TextField from '@mui/material/TextField';
import {useSearchQuery} from "../context/SearchQueryContext.tsx";

export default function SearchBar() {
    const {
        register,
        watch
    } = useForm<{query: string}>();
    const {setQuery} = useSearchQuery();
    const debouncedQuery = useDebounce(watch("query"), 500);

    useEffect(() => {
        if (debouncedQuery !== undefined && debouncedQuery !== '') {
            setQuery(debouncedQuery);
        }
    }, [debouncedQuery, setQuery]);

    return (
            <TextField
                sx={{ width: "100%" }}
                id="outlined-controlled"
                label="Username"
                placeholder="Search..."
                {...register("query")}
            />
    );
};
