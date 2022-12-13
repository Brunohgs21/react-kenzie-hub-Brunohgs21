import Global from "./styles/global";
import RoutesMain from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Global />
      <AuthProvider>

      <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
