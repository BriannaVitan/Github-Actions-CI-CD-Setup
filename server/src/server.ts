import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';
import { fileURLToPath } from 'url'

const app = express();
const PORT = process.env.PORT || 3001;

const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
const buildPath = path.join(__dirname, "../../../client/dist")
console.log(buildPath)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
// app.use(express.static('../../../client/dist'));

app.use(express.static(buildPath));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
