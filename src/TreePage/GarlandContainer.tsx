/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export default function GarlandContainer() {
    return (
        <div className="garland-container menu-container">
            <h2>Гирлянда</h2>
            <div className="garland-block">
                <div className="garland-btns">
                    <button
                        className="garland-color-btn mixed-btn"
                        data-color="multicolor"
                    ></button>
                    <button
                        className="garland-color-btn red-btn"
                        data-color="red"
                    ></button>
                    <button
                        className="garland-color-btn blue-btn"
                        data-color="blue"
                    ></button>
                    <button
                        className="garland-color-btn yellow-btn"
                        data-color="yellow"
                    ></button>
                    <button
                        className="garland-color-btn green-btn"
                        data-color="green"
                    ></button>
                </div>
                <div className="garland-switcher">
                    <input
                        type="checkbox"
                        className="favourite-input"
                        id="favorite-checkbox"
                    />
                    <label
                        htmlFor="favorite-checkbox"
                        className="favourite-input-label"
                    ></label>
                </div>
            </div>
        </div>
    )
}
