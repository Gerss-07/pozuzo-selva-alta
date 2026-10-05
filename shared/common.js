const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const refs = {
  mincetur: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=12877',
  muni: 'https://sinia.minam.gob.pe/sites/default/files/sinia/archivos/public/docs/dt-md_pozuzo_2017-2022_pasco.pdf',
  minam: 'https://sinia.minam.gob.pe/inea/informe/estado-y-los-impactos/',
  bosque: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=12110',
  clima: 'https://www.senamhi.gob.pe/load/file/01401SENA-20.pdf',
  eox: 'https://cloudless.eox.at/products/viewing',
  geo: 'https://www.geoboundaries.org/',
  photo1: 'https://commons.wikimedia.org/wiki/File:Colinas_en_Pozuzo_-_panoramio.jpg',
  photo2: 'https://commons.wikimedia.org/wiki/File:Paisaje_tipico_de_Pozuzo_-_panoramio.jpg'
};
function showDialog(html, returnFocus = document.activeElement) {
  const dialog = $('#dialog');
  if (!dialog) return;
  $('#dialogContent').innerHTML = html;
  dialog.showModal();
  dialog.querySelector('.close').focus();
  dialog.addEventListener('close', () => {
    if (returnFocus?.isConnected) returnFocus.focus();
  }, { once: true });
}
function setupCommon() {
  const dialog = $('#dialog');
  if (dialog) {
    dialog.querySelector('.close').onclick = () => dialog.close();
    dialog.onclick = e => { if (e.target === dialog) dialog.close(); };
  }
  $('#fullscreen')?.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  });
  $$('[data-sources]').forEach(button => button.addEventListener('click', () => showDialog(`
    <span class="label accent">FUENTES VERIFICADAS</span><h2>El territorio, documentado</h2>
    <ul>
      <li><a href="${refs.mincetur}" target="_blank" rel="noopener">MINCETUR · Pueblo de Pozuzo</a> — departamento, provincia y distrito.</li>
      <li><a href="${refs.muni}" target="_blank" rel="noopener">Municipalidad Distrital de Pozuzo</a> — Cordillera Oriental, transición territorial y confluencia de ríos (pp. 11–12).</li>
      <li><a href="${refs.minam}" target="_blank" rel="noopener">MINAM · Informe Nacional sobre el Estado del Ambiente</a> — Selva Alta: flanco oriental andino, montañas, bosques y humedad.</li>
      <li><a href="${refs.clima}" target="_blank" rel="noopener">SENAMHI · Guía climática turística</a> — clima lluvioso y húmedo en la localidad de Pozuzo.</li>
      <li><a href="${refs.bosque}" target="_blank" rel="noopener">MINCETUR · Lluvias Eternas de Pozuzo</a> — bosque y quebradas.</li>
    </ul><p class="modal-foot">El distrito atraviesa ambientes de selva baja, selva alta y ceja de selva. La exposición se enfoca en la Selva Alta, sin equiparar todo Pozuzo con esa ecorregión.</p>
  `)));
  $$('[data-script]').forEach(button => button.addEventListener('click', () => showDialog(`
    <span class="label accent">GERSSON GARAY · ~1:00</span><h2>Guion para presentar</h2>
    <p>Buenas noches. Soy Gersson Garay. Estudiaremos la ecorregión Selva Alta tomando Pozuzo como área de estudio. En el mapa ubicamos Perú, el departamento de Pasco, la provincia de Oxapampa y, finalmente, el distrito de Pozuzo.</p>
    <p>Esta área se encuentra en la vertiente oriental de los Andes, dentro de un territorio montañoso con bosques, ríos y quebradas. El Huancabamba y el Santa Cruz confluyen para formar el río Pozuzo.</p>
    <p>La Selva Alta se caracteriza por relieve de montaña, humedad y cobertura vegetal. Pozuzo es un territorio de transición; por eso nos enfocamos en sus ambientes de Selva Alta y no presentamos todo el distrito como una sola ecorregión.</p>
    <p>Primero entenderemos su territorio y biodiversidad; luego veremos cómo esa riqueza natural se relaciona con la economía local y con una propuesta de econegocio. Con el territorio ubicado, pasamos a reconocer los ecosistemas que sostienen esta biodiversidad.</p>
    <p class="modal-foot">Recorrido sugerido: ubicación ~20 s · paisaje ~20 s · Selva Alta y transición ~20 s.</p>
  `)));
}
document.addEventListener('DOMContentLoaded', setupCommon);
