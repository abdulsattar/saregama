import {bootstrap, Component, Template} from '../angular2/angular2'

class Saregama {
  constructor() {
    this.greeting = 'Welcome';
  }
  changeGreeting() {
    this.greeting = 'howdy';
  }
}

Saregama.annotate = [
  new Template({
    inline: '<p>Hello</p>'
  }),
  new Component({
    selector: 'hello'
  })
];

// Main
(function () {
  bootstrap(Saregama);
})();
