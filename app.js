
document.querySelectorAll('.word').forEach(el => {
  el.onclick = async () => {
    const word = el.textContent;
    const context = el.closest('p').textContent;
    const explainBox = document.getElementById('explain');
    explainBox.textContent = "Yapay zekâdan açıklama alınıyor...";
    explainBox.style.display = 'block';

    try {
      const res = await fetch('https://YOUR-PROXY-SERVER/ask', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ word, context })
      });
      const data = await res.json();
      explainBox.innerHTML = `
        <strong>${word}</strong><br>
        ${data.explanation}
      `;
    } catch (e) {
      explainBox.textContent = "Açıklama alınamadı.";
    }
  };
});
