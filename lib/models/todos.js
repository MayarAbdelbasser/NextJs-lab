const { Schema, mongoose, model, models } = require("mongoose");

const todoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
});
const Todo = models.Todo || model("Todo", todoSchema);
export default Todo;
