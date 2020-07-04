const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/', (req, res, next) => {
    const trefleReq = https.request(
        'https://trefle.io/api/auth/claim?token=dDg5M1BxTElqbzRxcnpEejVyb1hEZz09&origin=http://localhost:3000',
        { method: 'POST' },
        (trefleRes) => {
            trefleRes.on('data', (d) => {
                res.status(200).json({
                    authToken: JSON.parse(d).token,
                });
            });
        },
    );

    trefleReq.end();
});

module.exports = router;