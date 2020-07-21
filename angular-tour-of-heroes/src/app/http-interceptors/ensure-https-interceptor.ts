import { Injectable } from "@angular/core";
import {
  HttpEvent, HttpInterceptor,HttpHandler,HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    // clone reqeust and replace 'http://' with 'https://' at the same time
    const  secureReq = req.clone({
      url: req.url.replace('http://', 'https://')
    });

    // Send the cloned, "secure" request to the next handler,
    return next.handle(secureReq);
  }

}
