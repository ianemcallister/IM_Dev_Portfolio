/*
*       SERVER APP
*/

//  Define dependencies
import express, { Express } from "express";
import bodyParser from 'body-parser';
import path from 'path';

//  Config
const app: Express  = express();

const port = process.env.PORT as string || '8080';
const isProduction = process.env.IS_PRODUCTION?.toLowerCase() === 'true';

app.use(bodyParser.json());

// Serve static files from the 'dist' folder
const staticPath = path.join(__dirname, '../static/portfolio');
app.use(express.static(staticPath));

/*
*   OPEN UP PORT FOR LISTENING
*
*/
app.listen(parseInt(port), () => {
    //  NOTIFY STATUS
    console.log(`Express server is up and running on port ${parseInt(port)} in ${(isProduction ? "production" : "development")} mode.`);
});

