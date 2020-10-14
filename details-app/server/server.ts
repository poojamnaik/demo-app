import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as errorHandler from 'errorhandler';
import { Application, Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs';

export class Server {
  public app: Application;

  public static bootstrap(): Server {
    return new Server();
  }
   
  constructor() {
    this.app = express();

    this.config();

    this.routes();

    this.errors();
    
  }

  public config() {
    this.app.use(express.static(path.join(__dirname, 'details-app')));

    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

  }

  public routes() {

    this.app.get('/healthz', (req, res) => {
      res.status(200);
      res.send('ok');
    });

    /**
     * Front-end routes with authentication
     */
    this.app.all('*', (req: Request, res: Response, next: NextFunction) => {
      res.send(
        readFileSync(
          path
            .join(__dirname, 'details-app/index.html'),
          'utf-8')
          .replace('<%= signed_request %>', req.body['signed_request'] || req.query['signed_request'])
      );
    });

  }

  public errors() {
    if (process.env.NODE_ENV === 'development') {
      this.app.use(errorHandler());
    }

    process.on('uncaughtException', (err) => {
      console.error(err);
    });

    process.on('unhandledRejection', (err) => {
      console.error(err);
    });
  }
}
