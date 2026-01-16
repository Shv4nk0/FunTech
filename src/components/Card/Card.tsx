import styles from "./Card.module.scss";
import Etherium from "../../assets/etherium.png";
import randomImageOne from "../../assets/randomImg1.png";
import randomImageTwo from "../../assets/randomImg2.png";
import randomImageThree from "../../assets/randomImg3.png";
import randomImageFour from "../../assets/randomImg4.png";
import { useEffect, useMemo, useState } from "react";

const Card = ({ name }: { name: string }) => {
	const images = [
		randomImageOne,
		randomImageTwo,
		randomImageThree,
		randomImageFour,
	];
	const [randomImage] = useState(
		images[Math.floor(Math.random() * images.length)]
	);

	const [timeLeft, setTimeLeft] = useState(0);

	useEffect(() => {
		const hours = Math.floor(Math.random() * 24);
		const minutes = Math.floor(Math.random() * 60);
		const seconds = Math.floor(Math.random() * 60);

		const totalSeconds = hours * 3600 + minutes * 60 + seconds;
		setTimeLeft(totalSeconds);

		const interval = setInterval(() => {
			setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatTime = (seconds: number) => {
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;

		return `${String(h).padStart(2, "0")}h ${String(m).padStart(
			2,
			"0"
		)}m ${String(s).padStart(2, "0")}s`;
	};

	const randomCost = useMemo(() => {
		return (Math.random() * 4).toFixed(2);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageContainer}>
				<div className={styles.timer}>{formatTime(timeLeft)}</div>
				<img src={randomImage} />
			</div>
			<div className={styles.cardName}>{name ?? "Sun-Glass"}</div>

			<div className={styles.bottom}>
				<div>
					<div>Current bid</div>
					<div className={styles.etherium}>
						<img src={Etherium} />
						{randomCost}
					</div>
				</div>
				<button>PLACE BID</button>
			</div>
		</div>
	);
};

export default Card;
