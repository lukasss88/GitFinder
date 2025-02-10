import SearchBar from "../components/SearchBar.tsx";

export default function Home() {
    const handleQueryChange = (query: string) => {
        console.log(query);
    }

    return (
        <div>
            <h1>Home</h1>
            <SearchBar  onSearch={handleQueryChange}/>
        </div>
    );
}
