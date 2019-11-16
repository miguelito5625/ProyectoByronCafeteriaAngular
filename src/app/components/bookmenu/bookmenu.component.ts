import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-bookmenu',
  templateUrl: './bookmenu.component.html',
  styleUrls: ['./bookmenu.component.css']
})
export class BookmenuComponent implements OnInit, AfterViewInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);

  }

  constructor() { }

  ngOnInit() {
    $("#flipbook").turn({
      // width: $(document).width() * .95,
      // height: $(document).height() * .75,
      // page: 3,
      // autoCenter: true,
      display: "single",
      when: {
        turning: function (e, page, view) {
          var sounds = [
            "assets/sounds/flip1.mp3",
            "assets/sounds/flip2.mp3",
            "assets/sounds/flip3.mp3",
            "assets/sounds/flip4.mp3",
            "assets/sounds/flip5.mp3",
            "assets/sounds/flip6.mp3",
            "assets/sounds/flip7.mp3",
            "assets/sounds/flip8.mp3",
          ];
          var audio = new Audio(sounds[Math.floor((Math.random() * 8))]);
          audio.play();

        }
      }
    });

  }

  ngAfterViewInit() {


  }

  siguientePagina() {
    $("#flipbook").turn("next");
  }

  paginarAnterior() {
    $("#flipbook").turn("previous");
  }

}
