const io = require('socket.io')(3000)

const users = {}

io.on('connection', socket => {
    socket.emit('chat-message',
                'Welcome to the simple-chat-app!')

    socket.on("send-chat-message", message => {
        socket.broadcast.emit('chat-message',
                              {message: message, name: users[socket.id]})
    })

    socket.on("new-user", username => {
        users[socket.id] = username
        socket.broadcast.emit('user-connected',
                               username)
        
    })

    socket.on("disconnect", () => {
        socket.broadcast.emit('user-disconnected',
                                users[socket.id])
        delete users[socket.id]
    })

})