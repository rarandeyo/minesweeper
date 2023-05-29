

import styles from './index.module.css';
import { useState } from 'react';
const Home = () => {
  const[user_board,user_setboard]=useState([
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
  
  ]);
  const[bomb_board,bomb_setboard]=useState([
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
  ]);
  const board = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
]
  //-1 ->石
  //0 ->画像なしセル
  //1~8 ->数字セル
  //9 ->石＋はてな
  //10 ->石＋旗
  //11 ->ボムセル

  const directions = [
    { dx: 0, dy: -1 }, // 上
    { dx: 0, dy: 1 }, // 下
    { dx: -1, dy: 0 }, // 左
    { dx: 1, dy: 0 }, // 右
    { dx: -1, dy: -1 }, // 左上
    { dx: 1, dy: -1 }, // 右上
    { dx: -1, dy: 1 }, // 左下
    { dx: 1, dy: 1 }, // 右下
  ];
  

  //押した場所の周りの爆弾の数を数えて配列に代入する関数
  const count_bomb = (a : number, b : number) => {
  let bomb_counter = 0;

  for (const { dx, dy } of directions) {
    
    const nx = a + dx;
    const ny = b + dy;
    if (bomb_board[ny] !== undefined){
      if (bomb_board[ny][nx] === 1){
      bomb_counter++;
      }
    }
  };
  return bomb_counter
  };
  
  //爆弾を数える関数を全部のマスでやる
  for (let i = 1;i<9;i++){
    for (let j = 1;j<9;j++){
      count_bomb(i,j)

    }
  }


  
  const clickLine = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(user_board));
    newBoard[y][x] +=1;
    user_setboard(newBoard);
    let counter = 0;
    for (const raw of bomb_board) {
      for (const cell of raw) {
        if ( cell !== 0) {
          counter++;
        }
      }
    }
    if (counter === 0) {
      const userBoardCopy: number[][] = JSON.parse(JSON.stringify(user_board));
      const zeroPositions = [];
      for (let i = 0; i < userBoardCopy.length; i++) {
        for (let j = 0; j < userBoardCopy[i].length; j++) {
          if (userBoardCopy[i][j] === 0) {
            zeroPositions.push([i, j]);
          }
        }
      }
      if (zeroPositions.length >= 10) {
        const bombBoardCopy: number[][] = JSON.parse(JSON.stringify(bomb_board));
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * zeroPositions.length);
          const [row, col] = zeroPositions[randomIndex];
          bombBoardCopy[row][col] += 1;
          zeroPositions.splice(randomIndex, 1); // remove used position
        }
        bomb_setboard(bombBoardCopy);
      }
    }

  };


  
  
  
  
return (
    <div className={styles.container}>
      <div className={styles.square}>
        {bomb_board.map((raw, y) =>
          raw.map((cell_number, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickLine(x, y)}
            style={{backgroundPosition: -30*cell_number+30 }} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;