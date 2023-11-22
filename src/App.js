import "./App.scss";
import Header from "./components/header/Header";
import JobLists from "./components/joblists/JobLists";
import FilterBox from "./components/filterBox/FilterBox";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <FilterBox />
        <JobLists />
      </div>
    </div>
    //  </div>
  );
}

export default App;
