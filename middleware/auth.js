const jwt = require('jsonwebtoken');

exports.authentication = (req, res, next) => {
    const token = req.header('token');
    console.log(token);
    // kiểm tra token 
    if (!token) {
        return res.status(401).json({
            status: false,
            message: 'Chưa được phép truy cập, vui lòng cung cấp token'
        })
    }
    jwt.verify(token, "FPT Polytechnic", (err, user) => {
        // kiểm tra token hợp lệ hay không, token đã hết hạn hay chưa
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Token không hợp lệ hoặc đã hết hạn sử dụng"
            })
        }
        req.user = user;
        console.log('user verify' + user);
        next();
    })
}