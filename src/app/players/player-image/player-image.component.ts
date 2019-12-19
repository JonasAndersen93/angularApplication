import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-player-image',
  templateUrl: './player-image.component.html',
  styleUrls: ['./player-image.component.css']
})
export class PlayerImageComponent implements OnInit {
  // This is a child component of PlayerDetailComponent

  @Input() childParam : boolean;
  constructor() { }

  ngOnInit() {
  }

}
