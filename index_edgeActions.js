/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var dato1 = "0";
         var dato2 = "0";
         var dato3 = "0";
         var dato4 = "0";
         var dato5 = "0";
         var dato6 = "0";
         
         
         // Boton 1
         sym.$("btn_1").click(function()
         {
         	if(dato1 == "0")
         	{
         		dato1 = "1";
         		sym.getSymbol("btn_1").stop("presionado");
         
         
         	}
         	else
         	{
         		dato1 = "0";
         		sym.getSymbol("btn_1").stop("reposo");
         	}
         
         });
         
         // Boton 2
         sym.$("btn_2").click(function()
         {
         	if(dato2 == "0")
         	{
         		dato2 = "1";
         		sym.getSymbol("btn_2").stop("presionado");
         
         
         	}
         	else
         	{
         		dato2 = "0";
         		sym.getSymbol("btn_2").stop("reposo");
         	}
         
         });
         
         // Boton 3
         sym.$("btn_3").click(function()
         {
         	if(dato3 == "0")
         	{
         		dato3 = "1";
         		sym.getSymbol("btn_3").stop("presionado");
         
         
         	}
         	else
         	{
         		dato3 = "0";
         		sym.getSymbol("btn_3").stop("reposo");
         	}
         
         });
         
         // Boton 4
         sym.$("btn_4").click(function()
         {
         	if(dato4 == "0")
         	{
         		dato4 = "1";
         		sym.getSymbol("btn_4").stop("presionado");
         
         
         	}
         	else
         	{
         		dato3 = "0";
         		sym.getSymbol("btn_4").stop("reposo");
         	}
         
         });
         
         // Boton 5
         sym.$("btn_5").click(function()
         {
         	if(dato5 == "0")
         	{
         		dato5 = "1";
         		sym.getSymbol("btn_5").stop("presionado");
         
         
         	}
         	else
         	{
         		dato5 = "0";
         		sym.getSymbol("btn_5").stop("reposo");
         	}
         
         });
         
         // Boton 6
         sym.$("btn_6").click(function()
         {
         	if(dato6 == "0")
         	{
         		dato6 = "1";
         		sym.getSymbol("btn_6").stop("presionado");
         
         
         	}
         	else
         	{
         		dato6 = "0";
         		sym.getSymbol("btn_6").stop("reposo");
         	}
         
         });
         // Borrar
         sym.$("borrar").click(function()
         {
         	sym.$("texto").html("");
         
         });
         sym.$("imprimir").click(function()
         {
         	var suma = dato1+dato2+dato3+dato4+dato5+dato6;
         
         	switch (suma)
         	{
         		/////a
         		case "100000":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("a");
         			suma = "";
         			limpiarBotones();
         
         			break;
         		/////b
         		case "110000":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("b");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////c
         		case "100100":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("c");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////d
         		case "100110":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("d");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////e
         		case "100010":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("e");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////f
         		case "110100":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("f");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////g
         		case "110110":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("g");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////h
         		case "110010":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("h");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////i
         		case "010100":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("i");
         			suma = "";
         			limpiarBotones();
         			break;
         		/////j
         		case "010110":
         			// Cambiar el texto de un elemento
         			sym.$("texto").append("j");
         			suma = "";
         			limpiarBotones();
         			break;
         	}
         
         });
         
         function limpiarBotones()
         {
         	sym.getSymbol("btn_1").stop("reposo");
         	sym.getSymbol("btn_2").stop("reposo");
         	sym.getSymbol("btn_3").stop("reposo");
         	sym.getSymbol("btn_4").stop("reposo");
         	sym.getSymbol("btn_5").stop("reposo");
         	sym.getSymbol("btn_6").stop("reposo");
         	dato1 = "0";
         	dato2 = "0";
         	dato3 = "0";
         	dato4 = "0";
         	dato5 = "0";
         	dato6 = "0";
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("btn_1");
   //Edge symbol end:'btn_1'

   //=========================================================
   
   //Edge symbol: 'btn_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("btn_2");
   //Edge symbol end:'btn_2'

   //=========================================================
   
   //Edge symbol: 'btn_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("btn_3");
   //Edge symbol end:'btn_3'

   //=========================================================
   
   //Edge symbol: 'btn_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("btn_4");
   //Edge symbol end:'btn_4'

   //=========================================================
   
   //Edge symbol: 'btn_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("btn_5");
   //Edge symbol end:'btn_5'

   //=========================================================
   
   //Edge symbol: 'btn_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("btn_6");
   //Edge symbol end:'btn_6'

   //=========================================================
   
   //Edge symbol: 'imprimir'
   (function(symbolName) {   
   
   })("imprimir");
   //Edge symbol end:'imprimir'

   //=========================================================
   
   //Edge symbol: 'imprimir_1'
   (function(symbolName) {   
   
   })("borrar");
   //Edge symbol end:'borrar'

})(jQuery, AdobeEdge, "EDGE-3323973");