import Main from "./main";
import { UserProvider } from "./contexts/UserContexts";

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}
