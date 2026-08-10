// const cities = require('./data/mydata');
// // console.log(cities);
// const chalk = require('chalk');
// console.log(chalk.blue('hello,world'))
// import chalk from 'chalk';
// console.log(chalk.yellowBright('hello,world'))

// const os = require('os')
// const userinfo = os.userInfo();
// const platform = os.platform();
// const architecture = os.arch();
// const uptime = os.uptime();
// console.log(userinfo);
// console.log(platform);
// console.log(architecture);
// console.log(uptime);

// const fs = require('fs');
// fs.writeFileSync('data/data.txt','hello world',);


// const path = require('path');
// const filePath = path.join(__dirname,'data','data.txt',);
// console.log(filePath)

// const process =require('process');
// console.log(process.argv[2])

require('dotenv').config();
const http = require('http');

// Check what PORT is coming from .env
console.log("PORT from .env:", process.env.PORT);

const Port = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
    console.log("Request received!");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<h1>Hello, World!</h1>');
    res.write('<p>This is a simple HTTP server.</p>');

    res.end();
});

// Start the server
server.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
