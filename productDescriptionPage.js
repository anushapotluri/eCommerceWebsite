var urlParams = new URLSearchParams(location.search);
console.log(urlParams.get('id'));

console.log(shoppingData.filter(getIdOfItem));
function getIdOfItem(item) {   
        return `${item.id}`;      
}