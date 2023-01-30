function ajax(url) {
	return fetch(url)
        .then(res => res.json())
        .catch(error => console.log('Something went wrong!',error));
}
function render(data) {
	const html = data.map(product => `
    <h1>${product.description}</h1>
    <h2>${product.name}</h2>
    <p>${product.price}</p>`)
    .reduce((html,product) => html += `${product}`,'');

    document.body.innerHTML = html;
}
const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";

ajax(url).then((data) => {
    render(data);
  });
  