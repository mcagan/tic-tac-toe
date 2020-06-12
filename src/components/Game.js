import React, { Fragment } from "react";
import Board from "./Board";

export default function Game() {
  return (
    <Fragment>
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </Fragment>
  );
}
