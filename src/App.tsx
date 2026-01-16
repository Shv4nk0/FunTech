import "./App.css";
import CreateAndSellNFT from "./components/CreateAndSellNFT/CreateAndSellNFT";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WeeklyTopNFT from "./components/WeeklyTopNFT/WeeklyTopNFT";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<WeeklyTopNFT />
			<CreateAndSellNFT />
			<Footer />
		</>
	);
}

export default App;
