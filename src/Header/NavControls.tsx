import React from 'react'

export default function NavControls({ updateSearch, cardCount }) {
    return (
        <>
            <input
                type="search"
                className="nav-search"
                autoComplete="off"
                onChange={(e) => {
                    updateSearch(e.target.value)
                }}
            />
            <div className="nav-select">
                <span>{cardCount}</span>
            </div>
        </>
    )
}
