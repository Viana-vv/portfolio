  const btn = document.getElementById("toggleTheme");
        if (!document.body.classList.contains("light")) { btn.textContent = "🌙"; }
        btn.addEventListener("click", () => {
          const isLight = document.body.classList.toggle("light");
          btn.textContent = isLight ? "☀️" : "🌙";
        });

        const btnLang = document.getElementById("toggleLang");
        let lang = "pt";
        btnLang.addEventListener("click", () => {
          lang = lang === "pt" ? "en" : "pt";
          btnLang.textContent = lang === "pt" ? "🇧🇷" : "🇺🇸";
          document.querySelectorAll("[data-pt]").forEach(el => {
            el.textContent = el.dataset[lang];
          });
        });
     
        const light = document.createElement("div");
        light.classList.add("cursor-light");
        document.body.appendChild(light);
        document.addEventListener("mousemove", (e) => {
          light.style.left = e.clientX + "px";
          light.style.top = e.clientY + "px";
        });

        document.addEventListener("DOMContentLoaded", () => {
    const linksNovaAba = document.querySelectorAll('a[target="_blank"]');

    linksNovaAba.forEach(link => {
      link.addEventListener("click", function (event) {
        const confirmar = confirm("Este link será aberto em uma nova aba. Deseja continuar?");
        
        if (!confirmar) {
          event.preventDefault();
        }
      });
    });
  });