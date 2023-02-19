import logo from '../../assets/logo.jpg'
import styles from './nav.module.css'

export const Nav: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navLogo}>
                <img src={logo} style={{ width: 60 }} alt="logo" />
            </div>
            <div className={styles.navLink}>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#contact">Token</a>
                <a href="#aa">Roadmap</a>
                <a href="#sst">Socials</a>
            </div>
        </div>
    )
}


export const Hero: React.FC = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroText}>
                <h1>
                    $AI tech <br />
                    The AI that does exactly the opposite of what you ask.
                </h1>

                <p >
                    IA (AI reversed) is an ERC-20 project built to tell you the exact opposite of what you want to hear. <br />
                    We run under the Ethereum Network.<br />
                    Are you afraid of the truth?<br /><br />
                </p>
            </div>
            <div className={styles.heroBtnContainer}>
                <button className={styles.heroBtn}>Buy $AI tech</button>
                <button className={styles.heroBtn}>Chart</button>
                <button className={styles.heroBtn}>Community</button>
                
            </div>

        </div>
    )
}