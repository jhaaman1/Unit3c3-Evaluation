let data= JSON.parse(localStorage.getItem("purchases"));
  display(data);
  let container = document.getElementById('purchased_vouchers')
  function display(data){
    container.innerHTML = null;
    data.map(function(el){
        let box = document.createElement('div')
        let image = document.createElement('img')
        image.src = el.image;
        let name = document.createElement('p')
        name.innerText = el.name
        let price = document.createElement('p')
        price.innerText = el.price;

        box.append(image,name,price)
        container.append(box)
        
    })
  }