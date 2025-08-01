const bcryptjs = require("bcryptjs")

const health = async (req , resp)=>{
    return resp.json({message : "Health-Ok"})
}

const cookieTest = async (req, resp) => {
    const cookie = req.cookies.dumb_cookie;

    if (!cookie) {
        return resp.status(400).json({ error: "No cookie found" })
    }

    const hashed = await bcryptjs.hash(cookie, 12)

    return resp.json({ result: hashed , secret : process.env.secret })
}

module.exports = {
    health,
    cookieTest
}