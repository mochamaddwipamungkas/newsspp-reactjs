import { useCallback, useEffect, useState } from "react";

const Identyty = () => {
    const fetchUser = useCallback(() => ['Adi', 'Aldo', 'Wawan', 'sari', 'budi'], []);
    let [user, setUser] = useState([]);

    useEffect(() => {
        console.log('get data');
        const data = fetchUser()
        setUser(data)
    }, [fetchUser])

    return (
        <div>
            <ul>
                {
                    user.map(u => <li key={u}>{u}</li>)
                }
            </ul>
        </div>
    )
}

export default Identyty;