import { useState} from 'react'
import "./App.css";
import logo from './Images/logo-1.png';
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import Uploader from "./Uploader";

function App() {
  const [inputValue,setInputValue] = useState([])

  return (
    <div className="container">
      <nav className="navbar bg-black">
        <div className="container-fluid">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign up free
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Register</a>
            </li>
          </ul>
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="LOGO"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
      
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue}/>
      {/* <Uploader setInputValue={setInputValue}/> */}
    </div>
  );
}
export default App;
