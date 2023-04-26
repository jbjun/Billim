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
  FormControl,
  FilledInput,
  InputAdornment,
  TextField,
  IconButton,
  SvgIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import { ReactComponent as MessageSendIcon } from "@assets/icons/chat/Message_send.svg";
const ChatType = styled.div`
  border-radius: 20px;
  border: 1px solid grey;
  display: inline-flex;
  align-items: center;
  width: 100%;
  position: relative;
  background: #f3f7fa;
`;

const ChatInput = styled.input`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  padding: 2px 4px 2px 16px;
  gap: 12px;

  height: 24px;
  width: 100%;

  /* Mono  Color/Gray 50 */
  /* border: 1px solid grey; */
  /* background: #f3f7fa; */
  border-radius: 20px;
`;
export default function ChatRoom() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Grid item sx={{ height: "85%" }}>
        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12}>
            <ChatDateDivider date={"2023년 04월 08일"} />
            <MessageBox
              owner={"another"}
              message={
                "안녕하세요 빌리진님 해머드릴 키드에 관심이.... asdfljsdflkjasldfj sdfjasldfjlasdfjlsdjflasdkj"
              }
              timestamp="14:21"
            />
          </Grid>
          <Grid item xs={12}>
            <MessageBox
              owner={"self"}
              message={
                "안녕하세요 빌리진님 해머드릴 키드에 관심이.... asdfljsdflkjasldfj sdfjasldfjlasdfjlsdjflasdkj"
              }
              timestamp="14:21"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ p: 2, width: "100%" }}>
        {/* <ChatType>
          <ChatInput />
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </ChatType> */}
        <TextField
          placeholder="메시지를 입력하세요."
          variant="filled"
          fullWidth
          sx={{ p: 0 }}
          InputProps={{
            sx: {
              p: "0 !important",
              borderRadius: "20px !important",
              "&::before": { visibility: "hidden" },
              "&::after": { visibility: "hidden" },
            },
            endAdornment: (
              <IconButton aria-label="delete" size="large">
                <SvgIcon component={MessageSendIcon} />
              </IconButton>
            ),
          }}
          inputProps={{
            sx: { p: "12px !important" },
          }}
        />
      </Grid>
    </Grid>
  );
}

interface IChatDateDividerProps {
  date: string;
}
function ChatDateDivider({ date }: IChatDateDividerProps) {
  return (
    <Divider>
      <Typography sx={{ color: "grey" }}>{date}</Typography>
    </Divider>
  );
}

type OwnerType = "self" | "another";
interface IMessageBoxProps {
  owner: OwnerType;
  message: string;
  timestamp: string;
}

function MessageBox({ owner, message, timestamp }: IMessageBoxProps) {
  return (
    <Box sx={{ textAlign: isOwnerSelf(owner) ? "end" : "start" }}>
      {isOwnerSelf(owner) && <span>{timestamp}</span>}
      <Box
        sx={{
          backgroundColor: isOwnerSelf(owner) ? "#F3F7FA" : "#EEEBFF",
          maxWidth: "70%",
          display: "inline-block",
          p: 1,
          borderRadius: "8px",
        }}
      >
        <Typography component={"div"}>{message}</Typography>
      </Box>
      {!isOwnerSelf(owner) && <span>{timestamp}</span>}
    </Box>
  );
}

function isOwnerSelf(owner: OwnerType) {
  return owner === "self";
}
