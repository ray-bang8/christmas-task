import React from 'react'
import NavBar from './NavBar'
import NavControls from './NavControls'
export default function Header({ updateSearch, cardCount }) {
    return (
        <header>
            <div className="header-container">
                <nav className="nav-bar">
                    <NavBar />
                </nav>
                <nav className="nav-controls">
                    <NavControls
                        updateSearch={updateSearch}
                        cardCount={cardCount}
                    />
                </nav>
            </div>
        </header>
    )
}
