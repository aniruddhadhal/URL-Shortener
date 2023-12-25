const app = require("./app");
const dotenv = require('dotenv');
const morgan = require('morgan')


const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute')
const urlRoute = require('./routes/urlRoute')


dotenv.config();

connectDB();




app.use(morgan("dev"));

app.use('/', userRoute);
app.use('/', urlRoute);




// PORT 

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
