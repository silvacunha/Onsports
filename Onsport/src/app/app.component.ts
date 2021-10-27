import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Notícias', url: '/folder/Inbox', icon: 'document-text' },
    { title: 'Placares', url: '/folder/Outbox', icon: 'calendar-clear' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Times', url: '/folder/Archived', icon: 'shield-half' },
   /**  { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },**/
  ];
 /* public labels = ['fami', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {} **/
}
