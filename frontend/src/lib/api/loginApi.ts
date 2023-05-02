import { BASE_API_PATH, BASE_URL } from ".";
import axios from "axios";
export const fetchCheckNickName = async (
  nickname: string
): Promise<boolean> => {
  const result = await axios.get(
    `${BASE_API_PATH}/user/chkUser?nickName=${nickname}`
  );
  return result.data;
};
export const fetchCheckSMS = async (code: string, phoneNUmber: string) => {
  if (code === "123456") {
    return true;
  } else {
    return false;
  }
  // return
  // const result = await axios.post(`${BASE_URL}/user/sms`, {
  //   content: "",
  //   recipientPhoneNumber: "",
  //   title: "",
  // });
  // return result.data
};

export const sendVerificationCodeBySMS = (phoneNUmber: string) => {
  return true;
  // axios.post(`${BASE_URL}/user/sms`, {
  //   content: "",
  //   recipientPhoneNumber: "",
  //   title: "",
  // });
};

export const fetchMarketingInformationAgreement = (agreement: boolean) => {
  return true;
  // 마케팅 수신 동의 여부 api 보내기
  // axios.post(`${BASE_URL}/user/sms`, {
  //   content: "",
  //   recipientPhoneNumber: "",
  //   title: "",
  // });
};

export const fetchUserInfo = () => {
  return {
    data: {
      body: {
        username: "최승현",
        email: "abc@naver.com",
      },
      statusCode: 200,
    },
  };
};

interface IRegisterUserProps {
  email: string;
  phoneNumber: string;
  nickname: string;
  address: string;
}
export const registerUser = ({
  email,
  phoneNumber,
  nickname,
  address,
}: IRegisterUserProps) => {
  // axios.put(`${BASE_URL}/user/updateUser/${email}/${phoneNumber}/${nickname}/${adress}`);
};
