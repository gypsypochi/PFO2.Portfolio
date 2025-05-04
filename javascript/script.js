// ================================
//  FUNCIONALIDAD 1: VALIDACIÓN AVANZADA + ANIMACIÓN ENVÍO
// ================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario-contacto');
    const erroresDiv = document.getElementById('errores');
    const btnEnviar = document.querySelector('.enviar');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      erroresDiv.innerHTML = '';
      erroresDiv.style.display = 'none';
      let errores = [];
  
      const nombre = document.getElementById('nombre');
      const apellido = document.getElementById('apellido');
      const email = document.getElementById('email');
      const mensaje = document.getElementById('mensaje');
  
      // Validación individual
      if (nombre.value.trim() === '') errores.push('⚠️ El nombre es obligatorio.');
      if (apellido.value.trim() === '') errores.push('⚠️ El apellido es obligatorio.');
      if (!validarEmail(email.value)) errores.push('⚠️ El email no es válido.');
      if (mensaje.value.trim().length < 10) errores.push('⚠️ El mensaje debe tener al menos 10 caracteres.');
  
      // Mostrar errores o continuar
      if (errores.length > 0) {
        erroresDiv.innerHTML = errores.join('<br>');
        erroresDiv.style.display = 'block';
      } else {
        // Simula envío con animación
        btnEnviar.classList.add('loading');
        btnEnviar.disabled = true;
  
        setTimeout(() => {
          alert('✅ ¡Formulario enviado correctamente!');
          form.reset();
          erroresDiv.style.display = 'none';
          btnEnviar.classList.remove('loading');
          btnEnviar.disabled = false;
        }, 1500); // Simula 1.5s de "envío"
      }
    });
  
    // Validación de formato de email
    function validarEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  });
  
  
  // ================================
  //  FUNCIONALIDAD 2: MODO CLARO / OSCURO
  // ================================
  
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  
  // Inicialmente modo oscuro por defecto
  document.body.classList.add('oscuro');
  
  // Cambiar a modo claro solo si se hace clic en el sol
  sun.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.remove('oscuro');
    document.body.classList.add('claro');
  });
  
  // Cambiar a modo oscuro solo si se hace clic en la luna
  moon.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.remove('claro');
    document.body.classList.add('oscuro');
  });
  
  
  // ================================
  //  FUNCIONALIDAD 3: CONTADOR DE VISITAS
  // ================================
  let visitas = localStorage.getItem("visitas");
  if (!visitas) {
    visitas = 1;
  } else {
    visitas = parseInt(visitas) + 1;
  }
  localStorage.setItem("visitas", visitas);
  document.getElementById("visitas").textContent = visitas;
  


   // ================================
  //  FUNCIONALIDAD 4: GALERIA DE IMAGENES ALEATORIA EN PELICULAS
  // ================================
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".pelicula-card");

    cards.forEach(card => {
      const imgs = JSON.parse(card.getAttribute("data-imgs"));
      const imgEl = card.querySelector(".pelicula-img");
      const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
      imgEl.src = randomImg;
    });
  });


   // ================================
  // 📌 FUNCIONALIDAD 5: ANIMACION DE HABILIDADES
  // ================================
document.addEventListener("DOMContentLoaded", () => {
    const habilidades = document.querySelectorAll(".habilidad");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fila = entry.target.querySelectorAll('.habilidad');
                fila.forEach((habilidad, index) => {
                    setTimeout(() => {
                        habilidad.classList.add("visible");
                    }, index * 100); // escalonado
                });
                observer.unobserve(entry.target); // Para que no se repita
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% de la sección es visible
    });

    // Observamos solo las filas de habilidades (2 divs)
    document.querySelectorAll(".fila-habilidades").forEach(fila => {
        observer.observe(fila);
    });
});

