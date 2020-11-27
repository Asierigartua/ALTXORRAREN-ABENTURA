
window.addEventListener("keypress", getKeyAndMove, false);


window.Mapa = 		   		[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
							[1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1],
							[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
							[1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
							[1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
							[1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1],
							[1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
							[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
							[1,4,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1],
							[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1],
							[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
							[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1],
							[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1],
							[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,1],
							[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
	
  
  window.HasieraPosY=1;
  window.HasieraPosX=1;
function hasieratu(){
 
	
	function tablaMarraztu(){
	  //Matrizea birpasatzen dute bi for hauek, ondoren printeatzeko.
		for(y=0;y<22;y++){
			for(x=0;x<40;x++){
				if(window.Mapa[y][x]===1){//Mapako x eta y posizioak jakinda paretak marrazten ditu
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "#97aee8";
					ctx.fillRect(x*25, y*25, 25, 25);
				}
				if(window.Mapa[y][x]===2){//Mapako x eta y posizioak jakinda arrastoa marrazten du
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "white";
					ctx.fillRect(x*25, y*25, 25, 25);
				}
				if(window.Mapa[y][x]===3){//Mapako x eta y posizioak jakinda altxor egokia marrazten du
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "red";
					ctx.fillRect(x*25, y*25, 25, 25);


				}
				if(window.Mapa[y][x]===0){//Mapako x eta y posizioak jakinda bidea markatzen du
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "#97aee8";
					ctx.fillRect(x*25, y*25, 25, 25);

				}
				if(window.Mapa[y][x]===4){//Mapako x eta y posizioak jakinda altxor desegokia marrazten du
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "red";
					ctx.fillRect(x*25, y*25, 25, 25);

				}
				if(window.Mapa[y][x]===-1){//Mapako x eta y posizioak jakinda pertsonaia marrazten du eta bere posizioa gordetzen du.
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "black";
					ctx.fillRect(x*25, y*25, 25, 25);
					window.PosX=x;
					window.PosY=y;

				}
				if(window.Mapa[y][x]===5){//Altxor desegokia aurkitu ondoren, hasierara itzuli ostean, kolorez aldatzen du
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillStyle = "#D5D8DC";
					ctx.fillRect(x*25, y*25, 25, 25);


				}
			}
		}
	}

	tablaMarraztu();// Uneoro marrazteko balio du



	
}

// ordenagailuak 2 seinale bidaltzen ditu, hau erregulatzeko aldagai hau sortu dugu. 
// Bera 0 denean, mugimendua gauzatuko du eta 1 era aldatuko du aldagaia.
//Aldagai honek bat balioa hartzen duenean ez du bigarren mugimendua gauzatzen eta aldagaia 0 ra aldatzen du hurrengo mugimenduaren sain egonik
var MugituBerri=0;

function getKeyAndMove(key){
	 
	
if(key.keyCode == "97") {//A letra
		if(MugituBerri==0){
			MugituBerri=1;
		    //mugitu
			if(window.Mapa[window.PosY][window.PosX-1]===0){
				window.Mapa[window.PosY][window.PosX-1]=-1;
				window.Mapa[window.PosY][window.PosX]=2;
					}
			if(window.Mapa[window.PosY][window.PosX-1]===2){
				window.Mapa[window.PosY][window.PosX-1]=-1;
				window.Mapa[window.PosY][window.PosX]=0;
				}
				//altxorrera iritsi + alert
			if(window.Mapa[window.PosY][window.PosX-1]===3){
				if (window.confirm("ZORIONAK ALTXORRA AURKITU DUZU!\n\n Hasierara joateko eman ACEPTAR. \n\n Berriz ere jokatzeko CANCELAR.")) {
				window.location.href = "../HTML/hasiera.html"
				}
				else{
					for(y=0;y<22;y++){
						for(x=0;x<40;x++){

							if(window.Mapa[y][x]===2)
								{//linea pintada 
									window.Mapa[y][x]=0;
								}
							if(window.Mapa[y][x]===5)
								{//linea pintada 
									window.Mapa[y][x]=4;
								}
				
						}
					}
				window.Mapa[PosY][PosX]=0;
				window.Mapa[HasieraPosY][HasieraPosX]=-1;
				}
			}
		if(window.Mapa[window.PosY][window.PosX-1]===4)
		{
			for(y=0;y<22;y++){
				for(x=0;x<40;x++){
					if(window.Mapa[y][x]===2){//linea pintada 
					window.Mapa[y][x]=0;
					}
				}
			}
			window.Mapa[PosY][PosX]=0;
			window.Mapa[PosY][PosX-1]=5;
			window.Mapa[HasieraPosY][HasieraPosX]=-1;
		}
		hasieratu();
			
		}else{
			MugituBerri=0
		}
		
		
}else if(key.keyCode == "115") {//s
if(MugituBerri==0){
			MugituBerri=1;

			if(window.Mapa[window.PosY+1][window.PosX]===0){
				window.Mapa[window.PosY+1][window.PosX]=-1;
				window.Mapa[window.PosY][window.PosX]=2;
			}
			if(window.Mapa[window.PosY+1][window.PosX]===2){
				window.Mapa[window.PosY+1][window.PosX]=-1;
				window.Mapa[window.PosY][window.PosX]=0;
			}
			if(window.Mapa[window.PosY+1][window.PosX]===3){
				if (window.confirm("ZORIONAK ALTXORRA AURKITU DUZU!\n\n Hasierara joateko eman ACEPTAR. \n\n Berriz ere jokatzeko CANCELAR.")) {
					window.location.href = "../HTML/hasiera.html"
				}else{
					for(y=0;y<22;y++)
					{
						for(x=0;x<40;x++)
						{

						if(window.Mapa[y][x]===2)
							{//linea pintada 
								window.Mapa[y][x]=0;
							}
						if(window.Mapa[y][x]===5)
							{//linea pintada 
								window.Mapa[y][x]=4;
							}
					
						}
					}
					window.Mapa[PosY][PosX]=0;
					window.Mapa[HasieraPosY][HasieraPosX]=-1;
		
				}
			}
			if(window.Mapa[window.PosY+1][window.PosX]===4){
						for(y=0;y<22;y++){
					for(x=0;x<40;x++){
						if(window.Mapa[y][x]===2){//linea pintada 
						window.Mapa[y][x]=0;
						}
					}
				}
				window.Mapa[PosY][PosX]=0;
				window.Mapa[PosY+1][PosX]=5;
				window.Mapa[HasieraPosY][HasieraPosX]=-1;
			}
			
		hasieratu();
			
		}else{
			MugituBerri=0
		}
		
}else if(key.keyCode == '119') {//w
		if(MugituBerri==0){
			MugituBerri=1;
		if(window.Mapa[window.PosY-1][window.PosX]===0){
	window.Mapa[window.PosY-1][window.PosX]=-1;
	window.Mapa[window.PosY][window.PosX]=2;
		}
	if(window.Mapa[window.PosY-1][window.PosX]===2){
	window.Mapa[window.PosY][window.PosX]=0;
	window.Mapa[window.PosY-1][window.PosX]=-1;
	}
	if(window.Mapa[window.PosY-1][window.PosX]===3){
	if (window.confirm("ZORIONAK ALTXORRA AURKITU DUZU!\n\n Hasierara joateko eman ACEPTAR. \n\n Berriz ere jokatzeko CANCELAR.")) {
  window.location.href = "../HTML/hasiera.html"
}else{
	for(y=0;y<22;y++)
	{
		for(x=0;x<40;x++)
			{

			if(window.Mapa[y][x]===2)
				{//linea pintada 
					window.Mapa[y][x]=0;
				}
			if(window.Mapa[y][x]===5)
				{//linea pintada 
					window.Mapa[y][x]=4;
				}
		
			}
	}
	window.Mapa[PosY][PosX]=0;
	window.Mapa[HasieraPosY][HasieraPosX]=-1;
	}
		}
		if(window.Mapa[window.PosY-1][window.PosX]===4){
						for(y=0;y<22;y++){
				for(x=0;x<40;x++){
					if(window.Mapa[y][x]===2){//linea pintada 
					window.Mapa[y][x]=0;
					}
				}
			}
			window.Mapa[PosY][PosX]=0;
			window.Mapa[PosY-1][PosX]=5;
			window.Mapa[HasieraPosY][HasieraPosX]=-1;
		}
		hasieratu();
		
		}else{
			MugituBerri=0;
		}


}else if(key.keyCode =="100") {//d
		if(MugituBerri==0){
			MugituBerri=1;
			if(window.Mapa[window.PosY][window.PosX+1]===0){//0 = hueco / 1 == pared
	window.Mapa[window.PosY][window.PosX]=2;
	window.Mapa[window.PosY][window.PosX+1]=-1;
			}
	if(window.Mapa[window.PosY][window.PosX+1]===2){//2 =camino
	window.Mapa[window.PosY][window.PosX]=0;
	window.Mapa[window.PosY][window.PosX+1]=-1;
	}
	if(window.Mapa[window.PosY][window.PosX+1]===3){//3=bueno
	if (window.confirm("ZORIONAK ALTXORRA AURKITU DUZU!\n\n Hasierara joateko eman ACEPTAR. \n\n Berriz ere jokatzeko CANCELAR.")) {
  window.location.href = "../HTML/hasiera.html"
}else{
	for(y=0;y<22;y++)
	{
		for(x=0;x<40;x++)
		{

		if(window.Mapa[y][x]===2)
			{//linea pintada 
				window.Mapa[y][x]=0;
			}
		if(window.Mapa[y][x]===5)
			{//linea pintada 
				window.Mapa[y][x]=4;
			}
	
		}
	}
	window.Mapa[PosY][PosX]=0;
	window.Mapa[HasieraPosY][HasieraPosX]=-1;
}
	
	}
	if(window.Mapa[window.PosY][window.PosX+1]===4){//3=bueno
			for(y=0;y<22;y++){
			for(x=0;x<40;x++){
				if(window.Mapa[y][x]===2){//linea pintada 
				window.Mapa[y][x]=0;
				}
			}
		}
		window.Mapa[PosY][PosX]=0;
		window.Mapa[PosY][PosX+1]=5;
		window.Mapa[HasieraPosY][HasieraPosX]=-1;
	}

	hasieratu();
	
		}else{
			MugituBerri=0;

}
}
}