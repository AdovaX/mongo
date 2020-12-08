let mongoose = require('mongoose');

const server = 'localhost:27017';  
const database = 'mongoNode';     

class Database {
  constructor() {
    mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
    this._connect()
  }
  
_connect() {
     mongoose.connect('mongodb://localhost:27017/{database}' )
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()