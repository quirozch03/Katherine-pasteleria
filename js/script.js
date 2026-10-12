function handleFormSubmit(e) {
  e.preventDefault();

  const numeroWhatsApp = "51922803900";

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

  // Códigos exactos que WhatsApp interpreta correctamente
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
