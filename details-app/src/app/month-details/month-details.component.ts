import { Component, OnInit, NgZone } from '@angular/core';

declare var Portal:any;

@Component({
  selector: 'app-month-details',
  templateUrl: './month-details.component.html',
  styleUrls: ['./month-details.component.scss']
})
export class MonthDetailsComponent implements OnInit {

  currentMonth: string = '';
  obtainedTriggerMessage: string = '';

  monthDetailsList: any = {
    "January" : [
      "This is the first month of the year",
      "It has 31 days"
    ],
    "February" : [
      "This is the second month of the year",
      "It has 28 days",
      "In leap year it has 29 days"
    ],
    "March": [
      "This is the third month of the year",
      "It has 31 days"
    ], 
    "April": [
      "This is the fourth month of the year",
      "It has 30 days"
    ], 
    "May": [
      "This is the fifth month of the year",
      "It has 31 days"
    ], 
    "June": [
      "This is the sixth month of the year",
      "It has 30 days"
    ], 
    "July": [
      "This is the seventh month of the year",
      "It has 31 days"
    ], 
    "August": [
      "This is the eighth month of the year",
      "It has 31 days"
    ], 
    "September": [
      "This is the nineth month of the year",
      "It has 30 days"
    ], 
    "October": [
      "This is the tenth month of the year",
      "It has 31 days"
    ], 
    "November": [
      "This is the second last month of the year",
      "It has 30 days"
    ],
    "December": [
      "This is the last month of the year",
      "It has 31 days"
    ]
  }

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    Portal.store.watch("month-list.selectedMonth", (data: string) => this.ngZone.run(() =>{
      this.currentMonth = data;
    }))
    Portal.on("month-list.selectionEvent", (data:any) => this.ngZone.run(() => {
      console.log("data",data);
      this.obtainedTriggerMessage = data;
      if(this.currentMonth === 'May'){
        Portal.flash.success({
          message: "You have selected the best value",
          dismiss: function() {
            console.log("flash dismissed");
          },
          confirm: function() {
            console.log("flash confirmed");
          },
          ignore: function() {
            console.log("flash ignored");
          },
          dismissAfter: 5000
        })
      }
    }));
    Portal.title("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVXYZ");
    Portal.menu.set("Show Power", "anchor", function() {
      console.log("I am thor, the god of thunder");
    });
  }

}
