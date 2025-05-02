import BartImg from './assets/Bart_Simpson_200px.png'
import BartSlingshotImg from './assets/BartSimpson_slingshot.png'
import MargeImg from './assets/Marge_Simpson.png'
import LisaImg from './assets/Lisa_Simpson.png'
import LisaSaxImg from './assets/Lisa_Simpsons_sax.png'
import HomerImg from './assets/Homer_Simpson_2006.png'
import MaggieImg from './assets/Maggie_Simpson.png'
import cardBackImg from './assets/cardBack.png'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useState} from "react";

function HomerQuiz() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>Homer Quiz</h2>
            <p>What is Homer's main job?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    disabled={answer.length === 0 || status === 'submitting'}>
                    Submit
                </button>

                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }

            </form>
        </>
    )
}

function submitForm(answer) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'safety inspector';
            if (shouldError) {
                reject(new Error('Good Guess - but nope'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

function SimpsonPlaying({simpson}) {
    const [playing, setPlaying] = useState(false);

    if (simpson === "Lisa") {
        if (playing) {
            return (
                <>
                    <img src={LisaSaxImg} alt="Lisa" /> <br />
                </>
            );
        } else {
            return (
                <>
                    <img src={LisaImg} alt="Lisa"/> <br/>
                    <button onClick={() => setPlaying(true)}>Click to play!</button>
                </>
            );
        }
    } else {
        if (playing) {
            return (
                <>
                    <img src={BartSlingshotImg} alt="bart" />
                </>
            );
        } else {
            return (
                <>
                    <img src={BartImg} alt="bart" /><br />
                    <button onClick={() => setPlaying(true)}>Click to play!</button>
                </>
            );
        }
    }
}

function MaggieTalks() {
    const [emoji, addEmojis] = useState("");

    return (
        <>
            <img src={MaggieImg} alt="The Baby!" />
            <p>{emoji}</p>
            <button onClick={() => addEmojis(emoji + "😀")}
                    onMouseLeave={() => addEmojis(emoji + "🤣")}
                    onMouseOver={() => addEmojis(emoji + "😇")}
            >Say something Maggie!</button>
        </>
    );
}

function Marge() {
    const [visible, setVisible] = useState(false);

    if (visible) {
        return (
            <>
                <img src={MargeImg} alt="Mother has arrived!"
                     onClick={() => setVisible(false)}
                     height="450px" width="350px"
                />
            </>
        );
    } else {
        return (
            <>
                <img src={cardBackImg} alt="Mother is coming!"
                     onClick={() => setVisible(true)}
                     height="450px" width="350px"
                />
            </>
        );
    }
}

export default function SimpsonTabs() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Homer</Tab>
                    <Tab>Marge</Tab>
                    <Tab>Bart</Tab>
                    <Tab>Lisa</Tab>
                    <Tab>Maggie</Tab>
                </TabList>
                <TabPanel>
                    <img src={HomerImg} alt="Homer" />
                    <HomerQuiz />
                </TabPanel>
                <TabPanel>
                    <Marge />
                    <Marge />
                </TabPanel>
                <TabPanel>
                    <SimpsonPlaying simpson="Bart" />
                </TabPanel>
                <TabPanel>
                    <SimpsonPlaying simpson="Lisa" />
                </TabPanel>
                <TabPanel>
                    <MaggieTalks />
                </TabPanel>
            </Tabs>

        </>
    );
}