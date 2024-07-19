import { useEffect, useState } from "react";

export default function Button1() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Clicou: ${contador}`
    })

    return (
        <button className="btn btn-primary" onClick={() => setContador(contador +1)}>Clique me! {contador}</button>
    );
}
