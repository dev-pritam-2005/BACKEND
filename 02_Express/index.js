import express from 'express'

const app = express()

const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello from pritam Dutta ! ')
//   })
// app.get('/Pritam', (req, res) => {
//     res.send(' kya deakh rha hai bhosadi wala main pritam hun ')
//   })
// app.get('/twitter', (req, res) => {
//     res.send(' this is my twitter  ')
//   })

app.use(express.json())

let myData = []
let nextId =1

app.post('/teas',(req,res)=>{
    
    const {name,price} = req.body
    const newTea = {id: nextId++ ,name,price}
    myData.push(newTea)
    res.status(201).send(newTea)
})


app.get('/teas',(req,res)=>{
    res.status(200).send(myData)
})

app.get('/teas/:id',(req,res)=>{
    const tea = myData.find(t=>t.id===req.params.id===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('tea is not found')
    }
})

//updation of  tea

app.put('/teas/:id', (req,res)=>{
    
    const tea = myData.find(t=>t.id===req.params.id===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('tea is not found')
    }
    const {name,price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})


//delete tea

app.delete('/teas/id:',(req,res)=>{
    const index = myData.findIndex(t=>t.id===parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send('tea is not found')
    }
    myData.splice(index,1)
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}...`)
  })