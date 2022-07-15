const { Schema } = require('mongoose');

const npcSchema = new Schema({
    properName: 
    {
        type: String,
        required: true
    },
    notes: 
    [
        {
            type: String
        }
    ],
    customName: 
    {
        type: String
    },
    image:{
        type: String,
    },
    health:
    {
        type: Number
    },
    maxHealth:
    {
        type: Number
    },
    favoredInformation:
    {
        type: String
    },
    editedInformation:
    {
        type: String
    },
    initiative:
    {
        type: Number
    }

});
