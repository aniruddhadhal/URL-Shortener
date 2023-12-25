const urlModel = require('../models/urlModel')
const shortId = require('shortid');




const handalurlcontroller = async(req, res) => {
    try {
        const { userId, longurl } = req.body;
        const shortUrlId = shortId.generate();

        const urlsend = new urlModel({
            userId,
            longurl,
            shorturl: shortUrlId
        });

        await urlsend.save();

        res.json({
            status: true,
            shorturl: `http://localhost:8000/${shortUrlId}`
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Something went wrong',
            error
        });
    }
};
const handalshorturlcontroller = async(req, res) => {
        const { url } = req.params;

        const urldata = await urlModel.findOne({ shorturl: url })

        console.log(urldata);
        if (urldata) {

            res.redirect(urldata.longurl)
        } else {
            res.json({ status: false, message: "Invalid user" })
        }

    }
    // const getuserUrlController = async(req, res) => {
    //     const { userId } = req.body;
    //     const allUserUrl = await urlModel.find({ userId });
    //     if (allUserUrl) {
    //         res.json({ status: true, success: allUserUrl })

//     } else {
//         res.json({ status: false, message: "No data found" });
//     }
// }

module.exports = { handalurlcontroller, handalshorturlcontroller }