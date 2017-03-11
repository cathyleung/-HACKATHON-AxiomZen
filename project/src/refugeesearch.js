var searchedfor = document.getElementById('rsearch');
var searchbar = document.querySelector('input');
var searchbutton = document.querySelector('button');
var geocodingaddress = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var apikey = "&key=AIzaSyC5KE-_OtO3zG2J0kAw_0fcVVGj_dVEG_o"
var lat;
var lon;
var data2 = {"Counselling": [
{
	"name": "Vancouver Association for Survivors of Torture",
	"address": "2610 Victoria Dr, Vancouver, BC V5N 4L2",
	"location": [49.261214, -123.065483],
	"website" : "http://vast-vancouver.ca/",
	"phone": "(604) 255-1881"},

	{
		"name": "Vancouver & Lower Mainland Multicultural Family Support Services Society",
		"address": "4980 Kingsway,Ste 306, Burnaby, BC V5H 4K7",
		"location": [49.225835, -122.992391],
		"website" : "http://vvlmfss.ca/",
		"phone": "(604) 436-1025"},

		{
			"name": "DIVERSEcity Community Resources Society",
			"address": "13455 76 Ave, Surrey, BC V3W 2W3",
			"location": [49.141238, -122.849290],
			"website" : "http://www.dcrs.ca/",
			"phone": "(604) 597-0205"},

			{
				"name": "Battered Women's Support Services",
				"address": "1092 Seymour St, Vancouver, BC V6B 1B4",
				"location": [49.141238, -122.849290],
				"website" : "http://bwss.org/",
				"phone": "(604) 687-0770"},


				{
					"name": "Immigrant Services Society of BC",
					"address": "2610 Victoria Dr, Vancouver, BC V5N 4L2",
					"location": [49.141238, -122.849290],
					"website" : "http://issbc.org/",
					"phone": "(604) 684-2561"

				}

				]
			};
			searchbutton.addEventListener("click", saveSearch);

			function saveSearch(){
				var address = searchedfor.value;
				var searchaddress = geocodingaddress + address + apikey;
				document.getElementById('results').innerHTML = "";
				$.getJSON(searchaddress, function(data){
					lat = data.results[0].geometry.location.lat;
					lon = data.results[0].geometry.location.lng;
					var locations = data2.Counselling;
					for (var i=0; i<locations.length; i++){
						var objlat = locations[i].location[0];
						var objlon = locations[i].location[1];
						var distance = getDistanceFromLatLonInKm(objlat,objlon,lat,lon);
						if (distance < 10){
							var innerHTML = document.getElementById('results').innerHTML;
							innerHTML += "<li class=\"list-group-item\"><p>" +locations[i].name + "</p><p>" + locations[i].address + "</p></li>";
							document.getElementById('results').innerHTML = innerHTML;
						}
					}
				});

			}

			function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
  Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
  Math.sin(dLon/2) * Math.sin(dLon/2)
  ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}
