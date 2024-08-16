import { format } from 'date-fns';

export function getCurrentDay(): {date:string, day:string} {
  const today = new Date();
  const formattedDay = {
  date:  format( today, 'yyyy-MM-dd'),
  day: format(today, 'eeee')
 };
  return formattedDay;
}