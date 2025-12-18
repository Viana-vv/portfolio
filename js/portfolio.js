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


const elementos = document.querySelectorAll('.scroll-ativo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    }
  });
}, {
  threshold: 0.3 // % do elemento visível
});

elementos.forEach(el => observer.observe(el));
function openMenu() {
    document.getElementById("menu").classList.add("active");
    document.querySelector(".menu-toggle").style.display = "none";
  }

  function closeMenu() {
    document.getElementById("menu").classList.remove("active");
    document.querySelector(".menu-toggle").style.display = "flex";
  }
