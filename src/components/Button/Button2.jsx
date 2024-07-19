import { useRef } from "react";

export default function Button2() {
    const contador = useRef(0);

    function handleClick() {
        contador.current = contador.current + 1;
        console.log('Clicou', contador.current + ' x');
    }

    return (
        <button className="btn btn-success" onClick={handleClick}>
            Clique me: {contador.current}
        </button>
    );
}
