import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useDebounce} from "../hooks/useDebounce.ts";
import TextField from '@mui/material/TextField';

export default function SearchBar({onSearch}: {onSearch: (query: string) => void}) {
    const {
        register,
        watch
    } = useForm<{query: string}>();
    const debouncedQuery = useDebounce(watch("query"), 2000);

    useEffect(() => {
        console.log(debouncedQuery);
        onSearch(debouncedQuery);
    }, [debouncedQuery]);

    return (
        <div>
            <TextField
                id="outlined-controlled"
                label="Username"
                placeholder="Search..."
                {...register("query")}
            />
        </div>
    );
};
