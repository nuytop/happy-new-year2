function showMessage() {
    const messages = [
        "เค้ารักเบบี๋มากๆน้าาสุขสันต์ปีใหม่่ ",
        "ขอให้ยิ้มบ่อยๆ มีความสุขเยอะๆจากนี้และตลอดไปนะที่รักของเค้า",
        "ขอให้เจอแต่เรื่องดีๆ มีเค้าอยู่ข้างๆเสมอตลอดไปอีกปี",
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

    // หน่วงนิดนึงให้ transition ทำงาน
    setTimeout(() => {
        card.classList.add("show");
    }, 50);

    const music = document.getElementById("music");
    music.volume = 0.3;
    music.play();
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

