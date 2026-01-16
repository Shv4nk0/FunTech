import styles from "./CreateAndSellNFT.module.scss";
import SplashWide from "../../assets/SplashWide.png";

const CreateAndSellNFT = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<div>
					<h1>Create and Sell NFTs</h1>
					<div className={styles.greyText}>World's Largest NFT Place</div>
				</div>
				<div className={styles.buttons}>
					<button className={styles.explore}>Explore More</button>
					<button className={styles.sell}>Sell Artwork</button>
				</div>
			</div>

			<img src={SplashWide} />
		</div>
	);
};

export default CreateAndSellNFT;
