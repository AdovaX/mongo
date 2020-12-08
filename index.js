
let database = require('./database.js');
let EmailModel = require('./models/email.js');
let UserModel = require('./models/users.js');



 
get_users();


function get_users(){

	UserModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function get_all_db_data(){

	UserModel.getUsers()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
  })
}


function add_user(){
let msg = new UserModel({
  first_name: 'd1233',
  username : 'dkdev111' 
});

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   });
}

function add_mail(){

let msg = new EmailModel({
  email: 'deepas@gmail.com' 
});

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   });
}
