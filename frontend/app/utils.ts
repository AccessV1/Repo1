/**
 * @function formatPhoneNumber
 * @description Formats a phone number by removing non-numeric characters and adding spaces at appropriate positions.
 * This function cleans the input and splits it into groups for better readability, e.g. "1234567890" becomes "123 456 7890".
 * 
 * @param {string} phoneNumber - The phone number string to be formatted.
 * 
 * @returns {string} The formatted phone number with spaces between groups of digits.
 */
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


export const serializePhoneNumber = (phoneNumber: string, countryCode: string) => {
  return  `+${countryCode}${phoneNumber.replace(/\s+/g, '')}`
}

export const isNumeric = (input: string): boolean => {
  const regex = /^\d+$/; 
  return regex.test(input);
};