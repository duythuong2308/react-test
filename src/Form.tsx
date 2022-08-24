import Image from "next/image";
import React from "react";

import Input from "@mui/material/Input";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import { IconButton } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Form = () => {
  return (
    <div className="">
      <div>
        <div className="inline-flex items-center space-x-2 ml-5">
          <Image
            src={"/images/formlogo.svg"}
            alt="Form logo"
            width={50}
            height={50}
          />
          <Input defaultValue="Mẫu không có tiêu đề" />
        </div>

        <Box>
          <Tabs centered>
            <Tab label="Câu hỏi"></Tab>
            <Tab label="Câu trả lời"></Tab>
          </Tabs>
        </Box>
      </div>

      <div className="bg-[#ede7f6]">
        <div className="grid place-items-center ">
          <div className="grid items-center justify-center box-border border-2 rounded border-t-8 border-blue-800 w-[700px] bg-white pb-3">
            <Input
              defaultValue="Mẫu không có tiêu đề"
              className="w-[680px] text-3xl"
            />
            <Input defaultValue="Mô tả biểu mẫu" className="" />
          </div>
        </div>

        <div className="grid place-items-center pt-3">
          <div className="inline-flex items-center justify-between box-border border-2 rounded border-l-4 border-blue-500 w-[700px] bg-white ">
            <input
              type="text"
              placeholder="Câu hỏi không có tiêu đề"
              className="w-[350px] h-[55px]"
            />

            <IconButton>
              <InsertPhotoRoundedIcon className="text-gray-500" />
            </IconButton>

            <FormControl variant="filled" sx={{ m: 1, minWidth: 230 }}>
              <InputLabel id="demo-simple-select-filled-label"></InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <AlignHorizontalLeftIcon className="mr-2 text-lg p-1" />
                  Trả lời ngắn
                </MenuItem>
                <MenuItem value="">
                  <FormatAlignLeftIcon className="mr-2 text-lg p-1" />
                  Đoạn văn bản
                </MenuItem>
                <MenuItem value="">
                    <RadioButtonCheckedIcon className="mr-2 text-lg p-1"/>
                    Trắc Nghiệm
                    </MenuItem>
                <MenuItem value="">
                    <CheckBoxIcon className="mr-2 text-lg p-1"/>
                    Hộp kiểm
                </MenuItem>
                <MenuItem value="">
                    <ArrowDropDownCircleIcon className="mr-2 text-lg p-1"/>
                    Menu thả xuống
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
