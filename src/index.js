import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// function Square(props){
//   return (
//     <button className='square' onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//             <Square
//               value={this.props.squares[i]}
//               onClick = { () => this.props.onClick(i)}
//             />
//     );
//   }
//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       history:[{
//         squares:Array(9).fill(null),
//       }],
//       xIsNext:true,
//     };
//   }
//   handleClick(i){
//     const history = this.state.history;
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if(calculateWinner(squares) || squares[i]){
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history:history.concat([{
//         squares:squares,
//       }]),
//       xIsNext: !this.state.xIsNext,
//     });
//   }
//   render() {
//     const history = this.state.history;
//     const current = history[history.length - 1];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step,move) => {
//       const desc = move ? 'Go to move #'+move : 'Go to game start';
//       return (
//         <li>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });
//     let status;
//     if(winner){
//       status = 'Winner:' + winner;
//     }else{
//       status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
//     }
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board 
//             squares = {current.squares}
//             onClick = {(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// function calculateWinner(squares){
//   const lines = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
//   ];
//   for(let i = 0;i<lines.length;i++){
//     const [a,b,c] = lines[i];
//     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//       return squares[a];
//     }
//   }
//   return null;
// }


// react基础知识学习
// ReactDOM.render(
//   <h1>Hello,world</h1>,
//   document.getElementById('root')
// )

// const name = "Json";
// const element = <h1>Hello,{name}</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName:'Harper',
//   lastName:'Perez',
// }
// const element = (
//   <h1>Hello,{formatName(user)}</h1>
// )

// const element = (
//   <h1 className='greeting'>
//     Hello,world
//   </h1>
// )

// const element = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'Hello,world!'
// )

// // 简化过的结构
// const element = {
//   type:'h1',
//   props:{
//     className:'greeting',
//     children:'Hello,world!'
//   }
// }

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// if段或者for段
// function getGreeting(user){
//   if(user){
//     return <h1>hello,{formatName(user)}!</h1>;
//   }
//   return <h1>Hello,Stranger.</h1>
// }

// 计时器例子
function tick(){
  const element = (
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'))
}
setInterval(tick,1000);