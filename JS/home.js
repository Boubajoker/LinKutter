/**Linkutter Copyright (c) Boubajoker 2022. All right reserved. Project under MIT License.**/

function google_search() {
    const text_input = document.getElementById('text_input').value;
    const google_base_url = 'https://www.google.com/search?q=';
    const url = google_base_url + text_input;
    const win = window.open(url, '_self');
    
    win.focus();
};

text_input.addEventListener('keydown', (e)=>{
    if (
        e.key === 'Enter'
    ) {
        if (this.check_network()) {
            this.google_search();
        };
    };
});