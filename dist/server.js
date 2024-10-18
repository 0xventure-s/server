"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
async function connectDB() {
    try {
        await db_1.default.authenticate();
        db_1.default.sync();
        console.log("Todo un exito papu");
    }
    catch (error) {
        console.log(error);
    }
}
connectDB();
exports.server = (0, express_1.default)();
const corsOption = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true);
        }
        else {
            callback(new Error("Error en cors capo"));
        }
    },
};
exports.server.use((0, cors_1.default)(corsOption));
exports.server.use(express_1.default.json());
exports.server.use("/api/productos", router_1.router);
//# sourceMappingURL=server.js.map