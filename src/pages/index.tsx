

import styles from './index.module.css';
import { useState } from 'react';
const Home = () => {
  const[board,setboard]=useState([
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,7,0,0,0,0,],
    [0,0,0,0,0,2,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,],
  
  ]);
  
  
  
  
  
  const clickLine = (x: number, y: number) => {
    console.log(x, y);
  const newBoard: number[][] = JSON.parse(JSON.stringify(board));
  // ここで新しいスプライトを設定（ここではランダムに設定）
  newBoard[y][x] = Math.floor(Math.random() * 14) + 1;

  setboard(newBoard);
}
  
  
  

  
  
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.square}>
        {board.map((raw, y) =>
          raw.map((cell_number, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickLine(x, y)}
            style={{backgroundPosition: -30*cell_number+30 }}>



              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;