const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("subscribe", (channelName) => {
// 	console.log(`Thanks for Subscribing ${channelName}`);
// });

event.emit("subscribe", "Physics Wallah");

// Note: --->>
// Event is triggred but nothing happen in console or not given in error;
