import { Transform } from 'class-transformer';
import * as moment from 'moment'

export class Product {
    id: number;
    name: string;
    price: number;
    @Transform(photo => {
        return `http://localhost:3000/public/images/${photo.value}`
    } )
    photo: string;
    status: boolean;
    @Transform(dob => moment(dob.value).format('DD/MM/YYYY'))
    createdAt: Date

    constructor(product: Product) {
        Object.assign(this, product)
    }
}