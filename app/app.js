(() => {
  let rate = null;
  const input = document.querySelector('#amount');
  const output = document.querySelector('#estimate-result');
  const error = document.querySelector('#calc-error');
  const rateLabel = document.querySelector('#reference-rate');
  const format = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  function updateEstimate() {
    const value = input.value.trim().replace(',', '.');
    const amount = Number(value);
    const valid = /^\d{1,4}(?:\.\d{0,2})?$/.test(value) && amount > 0;
    const invalid = value !== '' && !valid;
    output.value = valid && rate ? format.format(Math.round(amount * rate * 100) / 100) : '—';
    error.hidden = !invalid;
    input.setAttribute('aria-invalid', String(invalid));
  }

  const query = new URLSearchParams(location.search);
  const selected = query.get('plan') ?? query.get('tgWebAppStartParam');
  if (selected === 'travel') document.querySelector('[name="plan"][value="travel"]').checked = true;

  input.addEventListener('input', updateEstimate);
  updateEstimate();
  fetch('../reference-rate.json')
    .then(response => {
      if (!response.ok) throw new Error('Курс недоступен');
      return response.json();
    })
    .then(reference => {
      if (!Number.isFinite(reference.rubles) || reference.rubles <= 0) throw new Error('Курс недоступен');
      rate = reference.rubles;
      const date = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(reference.date));
      rateLabel.textContent = `Курс ЦБ на ${date.replace(/\.$/, '')}`;
      updateEstimate();
    })
    .catch(() => { rateLabel.textContent = 'Курс недоступен'; });

  const webApp = window.Telegram?.WebApp;
  webApp?.ready?.();
  webApp?.expand?.();
})();
