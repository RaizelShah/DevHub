import { useState, useEffect } from "react";
import axios from "axios";

const useCodeforcesProblems = () => {
    const [problems, setProblems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("https://codeforces.com/api/problemset.problems");
                setProblems(response.data.result.problems);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProblems();
    }, []);

    return { problems, isLoading, error };
};

export default useCodeforcesProblems;
