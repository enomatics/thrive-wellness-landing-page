import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import GetGuide from "../pages/GetGuide";
import ThankYou from "../pages/ThankYou";

const App = () => {
  return (
    // <BrowserRouter>
    <main className="text-thrive-dark font-mollen px-5 text-xl md:px-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-guide" element={<GetGuide />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </main>
    // </BrowserRouter>
  );
};

export default App;
