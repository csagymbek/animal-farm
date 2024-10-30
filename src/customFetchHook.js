import { useEffect, useState } from "react";

export default function customFetchHook() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
      const lastQuery = localStorage.getItem("lastQuery");
      handleSearchAnimal(lastQuery);
    }, []);
    
    const handleSearchAnimal = async (q) => {  
      const response = await (await fetch('http://localhost:8080?' + new URLSearchParams({q}))).json();
      setAnimals(response);
      localStorage.setItem("lastQuery", q);
    };

    return { animals, handleSearchAnimal };
}
