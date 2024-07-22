"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pgconnect_1 = require("./utility/pgconnect");
const body_parser_1 = __importDefault(require("body-parser"));
const taskroute_1 = __importDefault(require("./routes/taskroute"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, pgconnect_1.syncDatabase)();
app.use(express_1.default.json());
app.use('/api', taskroute_1.default);
app.use(body_parser_1.default.urlencoded({ extended: true, limit: "50mb" }));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
});
