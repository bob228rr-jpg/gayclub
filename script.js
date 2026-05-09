const copyButtons = document.querySelectorAll("[data-copy]");

for (const button of copyButtons) {
  const original = button.textContent.trim();

  button.addEventListener("click", async () => {
    const value = button.dataset.copy || "";

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "copied";
      window.setTimeout(() => {
        button.textContent = original;
      }, 900);
    } catch {
      button.textContent = "copy failed";
      window.setTimeout(() => {
        button.textContent = original;
      }, 900);
    }
  });
}

const gainLayer = document.querySelector(".gain-layer");
const gainTexts = [
  "+100 $gayaura",
  "+350 $gayaura",
  "+500 $gayaura",
  "+700 $gayaura",
  "+900 $gayaura",
  "+1100 $gayaura",
  "+1200 $gayaura",
  "wagmi +500",
  "king +400",
  "ser +800"
];

function spawnGain() {
  if (!gainLayer) return;

  const el = document.createElement("div");
  el.className = `gain-popup r${Math.floor(Math.random() * 6) + 1}`;
  el.textContent = gainTexts[Math.floor(Math.random() * gainTexts.length)];
  el.style.left = `${6 + Math.random() * 82}%`;
  el.style.top = `${18 + Math.random() * 68}%`;
  gainLayer.appendChild(el);

  window.setTimeout(() => {
    el.remove();
  }, 3600);
}

for (let i = 0; i < 8; i += 1) {
  window.setTimeout(spawnGain, i * 320);
}

window.setInterval(spawnGain, 1200);
