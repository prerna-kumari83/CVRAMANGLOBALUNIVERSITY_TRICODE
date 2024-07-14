

const tl=gsap.timeline({defaults:{duration:0.75,ease:"power1.out" }});







let arr=[["img1.jpg","Accessories are an integral part of dressing up. The best part is, with a small investment, you can buy many accessories that can be used to customize different outfits. Just one chunky piece of jewelry can marry an entire outfit. Wear them as per the occasion – office, party, concert, etc."] , ["img2.jpg","Sick of wearing basic tees and shirts....then try this linen shirt with khaki pants."] ,
["img3.jpg","Keep your accessories small.Bulky and oversized accessories like large watches and chunky belts will make you look smaller. Opt for smaller accessories across the board and you’re well on your way to looking taller."] , ["img4.jpg","Not comfortable wearing sleeveless......pair it with a tshirt and you are good to go"], ["img5.jpg","Are you also conscious of your curvy body then try this maxi skirt and yes don't forget to embrace your body always."], ["img6.jpg","The proportional rule in fashion gives you a balanced look.Divide your body into thirds rather than halves. For example, high-waisted pants or skirts create a longer leg line and shorter torso, making your body proportions more visually appealing."], ["img7.jpg","Wearing a single color from head to toe can help create a seamless silhouette, making you look taller. Darker shades, like black or navy, are particularly effective."],
["img8.jpg"," don't know which footwear to carry.......here it is."], ["img9.jpg","To achieve a well-proportioned look, try combining baggy/cargo jeans and Vest top or you can all so pair with oversized t-shirt. "], ["img10.jpg"," Spring/Summer Street Style , Basic yet stunning. "], ["img11.jpg","Same pants but differtent style for different occasion."]]
let box=document.querySelector("#container");
let p=document.querySelector("#content");
let img=document.querySelector("img");
let hanger=document.querySelector("#hanger");




function changeImg(){
    let rand=Math.floor(Math.random()*11);

    setTimeout(()=>{
        img.setAttribute("src",arr[rand][0]);
        p.innerText=arr[rand][1];

    },0);

    
}



function pop(){
    tl.fromTo('#container',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1.5});
    tl.fromTo('#hanger',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1.5,opacity:1},'<');

    tl.fromTo('#img1',{opacity:0,x:-50,rotate:'-45deg'},{opacity:1,x:0,rotation:'0deg'},'<50%');
    tl.fromTo('img',{opacity:0,x:-50,rotate:'-45deg'},{opacity:1,x:0,rotation:'0deg'},'<50%');
   
    tl.fromTo('#text',{x:100,opacity:0},{x:0,opacity:1},'<');
    tl.fromTo('img',{scale:1.6},{scale:1,duration:1.5,delay:1.2});

    tl.fromTo('#hanger',{rotation:'15deg'},{rotation:'-15deg',yoyo:true,repeat:-1});
    changeImg();
   

}





function close(){
    setTimeout(()=>{
        gsap.to('#container',{opacity:0,y:100,duration:0.75,ease:'power1.out'});
        gsap.to('#hanger',{opacity:0,y:100,duration:0.75,ease:'power1.out'});
    },0);
}




function change(p,delay,n){
    setTimeout(()=>{
        p();
        hanger.style.opacity=1;
        box.style.opacity=1;
        if(n){
            n();
        }
    },delay)
}


 
    change(pop,3000,()=>{
        change(close,10000);
    });




