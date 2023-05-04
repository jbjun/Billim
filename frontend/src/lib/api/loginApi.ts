import { BASE_API_PATH, BASE_URL } from ".";
import axios from "axios";
import { getCookie } from "./cookie";
export const fetchCheckNickName = async (
  nickname: string
): Promise<boolean> => {
  const result = await axios.get(
    `${BASE_API_PATH}/user/chkUser?nickName=${nickname}`
  );
  return result.data;
};
export const fetchCheckSMS = async (
  code: string,
  phoneNumber: string
): Promise<boolean> => {
  const id = getId();
  const result = await axios.get(
    `${BASE_API_PATH}/user/smsChk?content=${code}&id=${id}&to=${phoneNumber}`
  );

  return result.data;
};

export const sendVerificationCodeBySMS = async (
  phoneNumber: string
): Promise<boolean> => {
  const id = getId();
  // return true;
  const result = await axios.get(
    `${BASE_API_PATH}/user/sms?id=${id}&to=${phoneNumber}`
  );
  if (result.data?.statusName === "success") {
    return true;
  }

  throw new Error("인증번호 전송에 실패하였습니다.");
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

export interface IUserInfoResponse {
  id: string;
  type: "NAVER";
  name: string;
  email: string;
  role: "USER";
  number: string;
  nickName: string;
  juso: string;
  originFileName: any;
  fullPath: any;
  athntNmbr: string;
  imageName: any;
  imageType: any;
  roleKey: "ROLE_KAKAO";
}
export const fetchUserInfo = async (): Promise<IUserInfoResponse> => {
  const id = getId();
  const result = await axios.get(`${BASE_API_PATH}/user/selectUser?id=${id}`);

  return result.data;
};

interface IRegisterUserProps {
  // email: string;
  phoneNumber: string;
  nickname: string;
  address: string;
}
export const registerUser = async ({
  // email,
  phoneNumber,
  nickname,
  address,
}: IRegisterUserProps) => {
  const id = getId();
  const result = await axios.get(
    `${BASE_API_PATH}/user/updateUser?id=${id}&number=${phoneNumber}&nickName=${nickname}&juso=${address}`
  );

  if (result) {
    return true;
  }

  throw new Error("회원가입에 실패하였습니다.");
};

function getId() {
  const id = 16; // 임시처리 / getCookie('sessionKey')
  return id;
}
