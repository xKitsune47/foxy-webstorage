const dateFormatter = (date: Date | number): string => {
  const convertedDate = new Date(date);
  const today = new Date();

  const isSameDay =
    convertedDate.getFullYear() === today.getFullYear() &&
    convertedDate.getMonth() === today.getMonth() &&
    convertedDate.getDate() === today.getDate();

  const hour = String(convertedDate.getHours()).padStart(2, "0");
  const minutes = String(convertedDate.getMinutes()).padStart(2, "0");

  if (isSameDay) {
    return `Today, ${hour}:${minutes}`;
  }

  const day = String(convertedDate.getDate()).padStart(2, "0");
  const month = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const year = convertedDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export default dateFormatter;
