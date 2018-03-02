import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  public onClick(): void {
    this.ratingClicked.emit(`The rating of ${this.rating} was clicked!`);
  }

  public ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
}
