import { Component, OnInit, NgZone } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

declare var Portal:any;

@Component({
  selector: 'app-list-app',
  templateUrl: './list-app.component.html',
  styleUrls: ['./list-app.component.scss']
})
export class ListAppComponent implements OnInit {

  months: any[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  selectedMonth: string = '';
  error ;
  sucessMessage ;
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    Portal.title("App for deep linking demo");
    /***
     * Hash Url implementation
     */
    const hashPayload = {
      app_namespace : 'month-list',
      instance_id : 'instance_id',
      path_param : 'customerPathParam',
      expiry : 300,
      callback :  (hashedUrl, error) => this.ngZone.run(() => {
        console.log('hashPaylod callback!!', hashedUrl, error);
        this.sucessMessage = hashedUrl;
        this.error = error;
      })
    };
    const prom =  Portal.hashUrl(hashPayload);
    console.log('prom', prom);








    // Portal.menu.set("Fallback Icon Option", null, function() {
    //   Portal.flash.success({
    //     message: 'Null option menu'
    //   })
    // });
    // Portal.menu.set("Incorrect/blank Icon Option", "xyz", function() {
    //   Portal.flash.success({
    //     message: ''
    //   })
    // });
    // Portal.store.get('month-list.selectedMonth',(data:any) => this.ngZone.run(() =>{
    //   this.selectedMonth = data;
    //   console.log("data in get--->", data);
    // }));

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

  showFlash() {
    this.ngZone.run(() =>{
      Portal.flash.success({
        message: "A team should always work together",
        dismiss: function() {
          console.log("flash dismissed in work together");
        },
        confirm: function() {
          console.log("flash confirmed in work together");
        },
        ignore: function() {
          console.log("flash ignored in work together");
        },
        dismissAfter: 500000
      });
    });
  }



}
