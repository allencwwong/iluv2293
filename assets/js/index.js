
var content = {
    "1":{
        hero: {
            url: '',
            heading: 'city hunt',
            desc: 'city hunt desc'
        },
        content: {
            desc: 'how 2 play?',
            difficulty: '2',
            player: '4 - 10',
            gameDur: 'approx 2 - 3 hours',
            location: 'sf city wide'
        }
    }
}
var il2293 = (function(){
        var init = function(){
            var pathParam = location.search.substr(1);
            if (pathParam.length > 0){
                if (~location.href.indexOf('info/')){
                    var contentId = location.search.substr(4).toString();
                    var infoContent = content[contentId];
                    $('.hero .heading1').html(infoContent.hero.heading);
                    $('.hero .description').html(infoContent.hero.desc);
                    $('.content .description').html(infoContent.content.desc);
                    $('.content .difficulty').html(infoContent.content.difficulty);
                    $('.content .player').html(infoContent.content.player);
                    $('.content .game-dur').html(infoContent.content.gameDur);
                    $('.content .location').html(infoContent.content.location);
                }else{
                    console.log(location.search.substr(4))
                }
            }
        }
    
        return {
            init: init,
        }
})();

il2293.init();