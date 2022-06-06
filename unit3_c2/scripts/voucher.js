let get_amount = Number(localStorage.getItem('wallet'));
console.log(get_amount);
// console.log(get_amount);
document.getElementById('wallet_balance').innerText = get_amount;
let main = document.getElementById('voucher_list');
async function getData(){
    try{
        let res = await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
        
        let data = await res.json();
        console.log(data[0].vouchers);
        display(data[0].vouchers)
    }
    catch(err){
        console.log(err);
    }
}

getData();

let cart = JSON.parse(localStorage.getItem('purchase')) || [];


function display(data){
    main.innerHTML = '';
    data.map(function (el) {

        let box = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.image
        let name = document.createElement('p')
        name.innerText = el.name;
        let price = document.createElement('p')
        price.innerText = el.price;
        let btn = document.createElement('button')
        btn.innerText = 'Buy';
        btn.setAttribute('class', "buy_voucher")
        btn.addEventListener('click', function() {
            if(get_amount > 0 && get_amount >= el.price){
                cart.push(el);
                localStorage.setItem('purchase',JSON.stringify(cart))
                get_amount = get_amount - Number(el.price)
                document.querySelector('#wallet_balance').innerText = get_amount;
                localStorage.setItem('wallet',get_amount)
            }else{
                alert('Sorry! insufficient balance')
            }
            
            
        })
        box.append(img,name,price,btn)
           main.append(box)
    })
}

// display()