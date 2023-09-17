import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SafeRoute } from '../src/components/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[
              <SafeRoute />,
            ]}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
