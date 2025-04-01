import routerResponse from './router.js';

function buildHttpResponse(request) {
    const route = routerResponse(request);
    const headers = [];
  
    headers.push(`HTTP/1.1 ${route.statusCode} ${route.statusMessage}\r\n`);
  
    for (let key in route.headers) {
      headers.push(`${key}: ${route.headers[key]}\r\n`);
    }
  
    headers.push('\r\n'); 
  
    const headBuffer = Buffer.from(headers.join(''));
    const bodyBuffer = Buffer.isBuffer(route.body)
      ? route.body
      : Buffer.from(route.body || '');
  
    return Buffer.concat([headBuffer, bodyBuffer]);
  }

export default buildHttpResponse;