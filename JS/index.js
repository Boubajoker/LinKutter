/**Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.**/

let navbar_btn_01 = document.querySelector('#navbar_btn_01');
let navbar_btn_02 = document.querySelector('#navbar_btn_02');
let navbar_btn_03 = document.querySelector('#navbar_btn_03');
let navbar_btn_04 = document.querySelector('#navbar_btn_04');
let custom_menu = document.querySelector('#custom_menu');
let popup = document.querySelector('#popup');
let btn_01 = document.querySelector('.b1');
let btn_02 = document.querySelector('.b2');
let btn_03 = document.querySelector('.b3');
let close_version_banner_btn = document.querySelector('#close_version_banner_btn');
let version_banner = document.querySelector('#version_banner');
let version_banner_text = document.querySelector('#version_banner_text');
let date = new Date();
let style_properties = ['display', 'animation', 'top', 'left'];
let version = "0.0.1 Alpha B-2Update0.1";
let dark_mode = false;

function display_popup(fade_in_time, fade_out_time, text) {
    popup.innerText = text;
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

if (
    document.URL === 'http://127.0.0.1:3520/'
    || document.URL === 'http://127.0.0.1:3520/index.html'
    || document.URL === 'http://127.0.0.1:3520/socials.html'
) {
    version_banner_text.innerText = version + "[INDEV]";
} else {
    version_banner_text.innerText = version;
};

navbar_btn_01.addEventListener('click', ()=>{
    window.location = "./";
});

navbar_btn_02.addEventListener('click', ()=>{
    window.open("https://github.com/Boubajoker/LinKutter/", "_blank");
});

navbar_btn_03.addEventListener('click', ()=>{
    window.location = "./socials.html";
});


if (date.getHours() >= 18) {
    document.body.style.background = "rgb(0, 0, 0, 0.750)";
    dark_mode = true;
} else {
    dark_mode = false;
};

document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    
    custom_menu.style.display = 'block';
    custom_menu.style.top = `${e.clientY}px`;
    custom_menu.style.left = `${e.clientX}px`;
    custom_menu.style.animation = 'fade 0.3s ease-in';
    btn_01.style.animation = 'fade 0.2s ease-in-out';
    btn_02.style.animation = 'fade 0.3s ease-in-out';
    btn_03.style.animation = 'fade 0.4s ease-in-out';
});

btn_01.addEventListener('click', ()=>{
    window.open("https://github.com/Boubajoker/LinKutter/", "_blank");
});

btn_02.addEventListener('click', ()=>{
    document.body.style.animation = "fade-out ease-out 0.8s";
    sessionStorage.setItem('Fade_Reload', true);
    setTimeout(()=>{document.location.reload(); document.body.style.display = "none"}, 800);
});

btn_03.addEventListener('click', ()=>{
    navigator.clipboard.writeText(document.location.origin);
    this.display_popup(0.7, 0.9, `Text copied ! (${document.location.origin})`);
});

if (sessionStorage.getItem('Fade_Reload')) {
    document.body.style.animation = "fade ease-in 0.8s";

    setTimeout(()=>{
        document.body.style.display = "block"; 
        sessionStorage.removeItem('Fade_Reload');
        setTimeout(()=>{
            document.body.style.removeProperty('animation');
            document.body.style.removeProperty('display');
        }, 1000)
    }, 800);
};

document.addEventListener('click', (e)=>{
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

close_version_banner_btn.addEventListener('click', ()=>{
    version_banner.remove();
    sessionStorage.setItem('version_banner_deleted', true);
});

if (sessionStorage.getItem('version_banner_deleted')) {
    version_banner.remove();
};

console.log(`%c<!--Linkutter Copyright (c) Boubajoker ${date.getUTCFullYear()}. All right reserved. Project under MIT License.--!>`, `color: rgb(${date.getDate()}0, 0, 0); font-size: 14px; background-color: rgb(255, 255, 255); border-radius: 5px;`);
console.log('%c<!--Developed by Boubajoker and Lazarsas.--!>', 'color: rgb(0, 255, 0); background-color: rgb(0, 0, 0); border-radius: 5px; font-size: 14px;');