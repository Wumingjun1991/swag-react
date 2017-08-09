let port = require('../port');
let ip = require('../ipLocation');

let sliderImgs = [
    `http://${ip}:${port}/1.jpg`,
    `http://${ip}:${port}/2.jpg`
];
let listImgs = [
    {
        name:'生物',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'浓度',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'检测',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'生物',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'生产',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'服装',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'医学',
        src:`http://${ip}:${port}/round.jpg`,
    },
    {
        name:'化学',
        src:`http://${ip}:${port}/round.jpg`,
    }
];
module.exports =  {
    sliderImgs,
    listImgs
};