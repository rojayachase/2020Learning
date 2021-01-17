//Initiate Github
const github = new Github; 
//Initiate UI
const ui = new UI;

 //Search input
 const searchUser = document.getElementById('searchUser');
 
 //search input event listener
 searchUser.addEventListener('keyup', (e) => {
     //get input text
     const userText = e.target.value;

     if(userText !==''){
    //make http call
    github.getUser(userText)
    .then(data => {
    if(data.profile.message === 'Not Found') {
        //Show alert
        ui.showAlert('User not found', 'alert alert-danger'); 
    } else {
        //show profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos);
    }    
    }) 
     } else {
    //Clear profile
    ui.clearProfile();
     }
     });

//First function way I learned without arrow function
// searchUser.addEventListener('keyup', function(e){
//     //get input text
//      const userText = e.target.value;

//      if(userText !==''){
//          console.log(userText)
//      }

// });
     
