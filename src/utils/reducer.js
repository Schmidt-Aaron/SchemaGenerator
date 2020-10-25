const initialState = {}; // for ESLint error

const reducer = (state, action) => {
  const { name, value, index, code, msg, error } = action;
  // console.log(
  //   `reducer call: state:${state}, action:${action}, index:${index}`
  // );
  switch (action.type) {
    case "RESET":
      return {
        ...initialState,
      };
    case "ADD_FAQ":
      return {
        ...state,
        questions: [...state.questions, { id: state.n + 1, value: "" }],
        answers: [...state.answers, { id: state.n + 1, value: "" }],
        n: (state.n = state.questions.length - 1),
      };
    case "ARRAY_UPDATE":
      const newArr = [...state[name]];
      newArr.find((item) => item.id === index).value = value;
      return {
        ...state,
        [name]: newArr,
        schema: code,
      };
    case "SINGLE_UPDATE":
      return {
        ...state,
        [name]: value,
      };
    case "ERROR_UPDATE":
      return {
        ...state,
        msg,
        error,
      };

    default:
      return state;
  }
};

export default reducer;
