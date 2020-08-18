import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

/**
 * SetupServer  extends Server
 */
export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  /**
   * init
   * :void
   */
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  /**
   * setupExpress
   * :void
   */
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  /**
   * setupControllers
   * :void
   */
  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
