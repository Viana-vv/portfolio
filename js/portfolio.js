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
  const modal = document.getElementById("modal");
  const confirmarBtn = document.getElementById("confirmar");
  const cancelarBtn = document.getElementById("cancelar");

  let linkDestino = null;

  linksNovaAba.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // bloqueia o clique inicial
      linkDestino = this.href; // guarda o destino
      modal.style.display = "flex"; // mostra o modal
    });
  });

  confirmarBtn.addEventListener("click", () => {
    window.open(linkDestino, "_blank"); // abre em nova aba
    modal.style.display = "none";
  });

  cancelarBtn.addEventListener("click", () => {
    modal.style.display = "none"; // fecha sem abrir
    linkDestino = null;
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
  
  // fecha ao clicar em um item
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      form.reset();
      form.style.display = 'none';
      thankYou.style.display = 'block';
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  } catch (error) {
    alert('Erro de conexão. Tente novamente.');
  }
});
const buttons = document.querySelectorAll('.buttonHead');

function changeLanguage(lang) {
  buttons.forEach(button => {
    const text = lang === 'pt' ? button.dataset.pt : button.dataset.en;
    // Mantendo o ícone
    button.querySelector('i').nextSibling.textContent = ' ' + text;
  });
}
window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  const content = document.getElementById("content");


  setTimeout(function () {
    loading.style.display = "none";
    content.style.display = "block";
    content.classList.add("show");
  }, 1000);
});

// JS principal para Faculdade/Técnico/Cursos
function pfFilter(event, type) {
    const cards = document.querySelectorAll('.pf-card');
    const buttons = document.querySelectorAll('.pf-btn');

    cards.forEach(card => card.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('pf-btn-active'));

    document.querySelectorAll('.' + type)
        .forEach(card => card.style.display = 'block');

    event.target.classList.add('pf-btn-active');
}

// JS para subcategorias dentro de Cursos
function showSubCursos(category, btn) {
    const allSub = document.querySelectorAll('.sub-curso');
    allSub.forEach(sc => sc.style.display = 'none');

    const buttons = btn.parentNode.querySelectorAll('button');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.' + category).forEach(sc => sc.style.display = 'block');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.pf-btn').click();
});

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const link = document.getElementById('linkFormacao');

  link.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = link.href;
    }, 800);
  });
});document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const link = document.getElementById('linkFormacao2');

  link.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = link.href;
    }, 800);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const link = document.getElementById('linkFormacao3');

  link.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = link.href;
    }, 800);
  });
});