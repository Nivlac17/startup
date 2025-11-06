const GameEvent = {
    // Event Types will include pictureInfo and textMessage
  System: 'system',
  Message: 'textMessage',
};


class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];



  constructor() {
    // Simulate chat messages that will eventually come over WebSocket
    setInterval(() => {
      const message = "First Comment " + Math.floor(Math.random() * 3000);
      const userName = 'Fred';
      this.broadcastEvent(userName, GameEvent.Message, { name: userName, message: message });
    }, 5000);
  }




  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
