import appearDivs from './home';
import contact from './contact';
import menu from './menu';


const homeButton = document.getElementById("homebutton");
const menubutton =document.getElementById('menubutton');
const contactbutton = document.getElementById('contactbutton');

const remove = () => {

    const toRemove = document.querySelectorAll('.removable');
    console.log(toRemove);

    return toRemove.forEach(thing => thing.remove());

};

homeButton.addEventListener('click', function(){

    remove();

    return appearDivs.home();
})

menubutton.addEventListener('click', function(){

    remove();
    return menu.generate();

})

contactbutton.addEventListener('click', function(){

    remove();

    contact.socialMedia();

    return contact.deployMap();
})
