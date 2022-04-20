/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export default function MainFilter({
    insertShapeFilter,
    insertColorFilter,
    insertSizeFilter,
    toggleFavFilter,
}) {
    const [stateBall, setStateBall] = React.useState(false)
    const [stateBell, setStateBell] = React.useState(false)
    const [stateCone, setStateCone] = React.useState(false)
    const [stateSnowflake, setStateSnowflake] = React.useState(false)
    const [stateToy, setStateToy] = React.useState(false)
    const [stateWhite, setStateWhite] = React.useState(false)
    const [stateYellow, setStateYellow] = React.useState(false)
    const [stateRed, setStateRed] = React.useState(false)
    const [stateBlue, setStateBlue] = React.useState(false)
    const [stateGreen, setStateGreen] = React.useState(false)
    const [stateLarge, setStateLarge] = React.useState(false)
    const [stateMedium, setStateMedium] = React.useState(false)
    const [stateSmall, setStateSmall] = React.useState(false)
    const [stateFav, setStateFav] = React.useState(false)
    return (
        <div className="filter-settings">
            <span className="filter-title">Фильтры по значению</span>
            <div className="shape">
                Форма:
                <button
                    className={`shape-button ball ${stateBall}`}
                    onClick={() => {
                        setStateBall(!stateBall)
                        insertShapeFilter('шар')
                    }}
                ></button>
                <button
                    className={`shape-button bell ${stateBell}`}
                    onClick={() => {
                        setStateBell(!stateBell)
                        insertShapeFilter('колокольчик')
                    }}
                ></button>
                <button
                    className={`shape-button cone ${stateCone}`}
                    onClick={() => {
                        setStateCone(!stateCone)
                        insertShapeFilter('шишка')
                    }}
                ></button>
                <button
                    className={`shape-button snowflake ${stateSnowflake}`}
                    onClick={() => {
                        setStateSnowflake(!stateSnowflake)
                        insertShapeFilter('снежинка')
                    }}
                ></button>
                <button
                    className={`shape-button toy ${stateToy}`}
                    onClick={() => {
                        setStateToy(!stateToy)
                        insertShapeFilter('фигурка')
                    }}
                ></button>
            </div>
            <div className="colour">
                Цвет:
                <button
                    className={`colour-button white ${stateWhite}`}
                    onClick={() => {
                        setStateWhite(!stateWhite)
                        insertColorFilter('белый')
                    }}
                ></button>
                <button
                    className={`colour-button yellow ${stateYellow}`}
                    onClick={() => {
                        setStateYellow(!stateYellow)
                        insertColorFilter('желтый')
                    }}
                ></button>
                <button
                    className={`colour-button red ${stateRed}`}
                    onClick={() => {
                        setStateRed(!stateRed)
                        insertColorFilter('красный')
                    }}
                ></button>
                <button
                    className={`colour-button blue ${stateBlue}`}
                    onClick={() => {
                        setStateBlue(!stateBlue)
                        insertColorFilter('синий')
                    }}
                ></button>
                <button
                    className={`colour-button green ${stateGreen}`}
                    onClick={() => {
                        setStateGreen(!stateGreen)
                        insertColorFilter('зелёный')
                    }}
                ></button>
            </div>
            <div className="size">
                Размер:
                <button
                    className={`size-button large ${stateLarge}`}
                    onClick={() => {
                        setStateLarge(!stateLarge)
                        insertSizeFilter('большой')
                    }}
                ></button>
                <button
                    className={`size-button medium ${stateMedium}`}
                    onClick={() => {
                        setStateMedium(!stateMedium)
                        insertSizeFilter('средний')
                    }}
                ></button>
                <button
                    className={`size-button small ${stateSmall}`}
                    onClick={() => {
                        setStateSmall(!stateSmall)
                        insertSizeFilter('малый')
                    }}
                ></button>
            </div>
            <div className="favourite">
                Только любимые:
                <div className="favourite-form">
                    <input
                        type="checkbox"
                        className={`favourite-input`}
                        id="favorite-checkbox"
                        onChange={() => {
                            setStateFav(!stateFav)
                            toggleFavFilter()
                        }}
                    />
                    <label
                        htmlFor="favorite-checkbox"
                        className={`favourite-input-label ${stateFav}`}
                    ></label>
                </div>
            </div>
        </div>
    )
}
