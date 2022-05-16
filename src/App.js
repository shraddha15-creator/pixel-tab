import "./App.css";
import { useData } from "./context/data-context";
import LandingPage from "./pages/LandingPage";
import PixelTabPage from "./pages/PixelTabPage";
//will use barrel export here in next PR

function App() {
	const { isOldUser } = useData();
	return (
		<div className="App">{isOldUser ? <PixelTabPage /> : <LandingPage />}</div>
	);
}

export default App;
