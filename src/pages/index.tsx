import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  const [user_board, user_setboard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [bomb_board, bomb_setboard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const board = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
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
  const couunt_bomb_borad = () => {
    for (let n = 0; n < 9; n++) {
      for (let m = 0; m < 9; m++) {
        if (bomb_board[n][m] === 1) {
          board[n][m] = 11;
          console.log('爆弾のマスを11に変更');
        }
      }
    }
  };

  //押した場所の周りの爆弾の数を数えて配列に代入する再起関数//ANCHOR - countBomb
  const count_bomb = (b: number, a: number) => {
    let bomb_counter = 0;
    if (bomb_board[b][a] === 1) {
      couunt_bomb_borad();

      return;
    }

    for (const { dx, dy } of directions) {
      const nx = a + dx;
      const ny = b + dy;
      if (
        bomb_board[ny] !== undefined &&
        bomb_board[ny][nx] !== undefined &&
        (board[ny][nx] === -1 || board[ny][nx] > 8)
      ) {
        if (bomb_board[ny][nx] === 1) {
          bomb_counter++;
        }
      }
    }
    board[b][a] = bomb_counter;

    if (bomb_counter === 0) {
      for (const { dx, dy } of directions) {
        const nx = a + dx;
        const ny = b + dy;
        if (
          bomb_board[ny] !== undefined &&
          bomb_board[ny][nx] !== undefined &&
          (board[ny][nx] === -1 || board[ny][nx] > 8)
        ) {
          count_bomb(ny, nx);
        }
      }
    }
  };

  //爆弾を数える関数を、全部のマスを調べてクリックされたところにやる
  // Define a function to update all bomb positions on the boardboa

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (user_board[i][j] === 1) {
        count_bomb(i, j);
      }
      if (user_board[i][j] > 8) {
        board[i][j] = user_board[i][j];
      }
    }
  }
  console.table(bomb_board);
  console.table(user_board);

  //ANCHOR - ClickLeft
  const clickLeft = (x: number, y: number) => {
    const newUserBoard: number[][] = JSON.parse(JSON.stringify(user_board));
    newUserBoard[y][x] = 1;
    console.log(`Left click at ${x}, ${y}`);

    user_setboard(newUserBoard);

    //ランダムに爆弾生成
    if (user_board.some((raw) => raw.includes(1)) === false) {
      const userBoardCopy: number[][] = JSON.parse(JSON.stringify(user_board));
      const zeroPositions = [];
      for (let i = 0; i < userBoardCopy.length; i++) {
        for (let j = 0; j < userBoardCopy[i].length; j++) {
          if (userBoardCopy[i][j] === 0 && !(i === y && j === x)) {
            // Exclude user's selected position
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
    console.log(x, y);
  };
  //ANCHOR - ClickRight
  const clickRight = (x: number, y: number) => {
    const newUserBoard: number[][] = JSON.parse(JSON.stringify(user_board));
    if (user_board[y][x] === 0) {
      newUserBoard[y][x] = 10;
    }
    if (user_board[y][x] === 10) {
      newUserBoard[y][x] = 9;
    }
    if (user_board[y][x] === 9) {
      newUserBoard[y][x] = 0;
    }

    user_setboard(newUserBoard);

    // put your right click logic here
    console.log(`Right click at ${x}, ${y}`);
  };
  let endNumber = 0;
  if (board.some((raw) => raw.includes(11)) === true) {
    endNumber = 2;
  }

  return (
    <div className={styles.container}>
      <div className={styles.outline}>
        <div className={styles.inline} style={{ height: 46 }}>
          <div
            className={styles.cellblock}
            style={{ backgroundPosition: -330 + -30 * endNumber }}
          />
        </div>
        <div style={{ height: 4 }} />
        <div
          className={styles.inline}
          style={{
            height: 356,
          }}
        >
          <div className={styles.square}>
            {board.map((raw, y) =>
              raw.map((cellNumber, x) => (
                <div
                  className={
                    cellNumber === -1 || (cellNumber > 8 && cellNumber < 11)
                      ? styles.cellblock
                      : styles.cell
                  }
                  key={`${x}-${y}`}
                  onClick={() => clickLeft(x, y)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    clickRight(x, y);
                  }}
                  style={{ backgroundPosition: -30 * cellNumber + 34 }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
