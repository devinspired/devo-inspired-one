$(document).ready(function(){

//======================================================
		//pretty photo
	//=====================================================
	$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.95, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 720,
			default_height: 480,
			counter_separator_label: '|', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'dark_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											{pp_social} \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
		});
	
	//=====================================================
	//END PRETTY PHOTO

//this is where we begin listening for any events we need to listen to. This is called whent he page loads and starts
	function addEventListeners(){
		
		console.log('hover');
		
		$(".myitem").hover(function(){
			$(this).find(".myitem-title").fadeTo("fast", 0.5); // This sets the opacity to 100% on hover
		},function(){
			$(this).find(".myitem-title").fadeTo("fast", 0.0); // This sets the opacity back to 60% on mouseout
		});
		
		$("a[rel^='prettyPhoto']").prettyPhoto();
	
	}//end add event listeners
/*	ccmc_logo.gif
chl-web-150w.gif
hamilton_mag.gif
logo_mcmaster.gif
pete_kas_art.gif
SCOREGolf_Corp05_web-150w.gif
ascot_royals.jpeg
blackberry.jpeg
canheit.jpeg
CCHM.jpeg
crashdex.jpeg
dodge.jpeg
gatestone.jpeg
golf_kelowna.jpeg
hamilton_mag.jpeg
hb_drums.jpeg
hwdsb.jpeg
imperial.jpeg
little_engine_productions.jpeg
lorne_park_ss.jpeg
mac_childrens_hosp.jpeg
mazda.jpeg
mc_memcup.jpeg
mcmaster_health_Sciences.jpeg
mcmaster_hs.jpeg
mhm_log.jpeg
MPS.jpeg
msu_events.jpeg
MSU.jpeg
niagara_publichealth.jpeg
ohl.jpeg
polar.jpeg
rifkin.jpeg
synn_studios.jpeg
eating-pretty-logo.png
mcmaster_football.png
seradex.png
trek4ms_MD.png
	var clientsArray = [["McMaster Football",
		Gatestone Elementary School
		Hillcrest
		Hamilton Wentworth District School Board
		Polar
		McMaster Production Services
		McMaster University
		McMaster Health Sciences
		Department of Surgery and Research
		McMaster Student Union
		Campus Events
		McMaster Dance Company
		Eating Pretty
		Walk the Runway
		Moustache Bashio
		HB Drums
		CCMC Sports Group
		Chris Gauer Construction
		Mazda
		CANHEIT
		Eric Trogden
		Lorne Park SS
		Canadian College of Homeopathic  Medicine
		Trek4MS
		Michael McCrudden
		Masters of Health Management
		CrashDex
		MasterCard - Memorial Cup Priceless Moments
		Dodge
		Blackberry
		Imperial Style Group
		Niagara Public Health
		McMaster Health Studies
		Golf Kelowna
		Little Engine Productions
		BMO Mastercard
		Score Golf
		Hamilton Magazine
		Pete Kaspersak Art
		Synn Studios
		Ascot Royals
		Rifkin
		Blackcard Events
		Seradex
		OHL
		CHL];
	
	var myClients = function(){
		
		if()
		
	}
*/

//run any start up functionality when the document is ready, start listeners and such
	function onStart(){
		log("START");
		
		addEventListeners();
		
		clientListBuild();
		
		function clientListBuild(){
			// $('li').hide().text('our client').show();
		}//end clientList
		
	}//end on start
	
//function initialize to help the control of the script when the document is ready. We dictate what starts up. set up variables and such
	function init(){
		log("init");
		onStart();
	}//end initializer
	
	
	//=====================================================
		//fire up the code above
	//=====================================================
	
	init();
//==================

//home page text change code
//log('heroText will change soon', heroCount);
$(function(){
var heroCount = 0;
var heroText = ['<span class="orange">CREATIVITY</span> CAN SOLVE ANYTHING', '<span class="orange">EXPLORE</span> THE POSSIBILITIES', '<span class="orange">DISCOVER</span> YOUR POTENTIAL'];
setInterval(function(){changeHero()}, 4000);

function changeHero(){
	//log('heroText change 01', heroCount);
	heroCount++;
	//log('heroText: ',heroText[heroCount]);
	if(heroCount>2){heroCount = 0};
	$('#changeHero').html("<h1 id='heroText'></h1>");
		$('#heroText').html(heroText[heroCount])
		.hide()
		.fadeIn(2000, function(){
			$('#heroText').append("");		   
		});//end fade in function
	//log('heroText change 02', heroCount);
	
}//end changeHero function
});
//end home page text change code



//end bookmark bubble code

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

//end form processing code

});
//end document.ready function