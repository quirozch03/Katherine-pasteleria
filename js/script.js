// ==========================================
// 1. ENVÍO DE CONSULTA / PEDIDO A WHATSAPP
// ==========================================
function handleFormSubmit(e) {
  e.preventDefault();

  const numeroWhatsApp = "51922803900";

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Emojis con codificación segura
  const icoPastel = "\u{1F370}"; // 🍰
  const icoPersona = "\u{1F464}"; // 👤
  const icoFono = "\u{1F4F1}";    // 📱
  const icoNota = "\u{1F4DD}";    // 📝

  const texto = 
    `${icoPastel} *Bienvenidos a pedidos Katherin Pasteleria*\n\n` +
    `${icoPersona} *Nombre:* ${nombre}\n` +
    `${icoFono} *Telefono:* ${telefono}\n\n` +
    `${icoNota} *Detalle del Pedido:*\n${mensaje}`;

  const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');

  const feedback = document.getElementById('formSuccess');
  if (feedback) feedback.classList.remove('d-none');
  e.target.reset();

  setTimeout(() => {
    if (feedback) feedback.classList.add('d-none');
  }, 5000);
}

// ==========================================
// 2. CIERRE AUTOMÁTICO DEL MENÚ (CLICK Y SCROLL)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
  const menuColapsable = document.getElementById('navContent');
  if (!menuColapsable) return;

  // Función auxiliar para cerrar el menú si está abierto
  function cerrarMenu() {
    if (menuColapsable.classList.contains('show')) {
      const instancia = bootstrap.Collapse.getInstance(menuColapsable);
      if (instancia) {
        instancia.hide();
      } else {
        new bootstrap.Collapse(menuColapsable, { toggle: false }).hide();
      }
    }
  }

  // 1. Cerrar al hacer clic en cualquier opción o botón del menú
  const itemsMenu = menuColapsable.querySelectorAll('.nav-link, a, button');
  itemsMenu.forEach(function (item) {
    item.addEventListener('click', function () {
      cerrarMenu();
    });
  });

  // 2. Cerrar automáticamente cuando el usuario hace SCROLL (desliza la pantalla)
  window.addEventListener('scroll', function () {
    cerrarMenu();
  }, { passive: true });

  // 3. Cerrar si el usuario hace clic/toque en cualquier parte fuera del menú
  document.addEventListener('click', function (e) {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(e.target)) {
      cerrarMenu();
    }
  });
});
