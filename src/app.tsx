/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.scss'
import Header from './Header/Header'
import StartPage from './StartPage/StartPage'
import Footer from './StartPage/Footer'
import data from './data'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import TreePage from './TreePage/TreePage'
import React from 'react'
const filter = {
    sizes: [],
    colors: [],
    shapes: [],
    favorites: false,
    amount: ['1', '12'],
    year: ['1920', '2020'],
    sort: 'sort-name-max',
    search: '',
}
const newData = data.map((item) => {
    return { ...item, ...{ selected: false } }
})
let selectedCount = 0
export const App = () => {
    const [cards, setCards] = React.useState(newData)
    const [cardCount, setCardCount] = React.useState(selectedCount)
    function insertShapeFilter(shape) {
        if (filter.shapes.includes(shape)) {
            filter.shapes = filter.shapes.filter((item) => item !== shape)
        } else {
            filter.shapes.push(shape)
        }

        updateCards()
    }
    function insertColorFilter(color) {
        if (filter.colors.includes(color)) {
            filter.colors = filter.colors.filter((item) => item !== color)
        } else {
            filter.colors.push(color)
        }

        updateCards()
    }
    function insertSizeFilter(size) {
        if (filter.sizes.includes(size)) {
            filter.sizes = filter.sizes.filter((item) => item !== size)
        } else {
            filter.sizes.push(size)
        }

        updateCards()
    }
    function toggleFavFilter() {
        filter.favorites = !filter.favorites
        updateCards()
    }
    function insertRangeFilter(arr, type) {
        if (type == 'count') {
            filter.amount = arr.map((x) => x.split('.')[0])
        } else {
            filter.year = arr.map((x) => x.split('.')[0])
        }
        updateCards()
    }
    function insertSortFilter(option) {
        filter.sort = option
        updateCards()
    }
    function sortArr(arr) {
        if (filter.sort == 'sort-name-max') {
            return arr.sort(function (x, y) {
                if (x.name > y.name) {
                    return 1
                } else {
                    return -1
                }
            })
        }
        if (filter.sort == 'sort-name-min') {
            return arr.sort(function (x, y) {
                if (x.name > y.name) {
                    return -1
                } else {
                    return 1
                }
            })
        }
        if (filter.sort == 'sort-count-max') {
            return arr.sort(function (x, y) {
                if (Number(x.count) > Number(y.count)) {
                    return 1
                } else {
                    return -1
                }
            })
        }
        if ((filter.sort = 'sort-count-min')) {
            return arr.sort(function (x, y) {
                if (Number(x.count > y.count)) {
                    return -1
                } else {
                    return 1
                }
            })
        }
    }
    function updateSearch(target) {
        filter.search = target
        updateCards()
    }
    function selectedCard(id) {
        setCards(
            newData.map((x) => {
                if (x.num === id) {
                    if (x.selected) {
                        x.selected = !x.selected
                    } else {
                        if (selectedCount < 20) {
                            x.selected = !x.selected
                        } else {
                            alert('Превышено количество игрушек!')
                        }
                    }
                }
                return x
            })
        )
        selectedCount = newData.filter((elem) => elem.selected).length
        setCardCount(selectedCount)

        updateCards()
        console.log(
            '170/200.Не сделаны функции сброса фильтров и local storage'
        )
    }
    function updateCards() {
        let newCards = []
        if (
            filter.shapes.length == 0 &&
            filter.colors.length == 0 &&
            filter.sizes.length == 0 &&
            filter.favorites == false
        ) {
            newCards = newData.filter((item) => {
                if (
                    Number(item.year) >= Number(filter.year[0]) &&
                    Number(item.year) <= Number(filter.year[1]) &&
                    Number(item.count) >= Number(filter.amount[0]) &&
                    Number(item.count) <= Number(filter.amount[1]) &&
                    item.name.toLocaleLowerCase().includes(filter.search)
                ) {
                    return true
                }
                return false
            })
        } else {
            newData.forEach((item) => {
                if (
                    (filter.colors.length == 0 ||
                        filter.colors.includes(item.color)) &&
                    (filter.shapes.length == 0 ||
                        filter.shapes.includes(item.shape)) &&
                    (filter.sizes.length == 0 ||
                        filter.sizes.includes(item.size)) &&
                    Number(item.year) >= Number(filter.year[0]) &&
                    Number(item.year) <= Number(filter.year[1]) &&
                    Number(item.count) >= Number(filter.amount[0]) &&
                    Number(item.count) <= Number(filter.amount[1]) &&
                    item.name.toLocaleLowerCase().includes(filter.search)
                ) {
                    if (
                        (filter.favorites && item.favorite) ||
                        !filter.favorites
                    ) {
                        newCards.push(item)
                    }
                }
            })
        }
        if (newCards.length == 0) {
            alert('Совпадений нет')
        } else {
            setCards(sortArr(newCards))
        }
    }
    return (
        <>
            <HashRouter>
                <Header updateSearch={updateSearch} cardCount={cardCount} />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route
                        path="/settings"
                        element={
                            <MainPage
                                arrCards={cards}
                                updateShapeFilter={insertShapeFilter}
                                updateColorFilter={insertColorFilter}
                                updateSizeFilter={insertSizeFilter}
                                updateFavFilter={toggleFavFilter}
                                updateRangeFilter={insertRangeFilter}
                                updateSortFilter={insertSortFilter}
                                selectedCard={selectedCard}
                            />
                        }
                    />
                    <Route path="/tree" element={<TreePage />} />
                </Routes>
                <Footer />
            </HashRouter>
        </>
    )
}
