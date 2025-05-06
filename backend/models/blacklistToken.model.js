const mongoose = require('mongoose')

const blacklistedtoken = new mongoose.Schema({
    token: {
        type: String,
        requiers: true,
        uniqe: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 84400
    }
})

module.exports = mongoose.model('BlacklistToken', blacklistedtoken);