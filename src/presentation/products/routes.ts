import { Router } from "express";
import { ProductController } from "./controller";

export class ProductRoutes{
    static get routes(): Router {

        const router = Router();
        const controller = new ProductController();

        router.get( '/', controller.getProduct );
        router.post( '/', controller.createProduct );

        return router;
    }
}