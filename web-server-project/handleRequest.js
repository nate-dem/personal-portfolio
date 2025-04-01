// file to handle server requests
import httpParser from "./httpParser.js";
import buildHttpResponse from "./responseBuilder.js";

function handleRequest(data) {
    const request = httpParser(data.toString());
    const response = buildHttpResponse(request);

    return response;
};

export default handleRequest;