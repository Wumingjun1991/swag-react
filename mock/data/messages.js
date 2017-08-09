let port = require('../port');
let ip = require('../ipLocation');


module.exports = {
    notice:{
        name:'张江药谷',
        msg:'你好毒你好毒你好嘟嘟嘟嘟嘟嘟嘟嘟'
    },
    messages:[
        {
            avatar:`http://${ip}:${port}/pdd.jpg`,
            sender:'我很帅',
            content:'我觉得你这样有失公正',
            time:'18:30'
        },
        {
            avatar:`http://${ip}:${port}/pdd.jpg`,
            sender:'我很帅',
            content:'我觉得你这样有失公正',
            time:'昨天'
        }
    ]
};