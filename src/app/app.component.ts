import { Component } from '@angular/core';

@Component({
  selector: 'mw-app', //
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onMediaItemdelete(mediaItem){
    console.log('Deleted from ',mediaItem.name);
  }
}
