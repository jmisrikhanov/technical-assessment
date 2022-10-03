import AppRouter from "./router/Router";
import AppContext, { AppDataContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppDataContextProvider>
      <AppRouter />
    </AppDataContextProvider>
  );
}

export default App;
