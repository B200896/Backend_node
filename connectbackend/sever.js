require(dotenv).config();
const express = require('express')
const products_routes=require("./Routes/product")
const connectDB=require("./Db/connect");
const app = express()
const port = 4000
app.get('/', (req, res) => {
    res.send("Hii Kashish")
});
app.get('/twitter',(req,res) => {
    res.send("I am connectedd ")
});
app.use("api/products",products_routes)
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`I m connected on ${port}`)
        });
    }catch (error) {
        console.log(error);
    }
};
start()