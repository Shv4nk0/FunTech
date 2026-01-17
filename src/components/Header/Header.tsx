import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.scss";
import Wave from "../../assets/Wave.png";
import BurgerMenuOpen from "../../assets/burger.png";
import BurgerMenuClose from "../../assets/menuClose.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitterGrey.png";
import Facebook from "../../assets/facebook.png";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// useEffect(() => {
	// 	if (isMenuOpen) {
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		document.body.style.overflow = "auto";
	// 	}

	// 	return () => {
	// 		document.body.style.overflow = "auto";
	// 	};
	// }, [isMenuOpen]);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<div className={styles.linksMobile}>
						<img src={Wave} />
						<div>DiveSea</div>
					</div>

					<div className={styles.links}>
						<img src={Wave} />
						<a>DISCOVER</a>
						<a>CREATORS</a>
						<a>SELL</a>
						<a>STATS</a>
					</div>

					<button>CONNECT WALLET</button>
					<button
						className={styles.burger}
						onClick={() => setIsMenuOpen((status) => !status)}
					>
						<img src={isMenuOpen ? BurgerMenuClose : BurgerMenuOpen} />
					</button>
				</div>
				<div className={styles.mobileLine} />
			</div>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className={styles.mobileMenu}
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						exit={{ y: -1000 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<button className={styles.close}></button>

						<nav>
							<a>DISCOVER</a>
							<a>CREATORS</a>
							<a>SELL</a>
							<a>STATS</a>
							<div className={styles.socials}>
								<img src={Instagram} />
								<img src={LinkedIn} />
								<img src={Facebook} />
								<img src={Twitter} />
							</div>
						</nav>

						<button className={styles.mobileBtn}>CONNECT WALLET</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
