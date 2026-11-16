(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={telegram:``,max:``},t=[{id:`online`,name:`Для подписок`,purpose:`Для регулярных оплат на зарубежных сайтах.`,terms:{issue:null,maintenance:null,network:null},details:[`Нейросети, софт и стриминги`,`Оплата по реквизитам карты`,`Пополнение в рублях через СБП`]},{id:`travel`,name:`Для поездок`,purpose:`Для бронирований и покупок за границей.`,terms:{issue:null,maintenance:null,network:null},details:[`Билеты, отели и апартаменты`,`Покупки в зарубежных магазинах`,`Оплата телефоном уточняется`]}],n=[[`all`,`Все`],[`work`,`Работа и ИИ`],[`media`,`Подписки`],[`stores`,`Приложения и игры`],[`travel`,`Поездки`]],r=[{id:`chatgpt`,name:`ChatGPT`,logo:`openai`,group:`work`,aliases:[`OpenAI`,`чат гпт`,`чатгпт`],context:`Подписка Plus и другие продукты OpenAI могут использовать разные способы оплаты.`},{id:`claude`,name:`Claude`,logo:`claude`,group:`work`,aliases:[`Anthropic`,`клод`],context:`Оплата зависит от региона аккаунта и правил Anthropic.`},{id:`figma`,name:`Figma`,logo:`figma`,group:`work`,context:`Проверка нужна отдельно для первого платежа и продления подписки.`},{id:`notion`,name:`Notion`,logo:`notion`,group:`work`,context:`Платёжные условия зависят от тарифа и региона рабочего пространства.`},{id:`spotify`,name:`Spotify`,logo:`spotify`,group:`media`,context:`Способ оплаты зависит от страны аккаунта.`},{id:`netflix`,name:`Netflix`,logo:`netflix`,group:`media`,context:`Способы оплаты различаются по стране аккаунта.`},{id:`apple`,name:`App Store`,logo:`apple`,group:`stores`,aliases:[`Apple`,`эпл`,`апп стор`],context:`Способ оплаты должен подходить для страны или региона вашего Apple Account.`},{id:`google-play`,name:`Google Play`,logo:`google-play`,group:`stores`,aliases:[`гугл плей`,`плей маркет`],context:`Доступные способы оплаты зависят от страны Google Play.`},{id:`steam`,name:`Steam`,logo:`steam`,group:`stores`,context:`Оплату картой и пополнение кошелька нужно проверять отдельно.`},{id:`airbnb`,name:`Airbnb`,logo:`airbnb`,group:`travel`,context:`Способы оплаты могут зависеть от страны и конкретного бронирования.`},{id:`booking`,name:`Booking.com`,logo:`booking`,group:`travel`,aliases:[`букинг`,`отель`],context:`Условия оплаты и предавторизации зависят от объекта размещения.`},{id:`trip`,name:`Trip.com`,logo:`trip`,group:`travel`,aliases:[`трип`,`билеты`],context:`Способы оплаты зависят от бронирования и страны оформления.`},{id:`turkish`,name:`Turkish Airlines`,logo:`turkish`,group:`travel`,aliases:[`турецкие авиалинии`,`билеты`],context:`Условия оплаты и возврата уточняются для выбранного билета.`},{id:`youtube`,name:`YouTube Premium`,logo:`youtube`,group:`media`,aliases:[`ютуб`],context:`Проверяйте правила подписки для страны аккаунта YouTube.`}],i={date:`16 ноября 2026 года`,cards:[`Карта 1`,`Карта 2`,`Карта 3`],rows:[[`Выпуск`,`990 ₽`,`1 699 ₽ по акции`,`2 990 ₽`],[`Обслуживание`,`$6 в месяц`,`0 ₽`,`0 ₽ первый год`],[`Как пополнять`,`Перевод или карта`,`СБП`,`СБП`]]},a={users:null,rating:null,reviews:[]},o=new Intl.NumberFormat(`ru-RU`,{style:`currency`,currency:`RUB`,minimumFractionDigits:0,maximumFractionDigits:2}),s=(e,t=``)=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${e}"/></svg>`,c=s(`M20 20l-4.5-4.5M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z`),l=s(`m5 12 4 4L19 6`),u=s(`m6 6 12 12M18 6 6 18`);function d(){return`<a class="wordmark" href="./"><img src="./wordmark.svg" alt="Плати отсюда, главная" width="151" height="23"></a>`}function f(e){return`<img src="./brands/${e.logo}.svg" alt="" width="34" height="34">`}function p(e){return`<button class="service-card" type="button" data-select-service="${e.id}" aria-pressed="false">
    <span class="service-icon">${f(e)}</span>
    <span><strong>${e.name}</strong><small>${n.find(([t])=>t===e.group)?.[1]??``}</small></span>
  </button>`}function m(){return`<div class="hero-services" aria-label="Быстрый выбор сервиса">
    ${[`chatgpt`,`claude`,`spotify`,`apple`,`airbnb`].map(e=>{let t=r.find(t=>t.id===e);return`<button type="button" data-start-service="${e}" aria-label="Подобрать карту для ${t.name}">${f(t)}</button>`}).join(``)}
  </div>`}function h(){return t.map(e=>{let t=e.id===`online`?[`chatgpt`,`claude`,`figma`,`spotify`]:[`airbnb`,`booking`,`trip`,`turkish`];return`<article class="plan-card" data-plan-card="${e.id}">
    <div>
      <h3>${e.name}</h3>
      <p>${e.purpose}</p>
    </div>
    <ul class="plan-brands" aria-label="Примеры сервисов">${t.map(e=>{let t=r.find(t=>t.id===e);return`<li><button type="button" data-service="${e}" aria-label="Проверить ${t.name}">${f(t)}</button></li>`}).join(``)}</ul>
    <ul class="plan-features">${e.details.map(e=>`<li>${l}${e}</li>`).join(``)}</ul>
    <div class="plan-action">
      <span>${e.terms.issue??`Условия готовятся`}</span>
      <button class="btn ${e.id===`online`?`btn-primary`:`btn-outline`}" type="button" data-plan="${e.id}">Условия карты</button>
    </div>
  </article>`}).join(``)}function g(){return`<table>
    <thead><tr><th scope="col">Условия</th>
    ${i.cards.map((e,t)=>`<th scope="col" data-competitor="${t}">${e}</th>`).join(``)}</tr></thead>
    <tbody>${i.rows.map(([e,...t])=>`<tr><th scope="row">${e}</th>${t.map((e,t)=>`<td data-competitor="${t}">${e}</td>`).join(``)}</tr>`).join(``)}</tbody>
  </table>`}var _=[[`Что можно оплатить картой?`,`Карта рассчитана на зарубежные покупки и подписки. Доступность конкретного сервиса зависит от тарифа, правил площадки и региона аккаунта. Проверяйте статус в каталоге перед выпуском.`],[`Как пополнять карту?`,`Планируем пополнение рублями через СБП. Сумма к оплате, курс и комиссия будут показаны перед подтверждением. Сейчас на сайте доступен пример расчёта.`],[`Какая платёжная система будет у карты?`,`Платёжную систему, страну эмитента и доступные способы оплаты укажем в условиях конкретного тарифа перед выпуском.`],[`Можно будет пользоваться картой в поездках?`,`Для поездок предусмотрен отдельный тариф. Привязку к мобильному кошельку и условия оплаты у терминала подтвердим после проверки.`],[`Что делать, если оплата не прошла?`,`Проверьте совместимость, баланс и требования к стране аккаунта. Условия списаний при отказе, возврата и работы поддержки опубликуем вместе с тарифом.`],[`Где открывается карта?`,`Основной канал выпуска — Telegram Mini App. Подключение MAX предусмотрено как дополнительный способ доступа.`]];function v(e,t,n){return`<dialog id="${e}" aria-labelledby="${e}-title">
    <form method="dialog" class="dialog-head"><h2 id="${e}-title">${t}</h2><button class="icon-button" value="close" aria-label="Закрыть">${u}</button></form>
    ${n}
  </dialog>`}function y(){return!a.users&&!a.rating&&!a.reviews.length?``:`<section class="wrap section proof-section" aria-labelledby="proof-title">
    <h2 id="proof-title">Что говорят клиенты</h2>
    <div class="proof-stats">${[a.users,a.rating].filter(Boolean).map(e=>`<a href="${e.url}"><strong>${e.value}</strong><span>${e.label}</span></a>`).join(``)}</div>
    <div class="proof-reviews">${a.reviews.map(e=>`<figure><blockquote>${e.text}</blockquote><figcaption><a href="${e.url}">${e.name}</a></figcaption></figure>`).join(``)}</div>
  </section>`}function b(){return`<header class="site-head" data-site-head>
    <div class="wrap head-row">
      ${d()}
      <nav aria-label="Основное меню"><a href="#services">Подбор карты</a><a href="#how">Как это работает</a><a href="#cards">Карты</a><a href="#faq">Вопросы</a></nav>
      <a class="btn btn-dark head-cta" data-event="header_choose_card" href="#services">Подобрать карту</a>
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero-layout">
        <div class="hero-copy">
          <h1 id="hero-title">Платите за рубежом</h1>
          <p>Виртуальная карта для подписок, покупок и поездок. Выберите сервис и узнайте сумму в рублях.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#services" data-event="hero_choose_card">Подобрать карту</a>
            <a class="btn btn-secondary" href="#how">Как это работает</a>
          </div>
          ${m()}
        </div>
        <figure class="hero-media">
          <img class="hero-picture" src="./card-isolated.webp" alt="Графитовая виртуальная карта «Плати отсюда»" width="1050" height="657" fetchpriority="high">
        </figure>
      </div>
      <div class="wrap hero-footer">
        <p>Пополнение в рублях через СБП</p>
        <div class="hero-channels">
          <button type="button" data-channel="telegram"><img src="./brands/telegram.svg" alt="" width="22" height="22">Telegram</button>
          <button type="button" data-channel="max"><img src="./brands/max.svg" alt="" width="22" height="22">MAX</button>
        </div>
      </div>
    </section>

    <section id="services" class="section wrap services-section" aria-labelledby="services-title">
      <div class="section-head"><h2 id="services-title">Что хотите оплатить?</h2><p>Выберите сервис и введите нужную сумму.</p></div>
      <div class="payment-flow">
        <div class="catalog-panel">
          <label class="search-field">${c}<span class="sr-only">Название сервиса</span><input id="service-search" type="search" placeholder="Название сервиса" autocomplete="off"></label>
          <div class="filters" aria-label="Категории сервисов"></div>
          <div id="service-results" class="service-results"></div>
          <p id="service-count" class="sr-only" aria-live="polite"></p>
          <p id="empty-services" class="empty-state" hidden>Сервис не найден. Попробуйте другое название или откройте подбор по категории.</p>
          <div class="catalog-more"><button type="button" id="catalog-more" class="btn btn-secondary" aria-controls="service-results" aria-expanded="false">Все сервисы</button></div>
        </div>
        <div class="payment-summary" id="estimate" tabindex="-1" aria-labelledby="estimate-title">
          <h3 id="estimate-title">Ваш платёж</h3>
          <div class="selection-header" aria-live="polite">
            <span id="selected-service-logo" class="service-icon"></span>
            <span><strong id="selected-service-name"></strong><small id="selected-service-plan"></small></span>
          </div>
          <p class="selection-status" id="selected-service-status"></p>
          <div class="estimate-fields">
            <label class="estimate-field"><span id="dollars-label">Сумма платежа</span><span class="amount"><input id="dollars" value="20" type="text" inputmode="decimal" maxlength="10" aria-labelledby="dollars-label" aria-describedby="rate-note calc-error" autocomplete="off"><span class="currency">USD</span></span></label>
            <div class="estimate-field"><span id="rubles-label">В рублях</span><output id="rubles" class="amount" for="dollars" aria-labelledby="rubles-label">—</output></div>
          </div>
          <div class="summary-rate"><a id="rate-note" href="https://www.cbr.ru/currency_base/daily/" target="_blank" rel="noopener noreferrer">Курс ЦБ</a><span id="rate-value">Загрузка курса</span></div>
          <p id="calc-error" class="error" hidden>Введите сумму от $0,01 до $9 999,99.</p>
          <a id="continue-payment" class="btn btn-primary summary-cta" href="./app/index.html" data-event="continue_payment">Открыть в приложении</a>
          <p class="summary-note">${e.telegram?`Условия выпуска и пополнения видны в приложении.`:`Можно посмотреть выбор карты и расчёт. Выпуск пока закрыт.`}</p>
        </div>
      </div>
    </section>

    <section id="how" class="section wrap how-section" aria-labelledby="how-title">
      <div>
        <div class="section-head"><h2 id="how-title">Что внутри приложения</h2></div>
        <ol class="steps">
          <li><span aria-hidden="true">1</span><div><h3>Выберите карту</h3><p>Для подписок или для поездок. Выбранный сервис и сумма уже будут в приложении.</p></div></li>
          <li><span aria-hidden="true">2</span><div><h3>Проверьте расчёт</h3><p>Измените сумму и посмотрите эквивалент в рублях.</p></div></li>
          <li><span aria-hidden="true">3</span><div><h3>Оплатите покупку</h3><p>После запуска реквизиты карты появятся в приложении.</p></div></li>
        </ol>
        <a class="btn btn-primary" href="./app/index.html" data-event="how_open_miniapp">Попробовать Mini App</a>
      </div>
      <figure class="how-preview"><img src="./app-preview.webp" alt="Предпросмотр приложения с выбором карты и расчётом пополнения" width="390" height="760" loading="lazy"></figure>
    </section>


    <section id="cards" class="section cards-section" aria-labelledby="cards-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="cards-title">Какая карта вам нужна?</h2>
          <p>Выберите, где будете платить чаще всего.</p>
        </div>
        <div class="plan-grid">${h()}</div>
      </div>
    </section>

    <section id="comparison" class="section comparison-section" aria-labelledby="comparison-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="comparison-title">Сравните условия</h2>
          <p>Три предложения на рынке на ${i.date}.</p>
        </div>
        <div class="compare-controls" role="group" aria-label="С какой картой сравнить">${i.cards.map((e,t)=>`<button type="button" data-compare="${t}" aria-pressed="${t===0}">${e}</button>`).join(``)}</div>
        <div class="comparison-scroll" data-show="0" role="region" aria-label="Таблица сравнения карт">${g()}</div>
        <div class="comparison-foot"><p class="comparison-note">Проверьте выпуск, обслуживание и пополнение. Эти расходы складываются.</p><a class="btn btn-secondary" href="#cards">Наши карты</a></div>
      </div>
    </section>

    ${y()}

    <section id="faq" class="section faq-section" aria-labelledby="faq-title">
      <div class="wrap faq-layout">
        <div><h2 id="faq-title">Частые вопросы</h2><a class="btn btn-secondary" href="#services">Проверить свой сервис</a></div>
        <div class="faq-list">${_.map(([e,t])=>`<details><summary>${e}<span aria-hidden="true"></span></summary><p>${t}</p></details>`).join(``)}</div>
      </div>
    </section>

    <section class="wrap final-section" aria-labelledby="final-title">
      <div><h2 id="final-title">Подберите карту</h2><p>Начните с сервиса или покупки, которую хотите оплатить.</p></div>
      <a class="btn btn-primary" href="#services" data-event="footer_choose_card">Подобрать карту</a>
    </section>
  </main>

  <footer class="site-footer"><div class="wrap">
    ${d()}
    <p>${e.telegram?`Международные платежи и зарубежные карты`:`Предпросмотр сервиса. Выпуск карт пока недоступен.`}</p>
    <a href="#faq">Помощь</a>
  </div></footer>

  ${v(`service-dialog`,`Совместимость`,`<div id="service-dialog-body"></div>`)}
  ${v(`plan-dialog`,`Карта`,`<div id="plan-dialog-body"></div>`)}
  ${v(`channel-dialog`,`Канал выпуска`,`<div id="channel-dialog-body"></div>`)}
  `}function x(t){let n=t===`max`?`MAX`:`Telegram`,r=e[t];return r?`<p>Откройте официальный канал сервиса.</p><a class="btn btn-dark" data-event="open_${t}" href="${r}" rel="noopener noreferrer" target="_blank">Открыть ${n}</a>`:`<p>${t===`max`?`Доступ через MAX планируется. Здесь появится ссылка после подключения.`:`Выпуск в Telegram откроется после запуска. Уже можно посмотреть, как будет выглядеть приложение.`}</p><a class="btn btn-dark" href="./app/index.html" data-event="open_miniapp_preview">Открыть демо приложения</a>`}document.querySelector(`#site`).innerHTML=b(),document.addEventListener(`pointerdown`,()=>{document.documentElement.dataset.input=`pointer`},{capture:!0}),document.addEventListener(`keydown`,e=>{e.key===`Tab`&&(document.documentElement.dataset.input=`keyboard`)},{capture:!0});var S=document.querySelector(`#service-results`),C=document.querySelector(`.filters`),w=document.querySelector(`#service-search`),T=document.querySelector(`#empty-services`),E=document.querySelector(`#service-count`),D=document.querySelector(`#catalog-more`),O=6,k=`all`,A=!1,j=r[0];function M(e,t={}){window.dataLayer??=[],window.dataLayer.push({event:e,...t})}function N(){let e=w.value.trim().toLocaleLowerCase(`ru`),t=r.filter(t=>(k===`all`||t.group===k)&&[t.name,...t.aliases??[]].some(t=>t.toLocaleLowerCase(`ru`).includes(e))),n=k===`all`&&!e&&t.length>O,i=n&&!A?t.slice(0,O):t;n&&!A&&!i.includes(j)&&(i[i.length-1]=j),S.innerHTML=i.map(p).join(``),P(),T.hidden=!!t.length,D.hidden=!n,D.setAttribute(`aria-expanded`,String(A)),D.textContent=A?`Свернуть каталог`:`Все сервисы (${t.length})`,E.textContent=`Показано ${i.length} из ${t.length}`}function P(){for(let e of S.querySelectorAll(`[data-select-service]`))e.setAttribute(`aria-pressed`,String(e.dataset.selectService===j.id))}C.innerHTML=n.map(([e,t])=>`<button type="button" data-group="${e}" aria-pressed="${e===k}">${t}</button>`).join(``);function F(){for(let e of C.querySelectorAll(`[data-group]`))e.setAttribute(`aria-pressed`,String(e.dataset.group===k))}C.addEventListener(`click`,e=>{let t=e.target.closest(`[data-group]`);t&&(k=t.dataset.group,F(),M(`service_filter`,{group:k}),N())}),w.addEventListener(`input`,N),D.addEventListener(`click`,()=>{A=!A,N(),A||document.querySelector(`#services`).scrollIntoView()}),N();var I=document.querySelector(`.comparison-scroll`),L=document.querySelector(`.compare-controls`);L.addEventListener(`click`,e=>{let t=e.target.closest(`[data-compare]`);if(t){I.dataset.show=t.dataset.compare;for(let e of L.querySelectorAll(`[data-compare]`))e.setAttribute(`aria-pressed`,String(e===t))}});var R=document.querySelector(`#dollars`),z=document.querySelector(`#rubles`),B=document.querySelector(`#calc-error`),V=document.querySelector(`#rate-value`),H=document.querySelector(`#estimate`),U=document.querySelector(`#continue-payment`),W=null,G=new Intl.NumberFormat(`ru-RU`,{maximumFractionDigits:4});function K(){return t.find(e=>e.id===(j.group===`travel`?`travel`:`online`))}function q(){let e=K(),t=j.checks?.find(t=>t.plan===e.id);document.querySelector(`#selected-service-logo`).innerHTML=f(j),document.querySelector(`#selected-service-name`).textContent=j.name,document.querySelector(`#selected-service-plan`).textContent=`Карта ${e.name.toLocaleLowerCase(`ru`)}`,document.querySelector(`#selected-service-status`).textContent=t?`${t.passed?`Оплату подтвердили`:`Оплата не прошла`}, ${t.date}`:`Совместимость с этим сервисом проверяется.`,P(),J()}function J(){let e=R.value.trim(),t=Number(e.replace(`,`,`.`)),n=/^\d{1,4}(?:[.,]\d{0,2})?$/.test(e)&&t>0,r=e!==``&&!n;R.setAttribute(`aria-invalid`,String(r)),B.hidden=!r,z.textContent=n&&W?o.format(t*W):`—`,z.toggleAttribute(`data-compact`,z.textContent.length>10);let i=new URLSearchParams({plan:K().id,service:j.name});n&&i.set(`amount`,String(t)),U.href=`./app/index.html?${i}`,U.setAttribute(`aria-disabled`,String(r))}R.addEventListener(`input`,J),q(),U.addEventListener(`click`,e=>{U.getAttribute(`aria-disabled`)===`true`&&(e.preventDefault(),R.focus())}),fetch(`./reference-rate.json`).then(e=>{if(!e.ok)throw Error(`Курс недоступен`);return e.json()}).then(e=>{if(!Number.isFinite(e.rubles)||e.rubles<=0)throw Error(`Курс недоступен`);W=e.rubles;let t=new Intl.DateTimeFormat(`ru-RU`,{day:`numeric`,month:`short`,timeZone:`UTC`}).format(new Date(e.date));V.textContent=`${G.format(e.rubles)} ₽ за $1, ${t}`,J()}).catch(()=>{V.textContent=`Курс недоступен`});function Y(e,t,n){let r=document.getElementById(e);document.getElementById(`${e}-title`).textContent=t,document.getElementById(`${e}-body`).innerHTML=n,r.open||r.showModal()}function X(e){let n=r.find(t=>t.id===e);if(!n)return;let i=n.checks??[],a=i.length?`<dl class="term-list">${i.map(e=>`<div><dt>${t.find(t=>t.id===e.plan)?.name??e.plan}<small class="block text-muted">${e.date}</small></dt><dd>${e.passed?`Оплата прошла`:`Оплата не прошла`}</dd></div>`).join(``)}</dl>`:`<p>Результат проверки для конкретной карты появится в каталоге после тестовой оплаты.</p>`;Y(`service-dialog`,n.name,`
    <div class="service-dialog-brand">${f(n)}<span class="status">${i.length?`Проверка по тарифам`:`Совместимость проверяется`}</span></div>
    <p>${n.context}</p>
    ${a}
    <a class="btn btn-dark" href="#cards" data-close-dialog>Посмотреть карты</a>`),M(`service_detail`,{service_id:e})}function Z(n){let r=t.find(e=>e.id===n);if(!r)return;let i=e.telegram?`<a class="btn btn-dark" href="${e.telegram}" target="_blank" rel="noopener noreferrer" data-event="start_application" data-event-plan="${n}">Открыть в Telegram</a>`:`<a class="btn btn-dark" href="./app/index.html?plan=${n}" data-event="open_miniapp_preview" data-event-plan="${n}">Открыть демо приложения</a><a class="btn btn-secondary ml-3" href="#estimate" data-close-dialog data-event="plan_estimate" data-event-plan="${n}">Рассчитать пополнение</a>`,a=r.terms.network,o={visa:`Visa`,mastercard:`Mastercard`}[a],s=o?`<img class="network-logo" src="./brands/${a}.svg" alt="${o}" width="60" height="22">`:`Уточняется`;Y(`plan-dialog`,r.name,`
    <p>${r.purpose}</p>
    <dl class="term-list"><div><dt>Стоимость выпуска</dt><dd>${r.terms.issue??`Уточняется`}</dd></div><div><dt>Обслуживание</dt><dd>${r.terms.maintenance??`Уточняется`}</dd></div><div><dt>Платёжная система</dt><dd>${s}</dd></div></dl>
    ${e.telegram?``:`<p>Выпуск откроется после запуска. Условия появятся здесь до оплаты.</p>`}
    ${i}`),M(`plan_detail`,{plan_id:n})}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-event], [data-service], [data-start-service], [data-select-service], [data-plan], [data-channel], [data-close-dialog]`);if(!t)return;t.hasAttribute(`data-close-dialog`)&&t.closest(`dialog`)?.close(),t.dataset.event&&!e.defaultPrevented&&M(t.dataset.event,t.dataset.eventPlan?{plan_id:t.dataset.eventPlan}:{});let n=t.dataset.startService??t.dataset.selectService;if(n&&(j=r.find(e=>e.id===n),t.dataset.startService&&(k=`all`,w.value=``,F(),N()),q(),(t.dataset.startService||matchMedia(`(max-width: 767px)`).matches)&&H.focus(),M(`select_payment_service`,{service_id:n,plan_id:K().id})),t.dataset.service&&X(t.dataset.service),t.dataset.plan&&Z(t.dataset.plan),t.dataset.channel){let e=t.dataset.channel;Y(`channel-dialog`,e===`max`?`MAX`:`Telegram`,x(e)),M(`channel_detail`,{channel:e})}});