import { Link } from "react-router-dom";

// define the nav function component
export default function Nav() {
  return (
    <div className="nav">
       
      <Link to="/"> {/* link to the home page */}
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies"> {/* link to the currencies page */}
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}