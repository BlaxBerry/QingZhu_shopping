$(function() {
    $.ajax({
        url: "./data/produtsData.json",
        dataType: "json",
        success: function(response) {
            createProducts(response);
            console.log('products data load succeed');
        }
    });

    function createProducts(arr) {
        arr.forEach(item => {
            // console.log(item);
            let li = $(`<li class="product_common">
                    <div class="product_pic">
                        <img src=${item.imgSrc}>
                    </div>
                    <div class="product_info">
                        <p>${item.name}</p>
                        <span>${item.price}</span>
                    </div>
                </li>`);
            $('.productsList ul').append(li)


        })
    }
})