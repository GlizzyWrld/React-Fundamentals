import { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);

    const fetchData = async (restOfUrl) => {
        try {
            const res = await axios.get(baseUrl + restOfUrl);
            setData((data) => [...data, {...res.data, id: uuid()}]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData("");
    }, [baseUrl]);

    const addData = async (restOfUrl) => {
        fetchData(restOfUrl);
    }

    return [data, addData];
}

export default useAxios;