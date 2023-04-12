import axios from 'axios'
import { getLoginData, getLoginFetchData, saveUserProfilData } from './DataAPI'

/* Get Login */

export const getLogin = async (identifiants) => {
    const URL_API = "http://localhost:3001/api/v1/user/login";

    const loginResponse = await fetch(URL_API, {
        body: JSON.stringify(identifiants),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST"
    }).then((response) => response.json());

    return await getLoginData(loginResponse);
}


// export const getLogin = async (identifiants) => {
//     const URL_API = 'http://localhost:3001/api/v1/user/login'

//     const respons = await axios.post(URL_API,
//         JSON.stringify(identifiants), 
//         { headers: { "Content-Type": "application/json"} }
//     ).then( response => response.json())
//     //.catch(err => console.log(err))

//       return await getLoginData(respons)
// }




/* See if user is connected */

export const getLoginFetch = async (token) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const loginFetchResponse = await fetch(URL_API, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        method: "POST"
    }).then((response) => response.json());

    return await getLoginFetchData(loginFetchResponse);
}


// export const getLoginFetch = async (token) => {
//     const URL_API = 'http://localhost:3001/api/v1/user/profile'

//     const respons = await axios.post(URL_API, { 
//         headers: { 
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`  /*'Bearer' + token*/,
//         } },
//     ).then( res => res.json())
//     //.catch(err => console.log(err))

//       return await getLoginFetchData(respons)
// }




/* Save the new name */

export const saveUserProfil = async (token, fullName) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const saveUserProfilResponse = await fetch(URL_API, {
        body: JSON.stringify(fullName),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        method: "PUT"
    }).then((response) => response.json());

    return await saveUserProfilData(saveUserProfilResponse);
}

// export const saveUserProfil = async (token, fullName) => {
//     const URL_API = 'http://localhost:3001/api/v1/user/profile'

//     const respons = await axios.post(URL_API,
//         JSON.stringify(fullName),
//         {
//             headers: { 
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}` /*'Bearer' + token*/,
//             } 
//         },
//     ).then( res => res.json())
//     //.catch(err => console.log(err))

//       return await saveUserProfilData(respons)
// }