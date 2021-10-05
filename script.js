var bags= document.querySelectorAll('.addBag');
let tp = 0;            //!prix total

produit =[
    {
        name:'Chanel Bag',
        tag: 'img/sac12.jpg',
        price: 75.5 ,
        incart: 0
    },
    {
        name:'Gucci Bag',
        tag: 'img/sac11.jpg',
        price: 80.5 ,
        incart: 0
    },
    {
        name:'Hermès Bag',
        tag: 'img/sac10.jpg',
        price: 69.5 ,
        incart: 0
    },
    {
        name:'Prada Bag',
        tag: 'img/sac9.jpg',
        price: 95.5 ,
        incart: 0
    },
    {
        name:'Louis Vuitton Bag',
        tag: 'img/sac8.jpg',
        price: 105.5 ,
        incart: 0
    },
    {
        name:'Givenchy Bag',
        tag: 'img/sac6.jpg',
        price: 89.5 ,
        incart: 0
    },
    {
        name:'Fendi Bag',
        tag: 'img/sac7.jpg',
        price: 115.5 ,
        incart: 0
    },
    {
        name:'Chloé Bag',
        tag: 'img/sac1.jpg',
        price: 99.5 ,
        incart: 0
    },
    {
        name:'Goyard Bag',
        tag: 'img/sac2.jpg',
        price: 135.5 ,
        incart: 0
    },
    {
        name:'Gucci Bag',
        tag: 'img/sac3.jpg',
        price: 62.00 ,
        incart: 0
    },
    {
        name:'Fendi Bag',
        tag: 'img/sac4.jpg',
        price: 83.5 ,
        incart: 0
    },
    {
        name:'Louis Vuitton Bag',
        tag: 'img/sac5.jpg',
        price: 86.5 ,
        incart: 0
    }
    
]

var coeur=document.querySelector('.coeur');
var ilike=coeur.addEventListener('click', function(e){
    console.log(coeur)
    coeur[0].classList.add('.red')
})

var partition= document.querySelector('.partition');

var body =document.querySelector('body');

for(let i=0; i<bags.length; i++){

    bags[i].addEventListener('click', ajouter)
    function ajouter(e){
        
        console.log('bags[i].price'+e.target.previousElementSibling.innerText.replace('$',''));
        console.log('mmmmmmmm'+produit[i].price);
// !test si il est existe afficher alert

console.log('hhhlob'+bags[i].incart);

if(bags[i].incart === 1){alert('This item is already in your cart');}
else{

console.log('bags[i].price'+bags[i].price);

let a = parseInt(produit[i].price);
tp += a;
console.log('totalprice='+tp);



        var div= document.createElement('div');
        
        var newimage = document.createElement('img');
        var newtitle= document.createElement('h3');
        var newprice = document.createElement('h3');
    
        var qt = document.createElement('input');

        qt.setAttribute("type", "number");


        

//         //!ajouter class input pour tag input

//        qt.classList.add("input");
//     

//        console.log(qt.className);
//        var inputpress=document.querySelector('.input');
//        inputpress.addEventListener('change',function(e){
// console.log('hiiii');

//         //*modifier total price 


    //    });

        
        
        var plus = document.createElement('button');
        var minus = document.createElement('button');
        var supp = document.createElement('button');
        var label = document.createElement('h3');
        var totalprice = document.createElement('h3');
        totalprice.classList.add("some");

        
        var div2=document.createElement('div');
        var majmou3=document.createElement('h3');

     

        newimage.src = produit[i].tag;
        newtitle.innerText = produit[i].name;
        newprice.innerText = '$' + produit[i].price ;
        qt.setAttribute("value", "1");
        plus.innerText = 'Add ';
        plus.style.backgroundColor='green';
        minus.innerText = 'retire ';
        minus.style.backgroundColor= 'yellow';
        label.innerText = 'Total Price';
        supp.innerText = 'Delete';
        supp.style.backgroundColor='red';
        majmou3.innerText='$'+tp;


   
     var p = produit[i].price;
    
     totalprice.innerText = '$' + p ;

     div.classList.add("partition");

        div.appendChild(newimage);
        div.appendChild(newtitle);
        div.appendChild(newprice);
        div.appendChild(qt);
        div.appendChild(plus);
        div.appendChild(minus);
        div.appendChild(supp);
        div.appendChild(label);
        div.appendChild(totalprice);

        div2.appendChild(majmou3);

        bags[i].incart =1 ;

        

        body.appendChild(div);
        body.appendChild(div2);

        



        plus.addEventListener('click',function(){

            var l=qt.getAttribute("value");
           l = parseInt(l);
            l += 1;

            qt.setAttribute("value", l);
            totalprice.innerText = '$' +(l*p);

            tp += totalprice.innerText.replace('$','');
            console.log('ya rabiiii'+tp);
            

        });

        minus.addEventListener('click',function(){
//!si contenu de input 0 on peut pas decremente on test 

var z=qt.getAttribute("value");
           z = parseInt(z);

if(z === 1){alert('quantite shoud be a positif number try again please')}
   else{
            var d =qt.getAttribute("value");
            d = parseInt(d);
            d -= 1;
            qt.setAttribute("value", d);
            totalprice.innerText = '$'+(d*p);

            tp -=produit[i].price;
        }
        });

        console.log('hhhlobjgncgncnfvgjhnijf'+tp);

        supp.addEventListener('click',function(){

            
            div.remove();
        });



       
       
    }
    

    }

   
}

