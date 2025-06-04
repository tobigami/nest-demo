import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import chalk from 'chalk';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip, headers } = req;
    const userAgent = headers['user-agent'] || '';
    const contentType = headers['content-type'] || '';
    const requestId = headers['x-request-id'] || this.generateRequestId();

    const startTime = Date.now();

    // Log request
    console.log(
      chalk.green(`[${new Date().toISOString()}]`) +
        chalk.blue(` [${requestId}]`) +
        chalk.yellow(` [${method}]`) +
        chalk.cyan(` ${originalUrl}`) +
        chalk.gray(` - IP: ${ip}`) +
        (contentType ? chalk.gray(` - Content-Type: ${contentType}`) : '') +
        chalk.gray(` - User-Agent: ${this.truncate(userAgent, 50)}`),
    );

    // Log request body if present and not too large
    if (req.body && Object.keys(req.body).length > 0) {
      try {
        const bodyStr = JSON.stringify(req.body);
        if (bodyStr.length < 500) {
          console.log(chalk.gray(`Request Body: ${bodyStr}`));
        } else {
          console.log(
            chalk.gray(
              `Request Body: [Too large to display - ${bodyStr.length} chars]`,
            ),
          );
        }
      } catch (err) {
        // Ignore body logging errors
      }
    }

    // Log response
    res.on('finish', () => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      const { statusCode } = res;

      const statusColor =
        statusCode < 300
          ? chalk.green
          : statusCode < 400
            ? chalk.blue
            : statusCode < 500
              ? chalk.yellow
              : chalk.red;

      console.log(
        chalk.green(`[${new Date().toISOString()}]`) +
          chalk.blue(` [${requestId}]`) +
          chalk.yellow(` [${method}]`) +
          chalk.cyan(` ${originalUrl}`) +
          statusColor(` - Status: ${statusCode}`) +
          chalk.white(` - Time: ${responseTime}ms`),
      );
    });

    next();
  }

  private generateRequestId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private truncate(str: string, length: number): string {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  }
}
