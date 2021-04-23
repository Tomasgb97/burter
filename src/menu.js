const menu = (() => {

    const generate = () => {

        const map =document.getElementById('map');
        map.style.display = 'none';



        const body = document.getElementById('body');

        const container = document.createElement('div');
        container.classList.add('removable');
        container.setAttribute('id', 'menucontainer');

        const burguerlist = ['classic.png', 'jalape.png', 'oklahoma.png'];

        burguerlist.forEach(function(burguer){

            const image = document.createElement('img');
            image.setAttribute('src', `../images/burguers/${burguer}`);
            image.classList.add('imagebanner');

           return container.appendChild(image);

        })


        const seemore = document.createElement('a');
        seemore.textContent ='See more...';
        seemore.setAttribute('href', 'https://www.linkedin.com/in/tomas-gb-814b9261/');
        seemore.setAttribute('id', 'seemore');
        container.appendChild(seemore);


        return body.appendChild(container);
    }

    return{generate};

})();

export default menu;