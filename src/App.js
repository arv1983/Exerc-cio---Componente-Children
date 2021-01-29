import "./App.css";
import Border from "./components/Border/Border";
import Color from "./components/Color/Color";
import FontWeight from "./components/FontWeight/FontWeight";

function App() {
  return (
    <div className="App">
      <Border title="primeiro teste">
        <Color color="green">primeiro elemento</Color>
      </Border>
      <Border title="segundo teste">
        <FontWeight fontWeight="900">segundo componente</FontWeight>
      </Border>
    </div>
  );
}

export default App;
