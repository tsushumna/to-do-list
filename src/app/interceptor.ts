import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() { }
    // function which will be called for all http calls
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("toDoToken");
        // how to update the request Parameters
        if (token && token.length) {
            const updatedRequest = request.clone({
                headers: request.headers.set(
                    "Authorization",
                    localStorage.getItem("toDoToken")
                )
            });
            // logging the updated Parameters to browser's console
            return next.handle(updatedRequest);
        } else {
            return next.handle(request);
        }
    }
}