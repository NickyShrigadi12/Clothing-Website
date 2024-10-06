let Women = [
    {
        src: "./newArr1.jpg",
        name: "Double Burger",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.5
    },
    {
        src: "./newArr3.jpg",
        name: "Chicken Burger",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.5
    },
    {
        src: "./newArr5.jpg",
        name: "Mexican Burger",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.5
    },
    {
        src: "./newArr6.jpg",
        name: "Aloo Tikki",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.5
    },
    {
        src: "./f-prod4.jpg",
        name: "Aloo Tikki",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.5
    }
];

// Function to dynamically create and display the float-boxes
function displayBurgers() {
    const section = document.getElementById('background'); // Get the section where images will be displayed

    Women.forEach(burger => {
        // Create a div for the float-box
        let floatBox = document.createElement('div');
        floatBox.classList.add('float-box');

        // Create the image element
        let img = document.createElement('img');
        img.src = burger.src;
        img.alt = "Image";

        // Create a div for the content inside float-box
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('float-box-content');

        // Create elements for the name, description, price, and button
        let nameP = document.createElement('p');
        nameP.style.color = "red";
        nameP.textContent = burger.name;

        let descP = document.createElement('p');
        descP.textContent = burger.description;

        let priceP = document.createElement('p');
        priceP.style.color = "red";
        priceP.textContent = `$${burger.price}`;

        let button = document.createElement('button');
        button.textContent = "Order Now";

        // Append all elements to the contentDiv
        contentDiv.appendChild(nameP);
        contentDiv.appendChild(descP);
        contentDiv.appendChild(priceP);
        contentDiv.appendChild(button);

        // Append the img and contentDiv to the float-box
        floatBox.appendChild(img);
        floatBox.appendChild(contentDiv);

        // Append the float-box to the section in the HTML
        section.appendChild(floatBox);
    });
}

// Call the function to display burgers when the page loads
window.onload = displayBurgers;
