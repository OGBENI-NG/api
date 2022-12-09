

function getBordTxt() {
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res => res.json())
    .then(data => {
        document.getElementById('bored-txt').textContent = data.activity
        console.log(data.type)
    })
}
setInterval(getBordTxt, 4000)