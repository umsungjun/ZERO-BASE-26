import { Provider } from "react-redux/es/exports";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./Common/PageHeader";
import PageNavigator from "./PageNavigator";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <PageNavigator />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// emotion 라이브러리 사용법
// npm install --save @emotion/react
// npm install --save @emotion/styled
