const EventEmitter = require("events");

const event = new EventEmitter();

event.on("subscribe", (channelName) => {
	console.log(`Thanks for Subscribing ${channelName}`);
});

event.emit("subscribe", "College Wallah");
event.emit("subscribe", "PW Skills Tech");

// Concept of the maximum number of listeners

// Default maximum number listner
const defaultMaxListner = event.getMaxListeners();
console.log("The Defaul maxium number of events listner: ", defaultMaxListner);

// Set custom number of event listner
const updatedMaxListner = event.setMaxListeners(6).getMaxListeners();
console.log("The Updated maxium number of events listner: ", updatedMaxListner); // updatedMaxListner -->> 6
