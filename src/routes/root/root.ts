// routes/root/root.ts

// Define dependencies
import express, { Express, Request, Response } from "express";
import path from 'path';

// Define global variables
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const filePath: string = path.join(__dirname, '../../../static/portfolio/index.html');
    res.sendFile(filePath);
});

export default router;