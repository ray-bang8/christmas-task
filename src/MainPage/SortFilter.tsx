import React from 'react'
export default function SortFilter({ insertSortFilter }) {
    return (
        <div className="filter-sort">
            <span className="range-span">Сортировка</span>
            <select
                className="sort-select"
                onChange={(e) => {
                    insertSortFilter(e.target.value)
                }}
            >
                <option selected value="sort-name-max">
                    По названию от "А" до "Я"
                </option>
                <option value="sort-name-min">По названию от "Я" до "А"</option>
                <option value="sort-count-max">
                    По количеству по возрастанию
                </option>
                <option value="sort-count-min">По количеству убыванию</option>
            </select>
            <button className="reset">Сброс фильтров</button>
        </div>
    )
}
