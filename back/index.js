const app = require('./src/services/server');
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.__PORT__,()=>{
    console.log(`Server listen on port ${process.env.__PORT__}`);
});