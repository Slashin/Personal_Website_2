

$(document).ready(function(){

	$("#myModal").modal('show');


	//Home/Landing Page Icons

	$('#conIconImg1').on('click', function () {
		location.href = 'https://github.com/Slashin';
		$(this).css('background-color', '#1a7a43');
	});
	$('#conIconImg2').on('click', function () {
		location.href = 'https://linkedin.com/in/rohit-sangaraju';
		$(this).css('background-color', '#1a7a43');
	});
	$('#conIconImg3').on('click', function () {
		window.open('mailto:rsangara@edu.uwaterloo.ca');
		$(this).css('background-color', '#1a7a43');
	});

	
	$('#HomeDownArrow').on('mouseenter', function () {
		$(this).stop().animate({marginTop: "0.5vw"});
	});
	$('#HomeDownArrow').on('mouseleave', function () {
		$(this).stop().animate({marginTop: "-0.5vw"});
	});

	// about image text toggle

	$("#About_Images1").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText1').stop().slideDown('medium');
		$(this).css("background-color","#f4ca30");
		console.log("Image 1 sliding down");
	});
	$("#About_Images1").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText1').stop().slideUp('medium');
		$(this).css("background-color","#fff");
		console.log("Image 1 sliding up");
	});
	$("#About_Images2").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').css("margin-left", "16.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').stop().slideDown('medium');
		console.log("Image 2 sliding down");
		$(this).css("background-color","#f4ca30");
	});
	$("#About_Images2").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').css("margin-left", "16.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText2').stop().slideUp('medium');
		console.log("Image 2 sliding up");
		$(this).css("background-color","#fff");
	});

	$("#About_Images3").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').css("margin-left", "32.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').stop().slideToggle('medium');
		$(this).css("background-color","#f4ca30");
	});
	$("#About_Images3").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').css("margin-left", "32.5vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText3').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});

	$("#About_Images4").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').css("margin-left", "48.25vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').stop().slideToggle('medium');
		$(this).css("background-color","#f4ca30");
	});
	$("#About_Images4").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').css("margin-left", "48.25vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText4').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});

	$("#About_Images5").on('mouseenter', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').css("margin-left", "64vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').stop().slideToggle('medium');
		$(this).css("background-color","#f4ca30");
	});
	$("#About_Images5").on('mouseleave', function(){
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').css("margin-left", "64vw");
		$(this).closest('#aboutimgcontainer').find('#abtImgText5').stop().slideToggle('medium');
		$(this).css("background-color","#fff");
	});


	$('#web1Button').on('click', function(){
		location.href = "projectPages/web1.html";
	});
	$('#web2Button').on('click', function(){
		location.href = "projectPages/web2.html";
	});
	$('#web3Button').on('click', function(){
		location.href = "projectPages/web3.html";
	});
	$('#web4Button').on('click', function(){
		location.href = "projectPages/web4.html";
	});
	$('#web5Button').on('click', function(){
		location.href = "projectPages/web5.html";
	});
	$('#web6Button').on('click', function(){
		location.href = "projectPages/web6.html";
	});
	$('#web7Button').on('click', function(){
		location.href = "projectPages/web7.html";
	});
	$('#web8Button').on('click', function(){
		location.href = "projectPages/web8.html";
	});
	$('#web9Button').on('click', function(){
		location.href = "projectPages/web9.html";
	});
	$('#web10Button').on('click', function(){
		location.href = "projectPages/web10.html";
	});
	$('#web11Button').on('click', function(){
		location.href = "projectPages/web11.html";
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


