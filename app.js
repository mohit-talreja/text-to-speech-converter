const express = require('express')

const path = require('path')

const say = require('say')

const app = express()

const PORT = process.env.PORT || 1000

app.use(express.urlencoded({ extended : true }))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/msg.html'))
})

app.post('/msg', (req,res) => {
    const msg = req.body.msg
    say.speak(msg, 'Greeting', 0, (err) => {
        if(err) {
            console.log(err)
        } else{
            console.log('spoken!')
        }
    
    })
    res.redirect('/')
})

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))