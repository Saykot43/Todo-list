import { useEffect, useState } from "react"

export const CustomHook = () => {
    const [users, setUsers] = useState([]);

    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch('https://warm-badlands-09869.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setIsReload(data)

            });
    }, [isReload])
    return [users, setUsers, isReload, setIsReload];
}