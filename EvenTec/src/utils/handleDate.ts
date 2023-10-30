// Date format
import moment from "moment";
import "moment/locale/es"; // Import spanish language

export const handleDate = (date: string | undefined) => {
  return moment(date).locale("es").format("LLLL");
};
