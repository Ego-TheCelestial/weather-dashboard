import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
    onSearch,
}: {
    onSearch?: (query: string) => void;
}) {
    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!city.trim()) return;
        onSearch?.(city.trim());
        setCity("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mx-auto mb-6 group transition duration-300"
        >
            <input
                type="text"
                placeholder="Search for a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full bg-white/10 text-white placeholder-gray-300 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:pl-14 transition-all duration-300"
            />
            <FiSearch className="absolute left-4 top-3 text-white text-xl pointer-events-none transition-transform duration-300 group-focus-within:scale-125" />
        </form>
    );
}
