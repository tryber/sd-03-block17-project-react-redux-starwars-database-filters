import { INPUT_NAME } from '../Components/Types';

const filterInputName = (state = [], action) => {
  switch (action.name) {
    case INPUT_NAME:
      return {
        ...state,
        filters: [
          {
            name: action.name,
          },
          {
            numericValues: {
              column: '',
              comparison: '',
              value: '',
            },
          },
        ],
        data: action.data,
      };
    default:
      return state;
  }
}

export default filterInputName;
