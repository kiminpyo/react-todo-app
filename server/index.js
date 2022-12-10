const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/middleware");
const cors = require("cors");
const e = require("express");

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
    .connect(config.mongoURI)
    .then(() => console.log("db connected"))
    .catch((err) => console.error(err));

app.get("/api", (req, res) => {
    res.json({ is: true });
});

app.post("/api/users/register", (req, res) => {
    const user = new User(req.body);

    //가져온 후 저장
    user.save((err, userInfo) => {
        console.log(err, userInfo);
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        });
    });
});

app.post("/api/users/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다.",
            });
        }
        console.log(user, "<== findone의 유저 내생각에 ");

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호 틀림",
                });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
});
app.get("/api/users/auth", auth, (req, res) => {
    res.status(200).send({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image,
    });
});

app.get("/api/users/logout", auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            token: "",
        },
        (err, user) => {
            if (err) return res.json({ success: false, err });
            res.status(200).send({
                success: true,
            });
        }
    );
});
// app.get("/api/news", function (req, res) {
//     var api_url = "https://openapi.naver.com/v1/search/news.json?query=1";
//     var request = require("request");
//     var options = {
//         url: api_url,
//         headers: {
//             "X-Naver-Client-Id": "JI2qtskG0bzenNb33Sww",
//             "X-Naver-Client-Secret": "Lph6IhCq0o",
//         },
//     };
//     request.get(options, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
//             res.end(body);
//         } else {
//             res.status(response.statusCode).end();
//             console.log("error = " + response.statusCode);
//         }
//     });
// });
// app.get("/api/news", function (req, res) {
//     const url = "https://openapi.naver.com/v1/search/news.json?query=북한";
//     const https = require("https");

//     const request = https.request(
//         url,
//         {
//             headers: {
//                 "X-Naver-Client-Id": "JI2qtskG0bzenNb33Sww",
//                 "X-Naver-Client-Secret": "Lph6IhCq0o",
//             },
//         },
//         (response) => {
//             let data = "";
//             response.on("data", (chunk) => {
//                 data = data + chunk.toString();
//                 console.log(chunk);
//             });

//             response.on("end", () => {
//                 const body = JSON.parse(data);

//                 res.send({ data: data });
//             });
//         }
//     );
//     request.on("err", (error) => {
//         console.log("error", error);
//     });
//     request.end();
// });

app.listen(5000);
