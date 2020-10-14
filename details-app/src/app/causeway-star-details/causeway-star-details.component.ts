import { Component, OnInit, NgZone } from '@angular/core';

declare var Portal:any;

@Component({
  selector: 'app-causeway-star-details',
  templateUrl: './causeway-star-details.component.html',
  styleUrls: ['./causeway-star-details.component.scss']
})
export class CausewayStarDetailsComponent implements OnInit {

  causewayStarList: any = {
    "Work Together" : 'We win or lose as a team at Causeway, so we all work in close partnership together. We communicate openly, give feedback constructively, listen respectfully and show understanding of the needs and commitments of others. We are supportive in the face of setbacks, kind during times of difficulty, and we actively enjoy sharing in each other’s efforts and successes. We appreciate that everyone has a vital role to play',
    "Be Curious" : 'The knowledge and skills of our people are Causeway’s greatest asset. We actively seek to learn, grow and develop our abilities to the utmost. We constantly strive to find new and better solutions through challenge and innovation, and we inspire others to do the same. We make sensible decisions but we are unafraid to suggest new ideas and push boundaries. We turn the remarkable into the achievable',
    "Own It": "Our customers and colleagues must have absolute trust in us, so at Causeway our word is our bond. If we say we will do something then we do it. We only make promises that we are confident can be kept. We work with energy, urgency and purpose, and we willingly step up whenever something needs to be accomplished", 
    "Wow Everyone": "Our success is ultimately determined by our customers, both internal and external, and therefore we care very deeply about them. We listen carefully to their needs, we consider how best we can help, and then we go above and beyond to create the ‘wow factor’. We don’t just seek satisfied; we seek delighted. We want our customers to recommend us, and to regard us as their trusted partners", 
    "Be Proud": "At Causeway we take pride in everything we do. We work hard to make a meaningful difference in the lives of our colleagues and customers and we are passionate about being the best we can possibly be. Whether it's creating new technologies, supporting customers or making life better in the office, if we are each proud of what we do, we will set the example for what ‘outstanding’ looks like"
  };
  selectedStar: string = '';
  otherCausewayStarValues: string = ''
  showOtherValues:boolean = true;


  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    Portal.store.watch("causeway-stars.selectedStar", (data: string) => this.ngZone.run(() =>{
      this.selectedStar = data;
    }))
    Portal.on("causeway-stars.causewayStarSelected", (data:any) => this.ngZone.run(() => {
      const stars = Object.keys(this.causewayStarList);
      const remainingStars = stars.filter((star)=> star !== this.selectedStar);
      this.otherCausewayStarValues = remainingStars.join(',');
      console.log("trigger message in causeway star details", this.otherCausewayStarValues);
      if(this.selectedStar === 'Work Together'){
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
          dismissAfter: 7000
        })
      }else if(this.selectedStar === 'Be Proud'){
        Portal.flash.info({
          message: "You should always be proud of what you do",
          dismiss: function() {
            console.log("flash dismissed in Be Proud");
          }
        })
      }else if(this.selectedStar === 'Be Curious'){
        Portal.flash.warning({
          message: "Curiousity is a key factor in learning",
          dismiss: function() {
            console.log("flash dismissed in Be Curious");
          },
          confirm: function() {
            console.log("flash confirmed in Be Curious");
          },
        })
      }else if(this.selectedStar === 'Own It'){
        Portal.flash.danger({
          message: "Ownership comes with great responsibilities!",
          dismiss: function() {
            console.log("I donot Own It");
          },
          confirm: function() {
            console.log("I own it");
          }
        })
      }
      else{
        Portal.flash.clear();
      }
      Portal.title(`Selected Causeway Star: ${this.selectedStar}`);
    }));
    Portal.menu.set("Thor", "gavel", function() {
      Portal.flash.success({
        message: 'I am Thor, the god of thunder'
      })
    });
    Portal.menu.set("Captain America Avenger Leader", "star", function() {
      Portal.flash.success({
        message: 'I am Captain America, leader of the Avengers'
      })
    });
  }

  switchOfTrigger(){
    Portal.off('causeway-stars.causewayStarSelected');
    this.showOtherValues = false;
  }

  removeThor(){
    Portal.menu.unset("Thor");
  }

  clearAllMenu(){
    Portal.menu.clear();
  }

}
