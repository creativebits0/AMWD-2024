$('#show-btn').click(function(){
    $('#view').show();
})
$('#hide-btn').click(function(){
    $('#view').hide();
})


// $('#show-btn').mouseover(function(){
//     $('#view').show();
// })
// $('#hide-btn').mouseover(function(){
//     $('#view').hide();
// })
$(document).ready(function(){
    $('#about').hide();
    $('#add_customer').hide();
    $('#add_item').hide();
})
$('#home_btn').click(function(){
    $('#home').show();
    $('#about').hide();
    $('#add_customer').hide();
    $('#add_item').hide();
})
$('#about_btn').click(function(){
    $('#home').hide();
    $('#about').show();
    $('#add_customer').hide();
    $('#add_item').hide();
})
$('#customer_btn').click(function(){
    $('#home').hide();
    $('#about').hide();
    $('#add_customer').show();
    $('#add_item').hide();
})
$('#item_btn').click(function(){
    $('#home').hide();
    $('#about').hide();
    $('#add_customer').hide();
    $('#add_item').show();
})
