let lActive = document.getElementById('l-active-btn');
let sActive = document.getElementById('s-active-btn');

let l_active_el = document.querySelector('.l-active');
let s_active_el = document.querySelector('.s-active');

sActive.onclick = function() {
    s_active_el.style.opacity = "0";
    s_active_el.classList = "animate__animated animate__fadeOutUp active-box s-active";
    l_active_el.style.opacity = "1";
    l_active_el.style.zIndex = "1";
    l_active_el.classList = "animate__animated animate__fadeInDown active-box l-active";
}

lActive.onclick = function() {
    l_active_el.style.opacity = "0";
    l_active_el.classList = "animate__animated animate__fadeOutUp active-box s-active";
    s_active_el.style.opacity = "1";
    s_active_el.style.zIndex = "1";
    s_active_el.classList = "animate__animated animate__fadeInDown active-box l-active";
}


/*Start SignUp*/
let f_name = document.querySelector('#f-name');
let l_name = document.querySelector('#l-name');
let s_username = document.querySelector('#s-username');
let s_password = document.querySelector('#s-password');
let signup_btn = document.querySelector('.signup-btn');
let s_notic = document.getElementById('s-notic');

signup_btn.onclick = function(e) {
    e.preventDefault();

    if(f_name.value != "" || l_name.value != "" || s_username.value != "" || s_password.value != ""){
        if(localStorage.getItem(s_username.value) == null){
            let data = {
                f_name : f_name.value,
                l_name : l_name.value,
                s_username : s_username.value,
                s_password : s_password.value
            }
            // console.log(data);
            let s_string = JSON.stringify(data);
            console.log(s_string);
            localStorage.setItem(s_username.value,s_string);
            s_notic.innerHTML = "SignUp Success !";

            s_notic.style.color = "green";
            s_notic.style.marginTop = "12px";
            setTimeout(()=>{
                s_notic.innerHTML = "";
            },3000)
               f_name.value = "";
               l_name.value = "";
               s_username.value = "";
               s_password.value = "";

        }else{
            s_notic.innerHTML = "Username Already Exist";
            s_notic.style.color = "red";
            s_notic.style.marginTop = "12px";
            setTimeout(()=>{
                s_notic.innerHTML = "";
            },3000)
        }
    }else{
        s_notic.innerHTML = "Please fill all fields!";
        s_notic.style.color = "red";
        s_notic.style.marginTop = "12px";
        setTimeout(()=>{
            s_notic.innerHTML = "";
        },3000)
    }
    
}