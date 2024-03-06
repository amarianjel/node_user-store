import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../services";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class ProductRoutes{
    static get routes(): Router {

        const router = Router();
        const productService = new ProductService();
        const controller = new ProductController( productService );

        router.get( '/', controller.getProduct );
        router.post( '/', [AuthMiddleware.validateJWT],controller.createProduct );    //*Debe pasar para poder obtener el id del usuario, solo para CREAR

        return router;
    }
}