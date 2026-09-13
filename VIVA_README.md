# 🎓 Web Dev III – Complete Line-by-Line Code Mastery & Viva Study Guide

Welcome to the ultimate preparation blueprint for your **Web Dev III Viva Examination**. This guide contains the **complete source code for every file from Day 01 to Day 09**, followed by an **exhaustive line-by-line breakdown** of what each line does and why, followed by the **core theory concepts** and the **top 25 examiner viva Q&As**.

---

# 📑 Quick Navigation
1. [Day 01: Node.js Foundation & Script Execution](#day-01---nodejs-foundation--script-execution)
2. [Day 02: Core Modules Deep-Dive (fs, os, path, crypto, url, dns, process, dotenv)](#day-02---core-modules-deep-dive)
3. [Day 03: Native HTTP Server, Request/Response Streams & Routing](#day-03---native-http-server-requestresponse-streams--routing)
4. [Day 04: Introduction to Express, Route Params & Query Params](#day-04---introduction-to-express-route-params--query-params)
5. [Day 05: HTTP Streams, TCP Packet Chunks & POST Body Assembly](#day-05---http-streams-tcp-packet-chunks--post-body-assembly)
6. [Day 06: Advanced Route Handling, Case Insensitivity & Status Codes](#day-06---advanced-route-handling-case-insensitivity--status-codes)
7. [Day 07: MVC Architecture Foundation (Model, Controller, Router)](#day-07---mvc-architecture-foundation)
8. [Day 08: Full RESTful CRUD Operations with JSON Persistence](#day-08---full-restful-crud-operations-with-json-persistence)
9. [Day 09: Scalable Multi-Resource MVC Architecture (Tours + Users)](#day-09---scalable-multi-resource-mvc-architecture-tours--users)
10. [Core Viva Concepts & Theory Cheat Sheet](#-core-viva-concepts--theory-cheat-sheet)
11. [Top 25 Examiner Viva Questions & Model Answers](#-top-25-examiner-viva-questions--model-answers)

---

# 💻 Complete Code & Line-by-Line Breakdown

---

## Day 01 - Node.js Foundation & Script Execution

### 📁 File: `Day-01-06_08_2026/app.js`
```javascript
1: console.log('Hemloww~ , I am  this is Anveshna , logged in from node.js ~')
```

### 🔍 Line-by-Line Explanation:
* **Line 1**:
  * **Code**: `console.log('Hemloww~ , I am  this is Anveshna , logged in from node.js ~')`
  * **What it does**: Calls the global `console` object's `log()` method to print the string to standard output (`process.stdout`).
  * **Viva Concept**: Unlike in the browser where `console.log` outputs to the browser DevTools Console, in Node.js it writes directly to the terminal stdout stream via the V8 C++ wrapper.

---

## Day 02 - Core Modules Deep-Dive

### 📁 File 1: `Day-02-07_08_2026/commonJs/data/myData.js`
```javascript
1: const cities = ["Goa", "Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Ahmedabad", "Surat", "Pune"]
2: module.exports = cities;
```

### 🔍 Line-by-Line Explanation:
* **Line 1**: `const cities = [...]`
  * Declares an array of 10 Indian city strings stored in memory.
* **Line 2**: `module.exports = cities;`
  * In the CommonJS module system, `module.exports` defines the public interface that other files receive when they call `require('./data/myData.js')`.

---

### 📁 File 2: `Day-02-07_08_2026/commonJs/app.js`
```javascript
1:  // const cities = require('./data/myData.js');
2:  // console.log(cities);
3:  // const chalk = require('chalk');
4:  // console.log(chalk.italic.green('Success!'));
5:  // console.log(chalk.red.bold('Error!'));
6:  
7:  //fs Core Module
8:  
9:  // const fs = require('fs');
10: // fs.writeFileSync('data/data.txt', 'Hello, world~!');
11: 
12: // OS Core Module
13: // const os = require('os')
14: // const userinfo = os.userInfo()
15: // const platform = os.platform()
16: // const architecture = os.arch()
17: // const uptime = os.uptime()
18: // console.log(uptime)
19: // console.log(platform)
20: // console.log(architecture)
21: // console.log(userinfo)
22: 
23: // Path Core Module
24: 
25: // const path = require('path')
26: // const filepath = path.join(__dirname, 'data', 'data.txt')
27: // // __dirname to take all path from root , if not from root that is relative then simply leave it
28: // console.log(filepath)
29: 
30: // Crypto Core Module
31: 
32: // const crypto = require('crypto')
33: // const hash = crypto.createHash('sha256')
34: // hash.update('Hello, world~!')
35: // console.log(hash.digest('hex'))
36: // UUID assignment
37: // const uuid = crypto.randomUUID();
38: // console.log('UUID:', uuid)
39: 
40: // URL Core Module
41: 
42: // const url = require('url')
43: // const myURL = 'https://example.com?name=John&age=30&city=New%20York'
44: // const parsedURL = new URL(myURL)
45: // console.log(parsedURL)
46: 
47: // DNS Module
48: 
49: // const dns = require("dns")
50: // dns.lookup('google.com', (err, address) => {
51: //     if (err) {
52: //         console.log(err)
53: //     }
54: //     console.log(address)
55: // })
56: 
57: // Process Object
58: 
59: // const process = require('process')
60: // console.log(process.cwd)
61: // console.log(process.pid)
62: // console.log(process.ppid)
63: // console.log(process.execPath)
64: // console.log(process.execArgv)
65: // console.log(process.argv[2])
66: // console.log(process.argv)
67: 
68: // dotenv package access .env
69: // require('dotenv').config();
70: // console.log(process.env.PORT);
71: // console.log(process.env.BODY_COUNT);
```

### 🔍 Line-by-Line Explanation of Every Core Module Used:
* **Lines 1–2 (`Local Module Import`)**:
  * `const cities = require('./data/myData.js')`: Uses CommonJS `require()` to import the exported cities array.
* **Lines 3–5 (`Third-Party Package: chalk`)**:
  * `require('chalk')`: Imports terminal color styling library. `chalk.italic.green('Success!')` prints green italic text, while `chalk.red.bold('Error!')` prints bold red text using ANSI escape codes.
* **Lines 9–10 (`fs Core Module - File System`)**:
  * `const fs = require('fs')`: Built-in module for file manipulation.
  * `fs.writeFileSync('data/data.txt', 'Hello, world~!')`: Synchronous file writing. Creates `data.txt` if it doesn't exist, or completely overwrites it with `'Hello, world~!'`.
* **Lines 13–21 (`os Core Module - Operating System`)**:
  * `os.userInfo()`: Returns system username, home directory, shell, and user ID.
  * `os.platform()`: Returns OS platform name (`'win32'`, `'linux'`, `'darwin'`).
  * `os.arch()`: Returns CPU architecture (`'x64'`, `'arm64'`).
  * `os.uptime()`: Returns system uptime in seconds since last boot.
* **Lines 25–28 (`path Core Module`)**:
  * `path.join(__dirname, 'data', 'data.txt')`: Resolves cross-platform path segments using the correct operating system separator (`\` on Windows, `/` on Linux/macOS).
  * `__dirname`: Global Node variable representing the absolute directory path of the current script.
* **Lines 32–38 (`crypto Core Module`)**:
  * `crypto.createHash('sha256')`: Initializes a cryptographic SHA-256 hash generator.
  * `hash.update('Hello, world~!')`: Feeds data to be hashed.
  * `hash.digest('hex')`: Finalizes and outputs the resulting 64-character hexadecimal digest.
  * `crypto.randomUUID()`: Generates an RFC 4122 version 4 cryptographically secure unique identifier string.
* **Lines 42–46 (`url Core Module`)**:
  * `new URL(myURL)`: Parses a web URL into structured properties: protocol (`https:`), hostname (`example.com`), and query parameters (`searchParams`).
* **Lines 49–56 (`dns Core Module`)**:
  * `dns.lookup('google.com', callback)`: Performs an asynchronous DNS resolution using operating system facilities to resolve a domain name into an IP address (e.g., `142.250.190.46`).
* **Lines 59–67 (`process Global Object`)**:
  * `process.cwd()`: Current working directory where the node command was run.
  * `process.pid`: Process ID assigned by the OS.
  * `process.ppid`: Parent Process ID.
  * `process.execPath`: Absolute path of the node executable running this script.
  * `process.argv`: Array of CLI arguments (`argv[0]` is node path, `argv[1]` is file path, `argv[2]` is the first user-passed argument).
* **Lines 69–72 (`dotenv Package`)**:
  * `require('dotenv').config()`: Reads `.env` file from the current directory and injects its key-value pairs into `process.env`.
  * `process.env.PORT`: Safely accesses the configured port without hardcoding.

---

### 📁 File 3: `Day-02-07_08_2026/ES6/app.js`
```javascript
1: import chalk from 'chalk'
2: console.log(chalk.italic.green('Success!'));
3: console.log(chalk.red.bold('Error!'));
```

### 🔍 Line-by-Line Explanation:
* **Line 1**: `import chalk from 'chalk'`
  * Uses modern ES6 module syntax (`import`) instead of CommonJS `require()`. Requires `"type": "module"` in `package.json`.
* **Lines 2–3**: Logs colored output using ES6 imported chalk methods.

---

## Day 03 - Native HTTP Server, Request/Response Streams & Routing

### 📁 File: `Day-03-10_08_2026/app.js`
```javascript
1:  const http = require('http');
2:  
3:  const server = http.createServer((req, res) => {
4:      if (req.url === '/') {
5:          res.writeHead(200, { 'Content-Type': 'text/html' });
6:          res.end(`
7:          <h1 style='color:navy'>Hello from Node.js!</h1>
8:          <p>Built with pure Node.js http module.</p>
9:      `);
10:     } else {
11:         res.writeHead(404, { 'Content-Type': 'application/json' });
12:         res.end(JSON.stringify({ error: 'Route not found' }));
13:     }
14: });
15: 
16: server.listen(3000, () => console.log('Running on :3000'));
```

### 🔍 Line-by-Line Explanation:
* **Line 1**: `const http = require('http');`
  * Imports the core Node.js `http` module responsible for low-level HTTP server operations.
* **Line 3**: `const server = http.createServer((req, res) => {`
  * Creates an HTTP server instance. The callback executes every time a client sends an HTTP request:
    * `req` (`http.IncomingMessage`): Readable stream containing request headers, method, and URL.
    * `res` (`http.ServerResponse`): Writable stream used to send status codes, headers, and body back to the client.
* **Line 4**: `if (req.url === '/') {`
  * Manual route matching: Checks if the user requested the root path `/`.
* **Line 5**: `res.writeHead(200, { 'Content-Type': 'text/html' });`
  * Sends the HTTP status code `200 OK` and sets the `Content-Type` response header to `text/html`.
* **Lines 6–9**: `res.end(`...`);`
  * Flushes the HTML body payload to the client and **closes the HTTP connection**.
* **Line 10–13**: `else { res.writeHead(404, ...); res.end(JSON.stringify({ error: 'Route not found' })); }`
  * Fallback for any undefined route. Sets `404 Not Found` and sends a serialized JSON error object.
* **Line 16**: `server.listen(3000, () => console.log('Running on :3000'));`
  * Binds the server to TCP port `3000` and starts listening for incoming connections.

---

## Day 04 - Introduction to Express, Route Params & Query Params

### 📁 File 1: `Day-04-13_08_2026/data/Tour.js`
```javascript
1: const packages = [
2:     { id: 1, destination: "Goa", price: 15000 },
3:     { id: 2, destination: "Manali", price: 20000 },
4:     { id: 3, destination: "Kerala", price: 25000 }
5: ];
6: module.exports = packages;
```
* **Explanation**: In-memory JavaScript array of tour objects exported via CommonJS.

---

### 📁 File 2: `Day-04-13_08_2026/app.js`
```javascript
1:  const express = require('express');
2:  const app = express();
3:  const packages = require("./data/Tour.js");
4:  
5:  app.get("/", (req, res) => {
6:      res.send("Hello World")
7:  });
8:  
9:  app.get("/packages", (req, res) => {
10:     const des = req.query.destination;
11:     if (!des) {
12:         res.json(packages);
13:     }
14:     const result = packages.filter(item => item.destination == des);
15:     res.json(result);
16: });
17: 
18: app.get("/packages/:id", (req, res) => {
19:     const id = Number(req.params.id);
20:     const onePack = packages.find((item) => { return item.id == id });
21:     res.json(onePack);
22: });
23: 
24: app.listen(5000, () => {
25:     console.log("Server is running on port 5000")
26: });
```

### 🔍 Line-by-Line Explanation:
* **Line 1**: `const express = require('express');`
  * Imports Express framework function.
* **Line 2**: `const app = express();`
  * Initializes the Express application instance.
* **Line 3**: `const packages = require("./data/Tour.js");`
  * Imports the packages data array.
* **Lines 5–7**: `app.get("/", (req, res) => { res.send("Hello World") });`
  * Defines a route handler for `GET /`. `res.send()` sends plain text or HTML with auto-generated Content-Type headers.
* **Line 9**: `app.get("/packages", (req, res) => {`
  * Handles requests to `/packages`.
* **Line 10**: `const des = req.query.destination;`
  * **Query Parameter**: Extracts `destination` from URL query string (e.g., `/packages?destination=Goa`).
* **Lines 11–13**: `if (!des) { res.json(packages); }`
  * If no destination query was provided, returns all tour packages as JSON.
* **Line 14**: `const result = packages.filter(item => item.destination == des);`
  * Filters the array to return all tours matching the destination string.
* **Line 15**: `res.json(result);`
  * Sends filtered array as JSON response.
* **Line 18**: `app.get("/packages/:id", (req, res) => {`
  * **Route Parameter**: `:id` is a named path parameter matching any value at `/packages/<value>`.
* **Line 19**: `const id = Number(req.params.id)`
  * `req.params.id` is extracted as a string. `Number()` converts it to an integer for matching.
* **Line 20**: `const onePack = packages.find((item) => { return item.id == id });`
  * Uses `.find()` to locate the single tour object with a matching ID.
* **Line 21**: `res.json(onePack);`
  * Sends the found tour object as a JSON response.
* **Lines 24–26**: `app.listen(5000, ...)`
  * Binds the server to port 5000.

---

## Day 05 - HTTP Streams, TCP Packet Chunks & POST Body Assembly

### 📁 File: `Day-05-14_08_2026/app.js`
```javascript
1:  // HTTP POST Request Body Data Handling using Node.js Core http module
2:  
3:  const http = require('http');
4:  
5:  const server = http.createServer((req, res) => {
6:      if (req.url === '/submit' && req.method === 'POST') {
7:          let body = '';
8:  
9:          // Collect incoming data chunks
10:         req.on('data', (chunk) => {
11:             body += chunk;
12:         });
13: 
14:         // Processing finished
15:         req.on('end', () => {
16:             console.log('Received POST Data:', body);
17:             res.writeHead(200, { 'Content-Type': 'application/json' });
18:             res.end(JSON.stringify({ message: 'Data received successfully', data: body }));
19:         });
20:     } else {
21:         res.writeHead(404, { 'Content-Type': 'application/json' });
22:         res.end(JSON.stringify({ error: 'Route not found' }));
23:     }
24: });
25: 
26: const PORT = process.env.PORT || 8080;
27: 
28: server.listen(PORT, () => {
29:     console.log(`Server is running on port ${PORT}`);
30: });
```

### 🔍 Line-by-Line Explanation:
* **Line 6**: `if (req.url === '/submit' && req.method === 'POST') {`
  * Checks both URL path (`/submit`) and HTTP verb (`POST`).
* **Line 7**: `let body = '';`
  * Allocates a string buffer variable to accumulate data packets.
* **Lines 10–12**: `req.on('data', (chunk) => { body += chunk; });`
  * **Stream Event (`data`)**: Fired whenever a TCP chunk arrives from the client. Each chunk is appended to `body`.
* **Lines 15–19**: `req.on('end', () => { ... });`
  * **Stream Event (`end`)**: Fired when the entire payload transmission finishes.
  * Sends `200 OK` header and returns a JSON payload confirming receipt of the data.
* **Lines 20–23**: Fallback `404 Not Found` for any other route or HTTP method.
* **Line 26**: `const PORT = process.env.PORT || 8080;`
  * Fallback idiom: Uses environment variable `PORT` if set; otherwise defaults to `8080`.

---

## Day 06 - Advanced Route Handling, Case Insensitivity & Status Codes

### 📁 File: `Day-06-17_08_2026/index.js`
```javascript
1:  const express = require('express');
2:  const app = express();
3:  
4:  const packages = require('./data/tour');
5:  
6:  app.get('/', (req, res) => {
7:      res.send("Welcome to Tour Packages API!");
8:  });
9:  
10: app.get("/packages", (req, res) => {
11:     const des = req.query.des;
12:     if (!des) {
13:         return res.json(packages);
14:     }
15:     const result = packages.filter(
16:         (item) => item.destination.toLowerCase() === des.toLowerCase()
17:     );
18:     res.json(result);
19: });
20: 
21: app.get("/packages/:id", (req, res) => {
22:     const id = Number(req.params.id);
23:     const onePack = packages.find(item => item.id === id);
24:     if (!onePack) {
25:         return res.status(404).json({ error: "Package not found" });
26:     }
27:     res.json(onePack);
28: });
29: 
30: const PORT = 3000;
31: app.listen(PORT, () => {
32:     console.log(`Server running on port ${PORT}`);
33: });
```

### 🔍 Line-by-Line Explanation:
* **Line 11**: `const des = req.query.des;`
  * Extracts query parameter `des` (e.g. `/packages?des=goa`).
* **Line 13**: `return res.json(packages);`
  * `return` ensures execution stops immediately so subsequent filtering code doesn't run.
* **Lines 15–17**: `item.destination.toLowerCase() === des.toLowerCase()`
  * Converts both stored destination string and incoming query string to lowercase, achieving robust case-insensitive filtering (`goa`, `Goa`, `GOA` all match!).
* **Lines 24–26**: `if (!onePack) { return res.status(404).json({ error: "Package not found" }); }`
  * **Explicit Error Status**: If `.find()` returns `undefined`, sets HTTP status `404 Not Found` with a structured error object.

---

## Day 07 - MVC Architecture Foundation

### 📁 File 1: Model (`Day-07-20_08_2026/model/tourModel.js`)
```javascript
1:  const fs = require('fs');
2:  const path = require('path');
3:  
4:  const tourFilePath = path.join(__dirname, '../data/tour.json');
5:  
6:  const getAll = () => {
7:      const data = fs.readFileSync(tourFilePath, 'utf-8');
8:      return JSON.parse(data);
9:  };
10: 
11: const getById = (id) => {
12:     const data = fs.readFileSync(tourFilePath, 'utf-8');
13:     const tours = JSON.parse(data);
14:     return tours.find(t => t.id === id);
15: };
16: 
17: module.exports = {
18:     getAll,
19:     getById
20: };
```

### 🔍 Line-by-Line Explanation:
* **Line 4**: `const tourFilePath = path.join(__dirname, '../data/tour.json');`
  * Resolves absolute path to `tour.json` by stepping up (`..`) from the `model/` folder into `data/`.
* **Lines 6–9 (`getAll`)**:
  * Reads the entire JSON file synchronously as a UTF-8 text string.
  * `JSON.parse(data)` deserializes the text string into a native JavaScript array of objects and returns it.
* **Lines 11–15 (`getById`)**:
  * Reads and parses data, then executes `.find(t => t.id === id)` to return the single matching tour object.
* **Lines 17–20**: Exports `getAll` and `getById` functions for use by the Controller.

---

### 📁 File 2: Controller (`Day-07-20_08_2026/controller/tourController.js`)
```javascript
1:  const tourModel = require('../model/tourModel');
2:  
3:  const getAllTour = (req, res) => {
4:      const tours = tourModel.getAll();
5:      res.json(tours);
6:  };
7:  
8:  const getTourById = (req, res) => {
9:      const id = parseInt(req.params.id, 10);
10:     const tour = tourModel.getById(id);
11:     if (tour) {
12:         res.status(200).json(tour);
13:     } else {
14:         res.status(404).json({ message: 'Tour not found' });
15:     }
16: };
17: 
18: module.exports = {
19:     getAllTour,
20:     getTourById
21: };
```

### 🔍 Line-by-Line Explanation:
* **Line 1**: `const tourModel = require('../model/tourModel');`
  * Imports the Model layer functions.
* **Lines 3–6 (`getAllTour`)**:
  * Calls `tourModel.getAll()` to retrieve data and sends it as a JSON response via `res.json()`.
* **Lines 8–16 (`getTourById`)**:
  * `parseInt(req.params.id, 10)`: Parses the `:id` parameter to base-10 integer.
  * Calls `tourModel.getById(id)`.
  * If found, returns `200 OK` with the tour object; if not found, returns `404 Not Found` with `{ message: 'Tour not found' }`.

---

### 📁 File 3: Router (`Day-07-20_08_2026/route/tourRouter.js`)
```javascript
1: const express = require('express');
2: const router = express.Router();
3: const tourController = require('../controller/tourController');
4: 
5: router.get('/', tourController.getAllTour);
6: router.get('/:id', tourController.getTourById);
7: 
8: module.exports = router;
```

### 🔍 Line-by-Line Explanation:
* **Line 2**: `const router = express.Router();`
  * Creates an isolated, modular mini Express router.
* **Line 5**: `router.get('/', tourController.getAllTour);`
  * Maps `GET /` to the controller's `getAllTour` function.
* **Line 6**: `router.get('/:id', tourController.getTourById);`
  * Maps `GET /:id` to the controller's `getTourById` function.

---

### 📁 File 4: Server Entry (`Day-07-20_08_2026/index.js`)
```javascript
1:  const express = require('express');
2:  const app = express();
3:  const tourRouter = require('./route/tourRouter');
4:  
5:  app.use(express.json());
6:  app.use('/tours', tourRouter);
7:  
8:  const PORT = 3000;
9:  app.listen(PORT, () => {
10:     console.log(`Server running on port ${PORT}`);
11: });
```

### 🔍 Line-by-Line Explanation:
* **Line 5**: `app.use(express.json());`
  * Mounts built-in JSON parsing middleware.
* **Line 6**: `app.use('/tours', tourRouter);`
  * **Router Mount**: All routes in `tourRouter` inherit the base path `/tours`. (`GET /` becomes `GET /tours`, `GET /:id` becomes `GET /tours/:id`).

---

## Day 08 - Full RESTful CRUD Operations with JSON Persistence

### 📁 File 1: Model (`Day-08-21_08_2026/model/tourModel.js`)
```javascript
1:  const fs = require("fs");
2:  const path = require("path");
3:  
4:  const tourFilePath = path.join(__dirname, '../data/tour.json');
5:  
6:  const getAll = () => {
7:      const data = fs.readFileSync(tourFilePath, 'utf-8');
8:      return JSON.parse(data);
9:  };
10: 
11: const getById = (id) => {
12:     const data = fs.readFileSync(tourFilePath, 'utf-8');
13:     const packages = JSON.parse(data);
14:     return packages.find(pkg => pkg.id === id);
15: };
16: 
17: // CREATE
18: const save = (tour) => {
19:     const data = fs.readFileSync(tourFilePath, 'utf-8');
20:     const packages = JSON.parse(data);
21:     packages.push(tour);
22:     fs.writeFileSync(tourFilePath, JSON.stringify(packages, null, 2), 'utf-8');
23: };
24: 
25: // UPDATE
26: const update = (id, updatedTour) => {
27:     const data = fs.readFileSync(tourFilePath, 'utf-8');
28:     const packages = JSON.parse(data);
29:     const index = packages.findIndex(pkg => pkg.id === id);
30:     if (index !== -1) {
31:         packages[index] = { ...packages[index], ...updatedTour };
32:         fs.writeFileSync(tourFilePath, JSON.stringify(packages, null, 2), 'utf-8');
33:     }
34: };
35: 
36: // DELETE
37: const deleteTour = (id) => {
38:     const data = fs.readFileSync(tourFilePath, 'utf-8');
39:     const packages = JSON.parse(data);
40:     const updatedPackages = packages.filter(pkg => pkg.id !== id);
41:     fs.writeFileSync(tourFilePath, JSON.stringify(updatedPackages, null, 2), 'utf-8');
42: };
43: 
44: module.exports = { getAll, getById, save, update, deleteTour };
```

### 🔍 Line-by-Line Explanation:
* **Lines 18–23 (`save - CREATE`)**:
  * Reads and parses `tour.json`.
  * `packages.push(tour)`: Appends new tour object to the array.
  * `fs.writeFileSync(..., JSON.stringify(packages, null, 2), ...)`: Overwrites disk file with updated JSON formatted with 2-space indentation.
* **Lines 26–34 (`update - UPDATE`)**:
  * `const index = packages.findIndex(pkg => pkg.id === id)`: Finds the array index of the tour.
  * `if (index !== -1)`: Checks if the tour exists.
  * `packages[index] = { ...packages[index], ...updatedTour }`: **Object Spread Operator** merges existing properties with new properties from `updatedTour`.
  * Saves updated array to disk.
* **Lines 37–42 (`deleteTour - DELETE`)**:
  * `packages.filter(pkg => pkg.id !== id)`: Creates a new array excluding the tour whose ID matches.
  * Saves filtered array back to disk.

---

### 📁 File 2: Controller (`Day-08-21_08_2026/controller/tourController.js`)
```javascript
1:  const tourModel = require('../model/tourModel');
2:  
3:  const getAllTour = (req, res) => {
4:      const tours = tourModel.getAll();
5:      res.json(tours);
6:  };
7:  
8:  const getTourById = (req, res) => {
9:      const id = parseInt(req.params.id, 10);
10:     const tour = tourModel.getById(id);
11:     if (tour) {
12:         res.status(200).json(tour);
13:     } else {
14:         res.status(404).json({ message: 'Tour not found' });
15:     }
16: };
17: 
18: const createTour = (req, res) => {
19:     const newTour = req.body;
20:     tourModel.save(newTour);
21:     res.status(201).json(newTour);
22: };
23: 
24: const updateTour = (req, res) => {
25:     const id = parseInt(req.params.id, 10);
26:     const updatedData = req.body;
27:     tourModel.update(id, updatedData);
28:     res.status(200).json({ message: "Tour updated successfully" });
29: };
30: 
31: const deleteTourById = (req, res) => {
32:     const id = parseInt(req.params.id, 10);
33:     tourModel.deleteTour(id);
34:     res.status(200).json({ message: "Tour deleted successfully" });
35: };
36: 
37: module.exports = { getAllTour, getTourById, createTour, updateTour, deleteTourById };
```

### 🔍 Line-by-Line Explanation:
* **Lines 18–22 (`createTour`)**:
  * Reads `req.body` (parsed by `express.json()`).
  * Calls `tourModel.save(newTour)`.
  * Returns HTTP status `201 Created` with the newly created tour object.
* **Lines 24–29 (`updateTour`)**:
  * Extracts `:id` and updated fields from `req.body`.
  * Calls `tourModel.update(id, updatedData)`.
  * Returns HTTP status `200 OK` with confirmation message.
* **Lines 31–35 (`deleteTourById`)**:
  * Extracts `:id`. Calls `tourModel.deleteTour(id)`.
  * Returns HTTP status `200 OK` with confirmation message.

---

### 📁 File 3: Router (`Day-08-21_08_2026/route/tourRouter.js`)
```javascript
1:  const express = require('express');
2:  const router = express.Router();
3:  const tourController = require('../controller/tourController');
4:  
5:  router.get('/', tourController.getAllTour);
6:  router.get('/:id', tourController.getTourById);
7:  router.post('/', tourController.createTour);
8:  router.put('/:id', tourController.updateTour);
9:  router.delete('/:id', tourController.deleteTourById);
10: 
11: module.exports = router;
```

### 🔍 Line-by-Line Explanation:
* Maps the 5 RESTful operations:
  * `router.get('/')` → Read All
  * `router.get('/:id')` → Read One
  * `router.post('/')` → Create
  * `router.put('/:id')` → Update
  * `router.delete('/:id')` → Delete

---

## Day 09 - Scalable Multi-Resource MVC Architecture (Tours + Users)

### 📁 File 1: Server Entry (`Day-09-28_08_2026/index.js`)
```javascript
1:  const express = require('express');
2:  const app = express();
3:  
4:  const tourRouter = require('./route/tourRouter');
5:  const userRouter = require('./route/userRouter');
6:  
7:  app.use(express.json());
8:  
9:  app.use('/tours', tourRouter);
10: app.use('/users', userRouter);
11: 
12: const PORT = 3000;
13: app.listen(PORT, () => {
14:     console.log(`Server running on port ${PORT}`);
15: });
```

### 🔍 Line-by-Line Explanation:
* **Lines 4–5**: Imports both independent resource routers (`tourRouter` and `userRouter`).
* **Line 7**: `app.use(express.json());` parses JSON request bodies for all routes.
* **Lines 9–10**:
  * `app.use('/tours', tourRouter)` delegates all `/tours/*` traffic to `tourRouter`.
  * `app.use('/users', userRouter)` delegates all `/users/*` traffic to `userRouter`.

---

### 📁 File 2: User Model (`Day-09-28_08_2026/model/userModel.js`)
```javascript
1:  const fs = require('fs');
2:  const path = require('path');
3:  
4:  const userFilePath = path.join(__dirname, '../data/user.json');
5:  
6:  const getAll = () => {
7:      const data = fs.readFileSync(userFilePath, 'utf-8');
8:      return JSON.parse(data);
9:  };
10: 
11: const getById = (id) => {
12:     const data = fs.readFileSync(userFilePath, 'utf-8');
13:     const users = JSON.parse(data);
14:     return users.find(u => u.id === id);
15: };
16: 
17: const save = (user) => {
18:     const data = fs.readFileSync(userFilePath, 'utf-8');
19:     const users = JSON.parse(data);
20:     users.push(user);
21:     fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), 'utf-8');
22: };
23: 
24: const update = (id, updatedUser) => {
25:     const data = fs.readFileSync(userFilePath, 'utf-8');
26:     const users = JSON.parse(data);
27:     const index = users.findIndex(u => u.id === id);
28:     if (index !== -1) {
29:         users[index] = { ...users[index], ...updatedUser };
30:         fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), 'utf-8');
31:         return true;
32:     }
33:     return false;
34: };
35: 
36: const deleteUser = (id) => {
37:     const data = fs.readFileSync(userFilePath, 'utf-8');
38:     const users = JSON.parse(data);
39:     const updatedUsers = users.filter(u => u.id !== id);
40:     fs.writeFileSync(userFilePath, JSON.stringify(updatedUsers, null, 2), 'utf-8');
41: };
42: 
43: module.exports = { getAll, getById, save, update, deleteUser };
```

---

### 📁 File 3: User Controller (`Day-09-28_08_2026/controller/userController.js`)
```javascript
1:  const userModel = require('../model/userModel');
2:  
3:  const getAllUser = (req, res) => {
4:      const users = userModel.getAll();
5:      res.json(users);
6:  };
7:  
8:  const getUserById = (req, res) => {
9:      const id = parseInt(req.params.id, 10);
10:     const user = userModel.getById(id);
11:     if (user) {
12:         res.status(200).json(user);
13:     } else {
14:         res.status(404).json({ message: 'User not found' });
15:     }
16: };
17: 
18: const createUser = (req, res) => {
19:     const newUser = req.body;
20:     userModel.save(newUser);
21:     res.status(201).json(newUser);
22: };
23: 
24: const updateUser = (req, res) => {
25:     const id = parseInt(req.params.id, 10);
26:     const updatedData = req.body;
27:     userModel.update(id, updatedData);
28:     res.status(200).json({ message: "User updated successfully" });
29: };
30: 
31: const deleteUserById = (req, res) => {
32:     const id = parseInt(req.params.id, 10);
33:     userModel.deleteUser(id);
34:     res.status(200).json({ message: "User deleted successfully" });
35: };
36: 
37: module.exports = { getAllUser, getUserById, createUser, updateUser, deleteUserById };
```

---

### 📁 File 4: User Router (`Day-09-28_08_2026/route/userRouter.js`)
```javascript
1:  const express = require('express');
2:  const router = express.Router();
3:  const userController = require('../controller/userController');
4:  
5:  router.get('/', userController.getAllUser);
6:  router.get('/:id', userController.getUserById);
7:  router.post('/', userController.createUser);
8:  router.put('/:id', userController.updateUser);
9:  router.delete('/:id', userController.deleteUserById);
10: 
11: module.exports = router;
```

---

# 🧠 Core Viva Concepts & Theory Cheat Sheet

### 1. Node.js Fundamentals & Architecture
* **What is Node.js?**
  * Node.js is an open-source, cross-platform **JavaScript runtime environment** that executes JavaScript code outside a web browser.
  * It is built on Google Chrome's **V8 JavaScript Engine** (which compiles JavaScript directly into native machine code).
* **Architecture Highlights**:
  * **Single-Threaded Event Loop**: Node.js runs user JavaScript code on a single main thread.
  * **Non-Blocking Asynchronous I/O**: Operations that take time (file reads, network calls, database queries) are offloaded.
  * **`libuv`**: A multi-platform C library that handles the event loop, asynchronous I/O, and provides a **thread pool** (4 worker threads by default) for CPU-heavy or synchronous tasks (file system `fs`, cryptographic operations, DNS lookup).

### 2. CommonJS vs ES6 Modules
| Feature | CommonJS (CJS) | ES6 Modules (ESM) |
|---|---|---|
| **Syntax** | `const pkg = require('./pkg')` / `module.exports = ...` | `import pkg from './pkg'` / `export default ...` |
| **Loading Mechanism** | Synchronous, loaded at **runtime** | Asynchronous, parsed at **compile time** (static) |
| **Node.js Default** | Default module system in Node.js | Requires `"type": "module"` in `package.json` or `.mjs` |
| **Global Path Variables**| Provides `__dirname` and `__filename` | `__dirname` is NOT available (use `import.meta.url`) |

### 3. Route Parameters vs Query Parameters
| Concept | Syntax Example | Accessed via | Purpose | Typical Use Case |
|---|---|---|---|---|
| **Route Parameters** | `/packages/:id` | `req.params.id` | Identifies a **specific single resource** | Fetching/updating a user by ID (`/users/12`) |
| **Query Parameters** | `/packages?destination=Goa` | `req.query.destination` | **Filters, sorts, or paginates** a collection | Search queries, filters (`?page=2&sort=desc`) |

### 4. MVC Architecture (Model-View-Controller)
* **Router (`route/`)**: Maps endpoints and HTTP verbs to specific controller functions (`router.get('/:id', tourController.getTourById)`).
* **Controller (`controller/`)**: Handles application business logic. Reads `req`, calls Model methods, and sends HTTP responses (`res.status(200).json(...)`).
* **Model (`model/`)**: Responsible solely for **data access and persistence**. Directly interfaces with `tour.json` or `user.json` using `fs.readFileSync` and `fs.writeFileSync`.
* **View**: In our REST API, the "View" is the serialized JSON data payload returned to the client.

### 5. RESTful APIs & HTTP Status Codes
* `200 OK`: Request succeeded.
* `201 Created`: Resource successfully created (used on `POST`).
* `204 No Content`: Request succeeded, no body returned (standard for `DELETE`).
* `400 Bad Request`: Client error (e.g., missing required fields in POST body).
* `404 Not Found`: Requested route or resource ID does not exist.
* `500 Internal Server Error`: Server-side unhandled exception or crash.

---

# 🎯 Top 25 Examiner Viva Questions & Model Answers

### Q1. What is Node.js and how does it differ from JavaScript in the browser?
* **Answer**: Node.js is a runtime environment that executes JavaScript outside the browser using Google Chrome's V8 engine. In the browser, JavaScript interacts with the DOM (`window`, `document`) and handles UI events. In Node.js, there is no DOM; instead, it provides access to the operating system, file system (`fs`), network sockets (`http`), and system processes (`process`).

### Q2. Is Node.js single-threaded? How does it handle concurrency?
* **Answer**: Yes, the execution of user JavaScript code is single-threaded (one call stack). However, Node.js uses **`libuv`**, which maintains a multi-threaded **thread pool** (4 threads by default) for expensive operations (file I/O, crypto, DNS). When an I/O task is requested, it is offloaded to the thread pool or OS kernel, and Node registers a callback, allowing the main thread to immediately serve other incoming requests.

### Q3. What is the Event Loop?
* **Answer**: The Event Loop is an infinite loop that constantly checks if the call stack is empty. If the stack is empty, it picks up pending callbacks from the Event/Callback Queue (such as completed network requests or file reads) and pushes them onto the Call Stack to be executed.

### Q4. What is the difference between `fs.readFileSync` and `fs.readFile`?
* **Answer**: `fs.readFileSync` is synchronous and **blocks** the main JavaScript thread until the file is completely read from the disk. `fs.readFile` is asynchronous; it offloads the file read operation to `libuv` and invokes a callback when finished, allowing other requests to be processed in the meantime.

### Q5. What is the difference between CommonJS and ES6 Modules?
* **Answer**:
  1. CommonJS uses `require()` and `module.exports`, which loads modules **synchronously at runtime**. It is the native standard for Node.js.
  2. ES6 Modules use `import` and `export`, which are **statically analyzed at compile-time**. ESM requires `"type": "module"` in `package.json`.
  3. CommonJS provides `__dirname` and `__filename`; ES6 modules do not.

### Q6. What is `process.env` and why do we use `dotenv`?
* **Answer**: `process.env` is an object containing system environment variables. We use `dotenv` to load key-value pairs from a local `.env` file into `process.env`. This allows us to keep sensitive data (port numbers, database credentials, API secrets) out of source control (`.gitignore`).

### Q7. Why do we need `path.join(__dirname, ...)` instead of writing `'../data/tour.json'`?
* **Answer**: Operating systems format directory separators differently (Windows uses `\`, whereas POSIX/Linux/macOS uses `/`). `path.join()` automatically uses the correct OS-specific separator and resolves relative segments (`..`), preventing file lookup bugs when moving between Windows and Linux servers.

### Q8. What does `res.writeHead()` do in the native `http` module?
* **Answer**: It sends the HTTP response status code (e.g., `200`, `404`) and headers (such as `'Content-Type': 'text/html'`) to the client as the first part of the HTTP response message.

### Q9. What happens if you forget to call `res.end()` in native Node.js?
* **Answer**: The HTTP response stream will never close. The client browser or API consumer will keep waiting and spinning indefinitely until the connection times out.

### Q10. What is a Stream and what is a Buffer in Node.js?
* **Answer**: A **Buffer** is a chunk of raw binary memory allocated outside the V8 heap. A **Stream** is an interface for processing continuous data sequentially in chunks over time, rather than loading an entire file or request body into RAM at once.

### Q11. Explain how POST data was handled in Day 5 using native Node.
* **Answer**: The incoming request `req` is a Readable Stream. As data packets arrive over the TCP connection, Node fires the `'data'` event (`req.on('data', chunk => body += chunk)`). When all data has arrived, Node fires the `'end'` event (`req.on('end', () => ...)`), where we parse the assembled `body` string into JSON.

### Q12. What is Express.js and what are its advantages over native Node?
* **Answer**: Express is a fast, minimalist web framework built on top of Node's native `http` module. It provides:
  1. Convenient route handling (`app.get`, `app.post`).
  2. A middleware pipeline.
  3. Automatic content-type negotiation and helpers (`res.json()`, `res.status()`).
  4. Dynamic URL parameter parsing (`req.params`, `req.query`).

### Q13. What is Middleware in Express?
* **Answer**: A middleware function is a function that has access to `req`, `res`, and `next`. It intercepts incoming requests, performs operations (such as authentication, logging, body parsing), and either terminates the request with a response or calls `next()` to pass control to the subsequent middleware.

### Q14. What does `app.use(express.json())` do?
* **Answer**: It is a built-in Express middleware that intercepts incoming HTTP requests with `Content-Type: application/json`, streams the chunks, parses the raw JSON string into a native JavaScript object, and attaches it to `req.body`.

### Q15. What is the difference between `req.params` and `req.query`?
* **Answer**:
  * `req.params`: Captures values defined as path placeholders in the URL pattern (e.g., `/packages/:id` → `req.params.id`). Used to identify a specific entity.
  * `req.query`: Captures optional key-value query parameters appended to the URL after a `?` (e.g., `/packages?destination=Goa` → `req.query.destination`). Used for filtering, sorting, or pagination.

### Q16. Why did we use `parseInt(req.params.id, 10)` or `Number(req.params.id)`?
* **Answer**: Values extracted from `req.params` or `req.query` are always of type **String**. Because entity IDs in our JSON datasets are numbers (`id: 1`), strict equality comparison (`===`) would fail unless we explicitly cast the route parameter string to a number.

### Q17. What is MVC Architecture?
* **Answer**: Model-View-Controller is an architectural pattern that separates an application into three interconnected parts:
  * **Model**: Handles data structure, storage, and persistence logic (`tourModel.js`).
  * **View**: The presentation layer; in our REST API, this is the JSON data returned.
  * **Controller**: Handles business logic, reads `req`, calls Model methods, and sends `res`.

### Q18. Why do we separate Routes into their own files (`tourRouter.js`)?
* **Answer**: To maintain modularity and code organization. Instead of having dozens of endpoints in `index.js`, we isolate route declarations into mini-routers (`express.Router()`) and mount them under base paths (`app.use('/tours', tourRouter)`).

### Q19. What is the difference between `Array.prototype.find()` and `Array.prototype.filter()`?
* **Answer**:
  * `.find()` returns the **single first element** that matches the predicate condition (or `undefined`). We used this to fetch a single tour by ID.
  * `.filter()` returns a **new array** containing **all elements** that match the predicate condition. We used this for destination searching and deleting items.

### Q20. How does the `update` function work in our Day 8 / Day 9 Model?
* **Answer**:
  1. Reads and parses `tour.json`.
  2. Uses `findIndex()` to locate the index of the item matching the requested ID.
  3. Uses the object spread operator (`{ ...packages[index], ...updatedTour }`) to overwrite existing properties with the updated fields while keeping unchanged properties intact.
  4. Writes the updated array back to disk with `fs.writeFileSync`.

### Q21. How did we implement DELETE in the Model without using a database query?
* **Answer**: We read the existing array, filtered it to exclude the item whose ID matches the requested ID (`packages.filter(pkg => pkg.id !== id)`), and wrote the resulting array back to the JSON file using `fs.writeFileSync()`.

### Q22. What does `JSON.stringify(packages, null, 2)` do?
* **Answer**: It serializes the JavaScript array into a JSON string. The `null` argument is an optional replacer function, and `2` specifies the number of indentation spaces for pretty-printing the JSON file, keeping it formatted and readable on disk.

### Q23. What are the common HTTP status codes used in our project?
* **Answer**:
  * `200 OK`: Successful read or update.
  * `201 Created`: Successful creation of a new tour or user via `POST`.
  * `404 Not Found`: When an invalid route or non-existent entity ID is requested.

### Q24. What is the difference between `PUT` and `PATCH` in REST?
* **Answer**:
  * `PUT`: Replaces the **entire resource** with the new payload sent in the request.
  * `PATCH`: Modifies **only specific fields** of the existing resource, leaving unspecified fields unchanged.

### Q25. If our application needed to scale from storing data in JSON files to MongoDB, what parts of our MVC codebase would change?
* **Answer**: **Only the Model files (`tourModel.js` and `userModel.js`) would change** to execute Mongoose/MongoDB database queries (`Tour.find()`, `Tour.findByIdAndUpdate()`). The Controllers, Routers, and `index.js` would remain virtually identical because they only call the model's interface (`getAll`, `getById`, `save`, `update`, `deleteTour`). This proves the true value of MVC separation!
