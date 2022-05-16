import "./App.css";
import { useData } from "./context/data-context";
import { LandingPage, PixelTabPage } from "./pages";

function App() {
	const { isOldUser } = useData();
	return (
		<div className="App">{isOldUser ? <PixelTabPage /> : <LandingPage />}</div>
	);
}

export default App;
