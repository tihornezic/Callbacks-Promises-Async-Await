// refactored callback functions from app.js using promises

console.log("Start")

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data")
            resolve({ userEmail: email })
        }, 3000)
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('title of the video')
        }, 2000)
    })
}

/* const user = loginUser("tnezic@goomail.com", 1234, cbk1 => {
    console.log(cbk1)
    getUserVideos(cbk1.userEmail, (cbk2) => {
        console.log(cbk2)
        videoDetails(cbk2.video, cbk3 => {
            console.log(cbk3)
        })
    })
}) */


/* loginUser('ed', 'bumba') */
    // old:

    /* .then(user => getUserVideos(user.email))
       .then(videos => videoDetails(videos[0]))
       .then(detail => console.log(detail)) */

    // output:
    // Start
    // Finish
    // Now we have the data
    // title of the video


    // here we have acces to the user
    // the then parameter () actually triggers or corresponds to or calls the resolve part of the promise
    /* .then(user => (console.log(user), getUserVideos(user.email))
        .then(videos => (console.log(videos), videoDetails(videos[0]))
            .then(detail => console.log(detail)))) */

// console.log("Finish")

// so exactly the same output as using callbacks in app.js:
// Start
// Finish
// Now we have the data
// { userEmail: 'tnezic@goomail.com' }
// [ 'video1', 'video2', 'video3' ]
// title of the video


// wouldn't it be nice to do the promises call this way (the synchronous style, normal way):
// even though the above one is nice, but this is the nicest...
//      const user = loginUser('ed', 'bumba')
//      const videos = videoDetails(user.email)
// ...and that way would be using async await
// it is sytactical sugar; still uses promises, but nicer and easier way to write asynchronous code in the synchronous style

// so here is example of that; adding async await to simplify and make the code above nicer
// so again, it doesn't change anything in the background; it's just easier and cleaner syntax:

async function displayUser(){
    const loggedUser = await loginUser('ed', 1234)
    const videos = await getUserVideos(loggedUser.userEmail)
    const detail = await videoDetails(videos[0])
    console.log(detail)
}

displayUser()

console.log("Finish")

