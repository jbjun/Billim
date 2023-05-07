// 외부모듈
import { useSelector } from "react-redux";
import { CircularProgress, Backdrop } from "@mui/material";

// 내부모듈
import { RootState } from "@store/index";

const GlobalSpinner = () => {
  const isOpen = useSelector((state: RootState) => state.spinner.isOpen);

  return (
    <Backdrop open={isOpen} style={{ zIndex: 9999 }}>
      <CircularProgress />
    </Backdrop>
  );
};

export default GlobalSpinner;
