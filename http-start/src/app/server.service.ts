import { Injectable } from "@angular/core";
import { Headers, Http,Response } from "@angular/http";
import 'rxjs/Rx';
 @Injectable()
 export class ServerService{
    constructor(private http:Http){

    }
    storeServers(servers: any[]){
        const headers = new Headers({'Content-type':'application/json'});
        return this.http.post("https://ng-http-995e3.firebaseio.com/data.json", servers, {'headers':headers});
    }
    getServers(){
        return this.http.get("https://ng-http-995e3.firebaseio.com/data.json")
        .map(
            (response: Response) => {
                const data = response.json();
                const values = Object.values(data);
                let resultArray = [];
                // console.log(values)
                for (var i = 0; i < values.length; i++) {
                  const serverArray = values[i];
                  for (var j in serverArray)
                  {
                      serverArray[j].name = "FETCHED_" + serverArray[j].name;;
                      resultArray.push(serverArray[j]);
                  }
                  //Do something
                }
                return resultArray;
            }
        );
    }
 }