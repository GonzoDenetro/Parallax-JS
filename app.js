let controller = new ScrollMagic.Controller() //We init controller
let timeline = new TimelineMax() //To change multiple animations, the sequence 
let titleTimeline = new TimelineMax()

titleTimeline
.fromTo(".main-title", {opacity: 0}, {opacity: 1, duration:1.5})
.to(".main-title", 1.5, {y: 100}, "-=1.5")

timeline
 .to(".rock", 2, {y: -300})
 .to(".girl", 2, {y: -200}, "-=2")//The -=# is for the animations be at the same time
 .fromTo(".bg1", 2, {y:-5}, {y: 0, duration:2}, "-=2")
 .to(".content-container", 2, {top:'0%'}, "-=2")
 .fromTo(".content-images", {opacity:0}, {opacity: 1, duration: 3})
 .fromTo(".text", {opacity:0, y: -100}, {opacity: 2, y: 0, duration: 3});
 
let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "250%",
    triggerHook: 0, 
})
.setTween(timeline)
.setPin("section")
.addTo(controller)