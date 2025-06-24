import LoginUi, { LoginFrom, LoginInfo } from "./components/app/login";

function App() {
  return (
    <div className="min-h-screen">
      <LoginUi>
        <LoginInfo />
        <LoginFrom />
      </LoginUi>
    </div>
  );
}

export default App;
