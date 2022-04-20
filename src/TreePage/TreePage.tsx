/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
// import TreeContainer from './TreeContainer'
// import BackgroundContainer from './BackgroundContainer'
import GarlandContainer from './GarlandContainer'
// import MainTree from './MainTree'
import Bg1 from '../assets/bg/1.jpg'
import Bg2 from '../assets/bg/2.jpg'
import Bg3 from '../assets/bg/3.jpg'
import Bg4 from '../assets/bg/4.jpg'
import Bg5 from '../assets/bg/5.jpg'
import Bg6 from '../assets/bg/6.jpg'
import Bg7 from '../assets/bg/7.jpg'
import Bg8 from '../assets/bg/8.jpg'
import Bg9 from '../assets/bg/9.jpg'
import Bg10 from '../assets/bg/10.jpg'
import Tree1 from '../assets/tree/1.png'
import Tree2 from '../assets/tree/2.png'
import Tree3 from '../assets/tree/3.png'
import Tree4 from '../assets/tree/4.png'
import Tree5 from '../assets/tree/5.png'
import Tree6 from '../assets/tree/6.png'

import SnowAudio from './SnowAudio'

export default function TreePage() {
    const [stateTree, setStateTree] = React.useState(Tree1)
    const [stateBg, setStateBg] = React.useState(Bg1)
    return (
        <div className="favourite-page">
            <div className="blur">
                <div className="favourite-page-container">
                    <div className="favourite-tree-menu">
                        <SnowAudio />
                        <TreeContainer setStateTree={setStateTree} />
                        <BackgroundContainer setStateBg={setStateBg} />
                        <GarlandContainer />
                    </div>
                    <div className="main-tree-menu">
                        <div className="main-tree-background">
                            <img src={stateBg} alt="background" />
                        </div>
                        <div className="main-tree-front">
                            <img src={stateTree} alt="tree" />
                        </div>
                    </div>
                    <div className="toys-menu"></div>
                </div>
            </div>
        </div>
    )
}

function TreeContainer({ setStateTree }) {
    return (
        <>
            <div className="tree-container menu-container">
                <h2>Выберите ёлку</h2>
                <div className="tree-block">
                    <div
                        className="first-tree menu-item"
                        onClick={() => {
                            setStateTree(Tree1)
                        }}
                        data-tree="1"
                    ></div>
                    <div
                        className="second-tree menu-item"
                        onClick={() => {
                            setStateTree(Tree2)
                        }}
                        data-tree="2"
                    ></div>
                    <div
                        className="third-tree menu-item"
                        onClick={() => {
                            setStateTree(Tree3)
                        }}
                        data-tree="3"
                    ></div>
                    <div
                        className="fourth-tree menu-item"
                        onClick={() => {
                            setStateTree(Tree4)
                        }}
                        data-tree="4"
                    ></div>
                    <div
                        className="fifth-tree menu-item"
                        onClick={() => {
                            setStateTree(Tree5)
                        }}
                        data-tree="5"
                    ></div>
                    <div
                        className="sixth-tree menu-item"
                        onClick={() => {
                            setStateTree(Tree6)
                        }}
                        data-tree="6"
                    ></div>
                </div>
            </div>
        </>
    )
}

function BackgroundContainer({ setStateBg }) {
    return (
        <div className="background-container menu-container">
            <h2>Выберите фон</h2>
            <div className="bg-block">
                <div
                    className="background menu-item bg-1"
                    data-bg="1"
                    onClick={() => {
                        setStateBg(Bg1)
                    }}
                ></div>
                <div
                    className="background menu-item bg-2"
                    data-bg="2"
                    onClick={() => {
                        setStateBg(Bg2)
                    }}
                ></div>
                <div
                    className="background menu-item bg-3"
                    data-bg="3"
                    onClick={() => {
                        setStateBg(Bg3)
                    }}
                ></div>
                <div
                    className="background menu-item bg-4"
                    data-bg="4"
                    onClick={() => {
                        setStateBg(Bg4)
                    }}
                ></div>
                <div
                    className="background menu-item bg-5"
                    data-bg="5"
                    onClick={() => {
                        setStateBg(Bg5)
                    }}
                ></div>
                <div
                    className="background menu-item bg-6"
                    data-bg="6"
                    onClick={() => {
                        setStateBg(Bg6)
                    }}
                ></div>
                <div
                    className="background menu-item bg-7"
                    data-bg="7"
                    onClick={() => {
                        setStateBg(Bg7)
                    }}
                ></div>
                <div
                    className="background menu-item bg-8"
                    data-bg="8"
                    onClick={() => {
                        setStateBg(Bg8)
                    }}
                ></div>
                <div
                    className="background menu-item bg-9"
                    data-bg="9"
                    onClick={() => {
                        setStateBg(Bg9)
                    }}
                ></div>
                <div
                    className="background menu-item bg-10"
                    data-bg="10"
                    onClick={() => {
                        setStateBg(Bg10)
                    }}
                ></div>
            </div>
        </div>
    )
}
