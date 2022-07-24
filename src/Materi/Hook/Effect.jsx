import { useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {
    let [text, setText] = useState('');
    let [user, setUser] = useState({});
    let [seconds, setSeconds] = useState(0)

    useEffect(() => {
        console.log("Get API");
        let url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=237862ee55f1472db0725d019903c9d0'

        axios.get(url)
            .then(usersx => {
                console.log(usersx.data.articles)
                setUser(usersx.data.articles[1])


            })
        // fetch("https://jsonplaceholder.typicode.com/users/1")
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //         setUser(res)
        //     })


    }, [])

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log('singkronisasis');
        return () => {
            console.log('clean up');
        }

    }, [text])

    useEffect(() => {
        let intervalId = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)} />
            <p>{user.author}</p>
            <div>Wakktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik</div>
        </div>
    )
}

export default Effect;