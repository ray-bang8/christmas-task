/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
export const urlLink =
    'https://raw.githubusercontent.com/ButerBrot359/CT-Data/master/assets/toys/'

import MainFilter from './MainFilter'
import RangeFilter from './RangeFilter'
import SortFilter from './SortFilter'
export default function MainPage({
    arrCards,
    updateShapeFilter,
    updateColorFilter,
    updateSizeFilter,
    updateFavFilter,
    updateRangeFilter,
    updateSortFilter,
    selectedCard,
}) {
    return (
        <div className="page main-page" data-page="mainPage">
            <div className="main-page-background">
                <div className="main-page-filters">
                    <MainFilter
                        insertShapeFilter={updateShapeFilter}
                        insertColorFilter={updateColorFilter}
                        insertSizeFilter={updateSizeFilter}
                        toggleFavFilter={updateFavFilter}
                    />
                    <RangeFilter insertRangeFilter={updateRangeFilter} />
                    <SortFilter insertSortFilter={updateSortFilter} />
                </div>
                <div className="cards-container">
                    {arrCards.map((item) => {
                        return (
                            <Card
                                data={item}
                                key={item.num}
                                selectedCard={selectedCard}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
function Card({ data, selectedCard }) {
    return (
        <>
            <div
                className={`card ${data.selected} `}
                onClick={() => {
                    selectedCard(data.num)
                }}
            >
                <h2 className="card-title">{data.name}</h2>
                <img
                    className="card-img"
                    src={`${urlLink}${data.num}.png`}
                    alt="toy"
                />

                <div className="card-description">
                    <p className="count">
                        Количество:
                        <span> {data.count}</span>
                    </p>
                    <p className="year">
                        Год:
                        <span> {data.year}</span>
                    </p>
                    <p className="shape">
                        Форма:
                        <span> {data.shape}</span>
                    </p>
                    <p className="colour">
                        Цвет:
                        <span> {data.color}</span>
                    </p>
                    <p className="size">
                        Размер:
                        <span> {data.size}</span>
                    </p>
                    <p className="favourite">
                        Любимая:
                        <span> {data.favorite ? 'да' : 'нет'}</span>
                    </p>
                </div>
                <div className="ribbon"></div>
            </div>
        </>
    )
}
