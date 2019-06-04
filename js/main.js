
(() => {
	// set up the puzzle pieces and boards
	console.log('fired');
	//const is constant  
	const piecesBoard = document.querySelector('.drop-pieces'),
		 puzzleBoard = document.querySelector ('.dropping-area'),
		 puzzleSelector = document.querySelectorAll('#buttonHolder img'),
		 dropZones = document.querySelectorAll('.drop-zone');

	let draggablePieces= piecesBoard.querySelectorAll("img");


function switchImage(){
	console.log(this);
}
	puzzleSelector.forEach(thumbnail=> {thumbnail.addEventListener("click", switchImage);});
//loop through the draggale images
//// this let us drag stuff not that hard 
	draggablePieces.forEach(piece =>{
		piece.addEventListener("dragstart", function(e){
			console.log('draggin...');


		e.dataTransfer.setData("text/plain", this.id);
	});
});

	dropZones.forEach(zone=>{
		zone.addEventListener("dragover",function(e){
			e.preventDefault();
			console.log('dragged sumpin over me');
		});
	
//allow a user to drop an element
		zone.addEventListener("drop", function(e){
			e.preventDefault();
			console.log('you dropped sumpin over me');
	
			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged:', draggedElement)
	

			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});
	})

})();
