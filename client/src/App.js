import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Screen/Home/Home";
import Track from "./Screen/Track/Track";
import Plan from "./Screen/Plan/Plan";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route
          path="/track/:trackId"
          element={
            <Track
              navigate={navigate}
            />
          }
        />
        <Route path="/plan/:planId" element={<Plan navigate={navigate} />} />
      </Routes>
    </>
  );
}

export default App;
