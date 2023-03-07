import { BrowserRouter } from "react-router-dom";
import PageHeader from "./Common/PageHeader";
import PageNavigator from "./PageNavigator";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  );
}

export default App;

// emotion 라이브러리 사용법
// npm install --save @emotion/react
// npm install --save @emotion/styled
