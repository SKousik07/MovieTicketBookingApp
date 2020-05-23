import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = ['../../assets/img/ban1.png','../../assets/img/ban2.png','../../assets/img/ban3.png'];
}
