module.exports = {
    name: 'ping',
    description: "ping command",
    excute(message,args){
        message.channel.send('pong');
    }
}