import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  secret_Password= "Tuan";
  showDetails = false;
  logButtonClick = [];
  clickToRecord(){
     this.showDetails = !this.showDetails;
    // this.logButtonClick.push(this.logButtonClick.length);
    this.logButtonClick.push(new Date());
  }
  ngOnInit(): void {
  }

}
