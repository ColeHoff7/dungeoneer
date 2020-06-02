"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecret = void 0;
const secrets = {
    dbUri: "mongodb://localhost:27017/dungeoneer_dev"
};
exports.getSecret = key => secrets[key];
//# sourceMappingURL=secrets.js.map