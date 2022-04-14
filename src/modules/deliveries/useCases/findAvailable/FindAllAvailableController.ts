import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAvailableUseCase = new FindAllAvailableUseCase();

    const deliveries = await findAvailableUseCase.execute();

    return response.json(deliveries);
  }
}
