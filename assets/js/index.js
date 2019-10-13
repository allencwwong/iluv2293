
var content = {
    "1":{
        hero: {
            url: 'ch-bg.jpg',
            heading: 'city hunt',
            desc: 'City Hunt most popular event creations is a fun and interactive treasure hunt in the WHOLE city! Exploring interesting bits of history and culture from Chinatown , North beach to Downtown Market.'
        },
        content: {
            desc: 'how 2 play?',
            difficulty: '2',
            player: 'For 4 - 10 Players',
            team: 'Form 2 - 3 Teams',
            gameDur: 'Game duration: approx 120 - 160 mins',
            location: 'popular city locations'
        },
        cta: '/pages/book/detail.html?id=1',
        imgs: {
            "1": 'https://n8u3n2g6.stackpathcdn.com/wp-content/uploads/segway-scavenger-hunt-san-francisco-aqurium-of-the-bay-fishermans-wharf-600-400.jpg',
            "2": 'https://s3-media1.fl.yelpcdn.com/bphoto/Np1DToJ0PMeUWfDpG4sU5A/o.jpg',
            "3": 'https://teambuilding-hongkong.hk/wp-content/uploads/2015/11/Gourmet-Discover-2.jpg',
            "4": 'https://assets.community.lomography.com/47/a15c04a25d6230fc110287d30c80e9cc458827/1216x794x1.jpg?auth=1d506c069656d717121bd4bdba74f858d0200f9f'
        }
    },
    "2": {
        hero: {
            url: 'bgh-bg.jpg',
            heading: 'big game hunt',
            desc: 'City Hunt most popular event creations is a fun and interactive treasure hunt in the WHOLE city! Exploring interesting bits of history and culture from Chinatown , North beach to Downtown Market.'
        },
        content: {
            desc: 'how 2 play?',
            difficulty: '3',
            player: 'For 4 - 12 Players',
            team: 'Form 2 - 4 Teams',
            gameDur: 'Game duration: approx 160 - 180 mins',
            location: 'sf city wide'
        },
        cta: '/pages/book/detail.html?id=2',
        imgs: {
            "1": 'https://s3-media4.fl.yelpcdn.com/bphoto/PqSjasT4o5xUix3iYs7LRg/o.jpg',
            "2": 'https://s3-media2.fl.yelpcdn.com/bphoto/XRc-1j93I6SRkx4k8PYWhg/o.jpg',
            "3": 'https://s3-media2.fl.yelpcdn.com/bphoto/UBZxAj_IkwRakoiuq42pOw/o.jpg',
            "4": ''
        }
    },
    "3": {
        hero: {
            url: 'both-bg.png',
            heading: 'battle of the hunt',
            desc: 'City Hunt most popular event creations is a fun and interactive treasure hunt in the WHOLE city! Exploring interesting bits of history and culture from Chinatown , North beach to Downtown Market.'
        },
        content: {
            desc: 'how 2 play?',
            difficulty: '4',
            player: '6 - 20',
            team: '3 - 4',
            gameDur: 'Game duration: 160 mins',
            location: 'sf goldengate park'
        },
        cta: '/pages/book/detail.html?id=3',
        imgs: {
            "1": 'https://hoodscope.files.wordpress.com/2009/04/sloshball_6.jpg?w=584',
            "2": 'https://www.parksconservancy.org/sites/default/files/styles/basic/public/CRFI_160112_APAZ_0808_2x1.jpg?itok=N94jJn9V',
            "3": 'https://teambuilding-hongkong.hk/wp-content/uploads/2015/11/Gourmet-Discover-2.jpg',
            "4": 'https://s3-media3.fl.yelpcdn.com/bphoto/fGC4Tn-x3TLk4TdAPX28BQ/o.jpg'
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

                    console.log(parseInt(infoContent.content.difficulty))
                    for (var i = 0; i < parseInt(infoContent.content.difficulty);i++){
                        $($('.difficulty-icon .fal')[i]).css('color','#f9a801')
                    }

                    $('.hero-bg').css('background-image','url(/assets/images/'+infoContent.hero.url+')');
                    $('.hero .heading1').html(infoContent.hero.heading);
                    $('.hero .description').html(infoContent.hero.desc);
                    $('.content .description').html(infoContent.content.desc);
                    $('.content .difficulty').html(infoContent.content.difficulty);
                    $('.content .player').html(infoContent.content.player);
                    $('.content .team').html(infoContent.content.team);
                    $('.content .game-dur').html(infoContent.content.gameDur);
                    $('.content .location').html(infoContent.content.location);

                    Object.keys(infoContent.imgs).forEach(function(imgKey,idx){
                        $($('#look-around img')[idx]).attr('src',infoContent.imgs[imgKey])
                    })

                    $('#look-around img').on('click',function(){
                        var imgId = $(this).data('id');
                        $('.modal-body img').attr('src',infoContent.imgs[imgId]);
                    })

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