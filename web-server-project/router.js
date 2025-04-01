/*
Messages are currently hardcoded into the responses. Will change to html pages once connected
to my personal portfolio. Need to change content-type to text/html as well.
*/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

function routerResponse(request) {
  let filePath = request.path === "/" ? "/index.html" : request.path;
  filePath = path.join(publicDir, filePath);

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
  };

  try {
    const data = fs.readFileSync(filePath);
    const contentType = contentTypes[ext] || 'text/plain';
    return {
      statusCode: 200,
      statusMessage: 'OK',
      headers: { 'Content-Type': contentType },
      body: data
    };
  } catch (err) {
    return {
      statusCode: 404,
      statusMessage: 'Not Found',
      headers: { 'Content-Type': 'text/plain' },
      body: '404 Not Found'
    };
  }
}

export default routerResponse;
