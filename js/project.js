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
    var txt = "Dans le cadre de notre cours de programmation, nous avons travaillé en groupe pour créer un site de vente en ligne pour une entreprise fictive de produits alimentaire." 
    +"Notre objectif était de créer une plateforme facile à utiliser qui permettrait aux clients d'acheter des produits de qualité directement depuis le site."
    +"Nous avons travaillé sur la conception de l'interface utilisateur. Nous avons opté pour un design moderne et épuré, avec des fonctionnalités de recherche"
    +" avancée pour permettre aux clients de trouver facilement les produits qu'ils recherchent."
    +"Après la conception, nous avons commencé à coder notre site en utilisant des langages de programmation tels que HTML, CSS, JavaScript, et PHP. "
    +"Nous avons créé une base de données pour stocker les informations des produits, ainsi qu'un système de panier pour permettre aux clients de sélectionner et "
    +"d'acheter facilement les produits."
    let txt2 = ""
    let i = document.getElementById("2");
    console.log(i.innerHTML);
    if (i.innerHTML=="") {
        i.innerHTML=txt;
    }
    else{
        i.innerHTML = txt2;
    }
    
    let btn3 = document.querySelector('input[id="btn2"]');
    
    if(btn3.value == "+"){
        btn3.value = "En savoir moins";
    }
    else{
        btn3.value = "+";
    }
}


function textproject3(){
    let txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget finibus ligula, convallis aliquam metus.Fusce vitae viverra sapien. Nam et dapibus nisl, vitae tempus sapien. Morbi lacus purus, pretium et eros ut, dictum venenatis arcu. Fusce ut blandit quam. Sed a rutrum odio, vel auctor ex. In hac habitasse platea dictumst.     Pellentesque sed felis justo. Proin auctor pharetra finibus. Pellentesque quam orci aliquet et diam id, imperdiet     hendrerit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus faucibus     odio nec suscipit faucibus. Ut tincidunt dui eros, at viverra diam rhoncus eu. Nam tortor metus, lobortis ac orci ac,     tincidunt mollis arcu.";
    let txt2 = ""
    let i = document.getElementById("3");
    console.log(i.innerHTML);
    if (i.innerHTML=="") {
        i.innerHTML=txt;
    }
    else{
        i.innerHTML = txt2;
    }
    
    let btn3 = document.querySelector('input[id="btn3"]');
    
    if(btn3.value == "+"){
        btn3.value = "En savoir moins";
    }
    else{
        btn3.value = "+";
    }
}