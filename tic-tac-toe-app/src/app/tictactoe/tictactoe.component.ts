import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  currentPlayer: 'X' | 'O' = 'X';
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  winner: string | null = null;
  isDraw = false;

  makeMove(row: number, col: number) {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkForWinner(row, col)) {
        this.winner = this.currentPlayer;
      } else if (this.isBoardFull()) {
        this.isDraw = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkForWinner(row: number, col: number): boolean {
    const currentPlayer = this.board[row][col];
  
    // Check row
    if (
      this.board[row].every(cell => cell === currentPlayer)
    ) {
      return true;
    }
  
    // Check column
    if (
      this.board.every(rowArray => rowArray[col] === currentPlayer)
    ) {
      return true;
    }
  
    // Check diagonal (top-left to bottom-right)
    if (row === col) {
      if (
        this.board.every((rowArray, index) => rowArray[index] === currentPlayer)
      ) {
        return true;
      }
    }
  
    // Check diagonal (top-right to bottom-left)
    if (row + col === 2) {
      if (
        this.board.every((rowArray, index) => rowArray[2 - index] === currentPlayer)
      ) {
        return true;
      }
    }
  
    return false;
  }
  
  isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell !== ''));
  }
  

  resetGame() {
    this.currentPlayer = 'X';
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.winner = null;
    this.isDraw = false;
  }
}
