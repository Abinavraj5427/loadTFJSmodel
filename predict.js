// JavaScript
const tf  = require('@tensorflow/tfjs-node');


(async () => {
    try
    {
        const model = await tf.loadLayersModel('file://tfjs/tfjs/model.json');
        console.log(model);
    }
    catch(error)
    {
        console.error(error);
    }
})();