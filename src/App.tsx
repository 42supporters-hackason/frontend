import { BrowserRouter } from "react-router-dom";
import { ApplyPostProvider } from "./providers/ApplyPostProvider";
import { ChatUserProvider } from "./providers/ChatUserProvider";
import { LoginUserProvider } from "./providers/LoginUserProvider";
import { RecrutePostProvider } from "./providers/RecrutePostProvider";
import { Router } from "./router/Router";

function App() {
  return (
    <LoginUserProvider>
      <RecrutePostProvider>
        <ApplyPostProvider>
          <ChatUserProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ChatUserProvider>
        </ApplyPostProvider>
      </RecrutePostProvider>
    </LoginUserProvider>
  );
}

export default App;
