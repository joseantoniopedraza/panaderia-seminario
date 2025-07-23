"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./api/interface/index"));
const dependencies_1 = require("./api/dependencies");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.listen(port, async () => {
    const dependencies = await (0, dependencies_1.buildDependencies)();
    app.use((0, index_1.default)(dependencies));
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map