import { Observable } from "rxjs/Observable";
import {Response } from '@angular/http';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let message: string = '';
        if (error instanceof Response) {
            message = `Erro ${error.status} ao tentar acessar a URL ${error.url} - ${error.statusText}`;
        } else {
            message = error.toString();
        }
        console.error(message);
        return Observable.throw(message);
    }
}