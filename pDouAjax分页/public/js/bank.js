/**
 * Created by tianqiubiao on 2016/6/30.
 */
!(function () {
    var bank = $('.bankCard li');
    var obj = {name: "工商银行"};
    var banName = bank[0];
    for (var i = 0, len = bank.length; i < len; i++) {
        !function (i) {
            $(bank[i]).click(function () {
                                 if (bank[i] === banName) {
                                     banName = bank[i]
                                 } else {
                                     $(banName).attr('class', ' ');
                                     $(banName).find('.chickIco img').css('display', 'none');
                                     $(banName).find('.chickIco img')[0].alt = 'false';
                                     banName = bank[i]
                                 }
                                 if ($(this).find('.chickIco img')[0].alt === 'false') {
                                     $(this).attr('class', 'bgImg');
                                     $(this).find('.chickIco img').css('display', 'block');
                                     $(this).find('.chickIco img')[0].alt = 'true';
                                     obj.name=$(this).find('.bankImg img')[0].alt;
                                     $('.bank_item_card input').val('')
                                 } else {
                                     $(this).attr('class', ' ')
                                     $(this).find('.chickIco img').css('display', 'none');
                                     $(this).find('.chickIco img')[0].alt = 'false';
                                 }
            });
        }(i)
    }
    $('.bank_item_card input').keyup(function(){
        obj.card=this.value;
        console.log(obj)
    });
    //obj={name: "工商银行", card: "123456"}
$('.more_bankCard').click(function(){
    $(this).css('display','none');
    $('.bankCard').animate({'height':'360px'},'2s','linear')
})
})();