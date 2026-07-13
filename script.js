// Tombol No kabur

const no = document.getElementById("no");

no.onclick = () => {
  
  no.style.position = "absolute";
  
  no.style.left = Math.random() * 80 + "vw";
  
  no.style.top = Math.random() * 80 + "vh";
  
};

document.getElementById("yes").onclick = () => {
  
  document.querySelector(".card").innerHTML = `

<img src="Foto2.jpg" class="photo">

<h1>Yeyyy kamu pilih aku 🤍</h1>

<button id="playMusic">🎵 Play Music</button>

<p id="loveText"></p>

<audio id="music" loop>
<source src="Fixcinta1.mp3" type="audio/mpeg">
</audio>

';

Const text2 = 'Untuk kamu yang jauh di sana 🤍

Terima kasih sudah hadir di hidupku. Aku masih sering merasa tidak percaya bahwa di antara banyaknya orang di dunia ini, aku bisa menemukan seseorang yang membuat hatiku merasa nyaman seperti ini.

Aku tahu perjalanan kita tidak selalu mudah. Ada jarak yang terkadang membuat rindu terasa lebih berat, ada waktu-waktu di mana kita hanya bisa saling menunggu kabar, dan ada momen ketika aku hanya bisa melihat senyummu lewat layar. Tapi dari semua itu, aku belajar bahwa seseorang yang berarti tetap bisa terasa dekat meskipun berada jauh.

Terima kasih sudah menjadi bagian dari hari-hariku. Terima kasih untuk setiap cerita kecil yang kamu bagikan, setiap perhatian sederhana yang kamu berikan, dan setiap waktu yang kamu luangkan untukku. Mungkin bagimu itu hal kecil, tapi bagiku itu adalah sesuatu yang berharga.

Aku sadar aku bukan seseorang yang sempurna. Aku punya kekurangan, punya kesalahan, dan punya masa lalu yang membentuk diriku sampai hari ini. Tapi bersamamu, aku ingin terus belajar menjadi versi terbaik dari diriku. Aku ingin menjadi seseorang yang bisa membuatmu merasa aman, dihargai, dan dicintai.

Aku tidak tahu bagaimana panjangnya perjalanan kita nanti. Aku tidak tahu apa saja yang akan kita hadapi di masa depan. Tapi satu hal yang aku tahu, hari ini aku bersyukur karena pernah menemukanmu.

Kalau suatu hari nanti kita melihat kembali perjalanan ini, aku berharap kita bisa tersenyum dan berkata, “Ternyata kita berhasil melewati semuanya bersama.”

Terima kasih sudah memilih aku. Terima kasih sudah hadir di ceritaku. Semoga apa yang kita bangun sekarang bisa menjadi kenangan indah yang selalu kita simpan dalam hati.

Jaga dirimu baik-baik ya. Karena ada seseorang di sini yang selalu mendoakanmu dan berharap kamu selalu bahagia.

Our story forever with you 🤍';
  const text2 = `;
  
  let j = 0;
  
  function writeText() {
    
    if (j < text2.length) {
      
      document.getElementById("loveText").innerHTML +=
        text2.charAt(j);
      
      j++;
      
      setTimeout(writeText, 50);
      
    } else {
      // tulisan sudah selesai baru hujan love
      hujanLove();
    }
    
  }
  
  writeText();
  
  
  function hujanLove() {
    
    setInterval(() => {
      
      const love = document.createElement("div");
      
      love.className = "love";
      love.innerHTML = ["🤍", "❤️", "💕", "✨"][Math.floor(Math.random() * 4)];
      
      love.style.left = Math.random() * 100 + "vw";
      love.style.animationDuration =
        (Math.random() * 3 + 2) + "s";
      
      document.body.appendChild(love);
      
      setTimeout(() => {
        love.remove();
      }, 5000);
      
    }, 150);
    
  }
  
  
  // Musik
  const music = document.getElementById("music");
  const button = document.getElementById("playMusic");
  
  button.onclick = () => {
    music.play();
  };
  
};