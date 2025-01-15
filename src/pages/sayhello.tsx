import { useEffect, useState } from "react";

const SayHello = () => {
    const [data, setData] = useState({ name: "" });

    useEffect(() => {
        fetch("/api/hello")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Hello! {data.name}</h1>
        </div>
    );
}

export default SayHello;