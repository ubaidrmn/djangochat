import json
from channels.generic.websocket import WebsocketConsumer
from chat.models import ActiveConnection
from accounts.models import User


class ChatConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        message = json.loads(text_data)
        sender = User.objects.get(id=message.get("sender_id"))

        if message.get("setup"):
            if not ActiveConnection.objects.filter(channel_name=self.channel_name).exists():
                ActiveConnection.objects.create(
                    channel_name=self.channel_name, 
                    user=sender)
                self.send(text_data=json.dumps({"message": "connection with the backend established"}))
        else:
            reciever = User.objects.get(id=message.get("reciever_id"))
            reciever_connection = ActiveConnection.objects.filter(user=reciever)
            print(reciever_connection, "HERE", reciever)

        # reciever_channel_name = reciever_connection.channel_name
        # print(reciever_channel_name)
        # self.channel_layer.send(reciever_channel_name, message.get("message"))
        # self.send(text_data=json.dumps({"message": message}))
