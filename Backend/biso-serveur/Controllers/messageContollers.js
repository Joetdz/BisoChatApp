const { Conversation } = require("../Models/Conversation");
const ObjectId = require("mongoose").Types.ObjectId;

const deleteAll = async (req, res) => {
  Conversation.deleteMany({}).then((res) => console.log(res));
  res.end;
};

const addConversation = async (req, res) => {
  await Conversation.find({
    moi: req.body.moi,
    corespondant: req.body.corespondant,
  }).then((conversation) => {
    console.log("la conversation existe", conversation);
    if (conversation.length !== 0) {
      res.status(200).json(conversation);
      res.end;
    }

    if (conversation.length === 0) {
      Conversation.find({
        moi: req.body.corespondant,
        corespondant: req.body.moi,
      }).then((conversation) => {
        console.log("la conversation  existe 2", conversation);
        if (conversation.length !== 0) {
          res.status(200).json(conversation);
          res.end;
        }

        if (conversation.length === 0) {
          Conversation.create({
            ...req.body,
          })
            .then((conversation) => {
              res.status(200).json(conversation);
              console.log(
                "la conversation a été créée avec succès",
                conversation
              );
            })
            .catch((err) => console.log(err));
        }
      });
    }
  });
};

const getMyConversations = async (req, res) => {
  await Conversation.find({
    $or: [{ moi: req.params.id }, { corespondant: req.params.id }],
  })
    .then((conversations) => {
      console.log(conversations);
      res.status(200).json(conversations);
      res.end();
    })
    .catch((err) => res.status(404).json(err));
};

const addMessage = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).send("id is not defined");
  }
  await Conversation.updateOne(
    { _id: new ObjectId(`${req.body.id}`) },
    { $push: { message: req.body } }
  )
    .then((message) => {
      console.log("message ajouté avec succès ", message);
      console.log("les ids de la req", req.body.id);
      res.status(200).json(message);
    })
    .catch((err) => console.log(err));
};

const getAllmessagesOfConversation = async (req, res) => {
  console.log("Params ", req.params.id);
  if (!req.params.id) {
    return res.status(400).send("id is undefined");
  }
  Conversation.findOne({ _id: req.params.id })
    .then((conversation) => {
      res.status(200).json({ conversation });
    })
    .catch((err) => {
      console.log("erreur viens dici", err);
    });
};

module.exports = {
  addConversation,
  getMyConversations,
  deleteAll,
  addMessage,
  getAllmessagesOfConversation,
};
