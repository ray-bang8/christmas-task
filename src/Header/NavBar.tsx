/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <Link to="/" className="nav-bar-img"></Link>
            <Link to="/settings" className="toggle-main-page">
                Игрушки
            </Link>
            <Link to="/tree" className="toggle-tree-page">
                Ёлка
            </Link>
        </>
    )
}
