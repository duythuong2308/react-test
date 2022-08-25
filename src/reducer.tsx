export const initialState = {
    questions: [{questionText: "Question", questionType:"radio", option: [{optionText: "Option 1"}], open:true, required:false}],
    questionType: "radio",
    doc_name: "Mẫu không có tiêu đề",
    doc_desc: "Mô tả biểu mẫu",
}

export const actionTypes = {
    SET_QUESTIONS : "SET_QUESTIONS",
    CHANGE_TYPE : "CHANGE_TYPE",
    SET_DOC_NAME: "SET_DOC_NAME",
    SET_DOC_DESC: "SET_DOC_DESC"

}

const reducer = (state=initialState, action:any) => {
    switch(action.type) {
        case actionTypes.SET_QUESTIONS :
            return {
                ...state, questions:action.questions,
            };
        case actionTypes.CHANGE_TYPE :
            return {
                ...state, questionType:action.questionType,
            };
        case actionTypes.SET_DOC_NAME :
            return {
                ...state, doc_name:action.doc_name,
            };
        case actionTypes.SET_DOC_DESC:
            return {
                ...state, doc_desc:action.doc_desc,
            };
        default:
            return state;
    }
}

export default reducer;