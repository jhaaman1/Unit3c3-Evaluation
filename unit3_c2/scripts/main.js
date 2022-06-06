function append(n,e,a,w) {
    this.name = n;
    this.email = e;
    this.address = a;
    this.wallet = w
}



let arr= JSON.parse(localStorage.getItem('user')) || []
function submit_details(){
    // 
   
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let wallet = document.getElementById('amount').value;
    
    let p = new append(name,email,address,+wallet)
    arr.push(p)
    
    localStorage.setItem('user',JSON.stringify(arr))

    
}
submit_details()