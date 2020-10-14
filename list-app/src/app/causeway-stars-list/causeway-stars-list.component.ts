import { Component, OnInit, NgZone } from '@angular/core';

declare var Portal:any

@Component({
  selector: 'app-causeway-stars-list',
  templateUrl: './causeway-stars-list.component.html',
  styleUrls: ['./causeway-stars-list.component.scss']
})
export class CausewayStarsListComponent implements OnInit {

  causewayStars: any[] = ["Work Together", "Be Curious", "Own It", "Wow Everyone", "Be Proud"];
  selectedStar: string = '';

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    Portal.store.get('causeway-stars.selectedStar',(data:any) => this.ngZone.run(() =>{
      this.selectedStar = data;
      console.log("data in get--->", data);
    }));
  }

  selectStar(star: string){
    this.selectedStar = star;
    Portal.store.set('selectedStar',star);
    Portal.trigger("causewayStarSelected", `causeway star selected:${star}`);
  }

  clearSelection(){
    this.selectedStar = '';
    Portal.store.unset('selectedStar');
  }

}
