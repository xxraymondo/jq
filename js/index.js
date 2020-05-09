
let features=$("#features").offset().top;
$("#arr").slideUp(0)
$(window).scroll(function(){
let wScroll=$(window).scrollTop()

if(features>wScroll){
    $("#navbar").css("backgroundColor","rgba(0, 0, 0, 0.349)")
    $("#arr").slideUp(500)
}else{
    $("#navbar").css("backgroundColor","rgba(0, 0, 0, 0.649)")
    
    $("#arr").slideDown(500)
}
});


$("#arr").click(function () {
    $("html,body").animate({scrollTop:'0'},500)
})
let boxWidth= $(".inBox").innerWidth();
$(".box").css("left",`-${boxWidth}`)
$(".settings").click(function(){
   
   
   if($(".box").css("left")=='0px'){
    $(".box").animate({left:`-${boxWidth}`},500)
    
}else{
     $(".box").animate({left:`0`},500)
}
})

let colorBox=$(".color-box")
colorBox.eq(0).css("backgroundColor","black")
colorBox.eq(1).css("backgroundColor","red")
colorBox.eq(2).css("backgroundColor","blue")
colorBox.eq(3).css("backgroundColor","pink")
colorBox.eq(4).css("backgroundColor","yellow")
$(colorBox).click(function(){
   let currentColor= $(this).css("backgroundColor")
   $("body,html").css("color",currentColor)
})
let imgIN=$(".imgIN")
imgIN.click(function () 
{

    let imgsrc= $(this).attr('src')
    console.log(imgsrc)
    $("header").css("backgroundImage",`url(${imgsrc})`)
  })
$(document).ready(function(){
    $("#load").slideUp(300)
    $("body").css("overflow","auto")
})