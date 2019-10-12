
var il2293 = (function(){
        var init = function(){
            $('.card.card-game').on('click',function(e){
                e.preventDefault();
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
            $('main').html('').load(page,function(){
                alert(location.search.substr(1))
            });
        }
    
        return {
            init: init,
        }
})();

il2293.init();