export function formatDateRange(timestamp, dayRange=5) {
  const startDate = new Date(timestamp * 1000);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + dayRange);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  const formattedStartDate = formatDate(startDate);
  const formattedYear = startDate.toLocaleDateString('en-US', { year: 'numeric' });

  return `${formattedStartDate.split(' ')[0]} ${startDate.getDate()}-${endDate.getDate()}, ${formattedYear}`;
}

