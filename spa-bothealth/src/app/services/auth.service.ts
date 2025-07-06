import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { UserModel } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";


@Injectable({
    "providedIn":"root"
})

export class AuthService {
    constructor(private storageService:StorageService, private httpClient: HttpClient) {}

    public login(passwordKey: string): Observable<boolean> {
        const url = "/api/users/login";
        const body = { secretKey: passwordKey };
    
        return this.httpClient.post(url, body).pipe(
            map( (response: UserModel) => {
                console.log(response.isUserAuthenticated)
                if(response.isUserAuthenticated){
                    this.storageService.saveToken(response);
                    return true;
                }
                return false; // Or any logic based on `response`
            }),
            catchError(error => {
                return of(false); // Emit `false` in case of an error
            })
        );
    }


    public verifyLogin(): boolean{
        const authObject: UserModel = this.storageService.getToken();
        if(authObject === null) { return false};

        if(authObject.isUserAuthenticated){
            return true;
        };

        return false;
        
    };


    public logout(): boolean {
        const authObject: UserModel = this.storageService.getToken();
        if(authObject){
            this.storageService.removeToken();
            return true;
        };

        return false;
    };

    public getUserData() : UserModel {
        return this.storageService.getToken();
    }
    
}