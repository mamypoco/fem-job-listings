import "./App.scss";
import Header from "./components/header/Header";
import JobLists from "./components/joblists/JobLists";
import FilterBox from "./components/filterBox/FilterBox";
import { SkillsContextProvider } from "./context/SkillsContext";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contents">
        <SkillsContextProvider>
          <FilterBox />
          <JobLists />
        </SkillsContextProvider>
      </main>
    </div>
  );
}

export default App;
