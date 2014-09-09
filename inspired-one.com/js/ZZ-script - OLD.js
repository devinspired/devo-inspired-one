/* Author: Devin Brown
*/

$(document).ready(function(){
	
	//declare global variables
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;
		
		var windowState = 2; //1 means that the window is in overview state | 2 means the window is in big state
		var divider = 3.33333;
		
		var selectedPage = '#home';
		
		var height1;
	//END global variable declaration
	
	
	function init(){
		log('initialize');
	}//end initialize site script
	
	function onStart(){
		log('onStart');
		
		resizeSubSections();
	}//end onStart
	
	function onNewFrame(){
	}//end onNewFrame
	
	function onWindowResize(){
		log('window resize');
		
		//check the new screen size for mobile fixes
		
		resizeSubSections();
	}//end on window resize
	
	//end declare variables
	
/*============================================================
	Start up functionality - When the site loads it sets the grid
============================================================*/
	//calculate the golden ratio for the inner grid of each page when it's in home view
	
	$(window).resize(function(){onWindowResize();});
	
	/*-- Navigation of all the links on the page --*/
		function navigate(){
		//log("navigate");
		
		////move the entire container window coordinates to position the chosen window in the screen
		//////This can be acheived by using the height of the sub-sections and the number of the sub section
			//get the number of sub sections and store their id"s in an array
			var subArray = [];
				for(i=0; i < $(".sub-section").length; i++){
					subArray.push($(".sub-section")[i].title);
				}//end for statement
			
			//log("subArray = " + subArray);
		
		//animate to the over view of all pages
			if(windowState === 1){
				//log("navigate to over-view");
				$(".main").animate({
					"top": "0px"
				});//animate the main section moving to the appropriate page	
			}
			
			myMargin = $(selectedPage).css("marginTop");
			var myMove = (parseInt(myMargin) * (i*3));
			var move = -(height1 * i);
			
			//log("margins: " + myMargin + "move = " + move + "myMove = " + myMove);
		//animate to the selected page // based on matching the page title with the titles put into the array. 
			if(windowState === 2){
				//log("to select page: " + pageTitle);
				for(var i = 0; i <= subArray.length; i++){
					if(subArray[i] === pageTitle){
						//log(i);
							$(".main").animate({
								"top": -((height1 * i) + myMove)
							});//animate the main section moving to the appropriate page
							
						}//end if
				}//end for statement
				
			}
		return false;
	}//end function navigate
	
	
	/*-- end navigation --*/
	
	function resizeSubSections(){
		log('resizeSubSections');
		
		switch(windowState){
			case 1:
				divider = 3.33333;
				$('#subHeader').removeClass('start_screen_active');
				$('#subHeader').addClass('start_screen');
				//log('resizing sub sections in overview state');
				$('.main').animate({
					'top': '0px'
				});//animate the main section moving to the appropriate page
				
				break;
			case 2:
				divider = 1;
				//$('#subHeader').removeClass('start_screen');
				//$('#subHeader').addClass('start_screen_active');
				navigate();
				//log('resizing sub sections in zoomed');
				break;
		}//end switch
		
		//log('resizing sub sections in overview state');
		
		//recalculate the inner window size
			var winWidth = window.innerWidth;
			//log('winWidth = ' + winWidth);
			var winHeight = window.innerHeight;
			//log('winHeight = ' + winHeight);
			
			//write some stuff in this if statement that is particular to iPhone size intially
			$('.nav li').removeClass('displayInline');
			if(winWidth > 480){
				$('.nav li').addClass('displayInline');
			}//end if
		
		//calculate the 3rd widths and the golden width for the sub-section sizing
			
			var width1 = Math.round(winWidth / divider);
			log('width1 = ' + width1);
			var goldWidth = Math.round(width1 / 1.618);
			//log('goldWidth = ' + goldWidth);
		
		//determine the justified height end the golden height
			//calculate the header height and the footer height
				var headHeight = parseInt($('.header').css('height'));
				//log('headHeight  = ' + headHeight );
				var footHeight = parseInt($('.footer').css('height'));
				//log('footHeight  = ' + footHeight);
			
			var height1 = Math.round((winHeight - (headHeight + footHeight)) / divider);
			log('height1 = ' + height1);
			var goldHeight = width1 - goldWidth;
			//log('goldHeight = ' + goldHeight);
		
		//calculate the margin percetnage for best look
			var bestMargin = Math.round(
											(
											(((winWidth-(width1*3))/6)*.5) 
											+
											(((winHeight-(height1*3))/6)*.5)
											)
											* .15
											
										);//end equation
			//log('bestMargin = ' + bestMargin);
		$('.container').css({'height': winHeight,});			
		$('.sub-section').css({
						  'width': width1,
						  'height': height1,
						  
						  });
		
			return false;
	}//END function resize subsections
	
	
	//select_images
	//applet
	
	var optionsHidden = true;
	var optionsShowing;
	var hasClosed;
	
	$('#currentPicks').click(function(event){
		//get the current width of the applet
		event.preventDefault();
		
		toggleOptions();

	});//end showing and hiding the options panel
	
	$('input[type=image]').click(function(event){
			event.preventDefault();
			//call the toggle options menu
			toggleOptions();
		
	});
	

	
	//High jack the links on the page so that the page doesn't try to reload or anything weird.
	
	var optionSection;
	
		$("a").click(function(event){
			event.preventDefault();
			log('default ' + event.type + ' prevented');
			
			//check to see what link was hijacked
			var objectClicked = this.title;
			log('objectClicked = ' + objectClicked);
			
			// use the id value of the section clicked to determine which section to keep and grow
			selectedPage = "#" + objectClicked; 
			//log("selectedPage =" + selectedPage);
		
			
				
				//make all the sections other than the one seelcted go away,
				$(".sub-section").animate(
					{
					opacity: 0
					}, "fast");//sub-section animate
				
				resizeSubSections();
				
				//navigate to the selected page
				navigate();
				//show the selected sub section and grow it to be the size of possible area
				$(selectedPage).animate({opacity: 1},"fast");
			
							
		});//end function
	//end high jacking links. 
	//clicking the sub sections start screens will grow them to the size of the container and reveal the content beneath them
	
		
		
	

/*-- Form submission*/

$(function(){
//form submission handling
	$('.error').hide();
	$("#submit").click(function(){
		//validate and process form here
			$('.error').hide();	
			
			var name = $("input#formName").val();
			var email = $("input#formEmail").val();
			var company = $("input#formCompany").val();
			var message = $("textarea#formMessage").val();
			
			if(name == "" || email == "" || message == ""){
				$("span#error").show();
				$("input#formName").focus();
				return false;
			}//end if
			
			var dataString = 'formName=' + name + '&formEmail=' + email + '&formCompany=' + company + '&formMessage=' + message;
			
			$.ajax({
				type: "POST",
				url: "form/process.php",
				data: dataString,
				success: function(){
								$('#form').html("<div id='message'></div>");
								$('#message').html("<p>Thanks for writing!")
								.append("<p>Someone from INSPIRED will get back to you ASAP.</p>")
								.hide()
								.fadeIn(1500, function(){
									$('#message').append("");				   
								});//end fade in function
							}//end success function
			});//END AJAX submission section
			
			return false;
			
		});//END submit click function
		   
});//END form function

/*-- END form submission --*/


/*-- --*/

});/*-- End document ready --*/