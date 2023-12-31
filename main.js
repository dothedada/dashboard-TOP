const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('navegacion')

btnMenu.addEventListener('click', () => {
    const estadoActual = btnMenu.getAttribute('data-state')

    if (!estadoActual || estadoActual === 'closed') {
        btnMenu.setAttribute('data-state', 'opened')
        btnMenu.setAttribute('aria-expanded', 'true')
        menu.classList.add('desplegado')
    } else {
        btnMenu.setAttribute('data-state', 'closed')
        btnMenu.setAttribute('aria-expanded', 'false')
        menu.classList.remove('desplegado')
    }
})
