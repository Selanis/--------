let listNews = document.querySelectorAll('.news .new-container');

for (i = 0; i < listNews.length; i++) {
    listNews[i].classList.add('page-' + String(parseInt(i / 6) + 1));
}

for (i = 6; i < listNews.length; i++) {
    listNews[i].classList.add('hidden');
}

let listNumbs = document.querySelectorAll('.numbers ul .button-numb');

// console.log(listNews)
// console.log(listNumbs)

function NumbClicked(event) {
    console.log(event)
    window.scrollTo(0, 0)

    for (i = 0; i < listNews.length; i++) {
        if (listNews[i].classList.contains(event)) {
            listNews[i].classList.remove('hidden')
        } else if (!listNews[i].classList.contains('hidden')) {
            listNews[i].classList.add('hidden')
        }
    }

    for (i = 0; i < listNumbs.length; i++) {
        if (listNumbs[i].classList.contains(event)) {
            listNumbs[i].classList.add('active')
        } else if (!listNumbs[i].classList.contains(event) & listNumbs[i].classList.contains('active')) {
            listNumbs[i].classList.remove('active')
        }
    }
}

// let buttonRight = document.getElementByClassName('button-next')
// let buttonLeft = document.getElementByClassName('button-back')

// function buttonNext() {
//     if (parseInt(buttonRight.classList[1][-1]) == 2) {
//         buttonRight.classList.add('hidden')
//     } else {
//         buttonRight.classList[1] = parseInt(buttonRight.classList[1][-1] + 1)
//     }
//     console.log()
// }