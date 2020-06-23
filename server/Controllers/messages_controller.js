let arrayOfMessages = []

let id = 0

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body; //Create a new message object using text and time from the request body
        arrayOfMessages.push({id, text, time}); //push to arrayOfMessages array
        id++ //increment after new message object is created.

        console.log(req.body)
    },
    read: (req, res) => {
        res.status(200).send(arrayOfMessages);
        
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateId = req.params.id;

        const messageIndex = arrayOfMessages.findIndex(message => message.id ==updateId);
        let message = arrayOfMessages[messageIndex];

        arrayOfMessages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(arrayOfMessages)

    },
    delete: (req,res) => {
        const deleteId = req.params.id
        const messageIndex = arrayOfMessages.findIndex(message => message.id === deleteId);
        
        message.splice(messageIndex,1);

        res.status(200).send(arrayOfMessages)

    }
}