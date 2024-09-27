// Endpoint for querying the fibonacci numbers
import { Request, Response } from 'express';
const fibonacci = require("./fib");

export default (req: Request, res: Response) => {
  if(req.params && req.params.num && typeof req.params.num === "number"){
    const { num } = req.params;

    const fibN = fibonacci(parseInt(num));
    let result = `fibonacci(${num}) is ${fibN}`;

    if (fibN < 0) {
      result = `fibonacci(${num}) is undefined`;
    }

    res.status(200).send(result);
  } else {
    res.status(400).send({result: "num no es un numero"})
  }
};
