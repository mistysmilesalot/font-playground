import { useState } from 'react';
import './App.css';

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const NUMS = '0123456789';

const tableRow = (arr: any[], swash = false) => {
  return (
    <tr className={swash ? 'swashes' : ''}>
      {arr.map((char) => <td>{char}</td>)}
    </tr>
  );
};

const SwashNumTable = () => (
    <table>
      <tbody>
        {tableRow(Array.from(NUMS))}
        {tableRow(Array.from(NUMS), true)}
      </tbody>
    </table>
  )

const SwashAlphaTable = () => {
  const alphaHalf = Math.ceil(ALPHA.length / 2);
  const lowerArr1 = Array.from(ALPHA.slice(0, alphaHalf))
  const lowerArr2 = Array.from(ALPHA.slice(-alphaHalf))
  const capsArr1 = Array.from(ALPHA.toUpperCase().slice(0, alphaHalf))
  const capsArr2 = Array.from(ALPHA.toUpperCase().slice(-alphaHalf))

  return (
    <table>
      <tbody>
        <tr>{capsArr1.map((char) => <td>{char + char.toLowerCase()}</td>)}</tr>
        {tableRow(capsArr1, true)}
        {tableRow(lowerArr1, true)}
        <tr>{capsArr2.map((char) => <td>{char + char.toLowerCase()}</td>)}</tr>
        {tableRow(capsArr2, true)}
        {tableRow(lowerArr2, true)}
      </tbody>
    </table>
  );
};

const swashHeader = (content: string, front: string, back: string) => {
  return (
    <h1>
      <span className="swash">{front}</span>
      {content}
      <span className="swash">{back}</span>
    </h1>
  );
};

function App() {
  const [ frontSwash, setFrontSwash ] = useState('D');
  const [ backSwash, setBackSwash ] = useState('T');
  const [ content, setContent ] = useState('Surge');

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <input
          onChange={(e) => setFrontSwash(e.target.value)}
          value={frontSwash}
        />
        <input
          onChange={(e) => setBackSwash(e.target.value)}
          value={backSwash}
        />
        <input onChange={(e) => setContent(e.target.value)} value={content} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {swashHeader(content, frontSwash, backSwash)}
        {swashHeader(content.toLowerCase(), frontSwash, backSwash)}
      </div>
      <hr />
      {<SwashAlphaTable />}
      <hr />
      {<SwashNumTable />}
    </div>
  );
}

export default App;
