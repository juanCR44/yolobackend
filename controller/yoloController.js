const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
    //const { spawn } = require('child_process')
    //const db_connection = require('../database/db')
const util = require('util');
const spawn = require('await-spawn')

//const { spawn } = require('child_process');


//const query = util.promisify(db_connection.query).bind(db_connection);




exports.getMsg = async(req, res) => {
    try {
        const msg = req.body.image
        //console.log(req.image)

        const pythonScript = await spawn('python', ['scriptYolo.py'])
        //console.log(pythonScript.toString())
        res.json({
                imagesYolo: pythonScript.toString()
                //imagesYolo: msg
            })

        //let dataToSend;
        // spawn new child process to call the python script
        /*const python = spawn('python', [ __dirname +'./scriptYolo.py']);
        // collect data from script
        python.stdout.on('data', function(data) {
            //console.log('chau', data.toString())
            //dataToSend = data.toString();
            res.json({
                imagesYolo: data.toString()
                //imagesYolo: msg
            })
        });*/
        // in close event we are sure that stream from child process is closed
        //python.on('close', (code) => {
        //    // send data to browser
        //    console.log('hola',dataToSend)
        //    res.json({
        //        imagesYolo: dataToSend
        //        //imagesYolo: msg
        //    })
        //    //res.send(dataToSend)
        //});



        //pythonScript.on('exit', (exitCode) => {
        //    if (parseInt(exitCode) !== 0) {
        //        console.log('good')
        //    }
        //    //myEmitter.emit('finished')
        //    pythonScript.stdout.on('data', function(data) {
        //        data = data.toString();
        //        res.json({
        //            newmsg: msg
        //        })
        //    })
        //})
        //myEmitter.on('finished', () => {
        //        pythonScript.stdout.on('data', function(data) {
        //            data = data.toString();
        //            res.json({
        //                newmsg: msg
        //            })
        //        })
        //    })
        //pythonScript.stdout.on('data', function(data) {
        //    data1 = data.toString();
        //})
        //console.log(data1)

        //pythonScript.on('close', (code) => {
        //    console.log("code", code)
        //    res.json({
        //        newmsg: msg
        //    })
        //})


    } catch (error) {
        //res.sendStatus(500)
        res.json({
            imagesYolo: error
        })
    }
}