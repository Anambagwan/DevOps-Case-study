import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  selectedTab: string = 'admin';

  //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService){

  }
  // this.selectedTab = 'admin';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('monthly');
  }
}
