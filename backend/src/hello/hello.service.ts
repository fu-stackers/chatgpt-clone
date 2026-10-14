import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    private names:string[]=['ALI'];

    getAll(){
        return this.names;
    }
    add(name:string){
        this.names.push(name);
        return this.names;
    }
}
