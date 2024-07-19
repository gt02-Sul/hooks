import { useContext } from "react";
import { UserContext } from "../../../UserProvider";

export default function Header() {
    const {user} = useContext(UserContext);
    return (
        <div className="user-greeting mx-3">
            Olá {user.name}
        </div>
    );
}
