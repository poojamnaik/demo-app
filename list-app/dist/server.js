"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var errorHandler = require("errorhandler");
var fs_1 = require("fs");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
        this.errors();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(express.static(path.join(__dirname, 'list-app')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    };
    Server.prototype.routes = function () {
        this.app.get('/healthz', function (req, res) {
            res.status(200);
            res.send('ok');
        });
        /**
         * Front-end routes with authentication
         */
        this.app.all('*', function (req, res, next) {
            res.send(fs_1.readFileSync(path
                .join(__dirname, 'list-app/index.html'), 'utf-8')
                .replace('<%= signed_request %>', req.body['signed_request'] || req.query['signed_request']));
        });
    };
    Server.prototype.errors = function () {
        if (process.env.NODE_ENV === 'development') {
            this.app.use(errorHandler());
        }
        process.on('uncaughtException', function (err) {
            console.error(err);
        });
        process.on('unhandledRejection', function (err) {
            console.error(err);
        });
    };
    return Server;
}());
exports.Server = Server;
