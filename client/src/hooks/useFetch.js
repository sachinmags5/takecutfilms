import { useState, useEffect } from "react";
import API from "../services/api";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get(url);
    setData(res.data);
  };

  return data;
}

export default useFetch;
