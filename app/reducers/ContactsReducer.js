/*
  const CONTACTS = [
    {name: 'Pedro Perez', img: 'cat.jpg', date: 'Ayer', city: 'Lima'},
    {name: 'Marta Perez', img: 'cat.jpg', date: 'Doming',city: 'Lima'},
    {name: 'Ana Perez', img: 'cat.jpg', date: '24/10/17', city: 'Lima'},
    {name: 'Sara Perez', img: 'cat.jpg', date: 'Domingo', city: 'Lima'},
    {name: 'Pedro Perez 1', img: 'cat.jpg', date: 'Ayer', city: 'Lima'},
    {name: 'PMarta Perez 2', img: 'cat.jpg', date: 'Doming', city: 'Lima'},
    {name: 'Ana Perez3', img: 'cat.jpg', date: '24/10/17', city: 'Lima'},
    {name: 'Sara Perez4', img: 'cat.jpg', date: 'Domingo', city: 'Lima'},
    {name: 'Sara Perez6', img: 'cat.jpg', date: 'Domingo', city: 'Lima'},
    {name: 'Pablo Perez5', img: 'cat.jpg', date: 'Lunes', city: 'Lima'}
  ];
 */

const getJSON = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const status = xhr.status;
        (status === 200) ? callback(null, xhr.response) : callback(status, xhr.response);
    };
    xhr.send();
};

const CONTACTS =[]

getJSON('https://randomuser.me/api/?results=10&nat=es',
    (err, data) => {
        (err !== null) ? console.log('Something went wrong: ' + err) : data.results.map(e => CONTACTS.push({ name: e.name.first + ' ' + e.name.last, city: e.location.city,img: e.picture.thumbnail, date: e.dob.substr(0,10).replace(/-/g,"/") }));  });

export default (state = CONTACTS, action) => {
    switch (action.type) {
        default:
            return state
    }
}