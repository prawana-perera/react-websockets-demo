'use strict'

const Hapi = require('hapi')
const SocketIO = require('socket.io')

let counter = 1;

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    const io = SocketIO.listen(server.listener)
    io.sockets.on('connect', (socket) => {
        console.log('user connected', socket.id)

        socket.emit('welcome', {
            msg: 'welcome'
        })

        setInterval(() => socket.emit('welcome', {
            msg: 'welcome' + counter++
        }), 1000);

        socket.on('disconnect', function () {
            console.log('user disconnect', socket.id)
        })
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)

    // const sockets = Hapi.server({
    //     port: 3001,
    //     host: 'localhost'
    // })

    // const io = SocketIO(sockets.listener)

    // io.on('connection', function (socket) {
    //     console.log('user connected')
    // })

    // await sockets.start()
    // console.log('Sockets app running on %s', sockets.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()