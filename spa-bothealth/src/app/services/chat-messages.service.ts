import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, of } from "rxjs";
import { GenericResponseModel } from "../models/genericResponse.model";

@Injectable(
    {providedIn: "root"}
)
export class ChatMessagesService {

    constructor(private httpClient: HttpClient){};

    public startSession(userId) {
        const url = "/api/chat/startSession";
        
        return this.httpClient.post(url,{userId}).pipe(
            map( (response: GenericResponseModel) => {
                return response;
            }), catchError (error => {
                return of(false);
            })
        )
    };

    public sendMessage(userId, message){
        const url = "/api/chat/message";

        return this.httpClient.post(url, { userId, message} ).pipe(
            map( (response: GenericResponseModel) => {
                return response;
            }), catchError( error => {
                return of(error);
            })
        )
    };

    public finishSession(userId){
        const url = "/api/chat/finishSession"

        return this.httpClient.post(url, {userId}).pipe(
            map( (response: GenericResponseModel) => {
                return response
            }), catchError( error => {
                return of(error);
            })
        )
    }
};