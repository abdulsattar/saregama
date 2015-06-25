if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Player = (function () {
    function Player() {
        this.currentUrl = "jdYJf_ybyVo";
    }
    Player.prototype.extractId = function (url) {
        var reg = /\?v=([^&]*)&/;
        return reg.exec(url)[1];
    };
    Player.prototype.play = function (url) {
        this.currentUrl = this.extractId(url);
    };
    Player = __decorate([
        angular2_1.Component({
            selector: 'player'
        }),
        angular2_1.View({
            template: "\n  <iframe src=\"https://www.youtube.com/embed/{{currentUrl}}\" frameborder=\"0\" allowfullscreen></iframe>\n  <input #nexturl>\n  <button (click)=\"play(nexturl.value)\">Play</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Player);
    return Player;
})();
angular2_1.bootstrap(Player);
