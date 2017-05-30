import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers, Request} from "@angular/http";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HTTPService extends Http {

  private authenticationHeaderName: string = "Authorization";
  private authenticationHeaderBearer: string = "Bearer ";
  private authenticationToken: string;

  constructor(backend: ConnectionBackend, options: RequestOptions) {
    super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set(this.authenticationHeaderName, this.authenticationHeaderBearer + this.authenticationToken);
    } else {
      url.headers.set(this.authenticationHeaderName, this.authenticationHeaderBearer + this.authenticationToken);
    }
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.get(url, options);
    }
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.post(url, body, options);
    }
    return this.intercept(super.post(url, body, options));
  }

  saveToken(token: string) {
    this.authenticationToken = token;
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((res: Response) => {
      if (res.status === 401 || res.status === 403) {
        console.log(res.status + ' ' + res.statusText);
      }
      return Observable.throw(res);
    });
  }
}
