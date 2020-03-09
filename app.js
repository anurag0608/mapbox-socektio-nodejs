const express = require('express'),
app = express(),
io = require('socket.io');

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.disable('x-powered-by');

app.get('/',(req, res)=>{
    res.render('index');
});

SocketIO = io.listen(app.listen(3000,(req, res)=>{
    console.log('SERVER LISTENING ON PORT 3000');
}));

//SOCKETIO//
SocketIO.sockets.on('connection',(socket)=>{
    console.log('User connected!');
    socket.on('disconnect',()=>{
        console.log('User Disconnected!');
    });
    socket.on('gps',data=>{
        console.log(data);
    });
});