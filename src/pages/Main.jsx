import "../styles/App.css";
import Currencies from "./Currencies";

// define the main function component
export default function Main() {
  return (
    <div className="main-container">
      <h1 className="welcome-title">Welcome to the Cryptocurrency Prices App</h1>
      <h2>Available Currencies:</h2>
      <Currencies /> {/* render the currencies component */}
    </div>
  );
}