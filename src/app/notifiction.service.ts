import { Injectable } from '@angular/core';
import { Notification } from './notification.model'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

   url= "assets/data.json";

  constructor(private http:HttpClient) { }

  getnotification(){
    return this.http.get<Notification>(this.url);
  }

}
