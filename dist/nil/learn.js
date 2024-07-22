"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
const path_to_your_error_handler_1 = require("path-to-your-error-handler");
const path_to_your_mail_function_1 = require("path-to-your-mail-function");
const path_to_your_token_function_1 = require("path-to-your-token-function");
const path_to_your_user_model_1 = require("path-to-your-user-model");
const createUser = async (req, res, next) => {
    try {
        const { name, email, password, avatar } = req.body;
        const userEmail = await path_to_your_user_model_1.User.findOne({ email });
        if (userEmail) {
            return next(new path_to_your_error_handler_1.ErrorHandler("User already exists", 400));
        }
        const myCloud = await cloudinary_1.default.v2.uploader.upload(avatar, {
            folder: "avatars",
        });
        const user = {
            name: name,
            email: email,
            password: password,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
        };
        const activationToken = (0, path_to_your_token_function_1.createActivationToken)(user);
        const activationUrl = `http://localhost:3000/api/v2/user/activation/${activationToken}`;
        try {
            await (0, path_to_your_mail_function_1.sendMail)({
                email: user.email,
                subject: "Activate your account",
                message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
            });
            res.status(201).json({
                success: true,
                message: `please check your email:- ${user.email} to activate your account!`,
            });
        }
        catch (error) {
            return next(new path_to_your_error_handler_1.ErrorHandler(error.message, 500));
        }
    }
    catch (error) {
        console.error("Error object:", error);
        console.error("Error message:", error.message);
        return next(new path_to_your_error_handler_1.ErrorHandler(error.message, 400));
    }
};
exports.default = createUser;
