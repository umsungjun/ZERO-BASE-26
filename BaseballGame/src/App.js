import { useEffect, useState } from "react";
import "./App.css";
import { generateRandomNumber } from "./random";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]); // []안에 요소가 변경될 때마다 내부에 있는 콜백함수가 실행 됨
  return (
    <div className="App">
      <h1>숫자 야구 게임</h1> {/* title */}
      <header className="header">{randomNumber}</header>
      <section>
        <input />
        <button
          onClick={() => {
            setRandomNumber(generateRandomNumber());
          }}
        >
          맞춰보기
        </button>
      </section>
      <h2>기록</h2>
      <ol>
        <li>1234 (strike: 0, ball: 2)</li>
        <li>1234 (strike: 1, ball: 1)</li>
        <li>1234 (strike: 1, ball: 1)</li>
      </ol>
    </div>
  );
}

export default App;
