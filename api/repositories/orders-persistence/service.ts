import { dependencies, Service } from "./entities";
import { create } from "./functions/create";
import { findAll } from "./functions/find-all";

export function newService(d: dependencies): Service {
  return {
    d,
    create,
    findAll
  };
}
