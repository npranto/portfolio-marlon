/**
 * Given a string, trims spaces from each end and replaces multiple single
 * spaces, tabs and newlines with single space
 * @param {String} str - A string
 * @returns {String} - A trimmed string
 */
const removeExtraSpaces = (str = '') => {
  return str.trim().replace(/\s\s+/g, ' ');
};

export default removeExtraSpaces;
