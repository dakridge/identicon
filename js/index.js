(function()
{
	createPicture("Captain America");

	var form = _.one("#name-form");
	var input = _.one("#name");

	form.addEventListener("submit", process);

	function process( e )
	{
		e.preventDefault();
		var box = _.one("#box");

		while( box.hasChildNodes() ){ box.removeChild(box.lastChild); }

		createPicture( input.value );
		input.value = "";
	}

})();

function createPicture( name )
{
	var box = _.one("#box");
	var hash = MD5(name);

	var wh = 400;

	var scale = function( v ){ return (wh / 16) * v; };
	var radius = function( v ){ var min = 5; var max = wh/2; return min + ((v / 16) * (max - min)); };
	var color = d3.scale.category20();

	// var color = function(i){ var c = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]; return c[ i % c.length ]; };

	console.log( hash );

	for( var i = 0; i < 16; i++ )
	{
		var x = parseInt( hash[2 * i], 16);
		var y = parseInt( hash[2 * i + 1], 16);

		var el = document.createElement("div");
		el.className = "bubble";

		el.style.left = scale( x ) + "px";
		el.style.top = scale( y ) + "px";

		var r = radius( parseInt(hash[(x * y) % 32], 16) );

		console.log( "[" + x + "," + y + "," + r + "]" );

		el.style.width = r + "px";
		el.style.height = r + "px";

		el.style.backgroundColor = color( x + y );

		box.appendChild( el );
	}
}
