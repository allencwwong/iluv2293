
var il2293 = (function(){
        var init = function(){
            $('.card.card-game').on('click',function(){
                pageLoader('detail');
            })
            $('.card.card-hunt a').on('click', function () {
                if ($(this).data('cta-info')){
                    alert($(this).data('cta-info'));
                }else{
                    alert($(this).data('cta-book'));
                }
            })
        }
    
        function pageLoader(page){
            page = page + '.html';
            $('main').html('').load(page);
        }
    
        return {
            init: init,
        }
})();

console.log(il2293)
il2293.init();