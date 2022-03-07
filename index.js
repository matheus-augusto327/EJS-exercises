const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let users = [
    {
        id: 0,
        name: 'Matheus',
        phone: '(11) 99999-9999'
    },
    {
        id: 1,
        name: 'José',
        phone: '(11) 99999-9999'
    },
    {
        id: 2,
        name: 'Maranhão',
        phone: '(11) 99999-9999'
    },
]

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('user', {users})

})

app.listen(3000, () => {
    console.log('Server running on 3000')
})
