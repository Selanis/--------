function showList(event) {
    let buttonPlus = document.getElementById(event);
    let listVac = document.querySelector('.' + event);

    // console.log(listVac)

    if (buttonPlus.classList.contains('active')) {
        buttonPlus.classList.remove('active')
        listVac.classList.remove('shown')
    } else {
        buttonPlus.classList.add('active')
        listVac.classList.add('shown')
    }
} 

