import moment from 'moment';
import numeral from 'numeral';

const formatDate = (value) => {
  return moment(new Date(value)).format('ll');
}

const formatCurrency = (value) => {
  return numeral(value).format('$0,0.00');
}

export {
  formatDate,
  formatCurrency
};
