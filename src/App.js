import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/sofialeal95/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Ana Sofia Araiza
        </footer>
      </div>
    </div>
  );
}

export default App;
