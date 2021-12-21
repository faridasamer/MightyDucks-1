import  formatDate  from "../API/formatDate.js";

export const compareDate = (date1, date2) => {
    const date1Formatted = formatDate(date1).substring(0, 10);
    const date2Formatted = formatDate(date2).substring(0, 10);
    if (date1Formatted === date2Formatted) {
        return true;
    } else {
        return false;
    }
};

export default compareDate;