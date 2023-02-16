import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
//import { PersonasService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage:Storage,

  ) {

    this.storage.create();
  }
}
