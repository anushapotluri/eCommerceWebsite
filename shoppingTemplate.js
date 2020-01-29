function shoppingCart(items){
    return `
    <div class="pageContainer">
    <div class="container">
    <img src="${items.image}">
    <a href="productDescriptionPage.html?id=${items.id}">${items.name}</a>
    <h2>${items.company}</h2>
    <h3>${items.price}</h3>
    <h4>${items.summary}</h4>
    </div>
    </div>
    `
}
document.getElementById('getJsonData').innerHTML = 
`
<h1 class="pageHeading">${shoppingData.length} results</h1>
${shoppingData.map(shoppingCart).join('')}
`
