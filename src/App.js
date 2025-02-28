import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./output.css";
import AppRoutes from "./routes/AppRoutes";
import appStore from "./utils/appStore";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
