import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification.model';
import { NotificationService } from '../notifiction.service'

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications:Notification;
  constructor(private notificationservice:NotificationService) { }

  ngOnInit() {
    this.getNotifucations();
  }

  getNotifucations(){
    this.notificationservice.getnotification().subscribe(data =>{
      this.notifications=data
    })
  }



}
