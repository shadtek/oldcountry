# oldcountry
Website for Old Country BBQ Pits

Sprints:

Home
	Products links = Done
		Portable = Done
		Backyard = Done
	Text Area = Done
	Contact Info = Done
	About us = Done
	Testimonials = Done
	Delivery Info = Done
	Smoke Ring = Done
Products  = Done
	Science of Insulated = Done
	Portable Trailers = need update
	<!-- Update with this content: http://bbquepits.com/bbq_smokers_photos_2.htm -->
		BBQ Smokers = Updated with swipebox
		BBQ Smokers - Insulated = Updated with swipebox
		BBQ Grills = Updated with swipebox
		Rotisseries = Updated with swipebox
	Backyard = Updated with swipebox
		Smokers = Updated with swipebox
			All American = Updated with swipebox
			Old Country = Updated with swipebox
		Pits = Updated with swipebox
			All American = Updated with swipebox
			Old Country = Updated with swipebox
		Grills = Updated with swipebox
			All American = Updated with swipebox
			Old Country = Updated with swipebox
			Old Country - Camper = Updated with swipebox
		Open Fire Pits = Updated with swipebox


<!-- *Pretty up the card content on home. -->
more photos on home
more white space
nav on wide screens is spread out

add this to target better and not mess with index.html

<img class="product-img" />
$("a").has(".product-img").each(function(){
  $(this).find(".product-img").attr("src", $(this).attr("href"));
});