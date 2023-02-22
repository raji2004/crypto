import logo from '../../assets/logo.jpg'
import image from '../../assets/social.jpg'
import styles from './nav.module.css'
import LinearProgress from '@mui/material/LinearProgress';


export const Nav: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navLogo}>
                <img src={logo} style={{ width: 60 }} className={styles.logo} alt="logo" />
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
    active?: boolean,
    style?: React.CSSProperties,
}
export const Button: React.FC<Buttonprops> = ({ text, active, style }) => {

    const className = active ? styles.heroBtnActive : styles.heroBtn
    return (
        <div>
            <button className={className} style={{ ...style }}>{text}</button>
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
                <Button text="Buy $AI tech" active={true} />
                <Button text="Chart" />
                <Button text="Community" />
            </div>

        </div>
    )
}

export const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer} id="about">
            <div className={styles.aboutHead}>
                <h4>About</h4>
            </div>
            <div className={styles.aboutMain}>
                <div className={styles.aboutMainLeft}>
                    <p className={styles.aboutMainLeftUp}> What's $IA? </p>
                    <h1 className="entry-title medium-text">
                        AI? <br />
                        Think $IA Tech.
                    </h1>
                    <p className={styles.aboutMainLeftUp}>
                        For those that don't know, an AI is a type of technology that simulates human-like intelligence and cognitive abilities, such as learning, problem-solving, and decision making, through algorithms and computer programs.<br /><br />

                        $IA Tech will take in user inputs through natural language processing and use algorithmic decision making to generate responses that are opposite in meaning to the user's questions or statements.
                    </p>
                    <Button text="White Paper" active />
                </div>
                <div className={styles.aboutMainRight}>
                    <svg view-box="0 0 600 700" width="600" height="700"><path d="M576.0849427835813 446.5376582695586 L 276.78861316511166 617.1764529762843 L 128.56664036912014 318.6180169408174 L 427.86296998757774 147.9792222341038 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M427.86296998757774 147.9792222341038 L 128.56664036912014 318.6180169408174 L 23.91505721642602 253.46234173044388 L 323.2113868348918 82.82354702371958 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M323.2113868348918 82.82354702371958 L 23.91505721642602 253.46234173044388 L 172.1370300124295 552.0207777658944 L 471.4333596308666 381.3819830591758 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M471.4333596308666 381.3819830591758 L 172.1370300124295 552.0207777658944 L 276.78861316511166 617.1764529762843 L 576.0849427835813 446.5376582695586 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M471.4333596308666 381.3819830591758 L 576.0849427835813 446.5376582695586 L 427.86296998757774 147.9792222341038 L 323.2113868348918 82.82354702371958 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path><path d="M276.78861316511166 617.1764529762843 L 172.1370300124295 552.0207777658944 L 23.91505721642602 253.46234173044388 L 128.56664036912014 318.6180169408174 Z" fill="rgba(0, 0, 0, .1)" stroke="rgba(255, 255, 255, .9)"></path></svg>
                </div>
            </div>
        </div>
    )
}

interface Botprop {
    title: string,
    text: string,
    style?: React.CSSProperties,
}
export const Bot: React.FC<Botprop> = ({ title, text, style }) => {
    return (
        <p style={{ textAlign: 'left', ...style }} className={styles.p}>
            <b>{title}</b> - {text}
        </p>
    )
}

export const WhatWeDo: React.FC = () => {
    return (
        <div className={styles.whatwrapper}>

            <div className={styles.WhatContainer} id="token">
                <div className={styles.aboutHead}>
                    <h4>What're we <br /> doing </h4>
                </div>
                <p className={styles.wonder}> IN CASE YOU WERE WONDERING </p>
                <h2 className="entry-title medium-text">  Here's a Visual Guide <br />  of what we're building </h2>
                <img src={image} alt="dd" className={styles.whatimg} />
                <Bot
                    title='Reverse bot'
                    text=' - bot will be built to tell you the exact opposite of what you want to hear - Twitter one will also be made'
                />
                <Bot
                    title='Locker bot'
                    text=' - lock your liquidity from the comfort of telegram'
                />
                <Bot
                    title='Gamble bot'
                    text=' - use gamble bot to double or nothing your $IA for fun other project will also be able to use this bot so investors their can double or nothing their own tokens'
                />
                <Bot
                    title='PhotoNFT bot'
                    text=' - Take photos of anything and turn them into pixelated NFTs, 3D NFTs or basic 2D NFTs'
                />

                <Button text='Read the whitepaper' active style={{ marginTop: 30 }} />
            </div>
        </div>
    )
}

interface Stepsprop {
    stepnum?: number,
    stephead?: string,
    steptext?: string,
}

export const Steps: React.FC<Stepsprop> = ({ stepnum, stephead, steptext }) => {
    return (
        <div className={styles.stepsContainer}>
            <p className={styles.stepnum}>{stepnum}</p>
            <div className={styles.steptext}>
                <h4>{stephead}</h4>
                <p>
                    {steptext} {stepnum === 1 ? <a href="https://app.uniswap.org/#/swap?outputCurrency=0xab2f723b5b28b059499e5331b7ad6017e4963a1e">here</a> : null} </p>
                <br />

            </div>
        </div>
    )
}
Steps.defaultProps = {
    stepnum: 1,
    stephead: "Connct your wallet",
    steptext: "  Use Trust Wallet, Metamask or any wallet to connect to Uniswap (or click "

}

export const Howtobuy: React.FC = () => {
    return (
        <div className={styles.WhatContainer} id='contact'>
            <div className={styles.aboutHead}>
                <h4>How to buy</h4>
            </div>
            <div className={styles.HowContainer}>
                <Steps />
                <Steps
                    stepnum={2}
                    stephead="Select your quantity"
                    steptext='Choose the amount of IA tokens you want to buy.'
                />
                <Steps
                    stepnum={3}
                    stephead="Confirm the transaction"
                    steptext='Review that the details are correct and hit confirm'
                />
                <Steps
                    stepnum={4}
                    stephead="Recieve your token"
                    steptext=' and Hold them safely'
                />
            </div>

        </div>

    )
}

interface Skillprop {
    number: number,
    name: string,
    progress: number,
}

const Skill: React.FC<Skillprop> = ({ number, name, progress }) => {
    return (
        <div className={styles.Skillcontainer}>
            <h4>{number}% </h4>
            <div className={styles.progress}>
                <h4>{name}</h4>
                <LinearProgress variant="determinate" color='success' value={progress} />
            </div>
        </div>
    )
}


export const Allocation: React.FC = () => {
    return (
        <div className={styles.WhatContainer} id="aa">
            <div className={styles.aboutHead}>
                <h4>Allocation</h4>
            </div>
            <div className={styles.AllocationContainer}>

                <div className={styles.Allocationleft}>
                    <p className={styles.Allocationtitle}>
                        THE NUMBERS
                    </p>
                    <h2 className="entry-title medium-text">
                        Tax <br />
                        Distribution
                    </h2>
                    <p>
                        The 5/5 taxes will be split between 2 main routes.
                    </p>
                    <Button text='Our Roadmap' active />
                </div>
                <div className={styles.div}>
                    <Skill number={4} name="marketing" progress={70} />
                    <Skill number={1} name="Liquidity pool" progress={30} />
                </div>


            </div>


        </div>
    )
}