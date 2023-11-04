import "./App.scss";
import Header from "./components/header/Header";
import JobLists from "./components/joblists/JobLists";

function App() {
  return (
    <div className="App">
      <div className="fullpage">
        <Header />
        <JobLists />
      </div>
    </div>
  );
}

export default App;
