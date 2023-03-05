import { useEffect, useState } from "react";
import "./App.css";
import { generateRandomNumber } from "./random";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState("");

  const handleAnswerChanged = (event) => {
    //input에 변경이 일어날때마다 event객체를 받음
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    // 스트라이크, 볼, 정답 유뮤를 확인
    const answers = answer.split("").map((item) => Number(item)); // 들어온 문자열을 배열 형태로 변환 후 map을 통해서 Number형태로 변환

    const { strike, ball } = randomNumber.reduce(
      (prev, cur, index) => {
        // 같은 자리에 같은 수가 존재하면 스트라이크

        if (answers[index] === cur) {
          return {
            ...prev,
            strike: prev.strike + 1,
          };
        }
        // 다른 자리에 수가 존재하면 ball
        if (answer.includes(cur)) {
          return {
            ...prev,
            ball: prev.ball + 1,
          };
        }
        return prev;
      },
      {
        strike: 0,
        ball: 0,
      }
    );
    console.log(randomNumber, answers);
    console.log(strike, ball);
  };

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]); // []안에 요소가 변경될 때마다 내부에 있는 콜백함수가 실행 됨

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1> {/* title */}
      <header className="header">{randomNumber}</header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} />
        <button onClick={handleSubmit}>맞춰보기</button>
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
