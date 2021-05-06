export default function clearPhoneNumbers(number) {
  // 1st replace: удалить пробелы, скобки и дефисы ([^\d] нельзя использовать, т.к. удалит и плюсы)
  // 2nd replace: если первым идет просто 8, то заменить на +7
  return number.replace(/[\s)(-]/g, '').replace(/^8/, '+7');
}
