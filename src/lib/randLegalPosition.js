const Chess = require('chess.js');
const chess = new Chess();

// Number of pieces on the board 
const difficultyNumbers = {
	easy: Math.floor(Math.random() * 4) + 4,
	medium: Math.floor(Math.random() * 8) + 8,
	hard: Math.floor(Math.random() * 16) + 16,
};

const getUncapturedPieces = function() {
	const boardRanks = ['1', '2', '3', '4', '5', '6', '7', '8'];
	const boardColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

	let pieces = [];

	for(let i = 0; i < boardColumns.length; i++) {
		for(let j = 0; j < boardRanks.length; j++) {
			pieces.push(chess.get(boardColumns[i] + boardRanks[j]));
		}
	}

	// remove all of the squares that dont have a piece on them
	pieces = pieces.filter(square => square !== null);

	return pieces;
}

const genRandPos = function(difficulty) {
	// difficulty is either a 0, 1, 2 (easy, medium, hard)

	let currentFEN = "";
	let pieceNum = 0;

	if(difficulty === 0) {
		pieceNum = difficultyNumbers.easy;
	} else if(difficulty === 1) {
		pieceNum = difficultyNumbers.medium;
	} else {
		pieceNum = difficultyNumbers.hard;
	}

	while(!chess.game_over()) {
		const moves = chess.moves();
		const move = moves[Math.floor(Math.random() * moves.length)];
		chess.move(move);

		// console.log(chess.pgn());

		if(getUncapturedPieces().length === pieceNum) {
			currentFEN = chess.fen();
		}
		
	}

	chess.reset();

	console.log(pieceNum);

	return currentFEN;
}

export default genRandPos;

