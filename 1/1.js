function changeTheme() {
    let changeTh = document.querySelector('body')
    if (changeTh.classList[0] === 'theme-dark') {
        changeTh.classList.remove('theme-dark')
        changeTh.classList.add('theme-light')

    }
    else {
        changeTh.classList.remove('theme-light')
        changeTh.classList.add('theme-dark')
    }
}