import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const formatDate = (string) => {
  const date = parseISO(string);
  return format(date, 'd MMM, HH:mm');
};

export default formatDate;
