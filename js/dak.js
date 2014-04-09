var _ = 
{
	"one"	: function( s ){ return document.querySelector( s ); },
	"many"	: function( s ){ return [].slice.call( document.querySelectorAll( s ) ); }
}