"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const spotify_1 = require("./spotify");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/api/spotify", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const track = yield (0, spotify_1.getRecentTrack)();
        res.json(track);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to fetch track" });
    }
}));
const PORT = process.env.PORT || 5000;
app.listen(5000, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/BenjaminWarnerResume2025", (req, res) => {
    const filePath = path_1.default.join(__dirname, "files", "BenjaminWarnerResume2025.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.sendFile(filePath);
});
