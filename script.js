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

`;
  
  const text2 = `Terima kasih sudah hadir di hidupku🤍

Aku mungkin tidak pernah tahu bagaimana akhir dari perjalanan kita nanti, tapi aku selalu percaya bahwa setiap pertemuan memiliki alasan.Dan salah satu hal yang paling aku syukuri adalah bisa dipertemukan denganmu.

Ada hal kecil dari dirimu yang mungkin tidak kamu sadari, tapi mampu membuatku tersenyum dan merasa bahagia.

Aku tahu aku masih jauh dari kata sempurna.Aku punya kekurangan, punya banyak hal yang masih harus aku perbaiki, dan ada bagian dari masa laluku yang membentuk siapa aku sekarang.Tapi satu hal yang ingin aku lakukan adalah terus belajar menjadi seseorang yang pantas untuk berada di sampingmu.

Aku ingin menjadi seseorang yang tidak hanya hadir ketika semuanya terasa mudah, tapi juga seseorang yang tetap berusaha memahami dan menjaga kamu ketika keadaan tidak selalu baik.

Terima kasih sudah memberikan aku kesempatan untuk mengenalmu.Terima kasih sudah mempercayakan sebagian ceritamu kepadaku.

Aku tidak ingin hanya menjadi seseorang yang singgah sebentar dalam hidupmu.Aku ingin menjadi bagian dari cerita yang akan selalu kamu ingat, cerita yang penuh dengan tawa, perjuangan, dan kenangan indah yang kita buat bersama.

Mungkin perjalanan kita masih panjang.Mungkin akan ada banyak hal yang harus kita pelajari satu sama lain.

Terima kasih sudah hadir di hidupku. Terima kasih sudah menjadi kamu.

Our story forever with you🤍`;
  
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