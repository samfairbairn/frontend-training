# 02: HTTP Requests


HTTP Requests are what we use to get stuff from a server. There are various libraries available to simplify this process, Vue projects usually will use either [vue-resource](https://github.com/pagekit/vue-resource) or [Axios](https://github.com/axios/axios), we will cover these later on. For now lets learn the vanilla JS for HTTP requests.

## **Reading List**

_Some useful resources to get you started._

[Making HTTP Requests in JavaScript - Kirupa](https://www.kirupa.com/html5/making_http_requests_js.htm)

## **Recap**


**Get request**

```javascript

var server_address = 'https://server.com'

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = processRequest;
xhr.open('GET', server_address, true);
xhr.send();

function processRequest(e) {
  if (this.readyState == 4 && this.status == 200) {
    console.log(JSON.parse(xhr.responseText))
  }
}
```

**Post request**

```javascript

var server_address = 'https://server.com'

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = processRequest;
xhr.open('POST', server_address, true);

// setting headers such as authorisation
xhr.setRequestHeader('Authorization', '[auth key]')
xhr.withCredentials = true;

// sending form data
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("param1=val1&param2=val2&param3=val3");

// sending JSON data
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: value
}));

function processRequest(e) {
  if (this.readyState == 4 && this.status == 200) {
    console.log(JSON.parse(xhr.responseText))
  }
}
```

## **Common Issues**

**CORS (Cross-Origin Resource Sharing)**

There are some occasions where you will receive a CORS error, when a request from your front-end to a different server will be rejected for security. Normally this can be fixed by the back-end, however there are some occasions where you might need to add the 'withCredentials' property (see above) to the request, for example if you want to include credentials such as cookies or Authorization headers.

## **Exercise**

Try creating a .json file and using a GET request to retrieve it's data. You can use the dev tools network tab to see the request and it's headers.

## **Further Reading**

[w3schools: AJAX Introduction](https://www.w3schools.com/xml/ajax_intro.asp)  
[w3schools: AJAX - The XMLHttpRequest Object](https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp)  
[w3schools: AJAX - Send a Request To a Server](https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp)  
[w3schools: AJAX - Server Response](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)  

[FreeCodeCamp: Popular ways to make an HTTP requests](https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa)

[Mozilla Developer: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  
[HTML5Rocks: CORS](https://www.html5rocks.com/en/tutorials/cors/)  
[Mozilla Developer: withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)
