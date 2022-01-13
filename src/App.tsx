import { BrowserRouter } from "react-router-dom"
import { ApplyPostProvider } from "./providers/ApplyPostProvider";
import { LoginUserProvider } from "./providers/LoginUserProvider";
import { RecrutePostProvider } from "./providers/RecrutePostProvider";
import { Router } from "./router/Router"

function App() {
  return (
    <LoginUserProvider>
      <RecrutePostProvider>
        <ApplyPostProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ApplyPostProvider>
      </RecrutePostProvider>
    </LoginUserProvider>
  );
}

export default App;
