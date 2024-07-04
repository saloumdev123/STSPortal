import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgbModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  activeTab: string = 'web';
  tabTitle: string = 'Web Design';
  tabContent: string = 'Web design typo';

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.updateContent(tab);
  }

  updateContent(tab: string) {
    switch (tab) {
      case 'web':
        this.tabTitle = 'Web Design';
        this.tabContent = 'Web Design project typo!';
        break;
      case 'cloudsolution':
        this.tabTitle = 'Cloud Solution';
        this.tabContent = 'This is the Cloud Solution page of Tech Company.';
        break;
      case 'development':
        this.tabTitle = 'Development';
        this.tabContent = 'Software development the services we offer.';
        break;

      default:
        this.tabTitle = '';
        this.tabContent = '';
    }
  }
}
