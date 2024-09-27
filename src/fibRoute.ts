// Endpoint for querying the fibonacci numbers
import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response) => {
  const numParam = req.params.num;

  if (numParam && !isNaN(Number(numParam))) {
    const num: number = parseInt(numParam, 10);
    const fibN: number = fibonacci(num);
    let result = `fibonacci(${num}) is ${fibN}`;

    if (fibN < 0) {
      result = `fibonacci(${num}) is undefined`;
    }

    res.status(200).send(result);
  } else {
    res.status(400).send({ result: "num no es un numero" });
  }
};
