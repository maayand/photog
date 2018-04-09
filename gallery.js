
var img = undefined,
    item = undefined,
    imgName = undefined,
    p = undefined,
    items = document.querySelector('.itmes'),
    images=[
        "img/rahul-anil_thumb1.jpg",
        "img/noah-hinton_thumb1.jpg",
        "img/ness-joshua_thumb1.jpg",
        "img/matheus-ferrero_thumb1.jpg",
        "img/meyer-aidan_thumb1.jpg",
        "img/felix-russell-saw_thumb1.jpg",
        "img/joshua-ness_thumb1.jpg",
        "img/brooke-cagle_thumb1.jpg",
        "img/emile-seguin_thumb1.jpg",
        "img/caleb-frith_thumb1.jpg",
        "img/bewakoof-com-official_thumb1.jpg",
        "img/aidan-meyer_thumb1.jpg",
        "img/allef-vinicius_thumb1.jpg",
        "img/austin-mabe_thumb1.jpg",
        "img/aidan-doe_thumb1.jpg",
        "img/alexandru-zdrobau_thumb1.jpg"
    ],

    imagesBig=[
        "img/rahul-anil_thumb.jpg",
        "img/noah-hinton_thumb.jpg",
        "img/ness-joshua.jpg",
        "img/matheus-ferrero.jpg",
        "img/meyer-aidan.jpg",
        "img/felix-russell-saw.jpg",
        "img/joshua-ness.jpg",
        "img/brooke-cagle.jpg",
        "img/emile-seguin.jpg",
        "img/caleb-frith.jpg",
        "img/bewakoof-com-official.jpg",
        "img/aidan-meyer.jpg",
        "img/allef-vinicius.jpg",
        "img/austin-mabe.jpg",
        "img/aidan-doe.jpg",
        "img/alexandru-zdrobau.jpg"
    ],

    imgesNames=[
        "rahul anil",
        "noah hinton",
        "ness joshua",
        "matheus ferrero",
        "meyer aidan",
        "felix russell saw",
        "joshua ness",
        "brooke cagle",
        "emile seguin",
        "caleb frith",
        "bewakoof com official",
        "aidan meyer",
        "allef vinicius",
        "austin mabe",
        "aidan doe",
        "alexandru zdrobau"
    ];


function loadImage(i){
    item = document.createElement('div');
    item.className = "item col-xl-3 col-md-6 col-sm-1";
    img = document.createElement('img');
    item.appendChild(img);
    items.appendChild(item);
    
    imgName = document.createElement('div');
    imgName.className= "img-name"; 
    item.appendChild(imgName);
    p = document.createElement('p');
    p.textContent = imgesNames[i];
    imgName.appendChild(p);    
    
    img.dataset['index'] = i;
    //img.dataset['name'] = imgesNames[i];
    if(i<images.length-1){
        img.addEventListener('load', function(){
            var event = new CustomEvent('imgLoaded', {detail:i+1});
            document.dispatchEvent(event);
        });
    }
    img.src=images[i];


    var myModal = document.getElementById('myModal');
    var next = document.querySelector(".next");
    var prev = document.querySelector(".prev");
    imgName.addEventListener('click' , function(){
        var idx = +this.previousSibling.dataset.index;
        var corent = imagesBig[idx];
        document.querySelector(".my-modal-content").innerHTML= '<img class="col-xl-3 col-md-6 col-sm-1" src = "'+ corent + '">' +'<span class="close">&times;</span>';
        document.querySelector(".my-modal-content>img").dataset['index'] = idx;
        document.querySelector(".my-modal-content>img").onclick = function(){
            var idx = +document.querySelector(".my-modal-content>img").dataset['index'];
            idx = (idx+1)%imagesBig.length;
            corent = imagesBig[idx];
            document.querySelector(".my-modal-content>img").src = corent;
            document.querySelector(".my-modal-content>img").dataset['index']=idx;
        };
        myModal.style.display = "block";
        document.querySelector(".my-modal-content .close").onclick = function() {
            myModal.style.display = "none";
        };
    });
    
    next.onclick= function(){
        var idx = +document.querySelector(".my-modal-content>img").dataset['index'];
        idx = (idx+1)%imagesBig.length;
        corent = imagesBig[idx];
        document.querySelector(".my-modal-content>img").src = corent;
        document.querySelector(".my-modal-content>img").dataset['index']=idx;
    };
    prev.onclick= function(){
        var idx = +document.querySelector(".my-modal-content>img").dataset['index'];
        idx = (idx-1+imagesBig.length)%(imagesBig.length);
        corent = imagesBig[idx];
        document.querySelector(".my-modal-content>img").src = corent;
        document.querySelector(".my-modal-content>img").dataset['index']=idx;
     };
    window.onclick = function(event) {
        if (event.target.classList.contains('fullheight')) {
            myModal.style.display = "none";
        }
    }
}
    
document.addEventListener('imgLoaded' ,function(e){
    loadImage(e.detail);
});

loadImage(0);

