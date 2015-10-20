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
			
			if ($selected.find("#i1").length > 0) {
				$('#buzzer').get(0).play();
			}
			
			if( $(".fuse_list li").length > 10) {
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
			
	addEventListener('load',function(){
		jQuery("#radial_container,#radial_container2,#radial_container3,#radial_container4").radmenu("show");
	},
	false);
	
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
		$(".fuse_list").empty();
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
				$('#wrong').get(0).play();
				$("#newFuse").html(fuse);
				$("#newFuse").append("<li><h3 class='plus'>=</h3></li><li><img class='beaker' src='graphics/Icons/beaker.png' /></li>");
				$("#popupNew").fadeIn();
			}
			else if(combo == "win"){
				$('#winner').get(0).play();
				$("#winFuse").html(fuse);
				$(".drinkImg").attr("src","graphics/Drinks/"+drink+".png");
				$("#popupWin").fadeIn();
				
				$("#popupWinOk").click(function() {
					$("#popupWin").fadeOut();
					
					$("#popupWarn").fadeIn();
				});
			}
		}
	};
});