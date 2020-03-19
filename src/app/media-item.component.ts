import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({//indicating it as class
  selector: 'mw-media-item', //name of tag to be used in other classes
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaInput; //taking value in this mediaInput
  @Output() delete = new EventEmitter(); //
  onDelete(){
    console.log('deleted');
    this.delete.emit(this.mediaInput);
  }
}
