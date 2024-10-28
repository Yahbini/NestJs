import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

@UseInterceptors(ClassSerializerInterceptor) // biến đối tượng thành json thì gọi lại ở class product @Transform(dob => moment(dob.value).format('DD/MM/YYYY'))
@Controller('api/product')
export class ProductController {
  product: Product[];

  constructor(private productService: ProductService) {}

  @Get('find/:id')
  find(@Param('id') id: number): Product {
    return this.productService.findById(id);
  }

  @Get('findAll')
  findAll(): Product[] {
    return this.productService.findAll();
  }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/images',
        filename: (req, file, cb) => {
          let name = uuidv4().replace(/-/g, '');
          let ext = extname(file.originalname);
          let filename = name + ext;
          cb(null, filename);
        },
      }),
    }),
  )
  @Post('upload')
  upload(@UploadedFile() file: Express.Multer.File): any {
    return {
      name: file.originalname,
      size: file.size,
      type: file.mimetype,
      newFileName: file.filename,
    };
  }

  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './public/images',
        filename: (req, file, cb) => {
          let name = uuidv4().replace(/-/g, '');
          let ext = extname(file.originalname);
          let filename = name + ext;
          cb(null, filename);
        },
      }),
    }),
  )
  @Post('uploads')
  uploads(@UploadedFiles() files: Express.Multer.File[]): any {
    for (let file of files) {
      console.log('name: ' + file.originalname);
      console.log('type: ' + file.mimetype);
      console.log('size: ' + file.size);
      console.log('NewFileName' + file.filename);
      console.log('-----------------------------');
      
    }

    return {
      files: files.length
    };
  }
}
