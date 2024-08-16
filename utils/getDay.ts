import {addDays, subDays, format } from 'date-fns';

export function getCurrentDay(): {date:string, day:string} {
  const today = new Date();
  const formattedDay = {
  date:  format( today, 'yyyy-MM-dd'),
  day: format(today, 'eeee')
 };
  return formattedDay;
}


export function getTomorrowDay(day: number): {date:string, day:string} {
    const tomorrow = addDays(new Date(), day);
    const formattedDay = {
    date:  format( tomorrow, 'yyyy-MM-dd'),
    day: format(tomorrow, 'eeee')
   };
    return formattedDay;
  }


  export function getTYesterdayDay(day: number): {date:string, day:string} {
    const yesterday = subDays(new Date(), Math.abs(day));
    const formattedDay = {
    date:  format( yesterday, 'yyyy-MM-dd'),
    day: format(yesterday, 'eeee')
   };
    return formattedDay;
  }