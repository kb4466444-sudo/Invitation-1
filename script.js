const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");
const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const shareBtn = document.getElementById("shareBtn");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
  envelope.classList.add("hidden");
  invitation.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
  petals();
});

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "⏸️ গান বন্ধ করুন";
    } else {
      music.pause();
      musicBtn.textContent = "🎵 গান চালু করুন";
    }
  } catch {
    alert("এই পেজে গানটি চালু করতে kolkata-book-fair-song.mp3 ফাইলটি যোগ করুন।");
  }
});

shareBtn.addEventListener("click", async () => {
  const text = "🌸 সাদর আমন্ত্রণ 🌸\nহস্তশিল্প মেলা • খাদ্য মেলা • বই মেলা\n২১ আগস্ট ২০২৬\nজনকল্যাণ শিক্ষা মন্দির হাই স্কুল";
  const url = window.location.href;
  const whatsapp = "https://wa.me/?text=" + encodeURIComponent(text + "\n\nআমন্ত্রণপত্র: " + url);
  window.open(whatsapp, "_blank");
});

function petals(){
  for(let i=0;i<18;i++){
    const p=document.createElement("div");
    p.className="petal";
    p.textContent=["🌸","🌺","🍃"][Math.floor(Math.random()*3)];
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(4+Math.random()*5)+"s";
    p.style.animationDelay=(Math.random()*2)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),11000);
  }
}
