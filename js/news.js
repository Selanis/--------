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