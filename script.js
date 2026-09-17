(function () {
  var emojis = [
    "😀", "😎", "🤩", "🥳", "😜", "🤪", "😇", "🥰", "😍", "🤗",
    "👍", "👏", "🙌", "💪", "🔥", "⭐", "✨", "🎉", "🎈", "🌈",
    "🍕", "🍔", "🍦", "🍩",  "🚀", "🦄", "🐱",
    "🐶", "🦊", "🐸", "🌻", "🌸", "💎", "❤️", "💛", "💚", "💙"
  ];

  var layer = document.getElementById("emoji-layer");
  var count = Math.min(45, Math.max(25, Math.floor(window.innerWidth / 25)));

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  for (var i = 0; i < count; i++) {
    var el = document.createElement("span");
    el.className = "emoji";
    el.textContent = pick(emojis);
    el.style.left = rand(0, 100) + "vw";
    el.style.top = rand(0, 100) + "vh";
    el.style.fontSize = rand(1.5, 4) + "rem";
    el.style.setProperty("--duration", rand(8, 22) + "s");
    el.style.setProperty("--delay", rand(-20, 0) + "s");
    el.style.setProperty("--dx1", rand(-80, 80) + "px");
    el.style.setProperty("--dy1", rand(-80, 80) + "px");
    el.style.setProperty("--dx2", rand(-120, 120) + "px");
    el.style.setProperty("--dy2", rand(-120, 120) + "px");
    el.style.setProperty("--dx3", rand(-60, 60) + "px");
    el.style.setProperty("--dy3", rand(-60, 60) + "px");
    layer.appendChild(el);
  }
})();
