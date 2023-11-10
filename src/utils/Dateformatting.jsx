function DateFormating(inputISODate) {
  // Create a Date object from the ISO 8601 date string
  const date = new Date(inputISODate);

  // Define options for formatting the date
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format the date as "Month Day Year"
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export default DateFormating;
