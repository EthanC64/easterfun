const container = document.querySelector('#egg-container');  //selects egg container

var offsetWidth = container.offsetWidth;//width of the containter
var offsetHeight = container.offsetHeight; //height of the containter
let score = 0 // set score

//place egg on screen in random position
for (let index = 0; index < 20; index++) {//makes the 20 eggs 
    // create a img container
    const img = document.createElement('img');
    img.src = "https://i.pinimg.com/originals/02/be/ee/02beeedd52096403396a6a8755df703b.png"//image of the egg
    img.className = "egg" //set class name

    // put image in random position
    const randomHeight = Math.floor(Math.random() * offsetHeight);//random y value of the egg on the page
    const randomWidth = Math.floor(Math.random() * offsetWidth)//random x value of the egg on the page
    img.style.position = "absolute";
    img.style.top = randomHeight + "px"; //setting area height egg can spawn
    img.style.left = randomWidth + "px";//setting area width egg can spawn
    img.style.width = "20px"

    // we add to page
    container.append(img) //contain where the eggs can go
}

// make egg clickable

document.addEventListener("click", function (event) { //listen for click on page
    if (event.target.classList.contains("egg")) {  //if user clicks on egg
        // remove egg
        event.target.remove() //remove the egg
        document.querySelector('#score').textContent = ++score;//and +1 to the score




    }
});