import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'player'
})
@View({
  template: `
  <iframe id="player" src="https://www.youtube.com/embed/{{currentUrl}}?enablejsapi=1" frameborder="0" allowfullscreen></iframe>
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
window.onYouTubeIframeAPIReady = function() {
  var player;
  var onPlayerReady = function() {
    player.playVideo();
  }
  player = new YT.Player("player", {events: {onReady: onPlayerReady});
}
