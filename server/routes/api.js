const router = require('express').Router()
const Fibo = require('./../scripts/fibonacci')

// test data
const sample = require('./../test-data/sample.json')
const fibonacci = require('./../test-data/fibonacci.json')


// Root for path GET /api
router.get('/', (req,res) => res.json(sample) )

// GET /api/fibonacci
router.get('/fibonacci', (req,res) => res.json(fibonacci) )

// POST /api/calculate-sequence
router.post('/post-calculate-sequence', (req,res) => {
    let data = req.body
    console.log('POST ------------------')
    console.log(data)
    
    let sequence = Fibo.getSequence({
        x: parseFloat(data.x),
        y: parseFloat(data.y)
    })

    res.json({ "sequence": sequence })
})

router.get('/get-calculate-sequence', (req,res) => {
    let data = req.query
    console.log('GET ------------------')
    console.log(data)
    
    let sequence = Fibo.getSequence({
        x: parseFloat(data.x),
        y: parseFloat(data.y)
    })

    res.json({ "sequence": sequence })
})

module.exports = router