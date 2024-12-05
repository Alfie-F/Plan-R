import Main from "./main";
import { createContext } from "react";
import { toast } from "./lib/toast";
import { UserProvider } from "./contexts/UserContexts";

const UserContext = createContext();

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}
