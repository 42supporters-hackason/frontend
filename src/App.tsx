import { BrowserRouter } from "react-router-dom"
import { ApplyPostProvider } from "./providers/ApplyPostProvider";
import { LoginIdProvider } from "./providers/LoginUsernameProvider";
import { RecrutePostProvider } from "./providers/RecrutePostProvider";
import { Router } from "./router/Router"

function App() {
  return (
    <LoginIdProvider>
      <RecrutePostProvider>
        <ApplyPostProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ApplyPostProvider>
      </RecrutePostProvider>
    </LoginIdProvider>
  );
}

export default App;
