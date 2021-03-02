window.addEventListener('load', function() {
    $(function() {

        // slider_pics
        let lis = $('.slider ul li');
        //arrows
        let right = $('.arrow_right');
        let left = $('.arrow_left');



        let num = 1;

        // 1. right arrow --->
        right.on('click', () => {
            // clear timer
            clearInterval(timer);

            lis.hide();
            //DOM obj ————> jQuery obj
            $(lis[num]).fadeIn(1000);
            num++;
            if (num == 4) {
                num = 1
            }

            //little buttons
            $(ol_li).removeClass('current')
            $(ol_li[num - 1]).addClass('current')
        })

        // 2. left arrow  <-----
        left.on('click', () => {
            // clear timer
            clearInterval(timer);

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

        // 3. timer 自动播放
        let timer = setInterval(() => {
            lis.hide();
            //DOM obj ————> jQuery obj
            $(lis[num]).fadeIn(1000);
            num++;
            if (num == 4) {
                num = 1
            }
            //little buttons
            $(ol_li).removeClass('current')
            $(ol_li[num - 1]).addClass('current')

        }, 5000)



        // 4. 小圆点  littel buttons

        // get ol
        let ol = $('.slider ol');

        // create li 
        for (let i = 0; i < lis.length - 1; i++) {
            let li = $('<li></li>');
            ol.append(li);
        }

        //litte buttons
        let ol_li = $('.slider ol li');

        // the first li current
        $(ol_li[num - 1]).addClass('current')











    })

})