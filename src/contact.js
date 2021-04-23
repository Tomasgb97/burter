
        window.initMap =() => {
            var burter = {lat: 42.33585429626763, lng:-83.05064965722102};
            var mapOptions = {
                center: burter,
                zoom: 10
            };
            var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
            var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
            var marker = new google.maps.Marker({
                position: burter,
                map: googlemap,
                animation: google.maps.Animation.BOUNCE,
                icon: '../images/burguerlogo/logomap.png'
            });
        };
    
const contact = (() =>{

    const body = document.getElementById('body');

    const deployMap = () =>{

        
        const map = document.getElementById('map');
        
        
        map.style.display ='block';



        return body.appendChild(map);

    }

    const socialMedia = () => {
        
        const medias = ['facebook', 'instagram', 'twitter', 'youtube'];
        const mediaLetter = ['F', 'd', 'Õ', 'ù'];
        
        const divMedia = document.createElement('div');
        divMedia.setAttribute('id', 'divmedia');
        divMedia.classList.add('removable');

        const contactus = document.createElement('h3');
        contactus.textContent = 'Contact us...';
        contactus.classList.add('removable');
        contactus.setAttribute('id', 'contactus');
        body.appendChild(contactus);
        
        medias.forEach(function (media) {
            
            
             let icon = document.createElement('a');

             icon.innerText = mediaLetter[medias.indexOf(media)];
             icon.classList.add('media');
             icon.setAttribute('href', 'https://www.linkedin.com/in/tomas-gb-814b9261/')

             icon.setAttribute('id', media);

             return divMedia.appendChild(icon);
             


        } )

        return body.appendChild(divMedia);

    }
    

    return {deployMap, socialMedia}
})();

export default contact;
