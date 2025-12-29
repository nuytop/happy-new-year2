function showMessage() {
    const messages = [
        "เค้ารักเบบี๋มากๆน้าาสุขสันต์ปีใหม่่ ",
        "ขอให้ยิ้มบ่อยๆ มีความสุขเยอะๆจากนี้และตลอดไปนะที่รักของเค้า",
        "ขอให้เจอแต่เรื่องดีๆ อะไรไม่ดีก็ปล่อยผ่านมานปายยย",
        "ปีใหม่นี้ขอให้ใช้ชีวิตให้มีความสุขเยอะๆอยากได้อะไรก็ได้สมปราถนาาา",
        "ขอให้รักเค้ามากๆ(อิอิ)",
                "ขอให้ปีนี้เป็นปีที่สดใสและดีขึ้นไปอีกในทุกๆปีต่อไป"
    ];

    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("result").innerText = messages[random];
}

/* 💖 สร้างหัวใจลอย */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    document.getElementById("effects").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

/* 🎆 สร้างพลุ */
function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";

    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";

    document.getElementById("effects").appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

/* 💌 เปิดการ์ด + เล่นเพลง */
function openCard() {
    document.getElementById("welcome").style.display = "none";

    const card = document.getElementById("card");
    card.style.display = "flex";
    card.classList.add("show");

    const music = document.getElementById("music");
    music.currentTime = 0;
    music.volume = 0;      // เริ่มเงียบ
    music.play();

    fadeInMusic(music, 0.25, 5000); // ดังถึง 0.25 ภายใน 5 วิ
}
function playVoice() {
    const music = document.getElementById("music");
    const voice = document.getElementById("voice");

    // หยุดเพลง
    music.pause();
    music.currentTime = 0;

    // เล่นเสียงอวยพร
    voice.play();

    // ถ้าอยากให้เพลงกลับมาหลังเสียงจบ
    voice.onended = () => {
        music.play();
    };
}
function surprise() {
    showMessage();

    // 💖 หัวใจลอยเยอะ ๆ
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 80);
    }

    // 🎆 พลุแตกหลายจุด
    for (let i = 0; i < 18; i++) {
        setTimeout(createFirework, i * 120);
    }
}
function fadeInMusic(audio, targetVolume, duration) {
    const steps = 20;
    const stepTime = duration / steps;
    const volumeStep = targetVolume / steps;

    let currentStep = 0;

    const fade = setInterval(() => {
        currentStep++;
        audio.volume = Math.min(audio.volume + volumeStep, targetVolume);

        if (currentStep >= steps) {
            clearInterval(fade);
        }
    }, stepTime);
}
