$(document).ready(function(){
//this is where the magic happens
	function addEventListeners(){}//end event listeners
//end the magic
	
//start up the site
	function start(){
		//log('Website has started');
		//$("#contact").hide();
		
		addEventListeners();
	}//end start
	
	function init(){
		start();
	}//end initialization
	
	init();
//end the start up functions
		
//contact form processing code

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
								$('#message').html("<p>Thanks for writing!</p>")
								.append("<p>Someone from Thomas &amp; Associates will get back to you soon.</p>")
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
	
});
//end the document ready function