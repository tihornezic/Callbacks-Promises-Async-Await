/* console.log("Start")

function loginUser(email, password){
    setTimeout(() =>{
        console.log("Now we have the data")
        return {userEmail: email}
    }, 5000)
}

const user = loginUser("tnezic@goomail.com", 1234)
console.log(user)

console.log("Finish") */

// output:
// Start
// undefined
// Finish
// Now we have the data

// so what we can do, we can pass an callback
// callback are super important
// callback is a function that is passed in as parameter that's gonna run later on

console.log("Start")

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data")
        // rather than returning, we wrap this in callback (replacing return with callback)
        // now we are passing userEmail as parameter
        // once the data comes back, (when time out runs), we invoke that callback function
        // which triggers all functionalities in the calling
        // also works with: return callback({userEmail: email})
        callback({ userEmail: email })
    }, 3000)
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        // replace return with callback
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback('title of the video')
    }, 2000)
}

// storaging them in const user and calling functions
const user = loginUser("tnezic@goomail.com", 1234, cbk1 => {
    // where we have access to the user
    console.log(cbk1)
    getUserVideos(cbk1.userEmail, (cbk2) => {
        console.log(cbk2)
        // this gives us weird nested structure of invoking callbacks; it is called callback hell
        // when you keep stacking things 1 above each other
        videoDetails(cbk2.video, cbk3 => {
            console.log(cbk3)
        })
    })
})

console.log("Finish")

// output:
// Start
// Finish
// Now we have the data
// { userEmail: 'tnezic@goomail.com' }
// [ 'video1', 'video2', 'video3' ]
// title of the video


// also in case when we fetch data from a db or api, we might get an error,
// so in this example we want to send user data back, but what would happen if something fails?
// so what for example we would do with the callbacks is this:

/* function loginUser(email, password, callback, onSuccess, onFailure) {
    if(onFailure) 
    setTimeout(() => {
        console.log("Now we have the data")
        onSuccess({ userEmail: email })
    }, 3000)
} */

// but this way of handling those error would be super complicated
// SO, we can use PROMISES which simplifies everything for us:  open app_refactored.jss

