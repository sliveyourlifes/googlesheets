console.log('aaa')

// function aaa() {
//     'use strict';
//     const url = 'https://rvision-int.exadel.by/rms-web/services/rest/actions/test'

//     fetch(url)
//         .then(res => {
//             return res.json()
//         })
//         .then(data => console.log(data))

// }
// aaa();

function onSignIn(user) {
    
    var profile = user.getBasicProfile();
    const name = document.querySelector('.name');
        name.innerHTML = profile.getName();
    const email = document.querySelector('.email');
        email.innerHTML = profile.getEmail();

}