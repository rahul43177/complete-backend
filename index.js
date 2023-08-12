import http from 'http'
import * as obj from './gfName.js'
import {loveCalculator} from './loveCalculator.js'
import fs from 'fs'
import path from 'path';
import dotenv from 'dotenv'
dotenv.config();
console.log(path.dirname("/home/index.js"))
console.log(loveCalculator())
const { gfName, gfName2, gfName3 } = obj
console.log(gfName)

const home = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end(home)
    }
})

server.listen(process.env.PORT , ()=> {
    console.log("server is running on port 5000")
})

