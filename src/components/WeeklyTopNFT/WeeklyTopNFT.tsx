import styles from "./WeeklyTopNFT.module.scss";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

const WeeklyTopNFT = () => {
	const [cards, setCards] = useState([...new Array(30)]);

	useEffect(() => {
		fetch("https://api.coingecko.com/api/v3/nfts/list")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCards(data);
			});
	}, []);

	return (
		<div className={styles.wrapper}>
			<h1>Weekly - Top NFT</h1>

			<Swiper
				modules={[Navigation, Autoplay]}
				navigation={{
					prevEl: ".arrow-left",
					nextEl: ".arrow-right",
				}}
				loop={true}
				autoplay={{ delay: 5000 }}
				slidesPerView="auto"
				spaceBetween={40}
				className={styles.slider}
			>
				{cards.map((card, index) => (
					<SwiperSlide key={index}>
						<Card name={card?.name} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className={styles.buttons}>
				<button className="arrow-left">
					<img src={ArrowLeft} />
				</button>

				<div>|</div>

				<button className="arrow-right">
					<img src={ArrowRight} />
				</button>
			</div>
		</div>
	);
};

export default WeeklyTopNFT;
