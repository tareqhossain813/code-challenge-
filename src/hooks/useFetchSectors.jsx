import { useState, useEffect } from "react";
import axios from "axios";
import Options from "./Options";

const useFetchSectors = () => {
    const [options, setSectors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSectors = async () => {
            try {
                const { data } = await axios.get(
                    // "https://interview-server.adaptable.app/api/sectors"
                    "https://interview-server.adaptable.app/api/sectors"
                );
                // const { data } = Options;

                setSectors(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching sectors:", error);
                setLoading(false);
            }
        };

        fetchSectors();
    }, []);

    return { options, loading };
};

export default useFetchSectors;
