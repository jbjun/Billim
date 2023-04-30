import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldValues,
  UseFormTrigger,
} from "react-hook-form";

// 내부모듈
import { IProductRegisterState } from "@container/home/register";

interface IPriceInputContainer {
  register: UseFormRegisterReturn<"price">;
  price: number;
  setValue: UseFormSetValue<IProductRegisterState>;
  trigger?: UseFormTrigger<FieldValues>;
}

const MAX_PRICE = 99999999;

const getNumberTypePrice = (price: string) => {
  const removeCommaPrice = price.replace(/,/g, "");
  const newPrice = Number.isNaN(removeCommaPrice)
    ? 0
    : Number(removeCommaPrice);
  return newPrice;
};

const PriceInputContainer = ({ register, setValue }: IPriceInputContainer) => {
  const [displayPrice, setDisplayPrice] = useState("0");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const price = getNumberTypePrice(displayPrice);
    if (price > MAX_PRICE) setDisplayPrice(MAX_PRICE.toLocaleString());
    if (price === 0) setChecked(true);
    else setChecked(false);
  }, [displayPrice]);

  const handleCheckBox = () => {
    if (!checked) {
      setDisplayPrice("0");
    }
  };

  const handleDisplayPrice = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;
    const price = getNumberTypePrice(value);
    setDisplayPrice(price.toLocaleString());
    setValue("price", price);
  };

  return (
    <>
      <TextField
        sx={{ display: "none" }}
        {...register}
        type="number"
        variant="standard"
        placeholder="대여료"
      />
      <TextField
        type="text"
        value={displayPrice}
        variant="standard"
        placeholder="대여료"
        onChange={handleDisplayPrice}
        InputProps={{
          endAdornment: (
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onClick={handleCheckBox}
                  color="primary"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: "18px" } }}
                />
              }
              label="무료대여"
              sx={{
                "& .MuiFormControlLabel-root": { marginRight: 0 },
                "& .MuiTypography-root": {
                  width: "52px",
                  fontSize: "14px",
                  color: "#666666",
                },
              }}
            />
          ),
        }}
      />
    </>
  );
};

export default PriceInputContainer;
