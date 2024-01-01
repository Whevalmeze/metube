import "./styles.css"
import './App.css'
import Nav from './Components/Nav'
import Videos from "./Components/Videos"


//ACCESS ENVIRONMENT VARIABLES
const apiKey = import.meta.env.VITE_API_KEY

const styling = {
  color : {
    primaryRed: "#FF0000",
    secondaryBlack: "#282828"
  }
}

function App() {
  console.log(apiKey)
  return (
    <>
      <Nav styling={styling} />
      <Videos apiKey={apiKey} />
    </>
  )
}

export default App;
