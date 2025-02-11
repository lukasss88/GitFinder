import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useDebounce} from "../hooks/useDebounce.ts";
import TextField from '@mui/material/TextField';

export default function SearchBar({onSearch}: {onSearch: (query: string) => void}) {
    const {
        register,
        watch
    } = useForm<{query: string}>();
    const debouncedQuery = useDebounce(watch("query"), 500);

    useEffect(() => onSearch(debouncedQuery), [debouncedQuery]);

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
