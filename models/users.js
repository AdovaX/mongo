let mongoose = require('mongoose')
let validator = require('validator')

let usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true, 
    lowercase: true  
  },
  username:{
  	type: String,
  	required : true,
  	lowercase :true,
  	unique : true
  },
 createdAt: Date,
 updatedAt: Date
})

// usersSchema.statics.getUsers = function() {
//   return new Promise((resolve, reject) => {
//     this.find((err, docs) => {
//       if(err) {
//         console.error(err)
//         return reject(err)
//       }
      
//       resolve(docs)
//     })
//   })
// }
usersSchema.pre('save', function (next) {
  let now = Date.now()
  this.updatedAt = now
   if (!this.createdAt) {
    this.createdAt = now
  }
   next()    
})

module.exports = mongoose.model('Users', usersSchema)