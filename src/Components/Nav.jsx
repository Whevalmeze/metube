import "../App.css"
import { Profile } from "./Profile";

function Nav() {
    const style = {
        color: "#FF0000",
        fontSize: "30px",
        fontWeight: "bold"
    }
    return ( 
            <div>
                <span className="logo" style={style}>metube</span>
            </div>
     );
}

export default Nav;