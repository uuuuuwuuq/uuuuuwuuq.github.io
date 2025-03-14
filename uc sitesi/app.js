// Giriş Yap Butonuna Tıklandığında
document.getElementById("loginButton").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // E-posta ve şifre kontrolü
    if (!email.includes("@") || password.trim() === "") {
        alert("Lütfen geçerli bir e-posta ve şifre girin.");
    } else {
        // Giriş başarılıysa
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        // Hakkında sayfasına yönlendirme
        window.location.href = "about.html"; // Hakkında sayfasına yönlendiriyoruz
    }
});

// Çekilişe Katıl Butonuna Tıklandığında
document.getElementById("cekilisButton").addEventListener("click", function() {
    // 4 gün sonra çekiliş sonuçlarının açıklanacağı bildirimi
    document.getElementById("notificationMessage").textContent = "Çekilişe Katıldınız! Sonuçlar 4 gün sonra açıklanacak!";
    document.getElementById("notification").style.display = "block";

    // Çekiliş butonunu devre dışı bırakıyoruz
    document.getElementById("cekilisButton").disabled = true;

    // 4 gün sonra sonuçları açıklayacağız
    setTimeout(function() {
        var winner = ["Tebrikler, Kazandınız!", "Bir dahaki sefere şansını dene."];
        document.getElementById("notificationMessage").textContent = winner[Math.floor(Math.random() * winner.length)];
        document.getElementById("notification").style.display = "block";
    }, 4 * 24 * 60 * 60 * 1000);  // 4 gün sonra
});

// Bildirim Kapatma
document.getElementById("closeNotification").addEventListener("click", function() {
    document.getElementById("notification").style.display = "none";
});
