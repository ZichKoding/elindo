const { Schema, model } = require('mongoose');

const PartsSchema = new Schema ({
    reference: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    replacements: {
        type: String,
    }
});

const Parts = model('Parts', PartsSchema);

module.exports = Parts;