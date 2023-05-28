/**Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.**/

let boubajoker_github_profile = document.querySelector('#boubajoker_github_profile');
let boubajoker_twitter_profile = document.querySelector('#boubajoker_twitter_profile');
let boubajoker_instagram_profile = document.querySelector('#boubajoker_instagram_profile');
let lazarsas_github_profile = document.querySelector('#lazarsas_github_profile');
let lazarsas_twitter_profile = document.querySelector('#lazarsas_twitter_profile');
let lazarsas_instagram_profile = document.querySelector('#lazarsas_instagram_profile');
let name_title_01 = document.querySelector('#name_title_01');
let name_title_02 = document.querySelector('#name_title_02');

boubajoker_github_profile.addEventListener('click', ()=>{
    window.open("https://github.com/Boubajoker/", "_blank");
});
boubajoker_twitter_profile.addEventListener('click', ()=>{
    this.display_popup(0.7, 0.9, "Not aividable yet");
});
boubajoker_instagram_profile.addEventListener('click', ()=>{
    this.display_popup(0.7, 0.9, "Not aividable yet");
});

lazarsas_github_profile.addEventListener('click', ()=>{
    window.open("https://github.com/Lazarsas/", "_blank");
});
lazarsas_twitter_profile.addEventListener('click', ()=>{
    this.display_popup(0.7, 0.9, "Not aividable yet");
});
lazarsas_instagram_profile.addEventListener('click', ()=>{
    this.display_popup(0.7, 0.9, "Not aividable yet");
});

if (dark_mode) {
    name_title_01.style.color = "rgb(255, 255, 255)";
    name_title_02.style.color = "rgb(255, 255, 255)";
};