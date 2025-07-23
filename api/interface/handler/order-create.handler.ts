import { Response, Request, Router } from "express";
import { Service } from "../../app/order-create";
import { validate } from "../middlewares/validate-req.middleware";
import { body } from "express-validator";
import { OrderModel } from "../../domain/orders";

export const validationRules = () => [
  body("client").isString().notEmpty(),
  body("total").isNumeric().notEmpty(),
  body("products").isArray().notEmpty(),
];

const handler = (service: Service) => async (req: Request, res: Response) => {
  const payload: OrderModel = {
    client: req.body.client,
    total: req.body.total,
    products: req.body.products,
  } as OrderModel;

  const response = await service.create()(payload);
  return res.status(200).send(response);
};

export default (service: Service): Router => {
  const router = Router();

  router.use(validationRules());
  router.use(validate);
  router.use(handler(service));

  return router;
};
