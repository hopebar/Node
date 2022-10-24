const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/getabout',(req, res) => {
    let data = {
        name: '{Suttita Phothison}',
        age: 20,
        email: '{suttita.phot@bumail.net}',
        address: '{Pathum Thani, Thanyaburi, Lam Phak Kut}',
    }
})

app.get('/getproject',(req, res) => {
    let data = {
        project_name: '{Suttita Node}',
        project_discription: '{การเขียนโดยใช้ Node}',
        project_link: '{}'
    }
})

app.get('/getcontact',(req, res) => {
    let data = {
        address: '{Pathum Thani, Thanyaburi, Lam Phak Kut}',
        email: '{suttita.phot@bumail.net}',
        phone_number: 0938171345,
    }
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})