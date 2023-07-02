const EventEmitter = require("events");

const event = new EventEmitter();

event.on("subscribe", (channelName) => {
	console.log(`Thanks for Subscribing ${channelName}`);
});

event.emit("subscribe", "College Wallah");
event.emit("subscribe", "PW Skills Tech");
