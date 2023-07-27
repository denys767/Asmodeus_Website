const NoRules_count = document.querySelector('#NoRules');
const PVP_count = document.querySelector('#PVP');
const loader = document.querySelector('#loader');

NoRules_count.textContent = '⌛ Гравців'
PVP_count.textContent = '⌛  Гравців'

function FetchAPI() {
    fetch('http://57.128.198.11:3000/')
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
            NoRules_count.textContent = res.Servers[0].Players + ' Гравців';
            PVP_count.textContent = res.Servers[1].Players + ' Гравців';
        })
}

FetchAPI();
setInterval(FetchAPI, "25000");