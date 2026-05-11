const formatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
});

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) return "Unknown date";
  return formatter.format(date);
};