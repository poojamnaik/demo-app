import { Component, OnInit, NgZone } from '@angular/core';

declare var Portal:any;

@Component({
  selector: 'app-list-app',
  templateUrl: './list-app.component.html',
  styleUrls: ['./list-app.component.scss']
})
export class ListAppComponent implements OnInit {

  months: any[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  selectedMonth: string = '';

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    Portal.store.get('month-list.selectedMonth',(data:any) => this.ngZone.run(() =>{
      this.selectedMonth = data;
      console.log("data in get--->", data);
    }));
  }

  selectMonth(month: string){
    this.selectedMonth = month;
    Portal.store.set('selectedMonth',month);
    Portal.trigger("selectionEvent", `month selected: ${month}`);
  }

  clearSelection(){
    this.selectedMonth = '';
    Portal.store.unset('selectedMonth');
  }



}
