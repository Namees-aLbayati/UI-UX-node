const nameEl=document.getElementById('logoutname');
const emailEl=document.getElementById('logoutemail');
const passwordEl=document.getElementById('logoutpass');
const signupBtn=document.getElementById('submit');
const signupFetch=async(userdata)=>{
const data=await fetch('/api/signup',{
  method:'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userdata)
})


const dataJSON=data.json();
console.log(dataJSON)

}



signupBtn.addEventListener('click',(event)=>{

event.preventDefault();

const userData={
  username:nameEl.value,
  email:emailEl.value,
  password:passwordEl.value
}

signupFetch(userData)

})