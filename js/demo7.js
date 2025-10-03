function forecast(){
    const url = `https://dummyjson.com/products?limit=20`;
    fetch(url).then(rs=>rs.json())
    .then(function(data){
        var products= data.products;
        var forecast_html = "";
        for(var i=0;i<list.length;i++){
            forecast_html += `
                <div class="product-image">
                        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${products[i].title}</h3>
                        <div class="product-price">
                            <span class="current-price">£${products[i].price}</span>
                        </div>
                    </div>
            `;
        }
        document.getElementById("forecast").innerHTML = forecast_html;
    });
}
forecast();