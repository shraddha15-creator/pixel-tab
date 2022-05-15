import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PixelTabPage from "./pages/PixelTabPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="pixel-tab" element={<PixelTabPage />} />
			</Routes>
		</div>
	);
}

export default App;
