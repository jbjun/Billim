import Header from "@components/layout/Header";
import LoginContainer from "@container/login/LoginContainer";

function LoginPage() {
  return (
    <>
      <Header title="회원가입" onBackHistory={() => {}} />
      <LoginContainer />
    </>
  );
}

export default LoginPage;
