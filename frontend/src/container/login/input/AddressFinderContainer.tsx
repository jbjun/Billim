import React, { useMemo, useState } from "react";
import InputField from "@components/InputField";
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import _ from "lodash";

const filterAddresses = (
  targetAddress: string,
  addresses: string[]
): string[] => {
  return addresses.filter((address) => address.includes(targetAddress));
};

type SelectAddressHandlerType = (address: string) => void;

interface IAddressFinderContainerProps {
  myAddress?: string;
  onSelectAddress: SelectAddressHandlerType;
}
function AddressFinderContainer({
  myAddress,
  onSelectAddress,
}: IAddressFinderContainerProps) {
  const addresses = useMemo(() => getAddresses(), []);
  const [address, setAdress] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setAdress(value);
  };

  return (
    <Grid
      container
      sx={{ p: 2 }}
      spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <InputField
          label="찾을 주소 입력"
          value={address}
          onChange={onChange}
          placeholder="주소를 입력해 주세요"
          endAdornment={
            <IconButton edge="end">
              <SearchIcon />
            </IconButton>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <SupportAddressBanner />
      </Grid>
      {myAddress && (
        <Grid item xs={12}>
          <MyCurrentAddress address={myAddress} />
        </Grid>
      )}
      <Grid item xs={12}>
        <AddressList
          addresses={filterAddresses(address, addresses)}
          onSelectAddress={onSelectAddress}
        />
      </Grid>
    </Grid>
  );
}

export default AddressFinderContainer;

function SupportAddressBanner() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#EEEBFF", p: 1 }}
      >
        <Grid item xs={10}>
          <Typography variant="body2">
            빌림은 관악/광진/마포/서대문 지역을 지원해요!
          </Typography>
          <Typography variant="h6">우리 동네도 빌림이 필요하다면?</Typography>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "right" }}>
          <a href="https://forms.gle/8JVUufyyAJUkTcjw9" target="_blank">
            <IconButton edge="end" size="small">
              <ArrowForwardIosIcon />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </>
  );
}

interface IMyCurrentAddressProps {
  address: string;
}
function MyCurrentAddress({ address }: IMyCurrentAddressProps) {
  return (
    <InputField
      disabled
      label="현재 내 주소"
      value={address}
      startAdornment={<FmdGoodIcon />}
    />
  );
}

interface IAdressListProps {
  addresses: string[];
  onSelectAddress: SelectAddressHandlerType;
}
function AddressList({ addresses, onSelectAddress }: IAdressListProps) {
  return (
    <List>
      {addresses.map((address) => (
        <AddressItem address={address} onSelectAddress={onSelectAddress} />
      ))}
    </List>
  );
}

interface IAdressItemProps {
  address: string;
  onSelectAddress: SelectAddressHandlerType;
}
function AddressItem({ address, onSelectAddress }: IAdressItemProps) {
  const onClick = () => {
    onSelectAddress(address);
  };
  return (
    <>
      <ListItem button>
        <ListItemText primary={address} onClick={onClick} />
      </ListItem>
      <Divider />
    </>
  );
}

function getAddresses() {
  return [
    "서울시 관악구 낙성대동",
    "서울시 관악구 난곡동",
    "서울시 관악구 난향동",
    "서울시 관악구 남현동",
    "서울시 관악구 대학동",
    "서울시 관악구 미성동",
    "서울시 관악구 보라매동",
    "서울시 관악구 삼성동",
    "서울시 관악구 서림동",
    "서울시 관악구 서원동",
    "서울시 관악구 성현동",
    "서울시 관악구 신림동",
    "서울시 관악구 신사동",
    "서울시 관악구 신원동",
    "서울시 관악구 은천동",
    "서울시 관악구 인헌동",
    "서울시 관악구 조원동",
    "서울시 관악구 중앙동",
    "서울시 관악구 청룡동",
    "서울시 관악구 청림동",
    "서울시 관악구 행운동",
    "서울시 광진구 광장동",
    "서울시 광진구 구의1동",
    "서울시 광진구 구의2동",
    "서울시 광진구 구의3동",
    "서울시 광진구 군자동",
    "서울시 광진구 능동",
    "서울시 광진구 자양1동",
    "서울시 광진구 자양2동",
    "서울시 광진구 자양3동",
    "서울시 광진구 자양4동",
    "서울시 광진구 중곡1동",
    "서울시 광진구 중곡2동",
    "서울시 광진구 중곡3동",
    "서울시 광진구 중곡4동",
    "서울시 광진구 화양동",
    "서울시 마포구 공덕동",
    "서울시 마포구 대흥동",
    "서울시 마포구 도화동",
    "서울시 마포구 망원1동",
    "서울시 마포구 망원2동",
    "서울시 마포구 상암동",
    "서울시 마포구 서강동",
    "서울시 마포구 서교동",
    "서울시 마포구 성산1동",
    "서울시 마포구 성산2동",
    "서울시 마포구 신수동",
    "서울시 마포구 아현동",
    "서울시 마포구 연남동",
    "서울시 마포구 염리동",
    "서울시 마포구 용강동",
    "서울시 마포구 합정동",
    "서울시 서대문구 남가좌1동",
    "서울시 서대문구 남가좌2동",
    "서울시 서대문구 북가좌1동",
    "서울시 서대문구 북가좌2동",
    "서울시 서대문구 북아현동",
    "서울시 서대문구 신촌동",
    "서울시 서대문구 연희동",
    "서울시 서대문구 천연동",
    "서울시 서대문구 충현동",
    "서울시 서대문구 홍은1동",
    "서울시 서대문구 홍은2동",
    "서울시 서대문구 홍제1동",
    "서울시 서대문구 홍제2동",
    "서울시 서대문구 홍제3동",
  ];
}
