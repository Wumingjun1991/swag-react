let port = require('../port');
let ip = require('../ipLocation');

module.exports = {
    images:[
        `http://${ip}:${port}/1.jpg`,
        `http://${ip}:${port}/2.jpg`
    ],
    avatar:`http://${ip}:${port}/machine.jpg`,
    name:'金属检测仪',
    description:'金属探测器（metal detector）是一款高性能专为安防设计的金属探测器。主要有三大类：电磁感应型，X射线检测型，微波检测型，是用于探测金属的电子仪器，可应用于多个领域。',
    standard:[
        't73020',
        'e73020',
        'r73020',
        't73020',
        'c73020',
        'v73020',
        'x73020'
    ]
};