import styles from "./Footer.module.scss";
import waves from "../../assets/WaveWhite.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<div className={styles.topBlock}>
					<div className={styles.nameBlock}>
						<img src={waves} />
						<div>DiveSea</div>
					</div>

					<div className={styles.linkBlock}>
						<a>Privacy Policy</a>
						<a>Term & Conditions</a>
						<a>About Us</a>
						<a>Contact</a>
					</div>
				</div>

				<div className={styles.line} />

				<div className={styles.bottomBlock}>
					<div>
						© 2023 <span>DiveSea All Rights Reserved.</span>
					</div>
					<div className={styles.socials}>
						<img src={Instagram} />
						<img src={LinkedIn} />
						<img src={Facebook} />
						<img src={Twitter} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
