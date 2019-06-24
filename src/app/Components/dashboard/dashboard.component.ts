import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from 'src/app/Services/studentData/studentdetails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _service: StudentdetailsService) { }

  ngOnInit() {
  }
  logout(){
    this._service.logout();
  }
}
