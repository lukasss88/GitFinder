import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useDebounce} from "../hooks/useDebounce.ts";
import TextField from '@mui/material/TextField';

export default function SearchBar() {
    const {
        register,
        watch
    } = useForm<{query: string}>();
    const debouncedQuery = useDebounce(watch("query"), 2000);

    useEffect(() => {
        console.log(debouncedQuery);
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
