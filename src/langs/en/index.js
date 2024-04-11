import commons from "./commons";
import errors from "./errors";
import validations from "./validations";

const en = { ...commons, ...validations, ...errors };

export default en;