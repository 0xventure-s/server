import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, getProducts, getProductsByID, updateAvailability, updateProduct, deleteProducts } from "./handlers/Products";
import { handleInputErrors } from "./middleware";

export const router = Router();


// Ruta para obtener todos los productos (sin validaciones en este caso)
router.get("/", getProducts);
router.get("/:id", param("id").isInt().withMessage("ID NO VALIDO"), handleInputErrors, getProductsByID);
router.post("/", body("name").notEmpty().withMessage("el producto no puede estar vacio"), handleInputErrors, createProduct);
router.put("/:id", param("id").isInt().withMessage("ID NO VALIDO"), handleInputErrors, updateProduct);
router.patch("/:id", param("id").isInt().withMessage("ID NO VALIDO"), handleInputErrors, updateAvailability);
router.delete("/:id", param("id").isInt().withMessage("ID NO VALIDO"), handleInputErrors, deleteProducts);
