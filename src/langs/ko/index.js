import commons from "./commons";
import errors from "./errors";
import validations from "./validations";

const ko = { ...commons, ...validations, ...errors };

export default ko;