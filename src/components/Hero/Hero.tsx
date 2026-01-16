import styles from "./Hero.module.scss";
import HeroDots from "../../assets/HeroDots.png";
import HeroArrow from "../../assets/HeroArrow.png";
import HeroFirst from "../../assets/HeroImageFirst.png";
import HeroSecond from "../../assets/HeroImageSecond.png";
import { motion } from "framer-motion";

const Hero = () => {
	const firstImageMotion = {
		hidden: { opacity: 0.6, x: 600 },
		visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
	};

	const secondImageMotion = {
		hidden: { opacity: 0.6, x: 200 },
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	};

	const arrowMotion = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1, delay: 1.2 } },
	};

	const textMotion = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: 0.2 + custom * 0.15 },
		}),
	};

	return (
		<div className={styles.wrapper}>
			<motion.div className={styles.imagesWrapper}>
				<motion.img
					className={styles.dots}
					src={HeroDots}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				/>
				<motion.img
					className={styles.arrow}
					src={HeroArrow}
					variants={arrowMotion}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				/>
				<motion.img
					className={styles.firstImage}
					src={HeroFirst}
					variants={firstImageMotion}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				/>
				<motion.img
					className={styles.secondImage}
					src={HeroSecond}
					variants={secondImageMotion}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				/>
			</motion.div>

			<div className={styles.mobileCreators}>
				<div className={styles.mobileLine} />
				<div>OVER 1M CREATORS</div>
			</div>

			<motion.div
				className={styles.line}
				variants={textMotion}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={0}
			/>

			<motion.div className={styles.discover}>
				<div>
					<motion.h1
						variants={textMotion}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={0}
					>
						Discover And
					</motion.h1>
					<motion.h1
						variants={textMotion}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={1}
					>
						Create NFTs
					</motion.h1>
				</div>

				<motion.p
					variants={textMotion}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					custom={2}
				>
					Discover, Create and Sell NFTs On Our NFT Marketplace With Over
					Thousands Of NFTs And Get a <b>$20 bonus.</b>
				</motion.p>

				<motion.div
					variants={textMotion}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					custom={3}
				>
					<button className={styles.explore}>EXPLORE MORE</button>
					<button className={styles.create}>CREATE NFT</button>
				</motion.div>
			</motion.div>

			<motion.div
				className={styles.features}
				variants={textMotion}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={4}
			>
				<div>
					<div className={styles.amount}>430K+</div>
					<div className={styles.name}>Art Works</div>
				</div>
				<div>
					<div className={styles.amount}>159K+</div>
					<div className={styles.name}>Creators</div>
				</div>
				<div>
					<div className={styles.amount}>87K+</div>
					<div className={styles.name}>Collections</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
