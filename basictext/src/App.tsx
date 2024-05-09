import EditorInterface from "./Components/EditorInterface";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <div className="app-container">
          <EditorInterface />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
