import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "@mui/material/Input";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import LaunchIcon from "@mui/icons-material/Launch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ShortTextIcon from "@mui/icons-material/ShortText";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FolderIcon from "@mui/icons-material/Folder";

const Form = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      questionType: "",
      options: [{ optionText: "" }],
      answer: false,
      answerKey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  function changeQuestion(text: any, i: any) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }

  function addQuestionType(i: any, type: any) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;

    setQuestions(qs);
  }

  function changeOptionValue(text: any, i: any, j: any) {
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;

    setQuestions(optionsQuestion);
    console.log(optionsQuestion);
  }

  function setAnswer(ans: any, qs: any) {
    var Questions = [...questions];
    Questions[qs].answerKey = ans;

    setQuestions(Questions);
    console.log(qs + " " + ans);
  }

  function setPoints(points: any, qs: any) {
    var Questions = [...questions];
    Questions[qs].points = points;

    setQuestions(Questions);
    console.log(qs + " ");
  }

  function doneAnswer(i: any) {
    var answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion);
  }

  function addAnswer(i: any) {
    var answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setQuestions(answerOfQuestion);
  }

  function addOption(i: any) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option" + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
      console.log("Max 5 options");
    }

    setQuestions(optionsOfQuestion);
  }

  function removeOption(i: any, j: any) {
    var RemoveOptionQuestion = [...questions];
    if (RemoveOptionQuestion[i].options.length > 1) {
      RemoveOptionQuestion[i].options.splice(j, 1);
      setQuestions(RemoveOptionQuestion);
      console.log(i + "__" + j);
    }
  }

  function copyQuestion(i: any) {
    let qs = [...questions];
    var newQuestion = qs[i];

    setQuestions([...questions, newQuestion]);
  }

  function deleteQuestion(i: any) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function requiredQuestion(i: any) {
    var reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;

    console.log(reqQuestion[i].required + " " + i);
    setQuestions(reqQuestion);
  }

  function addMoreQuestion() {
    setQuestions([
      ...questions,
      {
        questionText: "",
        questionType: "",
        options: [{ optionText: "" }],
        answer: false,
        answerKey: "",
        points: 0,
        open: true,
        required: false,
      },
    ]);
  }

  function questionUI() {
    return questions.map((ques, i) => (
      <div key={i}>
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "add border" : ""}
        >
          <div className="grid grid-col-3 grid-flow-dense">
            {!questions[i].answer ? (
              <AccordionDetails>
                <div className=" inline-flex items-center justify-between w-[800px]">
                  <input
                    type="text"
                    placeholder="Question"
                    value={ques.questionText}
                    onChange={(e) => {
                      changeQuestion(e.target.value, i);
                    }}
                    className="w-[400px] bg-gray-100 h-[50px] text-xl"
                  />
                  <IconButton>
                    <CropOriginalIcon className="text-[#5f6368]" />
                  </IconButton>
                  <Select className="text-[#5f6368] text-base w-[290px]">
                    <MenuItem
                      value="text"
                      onClick={(e) => {
                        addQuestionType(i, "text");
                      }}
                    >
                      <FormatAlignLeftIcon className="mr-2 text-2xl p-1" />
                      Đoạn văn bản
                    </MenuItem>

                    <MenuItem
                      value="radio"
                      onClick={(e) => {
                        addQuestionType(i, "radio");
                      }}
                    >
                      <RadioButtonCheckedIcon className="mr-2 text-2xl p-1" />
                      Trắc Nghiệm
                    </MenuItem>

                    <MenuItem
                      value="checkbox"
                      onClick={(e) => {
                        addQuestionType(i, "checkbox");
                      }}
                    >
                      <CheckBoxIcon className="mr-2 text-2xl p-1" />
                      Hộp kiểm
                    </MenuItem>
                  </Select>
                </div>

                {ques.options.map((op, j) => (
                  <div key={j}>
                    {ques.questionType != "text" ? (
                      <input type={ques.questionType} className="mr-2" />
                    ) : (
                      <ShortTextIcon className="mr-2" />
                    )}
                    <div className="inline-flex justify-between w-[600px]">
                      <input
                        type="text"
                        placeholder="option"
                        value={ques.options[j].optionText}
                        className="w-[400px] focus:bg-slate-50 ml-1"
                        onChange={(e) => {
                          changeOptionValue(e.target.value, i, j);
                        }}
                      />
                    </div>

                    <CropOriginalIcon className="text-[#5f6368]" />

                    <IconButton aria-label="delete">
                      <CloseIcon
                        onClick={() => {
                          removeOption(i, j);
                        }}
                      />
                    </IconButton>
                  </div>
                ))}

                {ques.options.length < 5 ? (
                  <div>
                    <FormControlLabel
                      disabled
                      control={
                        ques.questionType != "text" ? (
                          <Input
                            type={ques.questionType}
                            color="primary"
                            inputProps={{ "aria-label": "secondary checkbox" }}
                            className="ml-2.5"
                            disabled
                          />
                        ) : (
                          <ShortTextIcon className="ml-2.5" />
                        )
                      }
                      label={
                        <div>
                          <input
                            type="text"
                            className="text-sm w-[110px] ml-2.5 "
                            placeholder="Thêm câu trả lời"
                          />
                          <Button
                            size="small"
                            className="text-[#4285f4] text-sm font-semibold "
                            onClick={() => {
                              addOption(i);
                            }}
                          >
                            Thêm lựa chọn
                          </Button>
                        </div>
                      }
                    />
                  </div>
                ) : (
                  ""
                )}

                <div className="inline-flex items-center">
                  <div className="w-[150px] border-t-2 border-[#4285f4]">
                    <Button
                      size="small"
                      className="text-[#4285f4] text-xs font-semibold"
                      onClick={() => {
                        addAnswer(i);
                      }}
                    >
                      <LaunchIcon className=" mr-2" />
                      Đáp án
                    </Button>
                  </div>
                  <div className="ml-[380px] border-t-2">
                    <IconButton
                      aria-label="copy"
                      onClick={() => {
                        copyQuestion(i);
                      }}
                    >
                      <FilterNoneIcon />
                    </IconButton>

                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteQuestion(i);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>

                    <FormControlLabel
                      value="required"
                      control={
                        <Switch
                          color="primary"
                          onClick={() => {
                            requiredQuestion(i);
                          }}
                        />
                      }
                      label="Bắt buộc"
                      labelPlacement="start"
                    />

                    <IconButton aria-label="more">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              </AccordionDetails>
            ) : (
              <AccordionDetails>
                <div>
                  <h2 className="font-bold text-xl pb-1">
                    Chọn câu trả lời đúng
                  </h2>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      placeholder="Questions"
                      value={ques.questionText}
                      disabled
                    />
                    <input
                      type="number"
                      min="0"
                      step="1"
                      placeholder="0"
                      className=" ml-[650px]"
                      onChange={(e) => {
                        setPoints(e.target.value, i);
                      }}
                    />
                  </div>

                  {ques.options.map((op, j) => (
                    <div key={j}>
                      <div className="flex">
                        <div className="">
                          <label
                            className=" text-sm"
                            onClick={() => {
                              setAnswer(ques.options[j].optionText, i);
                            }}
                          >
                            {ques.questionType != "text" ? (
                              <input
                                type={ques.questionType}
                                name={ques.questionText}
                                value="thêm lựa chọn"
                                required={ques.required}
                                className=" mr-2.5 mb-2.5 mt-1.5"
                              />
                            ) : (
                              <ShortTextIcon className="mr-2.5" />
                            )}

                            {ques.options[j].optionText}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="">
                    <Button
                      size="small"
                      className="text-[#4285f4] text-sm mt-3 font-semibold"
                    >
                      <FolderIcon className=" text-xl mr-2" />
                      Thêm Feedback
                    </Button>
                  </div>
                  <div className="">
                    <Button
                      variant="outlined"
                      color="primary"
                      className="text-[#4285f4] text-sm mt-3 font-semibold"
                      onClick={() => {
                        doneAnswer(i);
                      }}
                    >
                      Xong
                    </Button>
                  </div>
                </div>
              </AccordionDetails>
            )}

            {!ques.answer ? (
              <div className="flex-col absolute bg-gray-200 w-[40px] h-[160px] rounded-lg ml-[840px] mt-3">
                <IconButton onClick={() => addMoreQuestion()}>
                  <AddCircleIcon />
                </IconButton>
                <IconButton>
                  <TextFieldsIcon />
                </IconButton>
                <IconButton>
                  <CropOriginalIcon />
                </IconButton>
                <IconButton>
                  <SmartDisplayIcon />
                </IconButton>
              </div>
            ) : (
              ""
            )}
          </div>
        </Accordion>
      </div>
    ));
  }

  return (
    <div className="">
      {/* Header Section */}
      <div>
        <div className="inline-flex items-center space-x-2 ml-5 pt-2">
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
            <Tab label="Câu hỏi" className="font-sans text-xs"></Tab>
            <Tab label="Câu trả lời" className="font-sans text-xs"></Tab>
          </Tabs>
        </Box>
      </div>

      {/* Form Section */}
      <div className="bg-[#ede7f6] relative">
        <div className="grid  place-items-center pt-2">
          {/* Title Section */}
          <div className="grid items-center justify-center box-border border-2 rounded-lg border-t-8 border-blue-800 w-[900px] bg-white pb-3">
            <Input
              defaultValue="Mẫu không có tiêu đề"
              className="w-[880px] text-3xl"
            />
            <Input defaultValue="Mô tả biểu mẫu" className="" />
          </div>
        </div>

        <div className="grid grid-rows-2 place-items-center pt-3">
          {/* Questions Section */}
          <div className=" box-border border-2 rounded-lg border-l-4 border-blue-500 w-[900px] bg-white ">
            {questionUI()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
