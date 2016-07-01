import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

    notify(message: string) {
        return new PNotify({
            title: 'Info',
            text: message,
            styling: 'bootstrap3'
        });
    }

    success(message: string) {
        return new PNotify({
            title: 'Success!',
            text: message,
            type: 'success',
            styling: 'bootstrap3'
        })
    }

    error(message: string){
        return new PNotify({
            title: 'Success!',
            text: message,
            type: 'error',
            styling: 'bootstrap3'
        })
    }

}