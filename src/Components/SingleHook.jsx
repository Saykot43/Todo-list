import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleHook = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://warm-badlands-09869.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            });
    }, [])
    return [user, setUser];
}