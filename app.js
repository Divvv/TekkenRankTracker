
angular.module('rankApp', ['ui.bootstrap'])
    .controller('RankController', function () {
        var rankApp = this;
        $.backstretch("content/images/bg01.png");
        rankApp.ranks = [];
        fillRanks(rankApp.ranks);

        rankApp.currentPoints = 0;
        rankApp.currentRankIndex = 0;

        rankApp.determinateValue = 30;

        rankApp.selectRank = function(){
            rankApp.currentRankIndex = rankApp.ranks.findIndex(i => i.Name === rankApp.selectedRank.Name);
            rankApp.currentPoints = 0;
        };

        rankApp.currentRank = function(){
            return rankApp.ranks[rankApp.currentRankIndex];
        };

        /*rankApp.pointRangeBefore = function() {
            var min = -rankApp.currentRank().RankType.Diff;
            var max = rankApp.currentPoints - 2;
            var step = 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };

        rankApp.pointRangeAfter = function() {
            var min = rankApp.currentPoints + 2;
            var max = rankApp.currentRank().RankType.Diff;
            var step = 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };*/

        rankApp.previousRank = function(){
            return rankApp.ranks[rankApp.currentRankIndex - 1];
        };

        rankApp.nextRank = function(){
            return rankApp.ranks[rankApp.currentRankIndex + 1];
        };

        rankApp.twoRanksAbove = function(){
            return rankApp.ranks[rankApp.currentRankIndex + 2];
        };

        rankApp.threeRanksAbove = function(){
            return rankApp.ranks[rankApp.currentRankIndex + 3];
        };

        rankApp.twoRanksBelow = function(){
            return rankApp.ranks[rankApp.currentRankIndex - 2];
        };

        rankApp.threeRanksBelow = function(){
            return rankApp.ranks[rankApp.currentRankIndex - 3];
        };

        rankApp.win = function () {
            if(rankApp.promoChance()){
                rankApp.promo();
            }
            else {
                rankApp.currentPoints += parseFloat(rankApp.pointsForNextMatch);
            }
        };

        rankApp.loss = function () {
           if(rankApp.demoChance()){
                rankApp.demo();
            }
            else {
                rankApp.currentPoints -= parseFloat(rankApp.pointsForNextMatch);
            }
        };

        rankApp.promo = function(){
            rankApp.currentRankIndex++;
            rankApp.currentPoints = 0;
        };

        rankApp.demo = function(){
            rankApp.currentRankIndex--
            rankApp.currentPoints = 0;
        };

        rankApp.promoChance = function () {
            return rankApp.pointsToPromo() === 0;
        };

        rankApp.demoChance = function () {
            return rankApp.pointsToDemo() === 0;
        };

        rankApp.pointsToPromo = function () {
            var pointsToPromo = rankApp.currentRank().RankType.Diff - rankApp.currentPoints;
            if(pointsToPromo >= 0)
                return pointsToPromo;
            return 0;
        };

        rankApp.pointsToDemo = function () {
            var pointsToDemo = -rankApp.currentRank().RankType.Diff - rankApp.currentPoints;
            if(-pointsToDemo >= 0)
                return -pointsToDemo;
            return 0;
        };
    });

var fillRanks = function(ranks){
    function RankType(color, diff) {
            var self = this;
            self.Color = color;
            self.Diff = diff;
        }

        function Rank(name, rankType, picFileName) {
            var self = this;
            self.Name = name;
            self.RankType = rankType;
            self.PicLink = 'content/images/ranks/' + picFileName + '.png';
        };
    var silverRankType = new RankType('Silver', 1);
        var lightBlueRankType = new RankType('Light Blue', 2);
        var greenRankType = new RankType('Green', 3);
        var yellowRankType = new RankType('Yellow', 3);
        var orangeRankType = new RankType('Orange', 4);
        var redRankType = new RankType('Red', 5);
        var rulerRankType = new RankType('Ruler', 6);
        var blueRankType = new RankType('Blue', 7);
        var purpleRankType = new RankType('Purple', 8);
        var goldRankType = new RankType('Gold', 8);
        var maxRankType = new RankType('Max', 9);

        ranks.push(new Rank('1st Dan', silverRankType, 'dan001'));
        ranks.push(new Rank('2nd Dan', silverRankType, 'dan002'));
        ranks.push(new Rank('3rd Dan', silverRankType, 'dan003'));

        ranks.push(new Rank('Initiate', lightBlueRankType, 'dan004'));
        ranks.push(new Rank('Mentor', lightBlueRankType, 'dan005'));
        ranks.push(new Rank('Expert', lightBlueRankType, 'dan006'));
        ranks.push(new Rank('Grand Master', lightBlueRankType, 'dan007'));

        ranks.push(new Rank('Brawler', greenRankType, 'dan008'));
        ranks.push(new Rank('Marauder', greenRankType, 'dan009'));
        ranks.push(new Rank('Fighter', greenRankType, 'dan010'));
        ranks.push(new Rank('Vanguard', greenRankType, 'dan011'));

        ranks.push(new Rank('Warrior', yellowRankType, 'dan012'));
        ranks.push(new Rank('Vindicator', yellowRankType, 'dan013'));
        ranks.push(new Rank('Juggernaut', yellowRankType, 'dan014'));
        ranks.push(new Rank('Usurper', yellowRankType, 'dan015'));

        ranks.push(new Rank('Vanquisher', orangeRankType, 'dan016'));
        ranks.push(new Rank('Destroyer', orangeRankType, 'dan017'));
        ranks.push(new Rank('Savior', orangeRankType, 'dan018'));
        ranks.push(new Rank('Overlord', orangeRankType, 'dan019'));

        ranks.push(new Rank('Genbu', redRankType, 'dan020'));
        ranks.push(new Rank('Byakko', redRankType, 'dan021'));
        ranks.push(new Rank('Seiryu', redRankType, 'dan022'));
        ranks.push(new Rank('Suzaku', redRankType, 'dan023'));

        ranks.push(new Rank('Mighty Ruler', rulerRankType, 'dan024'));
        ranks.push(new Rank('Revered Ruler', rulerRankType, 'dan025'));
        ranks.push(new Rank('Divine Ruler', rulerRankType, 'dan026'));
        ranks.push(new Rank('Eternal Ruler', rulerRankType, 'dan027'));

        ranks.push(new Rank('Fujin', blueRankType, 'dan028'));
        ranks.push(new Rank('Raijin', blueRankType, 'dan029'));
        ranks.push(new Rank('Yaksa', blueRankType, 'dan030'));
        ranks.push(new Rank('Ryujin', blueRankType, 'dan031'));

        ranks.push(new Rank('Emperor', purpleRankType, 'dan032'));
        ranks.push(new Rank('Tekken King', purpleRankType, 'dan033'));

        ranks.push(new Rank('Tekken God', goldRankType, 'dan034'));
        ranks.push(new Rank('True Tekken God', goldRankType, 'dan35'));

        ranks.push(new Rank('Tekken God Prime', maxRankType, 'dan036'));
}