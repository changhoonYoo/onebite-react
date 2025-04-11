import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Editor />
        <List />
      </div>
    </>
  );
}

export default App;
