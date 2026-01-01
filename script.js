document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! ☠ "
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav"); 
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `kamu klik konten ini sebanyak ${count} kali`;
    });
    
    document.getElementById('btn').addEventListener('click', function() {
        fetch('/api/info').then(response => response.json()).then(data => {
            const formatwaktu = new Date(data.waktu).toLocaleString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            document.getElementById('timeDisplay').textContent = formatwaktu;  
        });
    });
});