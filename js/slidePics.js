window.addEventListener('load', function() {
    $(function() {

        // get Elements
        //get ul li
        let ul_lis = $('.slider ul li');
        //arrows
        let right = $('.arrow_right');
        let left = $('.arrow_left');
        //get ol
        let ol = $('.slider ol')


        // 1. create ol_lis
        for (let i = 0; i < ul_lis.length; i++) {
            let li = $('<li></li>');
            ol.append(li);
        }
        // get ol_lis
        let ol_lis = $('.slider ol li');


        // 3. default ul_li show
        ul_lis.eq(0).show().siblings().hide();
        // 3. default style of the first ol_li
        ol_lis.eq(0).addClass('current');


        // 2. click Ol_lis to change pics 
        ol_lis.on('click', function() {
            //clear all ul_lis
            ul_lis.stop().fadeOut(1000);
            // get the numeber of Ol_li which clicked 
            var index = $(this).index();
            // show the ul_li whose index is as same as th ol_li cilcked
            ul_lis.eq(index).stop().fadeIn(1000);
            //clear others sibilings
            $(this).addClass('current').siblings().removeClass('current');
        });


        // 3.arrows
        var current = 0;

        //right --->
        right.on('click', function() {
            clearInterval(timer);
            current++;
            if (current == ul_lis.length) {
                current = 0
            }
            ul_lis.eq(current).stop().fadeIn(1000).siblings().fadeOut(1000);
            ol_lis.eq(current).stop().addClass('current').siblings().removeClass('current');
        });
        //left <---
        left.on('click', function() {
            clearInterval(timer);
            if (current == 0) {
                current = ul_lis.length;
            }
            current--;

            ul_lis.eq(current).stop().fadeIn(1000).siblings().fadeOut(1000);
            ol_lis.eq(current).stop().addClass('current').siblings().removeClass('current');
        })


        // 4. timer
        var timer = setInterval(function() {

            ul_lis.stop().fadeOut();
            current++;
            if (current == ul_lis.length) {
                current = 0
            }

            ul_lis.eq(current).stop().fadeIn(1000);
            ol_lis.eq(current).stop().addClass('current').siblings().removeClass('current');

        }, 4000)


    })

})