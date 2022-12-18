console.log("App.js is connected");


let t1 = gsap.timeline();

t1.from(".container",0.5,{
    opacity:0,
    y:-20
})
.from(".parent",1,{
    opacity:0,
    x:-20
})
.from(".carousel",1.5,{
    opacity:0,
    x:40
})
.from(".hero-text",{
    opacity:0,
    x:-40
})
.from(".hero-img",{
    opacity:0,
    scale:1.7
})