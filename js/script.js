// Contador de la relación de Pedro y Eimy.
// La relación comenzó el 25 de enero de 2023.
// Los meses en JavaScript empiezan en cero: enero = 0.
const fechaInicio = new Date(2023, 0, 25, 0, 0, 0);

function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora.getTime() - fechaInicio.getTime();

  if (diferencia < 0) diferencia = 0;

  const totalSegundos = Math.floor(diferencia / 1000);
  const dias = Math.floor(totalSegundos / 86400);
  const horas = Math.floor((totalSegundos % 86400) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
  document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);

document.getElementById('abrirSorpresa').addEventListener('click', () => {
  document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
});
