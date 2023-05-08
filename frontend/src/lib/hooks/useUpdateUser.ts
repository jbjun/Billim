import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useUserInfo, useUserInfoMutationByUpdate } from "./query/loginQuery";
import { produce } from "immer";

interface IRegisterForm {
  username: { verified: boolean; value: string };
  email: { verified: boolean; value: string };
  phoneNumber: { verified: boolean; value: string };
  address: { verified: boolean; value: string };
  nickname: { verified: boolean; value: string };
}

interface IVerfiyInfo {
  id: "username" | "email" | "phoneNumber" | "address" | "nickname";
  verified: boolean;
  value?: string;
}
// user 회원가입, 수정에서 사용하는 hook
interface IUseUpdateUserProps {
  isRegister: boolean;
}
function useUpdateUser({ isRegister }: IUseUpdateUserProps) {
  const userInfo = useUserInfo();
  const userInfoMutation = useUserInfoMutationByUpdate();
  const [userForm, setUserForm] = useState<IRegisterForm>({
    username: { verified: false, value: "" },
    email: { verified: true, value: "" },
    phoneNumber: { verified: false, value: "" },
    address: { verified: false, value: "" },
    nickname: { verified: false, value: "" },
  });

  const onUpdateUser = async () => {
    const { phoneNumber, address, nickname, username } = userForm;
    // server에 registerForm 정보 전송
    try {
      userInfoMutation.mutate({
        username: username.value,
        phoneNumber: phoneNumber.value,
        nickname: nickname.value,
        address: address.value,
      });

      // navigate(`/${My_INFORMATION_SETTING_PATH}`);
    } catch (error) {
      console.error(error);
    }
  };
  const onChangeUserForm = useCallback(
    ({ id, verified, value }: IVerfiyInfo) => {
      const newRegisterForm = produce(userForm, (draft) => {
        draft[id].verified = verified;
        if (value) {
          draft[id].value = value;
        }
      });
      setUserForm(newRegisterForm);
    },
    [userForm]
  );

  useLayoutEffect(() => {
    if (userInfo) {
      if (isRegister) {
        setUserForm({
          username: { verified: true, value: userInfo.name },
          email: { verified: true, value: userInfo.email },
          phoneNumber: { verified: false, value: "" },
          address: { verified: false, value: "" },
          nickname: { verified: false, value: "" },
        });
      } else {
        setUserForm({
          username: { verified: true, value: userInfo.name },
          email: { verified: true, value: userInfo.email },
          phoneNumber: { verified: true, value: userInfo.number },
          address: { verified: true, value: userInfo.juso },
          nickname: { verified: true, value: userInfo.nickName },
        });
      }
    }
  }, [userInfo]);

  // if (!userInfo) {
  //   return { userForm, onChangeUserForm, onUpdateUser };
  // }

  return { userForm, onChangeUserForm, onUpdateUser };
}

export default useUpdateUser;
