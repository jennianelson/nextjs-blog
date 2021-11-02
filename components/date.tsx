import { parseISO, format } from 'date-fns';
// https://date-fns.org/v2.16.1/docs/format

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
