import React from 'react'
import { Link } from 'react-router-dom'
export default function StartPage() {
    return (
        <>
            <div className="page start-page">
                <div className="toy toy1"></div>
                <div className="toy toy2"></div>
                <h1 className="start-page-title">
                    Новогодняя игра
                    <span>"Наряди ёлку"</span>
                </h1>
                <Link
                    to="/settings"
                    className="start-page-button"
                    data-page="mainPage"
                >
                    Начать
                </Link>
            </div>
        </>
    )
}
