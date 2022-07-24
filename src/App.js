import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import SearchForm from "./SearchForm";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-border">
            <SearchForm />
          </div>{" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}
