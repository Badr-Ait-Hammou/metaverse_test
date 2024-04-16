// import axios from 'axios';
//
// const BASE_URL = process.env.NEXT_PUBLIC_URI;
//
// export  const visitorService = {
//
//     saveVisitor: async (visitorData) => {
//         try {
//             const response = await axios.post(`${BASE_URL}/address`, visitorData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     },
// }
import axios from 'axios';
import AWS from 'aws-sdk';


AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    region: 'YOUR_REGION'
});

const s3 = new AWS.S3();

export const visitorService = {
    saveVisitor: async (visitorData) => {
        try {
            const jsonData = JSON.stringify(visitorData);

            const params = {
                Bucket: 'YOUR_BUCKET_NAME',
                Key: `visitor_${Date.now()}.json`,
                Body: jsonData,
                ContentType: 'application/json'
            };

            const data = await s3.upload(params).promise();
            return data.Location;
        } catch (error) {
            throw error;
        }
    },
};

