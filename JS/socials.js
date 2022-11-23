/**Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.**/

const boubajoker_github_profile = document.querySelector('#boubajoker_github_profile');
const boubajoker_twitter_profile = document.querySelector('#boubajoker_twitter_profile');
const boubajoker_instagram_profile = document.querySelector('#boubajoker_instagram_profile');
const lazaras_github_profile = document.querySelector('#lazaras_github_profile');
const lazaras_twitter_profile = document.querySelector('#lazaras_twitter_profile');
const lazaras_instagram_profile = document.querySelector('#lazaras_instagram_profile');

boubajoker_github_profile.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.open("https://github.com/Boubajoker/", "_blank");
    };
});

boubajoker_twitter_profile.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.location = "./";
    };
});

boubajoker_instagram_profile.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.location = "./";
    };
});


lazaras_github_profile.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.open("https://github.com/Lazaras/", "_blank");
    };
});

lazaras_twitter_profile.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.location = "./";
    };
});

lazaras_instagram_profile.addEventListener('click', ()=>{
    if (this.check_network()) {
        window.location = "./";
    };
});