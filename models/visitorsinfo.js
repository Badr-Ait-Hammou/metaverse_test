
import mongoose from 'mongoose';

const VisitorInfoSchema = new mongoose.Schema({
        city: String,
        country: String,
        ip: String,
        loc: String,
        org: String,
        postal: String,
        region: String,
        timezone: String,
        os: {
            family: String,
            version: String,
            architecture: String,

        },
        info: {
            name: String,
            version: String,
            description: String,
        },
    },
    {
        timestamps: true,
    });

const VisitorInfo = mongoose.model('visitorinfo', VisitorInfoSchema);

export default VisitorInfo;
