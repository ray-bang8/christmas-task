/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import AudioLogo from '../assets/svg/audio.svg'
import SnowLogo from '../assets/svg/snow.svg'
import Music from '../assets/audio/audio.mp3'
const music = new Audio(Music)
export default function SnowAudio() {
    const [setAudio, setStateAudio] = React.useState(false)
    setAudio ? music.play() : music.pause()
    const [setSnow, setStateSnow] = React.useState(false)
    return (
        <div className="audio-snow-container menu-container">
            <div className="audio-control menu-item">
                <img
                    src={AudioLogo}
                    alt="audio"
                    onClick={() => {
                        setStateAudio(!setAudio)
                    }}
                />
            </div>
            <div className="snow-control menu-item">
                <img src={SnowLogo} alt="snow" onClick={() => {}} />
            </div>
        </div>
    )
}
