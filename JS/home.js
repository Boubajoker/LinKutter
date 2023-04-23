/**Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.**/

const selectElement = (selector) =>{
    const element = document.querySelector(selector);

    if(element) return element;
    throw new Error(`Cannot find \'${selector}\'`);
};

const text_input = selectElement('input');
const input_btn = selectElement('#input_btn');
const short_link_result_text = selectElement('#short_link_result_text')
const additional_text_box = document.querySelector('#additional_text_box');
const accesTocken = tocken

input_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const url = text_input.value;

    cut_url(url);
});

async function cut_url(url) {
    try {
        fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accesTocken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ long_url: url})
        })
        .then(response => response.json())
        .then(data =>{
            short_link_result_text.href = data.link;
            short_link_result_text.innerText = data.link;
        }).catch(error => console.error(error));
    } catch (error) {
        console.error(error);
    };
};

if (dark_mode) {
    additional_text_box.style.color = "rgb(255, 255, 255)";
};
