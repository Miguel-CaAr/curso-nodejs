import { Request, Response } from "express";

const todos = [
  { id: 1, text: "Buy milk", createdAt: new Date() },
  { id: 2, text: "Buy bread", createdAt: null },
  { id: 3, text: "Buy butter", createdAt: new Date() },
];

export class TodosController {
  //* DI
  contructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  };
}
