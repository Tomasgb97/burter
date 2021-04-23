const appearDivs = (() => {

    const home = () => {
        const body =document.getElementById('body');
        const map = document.getElementById('map');

        const container = document.createElement('div');
        const header = document.createElement('h1');
        const text = document.createElement('p');

        header.textContent = "HOME, THAT'S WHERE YOU ARE.." ;

        text.innerHTML = "We are <b> Burter.inc. </b> The classic american burguer preachers, based in Detroit since 2013.<br>And both us, and our amazing partners are very  excited to welcome you all to our very first website...<b>our home</b>.<br> During all these years we accomplished a lot of great objectives and enjoyed even better moments by your side, so we decided it was time to get even closer, that's the reason of this stunning improvement on our day to day. You already knew how to find us on our stores, now it is time for us to find you..<br> So we invite you to take a look to our delicious menu,  make use of many of our incredible <b>online offers</b> and taste the best crafted burguer on the whole world."

        container.classList.add('homecontainer');
        container.classList.add('removable');
        header.classList.add('homeheader');
        text.classList.add('hometext');


        container.appendChild(header);
        container.appendChild(text);

        map.style.display = 'none';


        return body.appendChild(container)


    }

    



    return{home}
})();

export default appearDivs;