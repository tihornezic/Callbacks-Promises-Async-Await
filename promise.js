// a promise is just an object that basically gives us back either a result of
// an asynchronous operation or a failure of an asynchronous

// if we get the data back successfully then do something with it
// if not, diplay error msg or do something with it
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // if you successfully got the data back for e.g. an api
        console.log("got the user")
        resolve({ user: "ed" })
        // new Error() is a good practice
        reject(new Error("user not logged in"))
    }, 2000)
})

// calling promise
// syntax much easier and cleaner to read
// .then (xy) => ... triggers the resolve part of the promise
promise.then(user => {
    console.log(user)
    // .message only to get the msg
}).catch(err => console.log(err.message))