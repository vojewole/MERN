const mongoose = require('moongoose');

ProductSchema = new mongoose.Schema(
    {
      title: {type: String, required: true}
    },
    {
      price: {type: String, required: true}  
    },
    {
      description: {type: String, required: true}
    }
) 

module.exports = mongoose.model('Product', ProductSchema);