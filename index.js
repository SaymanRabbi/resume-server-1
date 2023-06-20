const express = require('express');
const cors = require('cors');
const connectDB = require('./Server');
const app = express();
const port = 5000 || process.env.PORT;
app.use(cors());
app.use(express.json());
const getAllroute = require('./Routes/UseRouters');
// connect to database
connectDB()

// upadate node
// hello there
// "npm": "7.x"
// another comment
// Path: routes/index.js
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.use('/api/v1', getAllroute);
// not found
app.all("*", (req, res) => {
    res.send("404 not found")
    })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.use(ErrorHandeler())