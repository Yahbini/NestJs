import { Injectable } from '@nestjs/common';

@Injectable()
export class Demo2Service {

    hello(): string {
        return 'hi phuong anh'
    }

    hi(name: string): string {
        return 'Hi ' + name
    }
}
