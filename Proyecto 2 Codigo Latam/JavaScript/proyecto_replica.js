//document.write("Curso de Desarrollo Web Codigo Pa'lante")


const menu = document.querySelectorAll('.menuItems');
 
menu.forEach(function(item){

    item.addEventListener("click", function(e){
        const currentItem = document.querySelector(".active");

        currentItem.classList.remove("active");

        e.target.classList.add("active")
    });

});


