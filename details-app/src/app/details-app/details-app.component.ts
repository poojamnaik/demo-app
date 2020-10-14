import { Component, OnInit, NgZone } from '@angular/core';

declare var Portal:any;

@Component({
  selector: 'app-details-app',
  templateUrl: './details-app.component.html',
  styleUrls: ['./details-app.component.scss']
})
export class DetailsAppComponent implements OnInit {

  holidaysList: any = {
    "January" : [
      {
        date: '1 January',
        details: 'New Year day'
      },
      {
        date: '26 January',
        details: 'Republic Day'
      }
    ],
    "February" : [],
    "March": [], 
    "April": [], 
    "May": [
      {
        date: '1 May',
        details: 'May Day'
      }
    ], 
    "June": [], 
    "July": [], 
    "August": [
      {
        date: '15 August',
        details: 'Independence Day'
      }
    ], 
    "September": [], 
    "October": [], 
    "November": [],
    "December": [
      {
        date: '25 December',
        details: 'Christmas'
      }
    ]
  };
  selectedMonth: string = '';
  messageFromTrigger: string = ''


  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    Portal.store.watch("month-list.selectedMonth", (data: string) => this.ngZone.run(() =>{
      this.selectedMonth = data;
    }))
    Portal.on("month-list.selectionEvent", (data:any) => {
      this.messageFromTrigger = data;
      console.log("trigger message in holiday details", this.messageFromTrigger);
    })
  }

  switchOfTrigger(){
    Portal.off('month-list.selectionEvent');
  }

}
