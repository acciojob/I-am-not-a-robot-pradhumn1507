//your code here
var lastImage = document.getElementsByTagName("img")[5]
var reset = document.getElementById('reset')
var verify = document.getElementById('verify')
var para = document.getElementById('para')

let imgClass = ["img1", "img2", "img3", "img4", "img5"];
let randomImage = Math.floor(Math.random() * imgClass.length);
// console.log(imgClass[randomImage]);
lastImage.className = imgClass[randomImage]

var countImage = 0;

function selectImage(i){
    var tile = document.getElementsByTagName("img")[i]
    tile.classList.add("selected")
    countImage++
    reset.style.display = 'inline-block'
    // console.log(countImage)
    if(countImage==2){
        verify.style.display = 'inline-block'
    }
    else{
        verify.style.display = 'none'
    }
}

reset.onclick = function(){
    var tile0 = document.getElementsByTagName('img')[0]
    tile0.classList.remove('selected')
    var tile1 = document.getElementsByTagName('img')[1]
    tile1.classList.remove('selected')
    var tile2 = document.getElementsByTagName('img')[2]
    tile2.classList.remove('selected')
    var tile3 = document.getElementsByTagName('img')[3]
    tile3.classList.remove('selected')
    var tile4 = document.getElementsByTagName('img')[4]
    tile4.classList.remove('selected')
    var tile5 = document.getElementsByTagName('img')[5]
    tile5.classList.remove('selected')
    countImage=0
    reset.style.display = 'none'
    para.innerText = ""
    verify.style.display = 'none'
}

verify.onclick = function(){
    var check1 = document.getElementsByClassName('selected')[0]
    var check2 = document.getElementsByClassName('selected')[1]
    if(check1.className == check2.className){
        para.innerText = " You are a human. Congratulations! "
    }
    else{
        para.innerText = " We can't verify you as a human. You selected the non-identical tiles."
    }
}
