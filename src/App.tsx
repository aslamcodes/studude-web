import { Router, Route } from "wouter";
import Home from "src/pages/Home";
import { Sidebar } from "src/components/common/Sidebar";
import NotebookPage from "src/pages/Notebook";
import Page from "src/pages/Page";

function App() {
  return (
    <div>
      <Sidebar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/notebook/id" component={NotebookPage} />
        <Route path="/notebook/page/id" component={Page} />
      </Router>
    </div>
  );
}

export default App;
