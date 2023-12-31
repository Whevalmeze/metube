import './App.css'
import Nav from './Components/Nav'
import Videos from "./Components/Videos"

const styling = {
  color : {
    primaryRed: "#FF0000",
    secondaryBlack: "#282828"
  }
}

function App() {
  return (
    <>
      <Nav styling={styling} />
      <Videos />
    </>
  )
}

export default App;
