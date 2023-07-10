import { Schema, model } from 'mongoose';

const colorSchema = new Schema({
  color: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
});

const Color = model('Color', colorSchema);

export default Color;