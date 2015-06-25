import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'player'
})
@View({
  template: `
  <iframe src="https://www.youtube.com/embed/{{currentUrl}}" frameborder="0" allowfullscreen></iframe>
  <input #nexturl>
  <button (click)="play(nexturl.value)">Play</button>
  `
})
class Player {
  currentUrl: string;
  constructor() {
    this.currentUrl = "jdYJf_ybyVo";
  }

  extractId (url) {
    var reg = /\?v=([^&]*)&/
    return reg.exec(url)[1];
  }

  play(url) {
    this.currentUrl = this.extractId(url);
  }
}

bootstrap(Player);
