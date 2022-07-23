import "./styles.css";
import SearchForm from "./SearchForm";
import City from "./City.js";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-border">
          <SearchForm />
          <City />
        </div>{" "}
        <Footer />
      </div>
    </div>
  );
}
