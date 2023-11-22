// let allSections = document.querySelectorAll("section");

// function undisplayAll() {
//     for (let i = 0; i < allSections.length; i++) {
//         allSections[i].style.display = "none";
//     }
// }

function stopAllAnim() {
    for (let i = 0; i < animations.length; i++) {
        animations[i].restart();
        animations[i].pause();
    }
}

window.addEventListener('load', title_anim());

function title_anim() {
    // undisplayAll();
    console.log("hi");
    stopAllAnim();

    var title = document.querySelector('#title');
    title.innerHTML = title.textContent.replace(/\S/g, "<span>$&</span>")
    console.log(title);

    // animations[0].play();
    title.style.display = "inline-block";

    anime.timeline({
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

    var motto = document.querySelector('#motto');
    motto.innerHTML = motto.textContent.replace(/\S/g, "<span>$&</span>")
    // console.log(title);

    anime.timeline({
        targets: '#motto span',
        easing: 'easeInOutExpo',
        autoplay: true,
    })
    .add({
        rotateY: [90,0],
        opacity: [0,1],
        duration: 3500,
        delay: anime.stagger(350)
    });
    
    console.log("bye");
}