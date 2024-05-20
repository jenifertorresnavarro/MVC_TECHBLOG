// Import the necessary models
const User = require("./User");

const Comment = require("./Comment");
// Define the relationships between the models
hasMany(Post, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

belongsTo(User, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

_belongsTo(User, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

_belongsTo(Post, {
  foreignKey: "post_id", // Set up the foreign key relationship
});

_hasMany(Comment, {
  foreignKey: "post_id", // Set up the foreign key relationship
});

hasMany(Comment, {
  foreignKey: "user_id", // Set up the foreign key relationship
});
// Export the models
export default { User, Post, Comment };