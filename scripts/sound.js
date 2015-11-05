jQuery(document).ready(function(){

	$('#drinkWrapper input').click(function() {
		if ($('#ExpressoMartini').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#espressomartini2').get(0).play();
			}, 500);
			$("#kuka").delay(1800).animate({"left":"100%"}, "slow");
		}
		else if ($('#MortonsSpecial').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#mortonsspecial2').get(0).play();
			}, 500);
			$("#kuka").delay(2800).animate({"left":"100%"}, "slow");
		}
		else if ($('#ShirleyTemple').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#shirleytemple2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
		else if ($('#CranberryKick').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#cranberrykick2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
		else if ($('#PinaColada').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#pinacolada2').get(0).play();
			}, 500);
			$("#kuka").delay(1000).animate({"left":"100%"}, "slow");
		}
		else if ($('#LondonLemonade').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#londonlemonade2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
		else if ($('#TequilaSunrise').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#tequilasunrise2').get(0).play();
			}, 500);
			$("#kuka").delay(1000).animate({"left":"100%"}, "slow");
		}
		else if ($('#Divan').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#divan2').get(0).play();
			}, 500);
			$("#kuka").delay(2500).animate({"left":"100%"}, "slow");
		}
		else if ($('#GentleSeaBreeze').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#gentleseabreeze2').get(0).play();
			}, 500);
			$("#kuka").delay(700).animate({"left":"100%"}, "slow");
		}
		else if ($('#Madras').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#madras2').get(0).play();
			}, 500);
			$("#kuka").delay(1000).animate({"left":"100%"}, "slow");
		}
	    else if ($('#MaiTai').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#maitai2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
		else if ($('#CranberryGin').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#cranberrygin2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
		else if ($('#Trotsky').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#trotsky2').get(0).play();
			}, 500);
			$("#kuka").delay(1500).animate({"left":"100%"}, "slow");
		}
		else if ($('#JohnCollins').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#johncollins2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
		else if ($('#IcedCoffee').is(':checked')) { 
			$("#kuka").animate({"left":"0%"}, "slow");
			setTimeout(function () {
				$('#icecoffee2').get(0).play();
			}, 500);
			$("#kuka").delay(800).animate({"left":"100%"}, "slow");
		}
	});
});

function fusing() {
	setTimeout(function () {
		$('#fusing').get(0).play();
	}, 800);
};