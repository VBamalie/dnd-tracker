const { Schema, model } = require('mongoose');

const battleSchema = new Schema(
    {
        partymembers: [
            {
            type: string,
            required: true
        }
        ],
        enemies:[
            {
                type: Schema.Types.ObjectId,
                ref: "NPC"
            }
        ],
        allies:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "NPC"
            }
        ]
    },
)

const Battle = model("Battle", battleSchema);

module.exports = Battle;