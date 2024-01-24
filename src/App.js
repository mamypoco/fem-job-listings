import "./App.scss";
import Header from "./components/header/Header";
import JobLists from "./components/joblists/JobLists";
import FilterBox from "./components/filterBox/FilterBox";
import { SkillsContextProvider } from "./context/SkillsContext";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <SkillsContextProvider>
          <FilterBox />
          <JobLists />
        </SkillsContextProvider>
      </div>
    </div>
    //  </div>
  );
}

export default App;
