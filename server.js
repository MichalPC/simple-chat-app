const io = require('socket.io')(3000)

io.on('connection', socket => {
    socket.emit('chat-message',
                'Welcome to the simple-chat-app!')

    socket.on("send-chat-message", message => {
        socket.broadcast.emit('chat-message',
                              message)
    })

    socket.on("new-user", username => {
        socket.broadcast.emit('chat-message',
                              username + ' has joined')
    })
})