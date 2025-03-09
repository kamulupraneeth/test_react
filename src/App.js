import logo from "./logo.svg";
import "./App.css";
import LazyComponent from "./components/LazyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LazyComponent />
      </header>
    </div>
  );
}

export default App;
