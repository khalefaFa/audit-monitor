
import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    res.setHeader("Content-Range", "bytes: 0-9/*");
    next();
});

app.get('/', (req, res) => {
    const x = Math.random() * 10;
    res.send(String(x));
})

const PORT = 7070;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});