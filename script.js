const socket = io('http://localhost:3000')
const msgForm = document.getElementById('msg-input-container')
const msgInput = document.getElementById('msg-input')

socket.on('chat-message', data =>{
    console.log(data)
})

msgForm.addEventListener('submit', e=>{
    e.preventDefault()
    const message = msgInput.value
    socket.emit('send-chat-message', message)
    msgInput.value=""
})