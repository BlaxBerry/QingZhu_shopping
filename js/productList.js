$(function() {
    $.ajax({
        url: "./data/produtsData.json",
        dataType: "json",
        success: function(response) {
            console.log('data productsList load succeed');

            // create product.html productsList 
            createProductsList(response, '.productsList ul');


            // create index.html productsList -- new products block
            createProductsListHome(response, '.new_pro_content ul')

            // create index.html productsList -- recommend products block
            createProductsListHome(response, '.recommed_pro_content .right ul')


            createHeaderList(response)
        }
    });



    // create amd append List li
    function createLis(arr, father) {

        arr.forEach(item => {
            // console.log(item);
            let li = $(`<li class="product_common ${item.type} ${item.company}" >
                <div class="product_pic">
                    <img src=${item.imgSrc}>
                </div>
                <div class="product_info">
                    <p>${item.name}</p>
                    <span>${item.price}</span>
                </div>
            </li>`);
            $(father).append(li);
        })

    }


    // create productsList 
    function createProductsList(arr, father) {
        // create  and append list items
        createLis(arr, father);
        // 绑定 select事件 to select list type
        selectType();
    }


    // select product type
    function selectType() {

        // 利用事件委托绑定所有子元素
        $('.select_bar').on('click', function(e) {
            // console.log(e.target);
            // console.log($(e.target).is('.select_bar'));
            //因为绑定了父元素，所以父元素也会触发，所以限定不是父元素时才触发事件
            if ($(e.target).is('.select_bar') == false) {

                // //  利用事件委托 获得 class
                let className = e.target.className;
                // console.log(className);

                // //  according to the button className to chose li
                // //if it is all button,then show all li 
                if (className == 'all') {
                    $('.productsList ul li').show();

                    // get the amount of all this type
                    clacAmount($('.productsList ul li'));

                } else {
                    $('.productsList ul li').hide();
                    $('.productsList ul li.' + className).show();

                    // get the amount of all this type
                    clacAmount($('.productsList ul li.' + className));
                }
            }
        })

    }


    // get the amount of all this type
    function clacAmount(lis) {
        $('.detail .rightside span').text(lis.length);
    }


    // index.html products list random
    // get a random number
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    // create index.html productsList 
    // bug
    // ---------------
    //use random
    function createProductsListHome(arr, father) {
        let min = 0;
        let max = arr.length - 1;
        let homePageProductsList = [];

        // 生成8个随机数，把随机数序号的item取出放入数组
        // 根据主页的li的数量，只有8个，所以设定为8
        for (let i = 0; i < 8; i++) {
            let random = getRandom(min, max);
            homePageProductsList.push(arr[random]);
        };

        // 遍历该随机的item数组，并动态生成li
        homePageProductsList.forEach((item, index) => {
                // console.log(item);
                if (index < 8) {
                    let li = $(`<li class="product_common ${item.type} ${item.company}" >
                <div class="product_pic">
                    <img src=${item.imgSrc}>
                </div>
                <div class="product_info">
                    <p>${item.name}</p>
                    <span>${item.price}</span>
                </div>
            </li>`);
                    $(father).append(li);
                }
            })
            // bug random会有重复
            //------------------
    }


    //creater header list
    function createHeaderList(arr) {

        //get type 
        let typeList = []
        arr.forEach(item => {
            //indexOf kinds of item type
            // 只获得 去重后的 种类 个数
            if ($.inArray(item.type, typeList) == -1) {
                typeList.push(item.type);
            }
        });
        // console.log(typeList);
        //一共是4个种类
        //dropo_down list  left 需要1个ul包含4个li
        // dropo_down list  left side list
        let ul_left = $('<ul></ul>');
        $('.type_list').append(ul_left);
        // ul_left 添加 li
        typeList.forEach(item => {
            let li = $(`<li><a>${item}</a></li>`);
            //添加样式 and TAB change
            li.on('mouseenter', function() {
                $(this).children().addClass('current');
                $(this).siblings().children().removeClass('current');
                // Tab change
                let index = $(this).index();
                $('.type_detail').children().eq(index).show().siblings().hide();
            })
            ul_left.append(li);
        });

        // bug
        // -------
        // dropo_down list  right side 
        //dropo_down list  right 需要4个ul
        for (let i = 0; i < typeList.length; i++) {
            // create ul
            let ul_right = $(`<ul class=${typeList[i]}></ul>`);

            // 给每个ul同时生成li
            arr.forEach(item => {
                // get the same type class 
                if (item.type == typeList[i]) {

                    let li = $(`<li class="product_common ${item.type} ${item.company}" >
                                     <div class="product_pic">
                                        <img src=${item.imgSrc}>
                                    </div>
                                    <div class="product_info">
                                         <p>${item.name}</p>
                                         <span>${item.price}</span>
                                    </div>
                                </li>`);
                    // console.log(li);
                    ul_right.append(li);

                }
            })

            $('.type_detail').append(ul_right)
        }
        // -------
        // bug  只拿3个
        // header 中有3 个li而布局，所以最大到3




    }
})