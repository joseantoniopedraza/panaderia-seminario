import { Response, Request, Router } from "express";
import { Service } from "../../app/product-create";
import { validate } from "../middlewares/validate-req.middleware";
import { body } from "express-validator";
import { ProductModel } from "../../domain/products";

export const validationRules = () => [
  body("name").isString().notEmpty(),
  body("description").isString().notEmpty(),
  body("price").isNumeric().notEmpty(),
];

export const handler = (service: Service) => async (req: Request, res: Response) => {
  const payload: ProductModel = {
    description: req.body.description,
    name: req.body.name,
    price: req.body.price,
  } as ProductModel;

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
