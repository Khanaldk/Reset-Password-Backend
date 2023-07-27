const express=require('express');
const dotenv=require('dotenv');
dotenv.config();

const swaggeruiexpress=require('swagger-ui-express');
const swaggerjsdocs=require('swagger-jsdoc');
const swaggerDocs=require('./docs/swaggerDocs')
const routes=require('./routes/indexRoutes');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port=process.env.PORT || 3000

app.use('/api',routes)
app.use('/api-docs/',swaggeruiexpress.serve,swaggeruiexpress.setup(swaggerjsdocs(swaggerDocs)));

app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}`);
})