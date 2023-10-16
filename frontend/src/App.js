import logo from './logo.svg';
import './App.css';

function App() {

  const chatSocket = new WebSocket(
    'ws://localhost:8000/ws/signaling/'
  );

  chatSocket.onmessage = function(e) {
      const data = JSON.parse(e.data);
      console.log(data)
  };

  chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
  };

  

  async function makeCall() {
    const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
    const peerConnection = new RTCPeerConnection(configuration);
    // signalingChannel.addEventListener('message', async message => {
    //     if (message.answer) {
    //         const remoteDesc = new RTCSessionDescription(message.answer);
    //         await peerConnection.setRemoteDescription(remoteDesc);
    //     }
    // });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    // signalingChannel.send({'offer': offer});
    console.log(offer);
    chatSocket.send(JSON.stringify({offer: offer}))
}

  return (
    <div>
      <button onClick={makeCall}>Connect</button>
    </div>
  );
}

export default App;
