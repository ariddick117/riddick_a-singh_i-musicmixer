(() => {
	// set up the puzzle pieces and boards
	console.log('My JS issa workin!')

	// const is short for Constant -> variables that shouldn't change
	const piecesBoard = document.querySelector('.droppieces'),
		puzzleBoard = document.querySelector('.dropping-area'),
		puzzleSelectors = document.querySelectorAll('#buttonHolder img'),
		dropZones = document.querySelectorAll('.drop-zone'),
		helpButton = document.querySelector('.help'),
		lightBox = document.querySelector('.lightbox'),
		closeButton = document.querySelector('.close-lightbox'),
		WeatherAmbience = document.querySelector('.weatherAudio'),
    weatherButton = document.querySelector('weatherPieces img');

	let  draggablePieces = piecesBoard.querySelectorAll("img");

	// arrays are indexed and start at zero
	const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	//debugger;
	
	function switchImage() {
		console.log(this);

		// grab the corresponding background image and get it from the images folder
		// backGround.jpg as an example

		let bgImage = `./images/landScape${this.dataset.puzzleref}.png`;


		// Set the background image style on the dropzone container	
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;

		// check for stragglers
			dropZones.forEach(zone => {
			// if a zone has a child, grab it and put it back on the left-hand side
			if (zone.childElementCount == 1) {
				piece = zone.firstElementChild;
				piecesBoard.appendChild(piece);
			}
		});


		// Switching the right-hand images so that they match the bottom background

		draggablePieces.forEach((image, index) => {
			// log the image and the current index
			console.log(image, index);

			// Change each image source
			image.src = `images/icons-colour/png/${imageNameArray[index]}${this.dataset.puzzleref}.png`;

	// debugger;

		});
	}


// LightBox Controls
	
	function popLightBox() {
		// make the lightbox show up
		lightBox.classList.add('show-lightbox');

		console.log("Popping Da Lightbox");
	}

	function closeLightBox(event) {
	event.preventDefault(); // e and event mean the same thing. they are event handlers

	lightBox.classList.remove('show-lightbox');
	console.log("Lightbox Down! Lightbox Down!");

	}

  function addingWeatherSound(){
    let audioPath= `audio/weather/weather${this.data-weatheref}.mp3`;
    weatherAmbience.src = audioPath;
    weatherAmbience.load();

    weatherAmbience.play();
    //grab a reference to the current video via the classname object
  }

  




	// switch images
	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage); });

	// querySelectorAll selects all things that use that tag
	// the word "button" is a placeholder
	
	// loop through the draggable images
	// this lets us drag stuff => not that hard
	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log("draggin...");

			// dataTransfer has two methods, a setter and a getter
			// "set" data on the drag and "get" data on the drop
			e.dataTransfer.setData("text/plain", this.id);
		});
	});


	// this is the dragover and drop functionality => for the drop zones
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("dragged sumthin over me");
		});

		// allows a user to drop an element
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumthin on me");


	//check to see if the element we are dropping on has any children via the childElementCount property
	// If it does, exit the function with a return statement (nothing below the return will run) 
			//if (this.childElementCount ==1) { 
				//console.log('Single child family here! No more! Go away!')
				//return; 
			//} 
			//debugger;

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged: ', draggedElement);

			// add the image to the drop zone
			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});
	})

	helpButton.addEventListener("click", popLightBox); 
	closeButton.addEventListener("click", closeLightBox);
  weatherButton.addEventListener("click", addingWeatherSound);

})();