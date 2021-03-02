window.addEventListener('load', function() {
    $(function() {

        // slider_pics
        let lis = $('.slider ul li');
        //arrows
        let right = $('.arrow_right');
        let left = $('.arrow_left');



        let num = 1;

        //right arrow --->
        right.on('click', () => {
            // clearInterval(timer);
            lis.hide();
            //把DOM对象---》jquery对象
            $(lis[num]).fadeIn(1000);
            num++;
            if (num == 4) {
                num = 1
            }

            //little buttons
            $(ol_li).removeClass('current')
            $(ol_li[num - 1]).addClass('current')

        })

        //left arrow  <-----
        left.on('click', () => {
            // clearInterval(timer);
            lis.hide();

            if (num == 1) {
                num = 4
            }
            num--;
            $(lis[num - 1]).fadeIn(1000);

            //little buttons
            $(ol_li).removeClass('current')
            $(ol_li[num - 1]).addClass('current')
        })

        let timer = setInterval(() => {
            left.click();
        }, 3000)




        //小圆点  littel buttons
        // create li 
        let ol = $('.slider ol');

        for (let i = 0; i < lis.length - 1; i++) {
            let li = $('<li></li>');


            ol.append(li);
        }
        //litte buttons
        let ol_li = $('.slider ol li');















    })

})