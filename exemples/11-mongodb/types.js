var Schema = require('mongoose').Schema;

var types = {
  nom:        String,
  binaire:    Buffer,
  majeur:     Boolean,
  updatedAt:  {type: Date, default: Date.now },
  age:        {type: Number, min: 18, max: 65 },
  mixed:      Schema.Types.Mixed,
  _id:        Schema.Types.ObjectId,
  tableau:    [],
  deStrings:  [String],
  deNombres:  [Number],
  deDates:    [Date],
  deBuffers:  [Buffer],
  deBooléens: [Boolean],
  deMixeds:   [Schema.Types.Mixed],
  dObjectIds: [Schema.Types.ObjectId],
  nesté: {
    prénom: {type: String, lowercase: true, trim: true}
  }
};
