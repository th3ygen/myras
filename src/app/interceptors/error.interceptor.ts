import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = err.error.message || err.statusText;
            if (err.status === 401) {

                if (request.url.includes('login') || request.url.includes('refreshtoken')) {

                    if (request.url.includes('refreshtoken')) {
                        this.auth.logout();
                        window.location.reload();
                    }

                    return throwError(error);
                }

                if (error === 'jwt expired') {
                    this.auth.refreshAccessToken()
                    .subscribe(data => {
                        if (data) {
                            request = request.clone({
                                setHeaders: {
                                    Authorization: `Token ${data.token}`
                                }
                            });

                            return next.handle(request);
                        } else {
                            this.auth.logout();
                            window.location.reload();
                        }

                    });
                }

                // auto logout if 401 response returned from api

                this.auth.logout();
                window.location.reload();
            }

            return throwError(error);
        }));
    }
}
