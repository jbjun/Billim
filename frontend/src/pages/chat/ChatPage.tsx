// 내부모듈
import Header from "@components/layout/Header";
import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import ChattingListContainer from "@container/chat/ChattingListContainer";
import useGoBack from "@lib/hooks/useGoBack";
import { useParams } from "react-router";
import ChatRoom from "@components/chat/ChatRoom";
const ChatPage = () => {
  const onBackHistory = useGoBack();
  const params = useParams();
  return (
    <>
      <Header title="김빌리" onBackHistory={onBackHistory} />
      <ChatRoom />
    </>
  );
};

export default ChatPage;
