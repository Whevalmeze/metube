import { Profile } from "./Profile";
import Logo from "./Logo"
import { Link } from "react-router-dom";

function Nav() {
    return ( 
            <div className="flex justify-between w-full max-w-screen-lg p-8">
                <Link to="./sign-in">
                    <div>
                        ham
                    </div>
                </Link>
                <div><Logo /></div>
                <div><Profile /></div>
            </div>
     );
}

export default Nav;