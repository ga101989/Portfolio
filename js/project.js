function textproject1(){
    let txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget finibus ligula, convallis aliquam metus.Fusce vitae viverra sapien. Nam et dapibus nisl, vitae tempus sapien. Morbi lacus purus, pretium et eros ut, dictum venenatis arcu. Fusce ut blandit quam. Sed a rutrum odio, vel auctor ex. In hac habitasse platea dictumst.     Pellentesque sed felis justo. Proin auctor pharetra finibus. Pellentesque quam orci aliquet et diam id, imperdiet     hendrerit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus faucibus     odio nec suscipit faucibus. Ut tincidunt dui eros, at viverra diam rhoncus eu. Nam tortor metus, lobortis ac orci ac,     tincidunt mollis arcu.";
    let txt2 = ""
    let i = document.getElementById("1");
    console.log(i.innerHTML);
    if (i.innerHTML=="") {
        i.innerHTML=txt;
    }
    else{
        i.innerHTML = txt2;
    }
    
    let btn2 = document.querySelector("div.project input[value]");
    let btn3 = document.querySelector('input[id="btn"]');
    
    if(btn3.value == "+"){
        btn3.value = "En savoir moins";
    }
    else{
        btn3.value = "+";
    }
    
}

function textproject2(){
    let txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget finibus ligula, convallis aliquam metus.Fusce vitae viverra sapien. Nam et dapibus nisl, vitae tempus sapien. Morbi lacus purus, pretium et eros ut, dictum venenatis arcu. Fusce ut blandit quam. Sed a rutrum odio, vel auctor ex. In hac habitasse platea dictumst.     Pellentesque sed felis justo. Proin auctor pharetra finibus. Pellentesque quam orci aliquet et diam id, imperdiet     hendrerit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus faucibus     odio nec suscipit faucibus. Ut tincidunt dui eros, at viverra diam rhoncus eu. Nam tortor metus, lobortis ac orci ac,     tincidunt mollis arcu.";
    let txt2 = ""
    let i = document.getElementById("2");
    console.log(i.innerHTML);
    if (i.innerHTML=="") {
        i.innerHTML=txt;
    }
    else{
        i.innerHTML = txt2;
    }
    
    let btn2 = document.querySelector("div.project input[value]");
    console.log(btn2);
    let btn = document.getElementById("btn");
    btn.innerHTML = "En savoir moins";
}