jQuery(document).ready(function(){

	jQuery("#radial_container,#radial_container2,#radial_container3,#radial_container4").radmenu({
		listClass: 'list', // the list class to look within for items
		itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
		radius: 250, // radius in pixels
		animSpeed:400, // animation speed in millis
		centerX: 0, // the center x axis offset
		centerY: 0, // the center y axis offset
		selectEvent: "click", // the select event (click)
		onSelect: function($selected){ // show what is returned 
			var selCode = $selected.html().split('value="');
			selCode = selCode[1].split('"');
			var intVal = parseInt(selCode[0]);
			
			if( $(".fuse_list li").length < 10) {
				if ($selected.find("#i1").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#vodka').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1500).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i2").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#rum').get(0).play();
					}, 500);
					$("#kukaHappy").delay(2200).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i3").length > 0) {
					$("#kuka").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#bourbon').get(0).play();
					}, 500);
					$("#kuka").delay(5000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i4").length > 0) {
					$("#kukaSmirk").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#tequila').get(0).play();
					}, 500);
					$("#kukaSmirk").delay(1600).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i5").length > 0) {
					$("#kuka").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#kalua').get(0).play();
					}, 500);
					$("#kuka").delay(1300).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i6").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#cointreau').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1500).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i7").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#curacao').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1200).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i8").length > 0) {
					$("#kuka").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#gin').get(0).play();
					}, 500);
					$("#kuka").delay(2300).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i9").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#orange').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i10").length > 0) {
					$("#kukaShock").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#bacon').get(0).play();
					}, 500);
					$("#kukaShock").delay(3200).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i11").length > 0) {
					$("#kuka").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#cranberry').get(0).play();
					}, 500);
					$("#kuka").delay(1500).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i12").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#fairydust').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1400).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i13").length > 0) {
					$("#kukaShock").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#lemon').get(0).play();
					}, 500);
					$("#kukaShock").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i14").length > 0) {
					$("#kukaMeh").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#seriously').get(0).play();
					}, 500);
					$("#kukaMeh").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i15").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#pineapple').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i16").length > 0) {
					$("#kukaShock").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#lemon').get(0).play();
					}, 500);
					$("#kukaShock").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i17").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#coffee').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i18").length > 0) {
					$("#kukaMeh").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#sugarsyrup').get(0).play();
					}, 500);
					$("#kukaMeh").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i19").length > 0) {
					$("#kuka").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#grenadine').get(0).play();
					}, 500);
					$("#kuka").delay(1300).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i20").length > 0) {
					$("#kukaSmirk").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#georgesmusk').get(0).play();
					}, 500);
					$("#kukaSmirk").delay(1100).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i21").length > 0) {
					$("#kukaSmirk").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#soda').get(0).play();
					}, 500);
					$("#kukaSmirk").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i22").length > 0) {
					$("#kukaShock").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#tears').get(0).play();
					}, 500);
					$("#kukaShock").delay(1100).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i23").length > 0) {
					$("#kukaShock").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#nitrogen').get(0).play();
					}, 500);
					$("#kukaShock").delay(1000).animate({"left":"100%"}, "slow");
				}
				else if ($selected.find("#i24").length > 0) {
					$("#kukaHappy").animate({"left":"0%"}, "slow");
					setTimeout(function () {
						$('#coconutcream').get(0).play();
					}, 500);
					$("#kukaHappy").delay(1300).animate({"left":"100%"}, "slow");
				}
			}
			
			if( $(".fuse_list li").length > 10) {
				setTimeout(function () {
					$('#warning').get(0).play();
				}, 200);
				$("#popupError2").fadeIn();
				$("body").append('<div id="fade"></div>');
				$("#fade").css({'filter' : 'alpha(opacity=80)'}).fadeIn();
				
				var popuptopmargin = ($("#popupError2").height() + 10) / 2;
				var popupleftmargin = ($("#popupError2").width() + 10) / 2;
				
				$("#popupError2").css({
					'margin-top' : -popuptopmargin,
					'margin-left' : -popupleftmargin
				});
						
				$("#popupOk,#fade").click(function() {
					$("#fade , #popupError2").fadeOut()
					return false;
				});
			}
			else if ($(".fuse_list li").length) {
				$(".fuse_list").append("<li><h3 class='plus'>+</h3></li><li><img src='graphics/Ingredients/"+intVal+"a.png'><input class='ingredient' value='"+intVal+"'></li>");
			}
			else {
				$(".fuse_list").append("<li><img src='graphics/Ingredients/"+intVal+"a.png'><input class='ingredient' value='"+intVal+"'></li>");
			};
			$(".fuse_list img").css("visibility","visible");
		},
		angleOffset: 0 // in degrees
	});
	
	jQuery("#radial_container,#radial_container2,#radial_container3,#radial_container4").radmenu("show");
		setTimeout(function () {
			$('#welcomeafter').get(0).play();
		}, 1000);
	$("#kukaSmirk2").delay(8000).animate({"left":"100%"}, "slow");
	
	
	
	$("#your_fuse").on('click', 'li', function() {
		if ($(this).is(':first-child')){
			$(this).next().remove();
			$(this).remove();
		}
		else {
			$(this).prev().remove();
			$(this).remove();
		};
	});
	
	$("#reset").click(function() {
		setTimeout(function () {
			$('#warning').get(0).play();
		}, 200);
		$("#popupReset").fadeIn();
			$("body").append('<div id="fade"></div>');
			$("#fade").css({'filter' : 'alpha(opacity=80)'}).fadeIn();
			
			var popuptopmargin = ($("#popupReset").height() + 10) / 2;
			var popupleftmargin = ($("#popupReset").width() + 10) / 2;
			
			$("#popupReset").css({
				'margin-top' : -popuptopmargin,
				'margin-left' : -popupleftmargin
			});
						
			$("#popupNo,#fade").click(function() {
				$("#fade , #popupReset").fadeOut();
			});
			
			$("#popupYes3").click(function() {
				$("#fade , #popupReset").fadeOut();
				$(".fuse_list").empty();
		});
	});
				
	$("#C1").click(function() {
		showLayer('page2');
	});
	
	$("#B1").click(function() {
		showLayer('page1');
	});
	$("#B2").click(function() {
		showLayer('page2');
	});
	$("#C2").click(function() {
		showLayer('page3');
	});
	$("#fuse").click(function() {
		
		if($(".fuse_list li").length > 2) {
			setTimeout(function () {
				$('#seriously').get(0).play();
			}, 200);
			
			$("#popupSubmit").fadeIn();
			$("body").append('<div id="fade"></div>');
			$("#fade").css({'filter' : 'alpha(opacity=80)'}).fadeIn();
			
			var popuptopmargin = ($("#popupSubmit").height() + 10) / 2;
			var popupleftmargin = ($("#popupSubmit").width() + 10) / 2;
			
			$("#popupSubmit").css({
				'margin-top' : -popuptopmargin,
				'margin-left' : -popupleftmargin
			});
						
			$("#popupNo,#fade").click(function() {
				$("#fade , #popupSubmit").fadeOut();
			});
			
			$("#popupYes2").click(function() {
				$("#fade , #popupSubmit").fadeOut();
				showValues(this);
			});
		}
		else {
			setTimeout(function () {
				$('#warning').get(0).play();
			}, 200);
			$("#popupError").fadeIn();
			$("body").append('<div id="fade"></div>');
			$("#fade").css({'filter' : 'alpha(opacity=80)'}).fadeIn();
			
			var popuptopmargin = ($("#popupError").height() + 10) / 2;
			var popupleftmargin = ($("#popupError").width() + 10) / 2;
			
			$("#popupError").css({
				'margin-top' : -popuptopmargin,
				'margin-left' : -popupleftmargin
			});
					
			$("#popupOk,#fade").click(function() {
				$("#fade , #popupError").fadeOut()
				return false;
			});
		}
	});
			
	var currentLayer = 'page1';
	function showLayer(lyr){
		hideLayer(currentLayer);
		document.getElementById(lyr).style.visibility = 'visible';
		currentLayer = lyr;
	};

	function hideLayer(lyr){
		document.getElementById(lyr).style.visibility = 'hidden';
	};
			
	function matches(arr1, arr2){
		if (arr1.length !== arr2.length) return false;
		for (var i = 0, len = arr1.length; i < len; i++){
			if (arr1[i] !== arr2[i]){
				return false;
			};
		};
		return true; 
	};

	function showValues(form){
		var fuse = $(".fuse_list").html();
		var png = '.png';
		fuse = fuse.split('a.png').join(png);
		var comboVal = [];
		$(".fuse_list .ingredient").each(function(i, elem){
			comboVal[i] = parseInt($(elem).val());
		});	
		$("#combo").val(comboVal);
		if(typeof comboVal != "undefined" && comboVal != null && comboVal.length > 1){
			var thisCombo = comboVal.slice().sort(function(a, b){return a-b});
			var drinkCombos = [[1,5,17,18],[1,11,16],[1,9,11],[2,15,24],[2,6,9,15,19,24],[8,13,16,18,21],[8,11,13],[1,4,9,15,19],[4,9,19],[4,6,11,16],[3,9,13,19],[3,13,18,21],[9,13,16,18,19,21],[11,13,16,18,21],[17,18]];
			var drinklist = ["ExpressoMartini", "CranberryKick", "Madras", "PinaColada", "MaiTai", "LondonLemonade", "CranberryGin", "MortonsSpecial", "TequilaSunrise", "Trotsky", "Divan", "JohnCollins", "ShirleyTemple", "GentleSeaBreeze", "IceCoffee"];
			var combo = "new";
			var drink = "New";
			for (i = 0; i < drinkCombos.length; ++i){
				if (matches(thisCombo, drinkCombos[i])) {
					combo = "win";
					drink = drinklist[i];
					break;
				};
			};
			
			if (combo == "new") {
				setTimeout(function () {
					$('#wrong').get(0).play();
				}, 200);
				$("#newFuse").html(fuse);
				$("#newFuse").append("<li><h3 class='plus'>=</h3></li><li><img class='beaker' src='graphics/Icons/beaker.png' /></li>");
				$("#popupNew").fadeIn();
			}
			else if(combo == "win"){
				setTimeout(function () {
					$('#win').get(0).play();
				}, 200);
				$("#winFuse").html(fuse);
				$(".drinkImg").attr("src","graphics/Drinks/"+drink+".png");
				$("#popupWin").fadeIn();
				
				$("#popupWinOk").click(function() {
					$("#popupWin").fadeOut();
					
					setTimeout(function () {
						$('#caution').get(0).play();
					}, 500);
					$("#popupWarn").fadeIn();
				});
			}
		}
	};
});