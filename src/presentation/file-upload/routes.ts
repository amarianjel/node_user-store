import { Router } from 'express';
import { FileUploadController } from './controller';


export class FileUploadRoutes {

  static get routes(): Router {

    const router = Router();
    const controller = new FileUploadController(
      // new FileUploadService()
    );

    // router.use( FileUploadMiddleware.containFiles );
    // router.use( TypeMiddleware.validTypes(['users','products','categories']) );

    
    // Definir las rutas
    // api/upload/single/<user|category|product>/
    // api/upload/multiple/<user|category|product>/
    router.get( '/single/:type', controller.uploadFile );
    router.get( '/multiple/:type',controller.uploadMultileFiles );

    return router;
  }
}

