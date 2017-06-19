
$(document).ready(function(){

	//Home/Landing Page Icons

	$('#conIconImg1').on('click', function () {
		location.href = 'https://github.com/Slashin';
	});
	$('#conIconImg2').on('click', function () {
		location.href = 'https://linkedin.com/in/rohit-sangaraju';
	});
	$('#conIconImg3').on('click', function () {
		window.open('mailto:rsangara@edu.uwaterloo.ca');
	});
	$('#HomeDownArrow').on('mouseenter', function () {
		$(this).stop().animate({marginTop: "0.5vw"});
	});
	$('#HomeDownArrow').on('mouseleave', function () {
		$(this).stop().animate({marginTop: "-0.5vw"});
	});

	// about image text toggle

	$("#About_Images1").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText1').stop().slideToggle('medium');
		$(this).css("background-color","rgba(241, 196, 15, 1)");
	});
	$("#About_Images1").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText1').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});
	$("#About_Images2").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').css("margin-left", "16.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').stop().slideToggle('medium');
		$(this).css("background-color","rgba(241, 196, 15, 1)");
	});
	$("#About_Images2").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').css("margin-left", "16.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});

	$("#About_Images3").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').css("margin-left", "32.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').stop().slideToggle('medium');
		$(this).css("background-color","rgba(241, 196, 15, 1)");
	});
	$("#About_Images3").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').css("margin-left", "32.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});

	$("#About_Images4").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').css("margin-left", "48.25vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').stop().slideToggle('medium');
		$(this).css("background-color","rgba(241, 196, 15, 1)");
	});
	$("#About_Images4").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').css("margin-left", "48.25vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});

	$("#About_Images5").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').css("margin-left", "64vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').stop().slideToggle('medium');
		$(this).css("background-color","rgba(241, 196, 15, 1)");
	});
	$("#About_Images5").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').css("margin-left", "64vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});


	var carousel = $(".threeDcarousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
});

