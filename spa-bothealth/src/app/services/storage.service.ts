import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";

@Injectable({
    providedIn:'root'
})

export class StorageService {
    private tokenKey = "authenticationKey";

    public saveToken(token: object): void {
        const tokenString = JSON.stringify(token);
        localStorage.setItem(this.tokenKey, tokenString);
    };

    public getToken(): UserModel | null  {
        let tokenString = localStorage.getItem(this.tokenKey);
        return JSON.parse(tokenString);
    };

    public removeToken(): void {
        return localStorage.removeItem(this.tokenKey);
    }
}