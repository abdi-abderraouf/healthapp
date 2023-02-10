import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceuil', url: '/folder', icon: 'home' },
    { title: 'IMC', url: '/imc', icon: 'accessibility' },
    { title: 'pression', url: '/pression', icon: 'heart' },
    { title: 'Glycemie', url: '/glucose', icon: 'archive' },
    { title: 'Chat', url: '/chat', icon: 'mail-open' },
    { title: 'Deconnexion', url: '/auth', icon: 'lock-open' },

  ];
   constructor() {}
}
