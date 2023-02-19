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
interface Buttonprops {
    text: string,
}
export const Button: React.FC<Buttonprops> = ({ text }) => {
    return (
        <div>
            <button className={styles.heroBtn}>{text}</button>
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
                <Button text="Buy $AI tech" />
                <Button text="Chart" />
                <Button text="Community" />
            </div>

        </div>
    )
}

export const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHead}>
                <h4>About</h4>
            </div>
            <div className={styles.aboutMain}>
                <div className={styles.aboutMainLeft}>
                    <p className={styles.aboutMainLeftUp}> What's $IA? </p>
                    <h2>sss</h2>
                    <p>ssssss</p>
                    <Button text="White Paper" />
                </div>
                <div className={styles.aboutMainRight}>
                    <svg view-box="0 0 600 700" width="600" height="700"><path d="M576.0849427835813 446.5376582695586 L 276.78861316511166 617.1764529762843 L 128.56664036912014 318.6180169408174 L 427.86296998757774 147.9792222341038 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M427.86296998757774 147.9792222341038 L 128.56664036912014 318.6180169408174 L 23.91505721642602 253.46234173044388 L 323.2113868348918 82.82354702371958 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M323.2113868348918 82.82354702371958 L 23.91505721642602 253.46234173044388 L 172.1370300124295 552.0207777658944 L 471.4333596308666 381.3819830591758 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M471.4333596308666 381.3819830591758 L 172.1370300124295 552.0207777658944 L 276.78861316511166 617.1764529762843 L 576.0849427835813 446.5376582695586 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M471.4333596308666 381.3819830591758 L 576.0849427835813 446.5376582695586 L 427.86296998757774 147.9792222341038 L 323.2113868348918 82.82354702371958 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M276.78861316511166 617.1764529762843 L 172.1370300124295 552.0207777658944 L 23.91505721642602 253.46234173044388 L 128.56664036912014 318.6180169408174 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path></svg>
                </div>
            </div>
        </div>
    )
}