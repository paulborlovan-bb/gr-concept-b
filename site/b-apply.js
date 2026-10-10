/* Version B, Bewerbungsformular für Careers und Stelle (wie KarriereForm in v3), auf der gelben Fläche.
   GB.apply(stage, slug): stage = .stage-Element mit data-dock="rect", slug = vorausgewählte Stelle oder 'initiativ'. */
(function () {
  const { C, $, $$, esc } = GB, K = C.karriere, F = K.form;
  GB.apply = (stage, slug = 'initiativ') => {
    const box = stage.querySelector('.af');
    const options = [{ value: 'initiativ', label: F.initiativ }, ...K.jobs.map(j => ({ value: j.slug, label: (j.group === 'lehre' ? 'Lehre ' : '') + j.title + ' (' + K.mwd + ')' }))];
    let file = '';
    const mount = () => {
      file = '';
      box.innerHTML = `
        <div style="display:grid;gap:clamp(28px,4.5vh,48px)">
          <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 18px"><span class="info">${esc(F.info)}</span><h2 class="hm">${esc(F.head)}</h2></div>
          <form novalidate style="display:grid;gap:clamp(28px,4.5vh,40px)">
            <div class="af-2">
              <label class="fld" data-f="name"><span class="info">${esc(F.name)}</span><input name="name" autocomplete="name" placeholder="${esc(F.namePh)}"></label>
              <label class="fld" data-f="contact"><span class="info">${esc(F.contact)}</span><input name="contact" autocomplete="email"></label>
              <label class="fld"><span class="info">${esc(F.stelle)}</span><select name="stelle" class="sel">${options.map(o => `<option value="${esc(o.value)}"${o.value === slug ? ' selected' : ''}>${esc(o.label)}</option>`).join('')}</select></label>
              <label class="fld cv" data-f="cv"><span class="info">${esc(F.cv)}</span><span class="cvrow"><span class="cvname">${esc(F.cvHint)}</span><span class="info">${esc(F.cvPick)} →</span><input type="file" accept=".pdf,.doc,.docx" aria-label="${esc(F.cv)}"></span></label>
            </div>
            <div class="ferr" data-err style="display:grid;gap:6px"></div>
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:24px 48px;padding-top:clamp(20px,3vh,32px);border-top:1px solid #000">
              <div style="display:grid;gap:8px;flex:1 1 320px;max-width:520px"><label class="chk"><input type="checkbox" name="ok"><span>${esc(F.consent)}</span></label><div class="pl"><a href="${esc(F.privacyHref)}" style="text-decoration:underline;text-underline-offset:3px">${esc(F.privacy)}</a></div></div>
              <button class="send" type="submit"><span>${esc(F.submit)}</span><span>→</span></button>
            </div>
          </form>
        </div>`;
      const form = $('form', box), cvName = $('.cvname', box);
      $('input[type=file]', box).addEventListener('change', e => { const f = e.target.files && e.target.files[0]; file = f ? f.name : ''; cvName.textContent = file || F.cvHint; cvName.style.color = file ? '#000' : '#444442'; });
      form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.name.value.trim(), c = form.contact.value.trim(), ok = /\S+@\S+\.\S+/.test(c) || c.replace(/[^\d]/g, '').length >= 6;
        const errs = [!name && F.errName, !ok && F.errContact, !file && F.errCv, !form.ok.checked && F.errConsent].filter(Boolean);
        $('[data-f=name]', box).classList.toggle('bad', !name); $('[data-f=contact]', box).classList.toggle('bad', !ok); $('[data-f=cv]', box).classList.toggle('bad', !file);
        $('[data-err]', box).innerHTML = errs.map(x => `<span>${esc(x)}</span>`).join('');
        if (errs.length) return;
        box.innerHTML = `<div style="display:grid;gap:clamp(20px,3vh,32px);max-width:880px;min-height:clamp(240px,32vh,380px);align-content:end">
          <h3 class="disp" style="font-size:clamp(32px,3.4vw,60px);line-height:1">${esc(F.thanksHead.replace('{name}', name.split(' ')[0]))}</h3>
          <p class="txt">${esc(F.thanksText)}</p>
          <div><button class="lnk info" type="button" data-again style="background:none;border:0;border-bottom:1px solid #000;cursor:pointer;padding:0 0 6px">${esc(F.again)}</button></div></div>`;
        $('[data-again]', box).addEventListener('click', mount);
      });
    };
    mount();
    return { pick: s => { slug = s; const sel = $('select[name=stelle]', box); if (sel) sel.value = s; else mount(); } };
  };
})();
