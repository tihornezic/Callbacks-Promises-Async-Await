// an example of a way of getting data at the same time:

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting stuff from youtube")
        resolve({videos: [1,2,3,4,5]})
    }, 2000)
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("stuff from fb")
        resolve({user: "Name"})
    }, 2000)
})

// meant to start executing more asynchronous code at the same time (or almost at the same time)
// both start running at the same time
Promise.all([yt, fb])
.then(result => console.log(result))