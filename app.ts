function generateChessboard(size: number): string {
    let chessboard = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                chessboard += '██';
            } else {
                chessboard += '  ';
            }
        }
        chessboard += '\n';
    }

    return chessboard;
}
const boardSize = 4; // Размер доски (4x4 в данном примере)
const chessboard = generateChessboard(boardSize);
console.log(chessboard);