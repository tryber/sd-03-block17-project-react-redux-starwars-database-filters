export const PROCESS_API_DATA = 'PROCESS_API_DATA';
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_NUMBER = 'FILTER_NUMBER';
export const REM_FILTER = 'REM_FILTER';

export const requestData = () => (
  {
    type: REQUEST_API_DATA,
  }
);

export const receiveData = (data) => (
  {
    type: PROCESS_API_DATA,
    results: data.results,
    count: data.count,
    next: data.next,
  }
);

export const filterName = (filterByName) => (
  {
    type: FILTER_NAME,
    filterByName,
  }
);

export const filterNumber = (...params) => (
  {
    type: FILTER_NUMBER,
    params,
  }
);

export const removeFilter = (toBeRemoved) => (
  {
    type: REM_FILTER,
    toBeRemoved,
  }
);
