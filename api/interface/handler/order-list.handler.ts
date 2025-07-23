import { Response, Request, Router } from "express";
import { Service } from "../../app/order-list";

export const handler = (service: Service) => async (req: Request, res: Response) => {
  const id = Number(req.query.id) || 0;

  const response = await service.findAll()(id);
  return res.status(200).send(response);
};

export default (service: Service): Router => {
  const router = Router();

  router.use(handler(service));

  return router;
};
