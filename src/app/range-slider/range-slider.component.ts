import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pipco-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() value: number;
  @Input() color1: string = "#1f437c";
  @Input() color2: string = "#c7c7c7";

  private sliderValue: number;
  private sliderBackground: Object;

  constructor() { }

  ngOnInit() {
    this.sliderValue = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.updateSliderBackground();
  }

  private onSliderChanges() {
    this.value = ((this.sliderValue / 100) * (this.max - this.min)) + this.min;
    this.updateSliderBackground();

    console.log(this.sliderValue + "   " + this.value)
  }

  private updateSliderBackground() {
    const colorStopPos: number = this.sliderValue / 100;
    this.sliderBackground = {
      "background-image": "-webkit-gradient(" +
        "linear," +
        "left top," +
        "right top," +
        "color-stop("+ colorStopPos + ", " + this.color1 + ")," +
        "color-stop(" + colorStopPos + ", " + this.color2 + ")"
    }
  }
}