"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Products_1 = require("./handlers/Products");
const middleware_1 = require("./middleware");
exports.router = (0, express_1.Router)();
// Ruta para obtener todos los productos (sin validaciones en este caso)
exports.router.get("/", Products_1.getProducts);
exports.router.get("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID NO VALIDO"), middleware_1.handleInputErrors, Products_1.getProductsByID);
exports.router.post("/", (0, express_validator_1.body)("name").notEmpty().withMessage("el producto no puede estar vacio"), middleware_1.handleInputErrors, Products_1.createProduct);
exports.router.put("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID NO VALIDO"), middleware_1.handleInputErrors, Products_1.updateProduct);
exports.router.patch("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID NO VALIDO"), middleware_1.handleInputErrors, Products_1.updateAvailability);
exports.router.delete("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID NO VALIDO"), middleware_1.handleInputErrors, Products_1.deleteProducts);
//# sourceMappingURL=router.js.map