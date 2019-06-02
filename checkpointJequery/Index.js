$("#bold").click(function(){

    if ($("#area").css("fontWeight")=="700")
    $("#area").css("fontWeight","400")
    else    $("#area").css("fontWeight","700")
   console.log($("#area").css("fontWeight"));
});
$("#italic").click(function(){
    if ($("#area").css("font-style")=="italic")
    $("#area").css("font-style","normal")
    else    $("#area").css("font-style","italic") 
   
    console.log($("#area").css("font-style"));
});
$("#underlined").click(function(){
    if ($("#area").css("text-decoration")=="underline solid rgb(0, 0, 0)")
    $("#area").css("text-decoration","none")
    else    $("#area").css("text-decoration","underline") 
   
    console.log($("#area").css("text-decoration"));
});

$("#fontFamily").change(function(){
$("#area").css("font-family",$("#fontFamily").val())
});
$("#fontSize").change(function(){
    $("#area").css("font-size",$("#fontSize").val()+"px")
    });

