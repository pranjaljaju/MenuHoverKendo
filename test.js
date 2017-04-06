var menuHoverBind = function(triggers, menu){
	var currentElemId = null;
	var nextElemId = null;
	var menuOpenTimer = null;
	var menuCloseTimer = null;
	var menuMoveTimer = null;
	
	var menuMouseEnter = function(event){
		if(menuCloseTimer != null){
			clearTimeout(menuCloseTimer);
			menuCloseTimer = null;
		}
		if(menuOpenTimer != null){
			clearTimeout(menuOpenTimer);
			menuOpenTimer = null;
		}
		if(menuMoveTimer != null){
			clearTimeout(menuMoveTimer);
			menuMoveTimer = null;
		}
	};
	
	var menuMouseLeave = function(event){
		console.log("Fired elemMouseLeave");
		console.log(event.target);
		
		if(menuOpenTimer != null){
			clearTimeout(menuOpenTimer);
			menuOpenTimer = null;
		}
		if(menuMoveTimer != null){
			clearTimeout(menuMoveTimer);
			menuMoveTimer = null;
		}		
		if(menuCloseTimer != null) {
			clearTimeout(menuCloseTimer);
			menuCloseTimer = null;
		}
		menuCloseTimer = setTimeout(function(){
			menuCloseTimer = null;
			console.log(event.target);
			menu.close();
			console.error("Close Call 1")
			currentElemId = null;
		}, 500);
	};
	
	var elemMouseEnter = function(event){
		console.log("Fired elemMouseEnter");
		if(menuOpenTimer != null){
			clearTimeout(menuOpenTimer);
			menuOpenTimer = null;
		}
		if(menuMoveTimer != null){
			clearTimeout(menuMoveTimer);
			menuMoveTimer = null;
		}
		if(event.target.textContent == currentElemId){
			if(menuCloseTimer != null){
				clearTimeout(menuCloseTimer);
				menuCloseTimer = null;
			}
		}
		
		menuOpenTimer = setTimeout(function(){
			menuOpenTimer = null;
			if(menuCloseTimer != null){
				clearTimeout(menuCloseTimer);
				menuCloseTimer = null;
			}
			if(event.target.textContent != currentElemId){
				console.log(event.target);
				currentElemId = event.target.textContent;
				menu.show(event);
				console.error("Open Call 1")
			}
			else{
				menu.movemenu(event);
				console.error("Move Call 1")
			}
		}, 300);
		
	};
	
	var elemMouseLeave = function(event){
		console.log("Fired elemMouseLeave");
		console.log(event.target);
		
		if(menuOpenTimer != null){
			clearTimeout(menuOpenTimer);
			menuOpenTimer = null;
		}
		if(menuMoveTimer != null){
			clearTimeout(menuMoveTimer);
			menuMoveTimer = null;
		}
		if(event.target.textContent == currentElemId){
			if(menuCloseTimer != null){
				clearTimeout(menuCloseTimer);
				menuCloseTimer = null;
			}
			menuCloseTimer = setTimeout(function(){
				menuCloseTimer = null;
				console.log(event.target);
				menu.close();
				console.error("Close Call 2")
				currentElemId = null;
			}, 500);
		}
	};
	
	var elemMouseMove = function(event){
		if(menuMoveTimer != null){
			clearTimeout(menuMoveTimer);
			menuMoveTimer = null;
		}
		for(var i=0; i< 200; i++){
			var x = event.target.clientX;
			var y = event.target.clientY;
		}
		if(event.target.textContent == currentElemId){
			menuMoveTimer = null;
			menuMoveTimer = setTimeout(function(){
				menu.movemenu(event);	
			},200)
		}
	}
	
	menu.find('ul').on('mouseenter', menuMouseEnter);
	menu.find('ul').on('mouseleave', menuMouseLeave);
	
	// $(triggers).on('mouseenter', elemMouseEnter);
	$(triggers).on('mousemove', elemMouseEnter);
	$(triggers).on('mouseleave', elemMouseLeave);
	
	
};