import { BASE_API_PATH, BASE_URL, getId } from ".";
import axios from "axios";
import { getCookie } from "./cookie";
import { useMutation, useQueryClient } from "react-query";
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
  console.log("fetchUserInfo called");
  const id = getId();
  const result = await axios.get(`${BASE_API_PATH}/user/selectUser?id=${id}`);

  return result.data;
};

export interface IUpdateUserProps {
  // email: string;
  username: string;
  phoneNumber: string;
  nickname: string;
  address: string;
}

export const updateUserInfo = async ({
  // email,
  username,
  phoneNumber,
  nickname,
  address,
}: IUpdateUserProps) => {
  const id = getId();
  const result = await axios.get(
    `${BASE_API_PATH}/user/updateUser?id=${id}&number=${phoneNumber}&nickName=${nickname}&juso=${address}`
  );

  if (result) {
    return true;
  }

  throw new Error("회원가입에 실패하였습니다.");
};

interface IDeleteUserProps {
  name: string;
}
export const deleteUser = async ({ name }: IDeleteUserProps) => {
  const result = await axios.get(
    `${BASE_API_PATH}/user/deleteUser?name=${name}`
  );

  if (result) {
    return true;
  }

  throw new Error("회원 탈퇴에 실패하였습니다.");
};

// image
interface IUploadImageProps {
  data: any;
}
export const uploadImage = async ({ data }: IUploadImageProps) => {
  try {
    const formData = new FormData();
    formData.append("files", data);
    const id = getId();
    const result = await axios({
      method: "post",
      url: `${BASE_API_PATH}/user/images?id=${id}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getImageSrc = async (
  imageName: string
): Promise<string | undefined> => {
  try {
    const result = await axios.get(`${BASE_API_PATH}/user/image/${imageName}`);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
