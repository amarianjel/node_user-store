import { Response, Request } from 'express';
import { CustomError } from '../../domain';


export class FileUploadController {

  // DI
  constructor(
    //private readonly fileUploadService: FileUploadService,
  ) { }


  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json( { error: error.message } );
    }

    console.log( `${ error }` );
    return res.status( 500 ).json( { error: 'Internal server error' } );
  };


  uploadFile = ( req: Request, res: Response ) => {
    console.log({files: req.files})
    res.json( 'uploadedFile');

    // const type = req.params.type;
    // const file = req.body.files.at(0) as UploadedFile;

    
    // this.fileUploadService.uploadSingle( file, `uploads/${ type }` )
    //   .then( uploaded => res.json(uploaded) )
    //   .catch(  error => this.handleError( error, res ) )

  };

  
  uploadMultileFiles = ( req: Request, res: Response ) => {
    res.json('uploadMultiple')
    // const type = req.params.type;
    // const files = req.body.files as UploadedFile[];

    
    // this.fileUploadService.uploadMultiple( files, `uploads/${ type }` )
    //   .then( uploaded => res.json(uploaded) )
    //   .catch(  error => this.handleError( error, res ) )
  };
}