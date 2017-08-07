let port = require('../port');
let sliderImgs = [
    `http://localhost:${port}/1.jpg`,
    `http://localhost:${port}/2.jpg`
];
let listImgs = [
    {
        name:'生物',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'浓度',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'检测',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'生物',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'生产',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'服装',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'医学',
        src:`http://localhost:${port}/round.jpg`,
    },
    {
        name:'化学',
        src:`http://localhost:${port}/round.jpg`,
    }
];
module.exports =  {
    sliderImgs,
    listImgs
};