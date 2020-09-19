import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    getData(url: string) {
        return this.httpClient.get<any>(url).toPromise();
    }
}
