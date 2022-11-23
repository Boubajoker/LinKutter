/**Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.**/

const navbar_btn_01 = document.querySelector('#navbar_btn_01');
const navbar_btn_02 = document.querySelector('#navbar_btn_02');
const navbar_btn_03 = document.querySelector('#navbar_btn_03');
const custom_menu = document.querySelector('#custom_menu');
const popup = document.querySelector('#popup');
const btn_01 = document.querySelector('.b1');
const btn_02 = document.querySelector('.b2');
const btn_03 = document.querySelector('.b3');
const date = new Date();
const style_properties = ['display', 'animation', 'top', 'left'];
    

function display_popup(fade_in_time, fade_out_time) {
    popup.style.animation = `fade ease-in ${fade_in_time}s`;
    setTimeout(()=>{
        popup.style.display = "block";
    }, 700);
    setTimeout(()=>{
        popup.style.animation = `fade-out ease-in ${fade_out_time}s`;
        setTimeout(()=>{
            popup.innerText = "";
            popup.style.display = "none";
            popup.style.removeProperty(style_properties['display']);
            popup.style.removeProperty(style_properties['animation']);
            popup.removeAttribute('style');
        }, 900);
    }, 2000);
};

//@beta `check_network` function.
function check_network() {
    let activate = false;
    
    if (activate) {
        document.body.style.cursor = "progress";
        async function check_network_bg() {
            try {
                const online_check = await fetch('https://jsonplaceholder.typicode.com/posts/');

                return online_check.status >= 200 && online_check.status < 300;
            } catch (err) {
                return false;
            }
        };

        setInterval(async () => {
            const response = await check_network_bg();

            if (response === false) {
                popup.innerText = "No Internet";
                this.display_popup(0.7, 0.9);

                return false;
            } else {
                console.log('%c[LOG]: Device is online', 'color: rgb(0, 255, 0);');

                return true;
            };
        }, 30000);
    } else {
        console.warn('Not Activated');
        return true;
    }
};

navbar_btn_01.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.location = "./";
    };
});

navbar_btn_02.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.open("https://github.com/Boubajoker/LinKutter/", "_blank");
    };
});

navbar_btn_03.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.location = "./socials.html";
    };
});

if (date.getHours() >= 18) {
    document.body.style.background = "rgb(0, 0, 0, 0.750)";
};

console.log('%c<!--Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.--!>', 'color: rgb(255, 0, 0); font-size: 14px;');
console.log('%c<--Developed by Boubajoker and Lazaras.-->', 'color: rgb(0, 255, 0); background-color: rgb(0, 0, 0); border-radius: 5px; font-size: 14px;');

document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();

    custom_menu.style.display = 'block';
    custom_menu.style.top = `${e.clientY}px`;
    custom_menu.style.left = `${e.clientX}px`;
    custom_menu.style.animation = 'fade 0.3s ease-in';
});

btn_01.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.open("https://github.com/Boubajoker/LinKutter/", "_blank");
    }
});

btn_02.addEventListener('click', ()=>{
    document.location.reload();
});

btn_03.addEventListener('click', ()=>{
    navigator.clipboard.writeText(document.location.origin);
    popup.innerText = `Text copied ! (${document.location.origin})`;
    this.display_popup(0.7, 0.9);
});

document.addEventListener('click', ()=>{
    if (custom_menu.style.display === "block") {
        custom_menu.style.animation = 'fade-out 0.6s ease-out';
        setTimeout(()=>{
            custom_menu.style.removeProperty(style_properties);
            custom_menu.style.display = 'none';
            custom_menu.style.removeProperty(style_properties['display']);
            custom_menu.removeAttribute('style');
        }, 500);
    }
});