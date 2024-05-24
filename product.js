// Get references to product containers for different brands
let productsContainerDior = document.getElementById('productsConDior');
let productsContainerGucci = document.getElementById('productsConGucci');
let productsContainerLouisVuitton = document.getElementById('productsConLouisVuitton');
let productsContainerVersace = document.getElementById('productsConVersace');
// Function to generate product cards and populate a container
const generate = (con, data)=>{
    return con.innerHTML =data.map(item =>{
        let {id, img, title, name, price} = item
        return `
        <div class="col-sm-12 col-md-6 col-lg-3" col-sm-12 col-md-6 col-lg-3 id="${id}">
        <div class="card my-3 " style="border-radius: 5px;">
          <img class="card-img-top" id="shown" src="${img}" alt="${name}"
            height="250vh">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 id="card-name">${name}</h6>
            <p class="card-text">$${price}</p>
            <a href="details/${title}-${name}.docx" class="btn btn-outline-info" style="border-radius: 20px;" download>Download details</a>
          </div>
        </div>
      </div>
        `
    }).join('')
};
// Generate product cards for different brands
generate(productsContainerDior, productDior);
generate(productsContainerGucci, productGucci);
generate(productsContainerLouisVuitton, productLouisVuitton);
generate(productsContainerVersace, productVersace);

// Handle search functionality
let searchText = document.getElementById('search-input');
let search = document.getElementById('search');
search.addEventListener('click', ()=>{
    // Get the search query and convert it to lowercase for case-insensitive matching
    var searchQuery = searchText.value.toLowerCase();
    // Filter products for each brand based on the search query
    const filDior = productDior.filter(item=>{return item.name.toLowerCase().includes(searchQuery)});
    const filGucci = productGucci.filter(item=>{return item.name.toLowerCase().includes(searchQuery)}) ;
    const filLouisVuitton = productLouisVuitton.filter(item=>{return item.name.toLowerCase().includes(searchQuery)}) ;
    const filVersace = productVersace.filter(item=>{return item.name.toLowerCase().includes(searchQuery)}) ;

    // Generate and display filtered product cards in their respective containers
    generate(productsContainerDior, filDior);
    generate(productsContainerGucci, filGucci);
    generate(productsContainerLouisVuitton, filLouisVuitton);
    generate(productsContainerVersace, filVersace);
    
});


