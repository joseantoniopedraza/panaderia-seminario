import { Response, Request, Router } from "express";
import { Service } from "../../app/products-list";

const handler = (service: Service) => async (req: Request, res: Response) => {
  const response = await service.findAll()();
  return res.status(200).send(response);
};

export default (service: Service): Router => {
  const router = Router();

  router.use(handler(service));

  return router;
};
