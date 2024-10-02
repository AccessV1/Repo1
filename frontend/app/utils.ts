
export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters

  // Match and format the cleaned number with spaces
  const match = cleaned.match(/^(\d{1,3})(\d{1,3})?(\d{1,4})?/);

  if (match) {
    const part1 = match[1] ? `${match[1]}` : '';
    const part2 = match[2] ? ` ${match[2]}` : '';
    const part3 = match[3] ? ` ${match[3]}` : '';
    return `${part1}${part2}${part3}`.trim(); // Trim any extra spaces
  }
  return phoneNumber;
};



