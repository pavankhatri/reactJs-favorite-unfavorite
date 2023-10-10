import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./screens/Home/index";
import Favourite from "./screens/Favourites";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favourite />} />
              </Routes>
            </div>
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
