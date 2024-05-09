// timeFormatByKey params: object, keys: string[]
// if the key is in the params, it will be formatted to yyyy-mm-ddThh:mm:ssZ using createDateTime function.
export default function timeFormatByKey(params: object, keys: string[]) {
  try {
    const copyParam: { [key: string]: any } = structuredClone(params);
    if (keys.length === 0) return copyParam;
    const copyKey = keys.slice();
    for (let x of keys) {
      if (x in copyParam) {
        copyParam[x] = createDateTime(copyParam[x]);
      }
    }
    return copyParam;
  } catch (error) {
    throw error;
  }
}
function createDateTime(dateObj: { [key: string]: string }): string {
  const year = parseInt(dateObj.year);
  const month = parseInt(dateObj.month) - 1; // Months are zero-based in JavaScript
  const day = dateObj.day ? parseInt(dateObj.day) : 1; // Default to 1 if day is not provided
  const hour = dateObj.hour ? parseInt(dateObj.hour) : 0; // Default to 0 if hour is not provided
  const minute = dateObj.minute ? parseInt(dateObj.minute) : 0; // Default to 0 if minute is not provided
  const second = dateObj.seconds ? parseInt(dateObj.seconds) : 0; // Default to 0 if seconds is not provided
  const millisecond = dateObj.milliseconds ? parseInt(dateObj.milliseconds) : 0; // Default to 0 if milliseconds is not provided

  return formatDateToISOString(
    new Date(year, month, day, hour, minute, second, millisecond)
  );
}

function formatDateToISOString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const isoString = `${year}-${day}-${month}T${hours}:${minutes}:${seconds}Z`;
  return isoString;
}
