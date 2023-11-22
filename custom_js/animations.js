var animations = [];

// for title animaiton - swivel letters
// animations[0] = anime.timeline({
//     easing: "easeInExpo",
//     duration: 3000,
//     autoplay: false,
// })
// .add({
//     targets: "h1",
//     opacity: [0,1],
// })
// .add({
//     targets: "button",
//     opacity: [0,1],
// })

animations[0] = anime.timeline({
    targets: '#title span',
    easing: 'easeInOutExpo',
    autoplay: true,
})
.add({
    rotateY: [90,0],
    opacity: [0,1],
    duration: 3500,
    delay: anime.stagger(350)
});