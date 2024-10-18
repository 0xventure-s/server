import { Request, Response } from "express";
export declare function createProduct(req: Request, res: Response): Promise<void>;
export declare function getProducts(req: Request, res: Response): Promise<void>;
export declare function getProductsByID(req: Request, res: Response): Promise<void>;
export declare function updateProduct(req: Request, res: Response): Promise<void>;
export declare function updateAvailability(req: Request, res: Response): Promise<void>;
export declare function deleteProducts(req: Request, res: Response): Promise<void>;
