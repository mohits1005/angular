import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

 @Injectable()
 export class ServerService{
    constructor(private http:Http){

    }
    storeServers(servers: any[]){
        return this.http.post("https://ng-http-995e3.firebaseio.com/data.json", servers);
    }
 }