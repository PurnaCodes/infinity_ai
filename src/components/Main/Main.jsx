import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {


    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);



    return (
        <div className='main'>
            <div className="nav">
                <div className="nav-logo-container">
                    <img src={assets.infinity_logo} alt="logo" />
                    <p><span>Infinity</span>.ai</p>
                </div>
                <img src={assets.user_icon} />
            </div>
            <div className="main-container">
                {!showResult
                    ?
                    <>
                        <div className="greet">
                            <p><span>Hello,User</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} />
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} />
                            </div>
                            <div className="card">
                                <p>Improve readability for the following code</p>
                                <img src={assets.code_icon} />
                            </div>
                        </div>
                    </>
                    :
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img className='result-img' src={assets.infinity_logo} />
                            {loading
                                ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            {/* <img src={assets.gallery_icon} /> */}
                            {/* <img src={assets.mic_icon} /> */}
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Infinity may display inaccurate info, including about people,
                        so double-check its responses.
                    </p>
                    <p className='credits'>
                        <span >powered by </span>
                        <span className='special'> Gemini.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main