(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={telegram:``,max:``},t=[{id:`online`,name:`Для подписок`,purpose:`Для регулярных оплат на зарубежных сайтах.`,terms:{issue:null,maintenance:null,network:null},details:[`Нейросети, софт и стриминги`,`Оплата по реквизитам карты`,`Пополнение в рублях через СБП`]},{id:`travel`,name:`Для поездок`,purpose:`Для бронирований и покупок за границей.`,terms:{issue:null,maintenance:null,network:null},details:[`Билеты, отели и апартаменты`,`Покупки в зарубежных магазинах`,`Оплата телефоном уточняется`]}],n=[[`all`,`Все`],[`work`,`Работа и ИИ`],[`media`,`Подписки`],[`stores`,`Приложения и игры`],[`travel`,`Поездки`]],r=[{id:`chatgpt`,name:`ChatGPT`,logo:`openai`,group:`work`,aliases:[`OpenAI`,`чат гпт`,`чатгпт`],context:`Подписка Plus и другие продукты OpenAI могут использовать разные способы оплаты.`},{id:`claude`,name:`Claude`,logo:`claude`,group:`work`,aliases:[`Anthropic`,`клод`],context:`Оплата зависит от региона аккаунта и правил Anthropic.`},{id:`figma`,name:`Figma`,logo:`figma`,group:`work`,context:`Проверка нужна отдельно для первого платежа и продления подписки.`},{id:`notion`,name:`Notion`,logo:`notion`,group:`work`,context:`Платёжные условия зависят от тарифа и региона рабочего пространства.`},{id:`spotify`,name:`Spotify`,logo:`spotify`,group:`media`,context:`Способ оплаты зависит от страны аккаунта.`},{id:`netflix`,name:`Netflix`,logo:`netflix`,group:`media`,context:`Способы оплаты различаются по стране аккаунта.`},{id:`apple`,name:`App Store`,logo:`apple`,group:`stores`,aliases:[`Apple`,`эпл`,`апп стор`],context:`Способ оплаты должен подходить для страны или региона вашего Apple Account.`},{id:`google-play`,name:`Google Play`,logo:`google-play`,group:`stores`,aliases:[`гугл плей`,`плей маркет`],context:`Доступные способы оплаты зависят от страны Google Play.`},{id:`steam`,name:`Steam`,logo:`steam`,group:`stores`,context:`Оплату картой и пополнение кошелька нужно проверять отдельно.`},{id:`airbnb`,name:`Airbnb`,logo:`airbnb`,group:`travel`,context:`Способы оплаты могут зависеть от страны и конкретного бронирования.`},{id:`booking`,name:`Booking.com`,logo:`booking`,group:`travel`,aliases:[`букинг`,`отель`],context:`Условия оплаты и предавторизации зависят от объекта размещения.`},{id:`trip`,name:`Trip.com`,logo:`trip`,group:`travel`,aliases:[`трип`,`билеты`],context:`Способы оплаты зависят от бронирования и страны оформления.`},{id:`turkish`,name:`Turkish Airlines`,logo:`turkish`,group:`travel`,aliases:[`турецкие авиалинии`,`билеты`],context:`Условия оплаты и возврата уточняются для выбранного билета.`},{id:`youtube`,name:`YouTube Premium`,logo:`youtube`,group:`media`,aliases:[`ютуб`],context:`Проверяйте правила подписки для страны аккаунта YouTube.`}],i={date:`16 ноября 2026 года`,competitors:[{name:`Плати по всему миру`,plan:`Для подписок`,url:`https://kb.platipomiru.com/nachalo-raboty/usloviya-kart.html`},{name:`Wanttopay`,plan:`Easy`,url:`https://wanttopay.net/cards/pricing`}],rows:[[`Выпуск`,t[0].terms.issue??`Уточняется`,`2 990 ₽`,`990 ₽`],[`Обслуживание`,t[0].terms.maintenance??`Уточняется`,`0 ₽ первый год`,`$6 в месяц`],[`Пополнение в рублях`,`СБП в планах`,`СБП`,`Мгновенный перевод и карта`],[`Рублёвый курс`,`Уточняется`,`В приложении`,`В приложении`]]},a={users:null,rating:null,reviews:[]},o=new Intl.NumberFormat(`ru-RU`,{style:`currency`,currency:`RUB`,minimumFractionDigits:0,maximumFractionDigits:2}),s=(e,t=``)=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${e}"/></svg>`,c=e=>s(`M5 12h14m-6-6 6 6-6 6`,e),l=s(`M6 18 18 6M8 6h10v10`),u=s(`M20 20l-4.5-4.5M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z`),d=s(`m5 12 4 4L19 6`),f=s(`m6 6 12 12M18 6 6 18`);function p(){return`<a class="wordmark" href="./"><img src="./wordmark.svg" alt="Плати отсюда, главная" width="151" height="23"></a>`}function m(e){return`<img src="./brands/${e.logo}.svg" alt="" width="34" height="34">`}function h(e){return`<button class="service-card" type="button" data-service="${e.id}">
    <span class="service-icon">${m(e)}</span>
    <span><strong>${e.name}</strong><small>${n.find(([t])=>t===e.group)?.[1]??``}</small></span>
    ${c(`service-arrow`)}
  </button>`}function g(){return`<div class="brand-strip wrap" aria-label="Примеры сервисов">
    <span>Что хотите оплатить?</span>
    <ul>${[`chatgpt`,`claude`,`figma`,`spotify`,`apple`,`google-play`,`airbnb`].map(e=>{let t=r.find(t=>t.id===e);return`<li><button type="button" data-service="${e}" aria-label="Проверить ${t.name}"><img src="./brands/${t.logo}.svg" alt="${t.name}" width="35" height="35"></button></li>`}).join(``)}</ul>
    <a href="#services" class="text-link">Все сервисы ${c()}</a>
  </div>`}function _(){return t.map(e=>{let t=e.id===`online`?[`chatgpt`,`claude`,`figma`,`spotify`]:[`airbnb`,`booking`,`trip`,`turkish`];return`<article class="plan-card" data-plan-card="${e.id}">
    <div>
      <h3>${e.name}</h3>
      <p>${e.purpose}</p>
    </div>
    <ul class="plan-brands" aria-label="Примеры сервисов">${t.map(e=>{let t=r.find(t=>t.id===e);return`<li><button type="button" data-service="${e}" aria-label="Проверить ${t.name}">${m(t)}</button></li>`}).join(``)}</ul>
    <ul class="plan-features">${e.details.map(e=>`<li>${d}${e}</li>`).join(``)}</ul>
    <div class="plan-action">
      <span>${e.terms.issue??`Условия готовятся`}</span>
      <button class="btn ${e.id===`online`?`btn-primary`:`btn-outline`}" type="button" data-plan="${e.id}">Условия карты ${c()}</button>
    </div>
  </article>`}).join(``)}function v(){return`<table>
    <thead><tr><th scope="col">Тарифы для подписок</th><th scope="col">Плати отсюда</th>
    ${i.competitors.map((e,t)=>`<th scope="col" data-competitor="${t}"><a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name}</a><small>${e.plan}</small></th>`).join(``)}</tr></thead>
    <tbody>${i.rows.map(([e,...t])=>`<tr><th scope="row">${e}</th>${t.map((e,t)=>`<td${t?` data-competitor="${t-1}"`:``}>${e}</td>`).join(``)}</tr>`).join(``)}</tbody>
  </table>`}var y=[[`Что можно оплатить картой?`,`Карта рассчитана на зарубежные покупки и подписки. Доступность конкретного сервиса зависит от тарифа, правил площадки и региона аккаунта. Проверяйте статус в каталоге перед выпуском.`],[`Как пополнять карту?`,`Планируем пополнение рублями через СБП. Сумма к оплате, курс и комиссия будут показаны перед подтверждением. Сейчас на сайте доступен пример расчёта.`],[`Какая платёжная система будет у карты?`,`Платёжную систему, страну эмитента и доступные способы оплаты укажем в условиях конкретного тарифа перед выпуском.`],[`Можно будет пользоваться картой в поездках?`,`Для поездок предусмотрен отдельный тариф. Привязку к мобильному кошельку и условия оплаты у терминала подтвердим после проверки.`],[`Что делать, если оплата не прошла?`,`Проверьте совместимость, баланс и требования к стране аккаунта. Условия списаний при отказе, возврата и работы поддержки опубликуем вместе с тарифом.`],[`Где открывается карта?`,`Основной канал выпуска — Telegram Mini App. Подключение MAX предусмотрено как дополнительный способ доступа.`]];function b(e,t,n){return`<dialog id="${e}" aria-labelledby="${e}-title">
    <form method="dialog" class="dialog-head"><h2 id="${e}-title">${t}</h2><button class="icon-button" value="close" aria-label="Закрыть">${f}</button></form>
    ${n}
  </dialog>`}function x(){return!a.users&&!a.rating&&!a.reviews.length?``:`<section class="wrap section proof-section" aria-labelledby="proof-title">
    <h2 id="proof-title">Что говорят клиенты</h2>
    <div class="proof-stats">${[a.users,a.rating].filter(Boolean).map(e=>`<a href="${e.url}"><strong>${e.value}</strong><span>${e.label}</span></a>`).join(``)}</div>
    <div class="proof-reviews">${a.reviews.map(e=>`<figure><blockquote>${e.text}</blockquote><figcaption><a href="${e.url}">${e.name}</a></figcaption></figure>`).join(``)}</div>
  </section>`}function S(){return`<header class="site-head" data-site-head>
    <div class="wrap head-row">
      ${p()}
      <nav aria-label="Основное меню"><a href="#services">Сервисы</a><a href="#cards">Карты</a><a href="#comparison">Сравнение</a><a href="#faq">Помощь</a></nav>
      <a class="btn btn-dark head-cta" data-event="header_choose_card" href="#cards">Выбрать карту ${c()}</a>
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero-copy">
        <h1 id="hero-title">Карта для оплаты<br> за рубежом</h1>
        <p>${e.telegram?`Оплачивайте зарубежные подписки, покупки и поездки. Пополняйте карту рублями через СБП.`:`Виртуальная карта для зарубежных подписок, покупок и поездок. Выпуск готовится.`}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#cards" data-event="hero_choose_card">Выбрать карту ${c()}</a>
          <a class="text-link" href="#how">Как это работает ${c()}</a>
        </div>
        <div class="hero-channels">
          <button type="button" data-channel="telegram"><img src="./brands/telegram.svg" alt="" width="22" height="22">Telegram</button>
          <button type="button" data-channel="max"><img src="./brands/max.svg" alt="" width="22" height="22">MAX</button>
        </div>
      </div>
      <figure class="hero-media wrap">
        <img class="hero-picture" src="./card-isolated.webp" alt="Графитовая виртуальная карта «Плати отсюда»" width="1050" height="657" fetchpriority="high">
      </figure>
    </section>

    ${g()}

    <section id="services" class="section wrap services-section" aria-labelledby="services-title">
      <div class="section-head catalog-head">
        <div><h2 id="services-title">Найдите свой сервис</h2><p>Откройте карточку, чтобы проверить совместимость.</p></div>
        <label class="search-field">${u}<span class="sr-only">Название сервиса</span><input id="service-search" type="search" placeholder="Название сервиса" autocomplete="off"></label>
      </div>
      <div class="catalog-panel">
        <div class="filters" aria-label="Категории сервисов"></div>
        <div id="service-results" class="service-results"></div>
        <p id="service-count" class="sr-only" aria-live="polite"></p>
        <p id="empty-services" class="empty-state" hidden>Такой сервис пока не нашли. Попробуйте другое название или выберите категорию.</p>
        <div class="catalog-more"><button type="button" id="catalog-more" class="text-link" aria-controls="service-results" aria-expanded="false">Показать все сервисы ${c()}</button></div>
      </div>
    </section>

    <section id="cards" class="section cards-section" aria-labelledby="cards-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="cards-title">Какая карта вам нужна?</h2>
          <p>Выберите, где будете платить чаще всего.</p>
        </div>
        <div class="plan-grid">${_()}</div>
      </div>
    </section>

    <section id="estimate" class="section wrap estimate-section" aria-labelledby="estimate-title">
      <div class="estimate-copy">
        <h2 id="estimate-title">Сколько в рублях?</h2>
        <p>Введите сумму, которая нужна на карте. Курс и сборы показываем отдельно от суммы пополнения.</p>
      </div>
      <div class="estimate-tool">
        <div class="estimate-fields">
          <label class="estimate-field"><span id="dollars-label">На карту</span><span class="amount"><input id="dollars" value="20" type="text" inputmode="decimal" maxlength="10" aria-labelledby="dollars-label" aria-describedby="rate-note calc-error" autocomplete="off"><span class="currency">USD</span></span></label>
          <div class="estimate-field"><span id="rubles-label">К оплате</span><output id="rubles" class="amount" for="dollars" aria-labelledby="rubles-label">1 900 ₽</output></div>
        </div>
        <dl class="estimate-breakdown">
          <div><dt id="rate-note">Демонстрационный курс</dt><dd>95 ₽ за $1</dd></div>
          <div><dt>Комиссия</dt><dd>Не учтена в примере</dd></div>
        </dl>
        <p id="calc-error" class="error" hidden>Введите сумму от $0,01 до $9 999,99.</p>
      </div>
    </section>

    <section id="comparison" class="section comparison-section" aria-labelledby="comparison-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="comparison-title">Сравните условия</h2>
          <p>Карты для подписок. Данные на ${i.date}.</p>
        </div>
        <div class="compare-controls" role="group" aria-label="С какой картой сравнить">${i.competitors.map((e,t)=>`<button type="button" data-compare="${t}" aria-pressed="${t===0}">${e.name}</button>`).join(``)}</div>
        <div class="comparison-scroll" data-show="0" role="region" aria-label="Таблица сравнения карт">${v()}</div>
        <p class="comparison-note">Цены и курсы могут меняться. Полную стоимость можно сопоставить после публикации нашего тарифа.</p>
      </div>
    </section>

    <section id="how" class="section wrap how-section" aria-labelledby="how-title">
      <div>
        <div class="section-head"><h2 id="how-title">От выпуска до оплаты</h2></div>
        <ol class="steps">
          <li><span aria-hidden="true">1</span><div><h3>Выберите карту</h3><p>Для подписок или для поездок. Проверьте условия перед выпуском.</p></div></li>
          <li><span aria-hidden="true">2</span><div><h3>Пополните через СБП</h3><p>Укажите сумму в долларах и посмотрите, сколько спишется в рублях.</p></div></li>
          <li><span aria-hidden="true">3</span><div><h3>Оплатите покупку</h3><p>Введите реквизиты карты на сайте или в приложении сервиса.</p></div></li>
        </ol>
        <a class="btn btn-primary" href="./app/index.html" data-event="how_open_miniapp">Попробовать Mini App ${c()}</a>
      </div>
      <figure class="how-preview"><img src="./app-preview.webp" alt="Предпросмотр приложения с выбором карты и расчётом пополнения" width="390" height="760" loading="lazy"></figure>
    </section>

    ${x()}

    <section id="faq" class="section faq-section" aria-labelledby="faq-title">
      <div class="wrap faq-layout">
        <div><h2 id="faq-title">Частые вопросы</h2><a class="text-link" href="#services">Проверить свой сервис ${c()}</a></div>
        <div class="faq-list">${y.map(([e,t])=>`<details><summary>${e}<span aria-hidden="true"></span></summary><p>${t}</p></details>`).join(``)}</div>
      </div>
    </section>

    <section class="wrap final-section" aria-labelledby="final-title">
      <div><h2 id="final-title">Подберите карту</h2><p>Начните с сервиса или покупки, которую хотите оплатить.</p></div>
      <a class="btn btn-primary" href="#cards" data-event="footer_choose_card">Выбрать карту ${c()}</a>
    </section>
  </main>

  <footer class="site-footer"><div class="wrap">
    ${p()}
    <p>${e.telegram?`Международные платежи и зарубежные карты`:`Предпросмотр сервиса. Выпуск карт пока недоступен.`}</p>
    <a href="#faq">Помощь</a>
  </div></footer>

  ${b(`service-dialog`,`Совместимость`,`<div id="service-dialog-body"></div>`)}
  ${b(`plan-dialog`,`Карта`,`<div id="plan-dialog-body"></div>`)}
  ${b(`channel-dialog`,`Канал выпуска`,`<div id="channel-dialog-body"></div>`)}
  `}function C(t){let n=t===`max`?`MAX`:`Telegram`,r=e[t];return r?`<p>Откройте официальный канал сервиса.</p><a class="btn btn-dark" data-event="open_${t}" href="${r}" rel="noopener noreferrer" target="_blank">Открыть ${n} ${l}</a>`:`<p>${t===`max`?`Доступ через MAX планируется. Здесь появится ссылка после подключения.`:`Выпуск в Telegram откроется после запуска. Уже можно посмотреть, как будет выглядеть приложение.`}</p><a class="btn btn-dark" href="./app/index.html" data-event="open_miniapp_preview">Открыть демо приложения ${c()}</a>`}document.querySelector(`#site`).innerHTML=S();var w=document.querySelector(`#service-results`),T=document.querySelector(`.filters`),E=document.querySelector(`#service-search`),D=document.querySelector(`#empty-services`),O=document.querySelector(`#service-count`),k=document.querySelector(`#catalog-more`),A=6,j=`all`,M=!1;function N(e,t={}){window.dataLayer??=[],window.dataLayer.push({event:e,...t})}function P(){let e=E.value.trim().toLocaleLowerCase(`ru`),t=r.filter(t=>(j===`all`||t.group===j)&&[t.name,...t.aliases??[]].some(t=>t.toLocaleLowerCase(`ru`).includes(e))),n=j===`all`&&!e&&t.length>A,i=n&&!M?t.slice(0,A):t;w.innerHTML=i.map(h).join(``),D.hidden=!!t.length,k.hidden=!n,k.setAttribute(`aria-expanded`,String(M)),k.innerHTML=`${M?`Свернуть каталог`:`Показать все ${t.length} сервисов`} ${c()}`,O.textContent=`Показано ${i.length} из ${t.length}`}T.innerHTML=n.map(([e,t])=>`<button type="button" data-group="${e}" aria-pressed="${e===j}">${t}</button>`).join(``),T.addEventListener(`click`,e=>{let t=e.target.closest(`[data-group]`);if(t){j=t.dataset.group;for(let e of T.querySelectorAll(`[data-group]`))e.setAttribute(`aria-pressed`,String(e===t));N(`service_filter`,{group:j}),P()}}),E.addEventListener(`input`,P),k.addEventListener(`click`,()=>{M=!M,P(),M||document.querySelector(`#services`).scrollIntoView()}),P();var F=document.querySelector(`.comparison-scroll`),I=document.querySelector(`.compare-controls`);I.addEventListener(`click`,e=>{let t=e.target.closest(`[data-compare]`);if(t){F.dataset.show=t.dataset.compare;for(let e of I.querySelectorAll(`[data-compare]`))e.setAttribute(`aria-pressed`,String(e===t))}});var L=document.querySelector(`#dollars`),R=document.querySelector(`#rubles`),z=document.querySelector(`#calc-error`),B=95;function V(){let e=L.value.trim(),t=Number(e.replace(`,`,`.`)),n=/^\d{1,4}(?:[.,]\d{0,2})?$/.test(e)&&t>0,r=e!==``&&!n;L.setAttribute(`aria-invalid`,String(r)),z.hidden=!r,R.textContent=n?o.format(t*B):`—`,R.toggleAttribute(`data-compact`,R.textContent.length>10)}L.addEventListener(`input`,V),V();function H(e,t,n){let r=document.getElementById(e);document.getElementById(`${e}-title`).textContent=t,document.getElementById(`${e}-body`).innerHTML=n,r.open||r.showModal()}function U(e){let n=r.find(t=>t.id===e);if(!n)return;let i=n.checks??[],a=i.length?`<dl class="term-list">${i.map(e=>`<div><dt>${t.find(t=>t.id===e.plan)?.name??e.plan}<small class="block text-muted">${e.date}</small></dt><dd>${e.passed?`Оплата прошла`:`Оплата не прошла`}</dd></div>`).join(``)}</dl>`:`<p>Результат проверки для конкретной карты появится в каталоге после тестовой оплаты.</p>`;H(`service-dialog`,n.name,`
    <div class="service-dialog-brand">${m(n)}<span class="status">${i.length?`Проверка по тарифам`:`Совместимость проверяется`}</span></div>
    <p>${n.context}</p>
    ${a}
    <a class="btn btn-dark" href="#cards" data-close-dialog>Посмотреть карты ${c()}</a>`),N(`service_detail`,{service_id:e})}function W(n){let r=t.find(e=>e.id===n);if(!r)return;let i=e.telegram?`<a class="btn btn-dark" href="${e.telegram}" target="_blank" rel="noopener noreferrer" data-event="start_application" data-event-plan="${n}">Открыть в Telegram ${c()}</a>`:`<a class="btn btn-dark" href="./app/index.html?plan=${n}" data-event="open_miniapp_preview" data-event-plan="${n}">Открыть демо приложения ${c()}</a><a class="text-link ml-3" href="#estimate" data-close-dialog data-event="plan_estimate" data-event-plan="${n}">Рассчитать пополнение</a>`,a=r.terms.network,o={visa:`Visa`,mastercard:`Mastercard`}[a],s=o?`<img class="network-logo" src="./brands/${a}.svg" alt="${o}" width="60" height="22">`:`Уточняется`;H(`plan-dialog`,r.name,`
    <p>${r.purpose}</p>
    <dl class="term-list"><div><dt>Стоимость выпуска</dt><dd>${r.terms.issue??`Уточняется`}</dd></div><div><dt>Обслуживание</dt><dd>${r.terms.maintenance??`Уточняется`}</dd></div><div><dt>Платёжная система</dt><dd>${s}</dd></div></dl>
    ${e.telegram?``:`<p>Выпуск откроется после запуска. Условия появятся здесь до оплаты.</p>`}
    ${i}`),N(`plan_detail`,{plan_id:n})}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-event], [data-service], [data-plan], [data-channel], [data-close-dialog]`);if(t&&(t.hasAttribute(`data-close-dialog`)&&t.closest(`dialog`)?.close(),t.dataset.event&&N(t.dataset.event,t.dataset.eventPlan?{plan_id:t.dataset.eventPlan}:{}),t.dataset.service&&U(t.dataset.service),t.dataset.plan&&W(t.dataset.plan),t.dataset.channel)){let e=t.dataset.channel;H(`channel-dialog`,e===`max`?`MAX`:`Telegram`,C(e)),N(`channel_detail`,{channel:e})}});