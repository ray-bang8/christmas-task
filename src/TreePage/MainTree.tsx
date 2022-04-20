import React from 'react'
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

export default function MainTree() {
    const [stateTree, setStateTree] = React.useState(Tree1)
    return (
        <div className="main-tree-menu">
            <div className="main-tree-background">
                <img src={Bg1} alt="background" />
            </div>
            <div className="main-tree-front">
                <img src={Tree1} alt="tree" />
            </div>
        </div>
    )
}
