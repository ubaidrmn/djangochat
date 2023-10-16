import json

from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):

    def connect(self):
        self.room_name = "MAIN"
        print(self.channel_name, "HAH")
        print("YES")
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        # message = text_data_json["message"]
        print(text_data_json)
        print("YES< HERE")
        self.channel_layer.send()
        # self.send(text_data=json.dumps({"message": message}))
        # self.send(text_data=json.dumps({"message": "HALOOO"}))
