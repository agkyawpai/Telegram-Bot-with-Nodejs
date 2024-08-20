const { axiosInstance } = require('./axios');

function sendMessage(messageObj, messageText) {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}

function handleMessage(messageObj) {
    const messageText = messageObj.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        console.log(command);
        switch(command) {
            case "start":
                return sendMessage(
                    messageObj,
                    "Hi! I'm HiBot. Let's get started!!"
                );
            default:
                return sendMessage(
                    messageObj,
                    "Hi. I don't get it!"
                );
        }
    } else {
        return sendMessage(messageObj, "fuckOff!!");
    }
}

module.exports = { handleMessage };