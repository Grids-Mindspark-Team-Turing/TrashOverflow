import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../src/components/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[
              <Home />,
            ]}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
