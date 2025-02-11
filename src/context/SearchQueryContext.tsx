import { createContext, useContext, useState } from "react";

const SearchQueryContext = createContext<{
    query: string;
    setQuery: (query: string) => void;
}>({
    query: '',
    setQuery: () => {},
});


export const SearchQueryProvider = ({children}: {children: React.ReactNode}) => {
    const [query, setQuery] = useState<string>('');

    return (
        <SearchQueryContext.Provider value={{query, setQuery}}>
            {children}
        </SearchQueryContext.Provider>
    )
};

export const useSearchQuery = () => useContext(SearchQueryContext);
