import { useState } from "react"
import iconSrc from "../assets/profile.svg"

export const Profile = () => {
    const [user, setUser] = useState();
    return (<>
        <span>{user || "wheval"}</span>
        <img src={iconSrc} alt="profile icon by Barudak Lier https://iconscout.com/icons/profile" />
    </>)
}