import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from 'src/app/Services/studentData/studentdetails.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent implements OnInit {

  constructor(private _student:StudentdetailsService) { }

  ngOnInit() {
this._student.getStudents();
  }

}
