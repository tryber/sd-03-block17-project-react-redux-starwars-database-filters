import { CHANGE_VALUES, CREATE_NUMERIC_FILTER, REMOVE_FILTER } from '../actions/NumFilterActions';
import { ON_CHANGE_ORDER, ACTIVATE_ORDER } from '../actions/orderActions';
import { TYPE_NAME } from '../actions/SearchTextAction';

const allValuesSetted = (obj) => (Object.values(obj).every((value) => value !== ''));

const defaultNumFilterElem = {
  column: '',
  comparison: '',
  value: '',
};

export const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
  inProgress: defaultNumFilterElem,
  orderInProgerss: { column: 'Name', sort: 'ASC' },
};

function filtersReducer(filters = INITIAL_STATE, action) {
  const { filterByNumericValues: numFilters, inProgress, orderInProgerss } = filters;
  switch (action.type) {
    case TYPE_NAME: return { ...filters, filterByName: { name: action.text } };
    case CHANGE_VALUES:
      return ({ ...filters, inProgress: { ...inProgress, [action.filter]: action.value } });
    case CREATE_NUMERIC_FILTER:
      return (allValuesSetted(inProgress)) ? ({
        ...filters,
        filterByNumericValues: [...numFilters, inProgress],
        inProgress: defaultNumFilterElem,
      }) : filters;
    case REMOVE_FILTER:
      return ({
        ...filters,
        filterByNumericValues:
          [ ...numFilters.slice(0, action.id), ...numFilters.slice(action.id + 1) ],
      });
    case ON_CHANGE_ORDER:
      return ({ ...filters, orderInProgerss: { ...orderInProgerss, [action.prop]: action.value } });
    case ACTIVATE_ORDER: return ({ ...filters, order: orderInProgerss });
    default: return filters;
  }
}

export default filtersReducer;
