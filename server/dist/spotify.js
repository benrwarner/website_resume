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
exports.getRecentTrack = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let accessToken = "";
let lastRefreshedAt = 0;
const refreshAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios_1.default.post("https://accounts.spotify.com/api/token", new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        }), {
            headers: {
                Authorization: "Basic " +
                    Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        accessToken = response.data.access_token;
        lastRefreshedAt = Date.now();
        console.log("✔️ Refreshed access token.");
    }
    catch (err) {
        console.error("❌ Failed to refresh token:", ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || err.message);
        throw new Error("Token refresh failed");
    }
});
const getRecentTrack = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (!accessToken || Date.now() - lastRefreshedAt > 300000) {
            console.log("🔄 Access token expired or missing. Refreshing...");
            yield refreshAccessToken();
        }
        const response = yield axios_1.default.get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.items[0];
    }
    catch (err) {
        console.error("❌ Failed to fetch track:", ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || err.message);
        throw new Error("Failed to fetch track");
    }
});
exports.getRecentTrack = getRecentTrack;
