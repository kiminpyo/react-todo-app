const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlenghth: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        maxlength: 100,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExpr: {
        type: Number,
    },
   
});
// 유저를 저장하기 전에
userSchema.pre("save", function (next) {
    // this는 userSchema
    const user = this;

    // 비밀번호만 바꿀때
    if (user.isModified("password")) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});
userSchema.methods.comparePassword = function (plainPassword, cb) {
    //plain password 와 해쉬처리된 비밀번호 비교.
    console.log(this + "<=== methods this")
    console.log(this.password)
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
userSchema.methods.generateToken = function (cb) {
    const user = this;
    //jsonwebtoken 을 이용해서 jsonwebtoken생성
    const token = jwt.sign(user._id.toHexString(), "secretToken");

    // user._id + 'secretToken' = token
    // -> 'secretToken' -> user._id의 과정

    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};

userSchema.statics.findByToken= function(token,cb ){
    const User = this;
    console.log(this, "statics this") 
    console.log(User,"User")

    jwt.verify(token, 'secretToken', function(err, decoded){
        //유저 아이디를 이용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        User.findOne({"_id": decoded, "token": token}, function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })


}


const User = mongoose.model("User", userSchema);
module.exports = { User };
