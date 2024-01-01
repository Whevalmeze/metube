import "../App.css"
import { Profile } from "./Profile";

function Nav() {
    const style = {
        color: "#FF0000",
        fontSize: "30px",
        fontWeight: "bold",
    }
    return ( 
            <div style={{        display: "flex", justifyContent: "center",
            alignItems: "center"}}>
                <div style={{width: "24px", height: "24px"}}>
                    ham
                </div>
                <span className="logo" style={style}>metube</span>
                <Profile />
            </div>
     );
}

export default Nav;