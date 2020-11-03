const socket = io('http://localhost:3000')
const msgForm = document.getElementById('msg-input-container')
const msgInput = document.getElementById('msg-input')
const msgContainer = document.getElementById('msg-container')

socket.on('chat-message', data =>{
    createMsgCard(data)
})

msgForm.addEventListener('submit', e=>{
    e.preventDefault()
    const message = msgInput.value
    socket.emit('send-chat-message', message)
    msgInput.value=""
})

const createMsgCard = (message) => {
    const msgCard = document.createElement('div')
    msgCard.className = 'msg-card'
    msgCard.innerText =message 
    msgContainer.append(msgCard)
}