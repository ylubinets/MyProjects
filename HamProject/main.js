'use strict'

let tabs = document.querySelector('.tabs_services')
let titles = tabs.querySelectorAll('.tabs-title')
let items = tabs.querySelectorAll('.tab')

    function tabNext(arr, i) {
        arr.forEach( item => {
            item.forEach( i => {i.classList.remove('active')})
            item[i].classList.add('active')
        })
    }

    for(let i = 0; i < titles.length; i++) {
        titles[i].addEventListener('click', () => {
            tabNext([titles, items], i)
        })
    }