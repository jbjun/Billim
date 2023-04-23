// 내부모듈
import Header from "@components/layout/Header";
import styled from "@emotion/styled";
import ChattingEmptyBillimCharacter from "@assets/images/chatting/Chatting_empty_billim_character.png";
import { Box, Fab, Typography, useTheme } from "@mui/material";
// import SlidableListItem from "@components/SlidableListItem";
const ChattingPage = () => {
  return (
    <>
      <Header title="채팅" />
      <EmptyChatting />
    </>
  );
};

function EmptyChatting() {
  return (
    <>
      <img
        style={{ width: "300px", height: "300px" }}
        src={ChattingEmptyBillimCharacter}
      />
      <Typography textAlign={"center"} color={"grey"}>
        아직 채팅이 없어요. <br /> 빌림 회원들과 채팅을 진행해보세요.
      </Typography>
    </>
  );
}

const ChattingButton = styled.button`
  display: none;
`;

const ListItem = styled.li`
  /* 기본 스타일 */

  &:hover .move-button,
  &:hover .delete-button {
    display: inline-block;
  }
`;
function ChattingList() {
  return null;
  // return <SlidableListItem />;
}
export default ChattingPage;
