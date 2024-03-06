import { Router } from 'express';
import { Authroutes } from './auth/routes';
import { CategoryRoutes } from './category/routes';
import { AuthMiddleware } from './middlewares/auth.middleware';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth', Authroutes.routes );
    router.use('/api/categories', [ AuthMiddleware.validateJWT ],CategoryRoutes.routes );

    return router;
  }
}

