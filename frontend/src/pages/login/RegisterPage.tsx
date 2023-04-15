import Header from "@components/layout/Header";
import RegisterContainer from "@container/login/RegisterContainer";

function RegisterPage() {
  return (
    <>
      <Header title="회원가입" onBackHistory={() => {}} />
      <RegisterContainer />
    </>
  );
}

export default RegisterPage;
