import dayjs from 'dayjs';

export function formatDate(inputDate: string, template = 'YYYY-MM-DD A h:mm') {
  return dayjs(inputDate).format(template);
}
