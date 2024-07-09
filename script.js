

// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".web-wrapper"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".web-wrapper" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".web-wrapper", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".web-wrapper").style.transform ? "transform" : "fixed"
// });






// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


  

// gsap.to(".navbar li",{
    
//     duration:2,
//     delay:1,
//     translateY:"-50%",
//     opacity:0,
//     stagger:3

    

// })

var webWrapper = document.querySelector(".web-wrapper");
var cursor = document.querySelector(".cursor");
var navbar = document.querySelector(".navbar");

webWrapper.addEventListener("mousemove",function(evt){
    gsap.to(cursor,{
        x:evt.x,
        y:evt.y,
        duration:0.45,
       
    })
})

navbar.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:2,
    })
})
navbar.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
    })
})

gsap.to(".page1 h1",{
    transform:"translateX(-75%)",
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".page1",
        scrolller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,

    }
})

gsap.to(".real-text",{
    x:30,
    scale:1,
    opacity:1,
    duration:2,
    delay:1,
    stagger:7,
    // scrollTrigger:{
    //     trigger:".page2",
    //     scroller:"body",
    //     // markers:true,
    //     start:"top 0%",
    //     end:"top -100%",
    //     scrub:2,
    //     pin:true,
    // }
})


// const splitTypes = document.querySelectorAll(".reveal");
// splitTypes.forEach((char,i)=>{
//     const text= new SplitType(char,{types:"chars"});

//     gsap.from(text.chars,{
//         scrollTrigger:{
//             trigger:char,
//             start:"top 80%",
//             end:"top 20%",
//             scrub:true,
//             markers:true,
//             pin:true,

//         },
//         opacity:0.2,
//         stagger:0.1,
//     })
// });


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        start:"50% 50%",
        end:"100% 50%",
        scrub:true,
        pin:true,
    }
})
tl.to(".top",{
    top:"-50%",
},'a')
.to(".bottom",{
    bottom:"-50%",
},'a')
.to(".top-h",{
    top:"80%",
},'a')
.to(".bottom-h",{
    bottom:"-140%",
},'a')


const splitTypes = document.querySelectorAll(".reveal");
splitTypes.forEach((char,i)=>{
    const text= new SplitType(char,{types:"chars"});

    gsap.from(text.chars,{
        scrollTrigger:{
            trigger:char,
            start:"top 20%",
            end:"350% 20%",
            scrub:1,
            // markers:true,
            pin:true,

        },
        opacity:0.1,    
        stagger:0.1,
        duration:4,
        delay:1,
    })
 
});



const splitTypes1 = document.querySelectorAll(".reveal1");
splitTypes1.forEach((char,i)=>{
    const text1= new SplitType(char,{types:"chars",charClass:".char1"});

    gsap.from(text1.chars,{
        scrollTrigger:{
            trigger:char,
            start:"top 45%",
            end:"400% 45%",
            scrub:1,
            // markers:true,
            pin:true,
            

        },
        opacity:0.02,    
        stagger:0.1,
        duration:5,
        delay:1,
    })
});

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page5",
        start:"50% 50%",
        end:"200% 50%",
        scrub:true,
        pin:true,
        scrub:1,
    }
})
tl2.to(".my-work-txt-div",{
    height:"60vh",
    
},'y')
tl2.to(".my-work-txt",{
    height:"60vh",

},'y')
tl2.to(".my",{
    left:"0%",

},'y')
tl2.to(".work",{
    right:"0%",

},'y')
tl2.to(".scroll-img",{
    marginTop:"-300%",

})


let elements= document.querySelectorAll(".page6-text");

elements.forEach((element)=>{
    let innerText = element.innerText;
    element.innerHTML = "";
    
    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for(let letter of innerText){
        let span=document.createElement("span");
        span.innerText = letter.trim() === "" ?
        "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);

    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));

});

elements.forEach((element)=>{
    element.addEventListener("mouseover", ()=>{
        element.classList.remove("play");
    })
})


const svg= document.querySelector("#svg");
const mouse= svg.createSVGPoint();

const leftEye = createEye("#left-eye");
const rightEye = createEye("#right-eye");

let requestId = null;

window.addEventListener("mousemove", onMouseMove);


function onFrame () {
    let point = mouse.matrixTransform(svg.getScreenCTM().inverse());

    leftEye.rotateTo(point);
    rightEye.rotateTo(point);

    requestId = null;
}

function onMouseMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    if(!requestId){
        requestId= requestAnimationFrame(onFrame);
    }
}

function createEye(selector){
    const element = document.querySelector(selector);

    TweenMax.set(element, {
        transformOrigin: "center",
    });

    let bbox = element.getBBox();
    let centerX = bbox.x + bbox.width / 2;
    let centerY = bbox.y + bbox.height / 2;

    function rotateTo(point){
        let dx = point.x - centerX;
        let dy = point.y - centerY;

        let angle= Math.atan2(dy, dx);

        TweenMax.to(element, 0.3, {
            rotation: angle + "_rad_short",
        });
    }

    return{
        element,
        rotateTo,
    };
}

