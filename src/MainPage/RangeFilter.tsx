import React from 'react'
import Nouislider from 'nouislider-react'
import 'nouislider/dist/nouislider.css'
export default function RangeFilter({ insertRangeFilter }) {
    const [val, setVal] = React.useState(['1', '12'])
    const [yearVal, setYearVal] = React.useState(['1940', '2020'])
    return (
        <div className="filter-range">
            <span className="filter-title">Фильтры по диапазону</span>
            <div className="count-range-container">
                <span className="range-span">Количество экземпляров:</span>
                <div className="count-div">
                    <div className="count-range-output">
                        {val[0].split('.')[0]}
                    </div>

                    <div className="range-field">
                        <Nouislider
                            range={{ min: 1, max: 12 }}
                            start={[1, 12]}
                            step={1}
                            connect
                            onUpdate={(e) => {
                                insertRangeFilter(e, 'count')
                                setVal(e)
                            }}
                        />
                    </div>
                    <div className="count-range-output">
                        {val[1].split('.')[0]}
                    </div>
                </div>
            </div>
            <div className="year">
                <span className="range-span">Год приобретения:</span>
                <div className="count-div">
                    <div className="year-range-output">
                        {yearVal[0].split('.')[0]}
                    </div>
                    <div className="year-field">
                        <Nouislider
                            range={{ min: 1940, max: 2020 }}
                            start={[1940, 2020]}
                            step={10}
                            connect
                            onUpdate={(e) => {
                                insertRangeFilter(e, 'year')
                                setYearVal(e)
                            }}
                        />
                    </div>
                    <div className="year-range-output">
                        {yearVal[1].split('.')[0]}
                    </div>
                </div>
            </div>
        </div>
    )
}
