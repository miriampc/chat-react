const CONTACTS = [
    {name: 'Pedro Perez', img: 'cat.jpg', date: 'Ayer'},
    {name: 'Marta Perez', img: 'cat.jpg', date: 'Doming'},
    {name: 'Ana Perez', img: 'cat.jpg', date: '24/10/17'},
    {name: 'Sara Perez', img: 'cat.jpg', date: 'Domingo'},
    {name: 'Pedro Perez 1', img: 'cat.jpg', date: 'Ayer'},
    {name: 'PMarta Perez 2', img: 'cat.jpg', date: 'Doming'},
    {name: 'Ana Perez3', img: 'cat.jpg', date: '24/10/17'},
    {name: 'Sara Perez4', img: 'cat.jpg', date: 'Domingo'},
    {name: 'Sara Perez6', img: 'cat.jpg', date: 'Domingo'},
    {name: 'Pablo Perez5', img: 'cat.jpg', date: 'Lunes'}
]

export default (state = CONTACTS, action) => {
    switch (action.type) {
        default:
            return state
    }
}
