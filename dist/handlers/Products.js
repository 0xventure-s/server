"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.getProductsByID = getProductsByID;
exports.updateProduct = updateProduct;
exports.updateAvailability = updateAvailability;
exports.deleteProducts = deleteProducts;
const Products_models_1 = __importDefault(require("../models/Products-models"));
async function createProduct(req, res) {
    const product = await Products_models_1.default.create(req.body);
    res.json({ data: product });
}
async function getProducts(req, res) {
    const product = await Products_models_1.default.findAll();
    res.json({ data: product });
}
async function getProductsByID(req, res) {
    const { id } = req.params;
    const product = await Products_models_1.default.findByPk(id);
    res.json({ data: product });
}
async function updateProduct(req, res) {
    const { id } = req.params;
    const product = await Products_models_1.default.findByPk(id);
    await product.update(req.body);
    await product.save();
    res.json({ data: product });
}
async function updateAvailability(req, res) {
    const { id } = req.params;
    const product = await Products_models_1.default.findByPk(id);
    //Actualizar
    product.availability = !product.dataValues.availability;
    await product.save();
    console.log(req.body);
    res.json({ data: product });
}
;
async function deleteProducts(req, res) {
    const { id } = req.params;
    const product = await Products_models_1.default.findByPk(id);
    await product.destroy();
    res.json({ message: "Cagaste" });
}
//# sourceMappingURL=Products.js.map