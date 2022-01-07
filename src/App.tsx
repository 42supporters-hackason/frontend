import { BrowserRouter } from "react-router-dom"
import { ApplyPostProvider } from "./providers/ApplyPostProvider";
import { Router } from "./router/Router"

function App() {
  return (
    <ApplyPostProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApplyPostProvider>
  );
}

export default App;
