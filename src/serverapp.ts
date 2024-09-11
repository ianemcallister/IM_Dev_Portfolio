/*
*       SERVER APP
*/

//  Define dependencies
import express, { Express } from "express";
import bodyParser from 'body-parser';
import rootRoutes from '@routes/root/root';

//  Config
const app: Express  = express();

const port = process.env.PORT as string || '8080';
const isProduction = process.env.IS_PRODUCTION?.toLowerCase() === 'true';

app.use(bodyParser.json());

// Routes
app.use('/', rootRoutes);

/*
*   OPEN UP PORT FOR LISTENING
*
*/
app.listen(parseInt(port), () => {
    //  NOTIFY STATUS
    console.log(`Express server is up and running on port ${parseInt(port)} in ${(isProduction ? "production" : "development")} mode.`);
});

