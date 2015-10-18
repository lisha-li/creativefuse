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
			
			$selected.prevAll().css("background","none");
			$selected.nextAll().css("background","none");
			$selected.css("background","url('graphics/Ingredients/"+intVal+"a.png')");
			
			if ($(".fuse_list li").length) {
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
		showValues(this);
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
			var drinkCombos = [[0,4,16,17],[0,10,15],[0,8,10],[1,13,14],[1,5,8,13,14,18],[7,12,15,17,20],[7,10,12],[0,3,8,14,18],[3,8,18],[3,5,10,15],[2,8,12,18],[2,12,17,20],[8,12,15,17,18,20],[10,12,15,17,20],[16,17]];
			var drinklist = ["Expresso Martini", "Cranberry Kick", "Madras", "Pina Colada", "Mai Tai", "London Lemonade", "Cranberry Gin", "Morton's Special", "Tequila Sunrise", "Trotsky", "Divan", "John Collins", "Shirley Temple", "Gentle Sea Breeze", "Ice Coffee"];
			var combo = "new";
			var drink = "New";
			for (i = 0; i < drinkCombos.length; ++i){
				if (matches(thisCombo, drinkCombos[i])) {
					combo = "win";
					drink = drinklist[i];
					break;
				};
			};
			//window.location = combo+'Combo.html?drink='+drink+'&combo='+comboVal
			
			if (combo == "new") {
				$("#newFuse").html(fuse);
				$("#popupNew").fadeIn();
				
				$("#popupNewOk").click(function() {
					$("#popupNew").fadeOut();
					
					$("#popupWarn").fadeIn();
				});
			}
			else if(combo == "win"){
				$("#winFuse").html(fuse);
				$(".drinkImg").attr("src","../graphics/"+drink+".png");
				$("#popupWin").fadeIn();
				
				$("#popupWinOk").click(function() {
					$("#popupWin").fadeOut();
					
					$("#popupWarn").fadeIn();
				});
			}
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
		};
	};
});