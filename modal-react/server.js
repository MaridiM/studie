const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/api/', (req, res) => {
    res.json([
        {
            id: 'dsl',
            name: 'vasia',
        },
        {
            id: 'dsl',
            name: 'Petro',
        },
        {
            id: 'dsl',
            name: 'anna',
        }
    ])
})
app.get('/api/1', (req, res) => {
    res.json([
        {
            id: 'dsl',
            type: 'sedan',
        },
        {
            id: 'dsl',
            type: 'lada',
        },
        {
            id: 'dsl',
            type: 'anna',
        }
    ])
})

app.listen(8000, () => console.log('listening  server'))