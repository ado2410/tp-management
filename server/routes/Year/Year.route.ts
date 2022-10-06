import adminMiddleware from "../../middleware/adminMiddleware";
import loginMiddleware from "../../middleware/loginMiddleware";
import YearModel from "../../models/YearModel";
import templateRoute from "../template/template.route";
import { insertAndUpdateFields, insertAndUpdateRules, listSearch } from "./Year.constants";

export default templateRoute(YearModel, {
    middleware: [loginMiddleware, adminMiddleware],
    list: {
        search: listSearch,
    },
    insert: {
        rules: insertAndUpdateRules,
        fields: insertAndUpdateFields,
    },
    update: {
        rules: insertAndUpdateRules,
        fields: insertAndUpdateFields,
    },
});