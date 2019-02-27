const $CACHE_STORE = 'acryl';
const $NAVIGATION_FALLBACK = './../index.html';

const $FILES = ['./browserconfig.xml', './css/acryl-client-vendor-styles-1.0.5.css', './css/black-acryl-client-styles-1.0.5.css', './css/default-acryl-client-styles-1.0.5.css', './fonts/roboto-light.woff2', './fonts/roboto-light2.woff2', './fonts/roboto-light3.woff2', './fonts/roboto-light4.woff2', './fonts/roboto-light5.woff2', './fonts/roboto-light6.woff2', './fonts/roboto-light7.woff2', './fonts/roboto-medium.woff2', './fonts/roboto-medium2.woff2', './fonts/roboto-medium3.woff2', './fonts/roboto-medium4.woff2', './fonts/roboto-medium5.woff2', './fonts/roboto-medium6.woff2', './fonts/roboto-medium7.woff2', './fonts/roboto.woff2', './fonts/roboto2.woff2', './fonts/roboto3.woff2', './fonts/roboto4.woff2', './fonts/roboto5.woff2', './fonts/roboto6.woff2', './fonts/roboto7.woff2', './img/assets/bitcoin-cash.svg', './img/assets/bitcoin.svg', './img/assets/dash.svg', './img/assets/efyt.svg', './img/assets/ethereum.svg', './img/assets/euro.svg', './img/assets/ltc.svg', './img/assets/try.svg', './img/assets/usd.svg', './img/assets/waves.svg', './img/assets/waves1.svg', './img/assets/wnet.svg', './img/assets/xmr.svg', './img/assets/zec.svg', './img/favicon.ico', './img/ico/android-chrome-144x144.png', './img/ico/android-chrome-192x192.png', './img/ico/android-chrome-256x256.png', './img/ico/android-chrome-36x36.png', './img/ico/android-chrome-384x384.png', './img/ico/android-chrome-48x48.png', './img/ico/android-chrome-512x512.png', './img/ico/android-chrome-72x72.png', './img/ico/android-chrome-96x96.png', './img/ico/apple-touch-icon-114x114-precomposed.png', './img/ico/apple-touch-icon-114x114.png', './img/ico/apple-touch-icon-120x120-precomposed.png', './img/ico/apple-touch-icon-120x120.png', './img/ico/apple-touch-icon-144x144-precomposed.png', './img/ico/apple-touch-icon-144x144.png', './img/ico/apple-touch-icon-152x152-precomposed.png', './img/ico/apple-touch-icon-152x152.png', './img/ico/apple-touch-icon-180x180-precomposed.png', './img/ico/apple-touch-icon-180x180.png', './img/ico/apple-touch-icon-57x57-precomposed.png', './img/ico/apple-touch-icon-57x57.png', './img/ico/apple-touch-icon-60x60-precomposed.png', './img/ico/apple-touch-icon-60x60.png', './img/ico/apple-touch-icon-72x72-precomposed.png', './img/ico/apple-touch-icon-72x72.png', './img/ico/apple-touch-icon-76x76-precomposed.png', './img/ico/apple-touch-icon-76x76.png', './img/ico/apple-touch-icon-precomposed.png', './img/ico/apple-touch-icon.png', './img/ico/favicon-16x16.png', './img/ico/favicon-32x32.png', './img/ico/mstile-144x144.png', './img/ico/mstile-150x150.png', './img/ico/mstile-310x150.png', './img/ico/mstile-310x310.png', './img/ico/mstile-70x70.png', './img/ico/safari-pinned-tab.svg', './img/icons/0_start.svg', './img/icons/1_wallet.svg', './img/icons/2_dex.svg', './img/icons/3_token.svg', './img/icons/actions-blue-active.svg', './img/icons/actions-blue.svg', './img/icons/active-order-arrow-ask.svg', './img/icons/active-order-arrow-bid.svg', './img/icons/add-asset.svg', './img/icons/amount-modal-icon.svg', './img/icons/apple-store-icon.svg', './img/icons/arrow_down.svg', './img/icons/arrow-disabled-down-little.svg', './img/icons/arrow-dropdown.svg', './img/icons/arrow-orderbook-down.svg', './img/icons/arrow-orderbook-top.svg', './img/icons/arrow-select-expanded.svg', './img/icons/arrow-select.svg', './img/icons/arrowleft-18-basic-500.svg', './img/icons/arrowright-18-basic-500.svg', './img/icons/backup.svg', './img/icons/bank-building-success.svg', './img/icons/bank-success.svg', './img/icons/burn.svg', './img/icons/canceled_leasing.svg', './img/icons/cancelorder-80-error-500.svg', './img/icons/card-success.svg', './img/icons/check-arrow.svg', './img/icons/check.svg', './img/icons/checkbox-icon.svg', './img/icons/close_arrow.svg', './img/icons/close-24-basic500.svg', './img/icons/close.svg', './img/icons/copy-icon.svg', './img/icons/dark/0_start.svg', './img/icons/dark/1_wallet.svg', './img/icons/dark/2_dex.svg', './img/icons/dark/3_token.svg', './img/icons/dark/add-asset.svg', './img/icons/dark/arrow-dropdown.svg', './img/icons/dark/arrow-left-10-disabled-600.svg', './img/icons/dark/arrow-orderbook-down.svg', './img/icons/dark/arrow-orderbook-top.svg', './img/icons/dark/arrow-right-10-disabled-600.svg', './img/icons/dark/arrow-select-expanded.svg', './img/icons/dark/arrow-select.svg', './img/icons/dark/backup.svg', './img/icons/dark/cancel-10-disabled-600.svg', './img/icons/dark/card-success.svg', './img/icons/dark/close_arrow.svg', './img/icons/dark/close-24-disabled600.svg', './img/icons/dark/close.svg', './img/icons/dark/collapse-centr-24-disabled-800.svg', './img/icons/dark/collapse-up-24-disabled-800.svg', './img/icons/dark/deposit-hover.svg', './img/icons/dark/deposit.svg', './img/icons/dark/dex-copy-icon.svg', './img/icons/dark/dex-icon-mini.svg', './img/icons/dark/dex-star-active.svg', './img/icons/dark/dex-star.svg', './img/icons/dark/dex-toggle.svg', './img/icons/dark/double-arrow.svg', './img/icons/dark/download.svg', './img/icons/dark/fullscreen.svg', './img/icons/dark/fullscreenclose.svg', './img/icons/dark/hide-icon.svg', './img/icons/dark/icon-empty.svg', './img/icons/dark/icon-error.svg', './img/icons/dark/icon-filter.svg', './img/icons/dark/icon-info.svg', './img/icons/dark/icon-sorting-active.svg', './img/icons/dark/icon-sorting.svg', './img/icons/dark/info-icon.svg', './img/icons/dark/input-search-icon.svg', './img/icons/dark/keeper-mini-icon.svg', './img/icons/dark/leasing_note.svg', './img/icons/dark/ledger-mini-icon.svg', './img/icons/dark/menu-icons.svg', './img/icons/dark/orderbook-to-spread.svg', './img/icons/dark/qr-code-big.svg', './img/icons/dark/scripted-mini-icon.svg', './img/icons/dark/seed.svg', './img/icons/dark/send-hover.svg', './img/icons/dark/send.svg', './img/icons/dark/setting-26-white.svg', './img/icons/dark/settings-menu-icons.svg', './img/icons/dark/show-icon.svg', './img/icons/dark/Step1.svg', './img/icons/dark/token-linear-26-basic-700.svg', './img/icons/dark/tutorial-modals/anonym.svg', './img/icons/dark/tutorial-modals/backup.svg', './img/icons/dark/tutorial-modals/mail.svg', './img/icons/dark/tutorial-modals/os.svg', './img/icons/dark/tutorial-modals/paper.svg', './img/icons/dark/tutorial-modals/password.svg', './img/icons/dark/tutorial-modals/plugin.svg', './img/icons/dark/tutorial-modals/refresh.svg', './img/icons/dark/tutorial-modals/tutorial-computer.svg', './img/icons/dark/tutorial-modals/url.svg', './img/icons/dark/tutorial-modals/wifi.svg', './img/icons/dark/unpin-asset.svg', './img/icons/dark/wallet-linear-26-white.svg', './img/icons/dark/waves_logo.svg', './img/icons/deposit-hover.svg', './img/icons/deposit.svg', './img/icons/dex-copy-icon.svg', './img/icons/dex-demo-account.svg', './img/icons/dex-demo-avatar.svg', './img/icons/dex-demo-dex.svg', './img/icons/dex-demo-settings.svg', './img/icons/dex-demo-tokens.svg', './img/icons/dex-demo-wallet.svg', './img/icons/dex-icon-mini.svg', './img/icons/dex-mobile-column-toggler.svg', './img/icons/dex-star-active.svg', './img/icons/dex-star.svg', './img/icons/dex-toggle-active.svg', './img/icons/dex-toggle.svg', './img/icons/double-arrow.svg', './img/icons/download.svg', './img/icons/drag.svg', './img/icons/error-80-ordercancel.svg', './img/icons/error-tooltip-close.svg', './img/icons/flags/en.svg', './img/icons/flags/es.svg', './img/icons/flags/hi.svg', './img/icons/flags/ko.svg', './img/icons/flags/nl.svg', './img/icons/flags/pl.svg', './img/icons/flags/pt.svg', './img/icons/flags/ru.svg', './img/icons/flags/tr.svg', './img/icons/flags/zh-Hans-CN.svg', './img/icons/fullscreen.svg', './img/icons/fullscreenclose.svg', './img/icons/google-play-icon.svg', './img/icons/hide-icon.svg', './img/icons/icon-connected.svg', './img/icons/icon-empty.svg', './img/icons/icon-error-import.svg', './img/icons/icon-error.svg', './img/icons/icon-filter.svg', './img/icons/icon-info.svg', './img/icons/icon-lock.svg', './img/icons/icon-orange-alert.svg', './img/icons/icon-removeacc.svg', './img/icons/icon-search-dex.svg', './img/icons/icon-sorting-active.svg', './img/icons/icon-sorting.svg', './img/icons/info-14-basic-700.svg', './img/icons/info-icon.svg', './img/icons/input-invalid-icon.svg', './img/icons/input-password-icon.svg', './img/icons/input-search-icon.svg', './img/icons/input-valid-icon.svg', './img/icons/keeper-icon.svg', './img/icons/keeper-mini-icon.svg', './img/icons/komp.svg', './img/icons/leasing_note.svg', './img/icons/ledger-cancel.svg', './img/icons/ledger-ok.svg', './img/icons/ledger/ledger-apps.svg', './img/icons/ledger/ledger-mini-icon.svg', './img/icons/ledger/ledger-pin.svg', './img/icons/ledger/Request.svg', './img/icons/ledger/Step1.svg', './img/icons/left.svg', './img/icons/logo-alfa.svg', './img/icons/logo-beta.svg', './img/icons/logo-ledger.svg', './img/icons/mastercard-icon.svg', './img/icons/menu-icons.svg', './img/icons/miner.png', './img/icons/mode-toggler-auto.svg', './img/icons/order_cancel.svg', './img/icons/orderbook-to-spread.svg', './img/icons/pairing-unavailable-80-error-500.svg', './img/icons/pin.svg', './img/icons/pinned.svg', './img/icons/qr-code-big.svg', './img/icons/qr-code-small.svg', './img/icons/screenshots.svg', './img/icons/script-warning-icon.svg', './img/icons/scripted-mini-icon.svg', './img/icons/searching.svg', './img/icons/seed.svg', './img/icons/settings-menu-icons.svg', './img/icons/show-icon.svg', './img/icons/sorting-arrow.svg', './img/icons/sponosred-asset-marker.svg', './img/icons/switcher-icon.svg', './img/icons/transaction-icons.svg', './img/icons/transaction-warning.svg', './img/icons/tutorial-modals/anonym.svg', './img/icons/tutorial-modals/backup.svg', './img/icons/tutorial-modals/mail.svg', './img/icons/tutorial-modals/os.svg', './img/icons/tutorial-modals/paper.svg', './img/icons/tutorial-modals/password.svg', './img/icons/tutorial-modals/plugin.svg', './img/icons/tutorial-modals/refresh.svg', './img/icons/tutorial-modals/tutorial-computer.svg', './img/icons/tutorial-modals/url.svg', './img/icons/tutorial-modals/wifi.svg', './img/icons/unpin-asset.svg', './img/icons/userimg-browsershare-80-submit-300.svg', './img/icons/userimg-laptop-80-submit-300.svg', './img/icons/visa-icon.svg', './img/icons/waves_logo.svg', './img/icons/webcamerror.svg', './img/icons/white_cancel.svg', './img/icons/white-cancel-icon.svg', './img/images-list.json', './img/logo-ledger.svg', './img/no-preload/chrome-icon.svg', './img/no-preload/connection-error.svg', './img/no-preload/firefox-icon.svg', './img/no-preload/not-supported-browser.svg', './img/no-preload/opera-icon.svg', './img/no-preload/safari-icon.svg', './img/no-preload/userimg-browserwarning-80-mix-sunset.svg', './index.html', './js/acryl-client-web-mainnet-1.0.5.min.js', './LICENSE', './locale/en/app.create.json', './locale/en/app.desktop.json', './locale/en/app.dex.json', './locale/en/app.import.json', './locale/en/app.json', './locale/en/app.keeper.json', './locale/en/app.ledger.json', './locale/en/app.restore.json', './locale/en/app.sessions.json', './locale/en/app.templates.json', './locale/en/app.tokens.json', './locale/en/app.ui.json', './locale/en/app.utils.json', './locale/en/app.wallet.assets.json', './locale/en/app.wallet.json', './locale/en/app.wallet.leasing.json', './locale/en/app.wallet.portfolio.json', './locale/en/app.wallet.transactions.json', './locale/en/app.welcome.json', './locale/en/electron.json', './locale/ru/app.create.json', './locale/ru/app.desktop.json', './locale/ru/app.dex.json', './locale/ru/app.import.json', './locale/ru/app.json', './locale/ru/app.keeper.json', './locale/ru/app.ledger.json', './locale/ru/app.restore.json', './locale/ru/app.sessions.json', './locale/ru/app.templates.json', './locale/ru/app.tokens.json', './locale/ru/app.ui.json', './locale/ru/app.utils.json', './locale/ru/app.wallet.assets.json', './locale/ru/app.wallet.json', './locale/ru/app.wallet.leasing.json', './locale/ru/app.wallet.portfolio.json', './locale/ru/app.wallet.transactions.json', './locale/ru/app.welcome.json', './locale/ru/electron.json', './locales/en/app.create.json', './locales/en/app.desktop.json', './locales/en/app.dex.json', './locales/en/app.import.json', './locales/en/app.json', './locales/en/app.keeper.json', './locales/en/app.ledger.json', './locales/en/app.restore.json', './locales/en/app.sessions.json', './locales/en/app.templates.json', './locales/en/app.tokens.json', './locales/en/app.ui.json', './locales/en/app.utils.json', './locales/en/app.wallet.assets.json', './locales/en/app.wallet.json', './locales/en/app.wallet.leasing.json', './locales/en/app.wallet.portfolio.json', './locales/en/app.wallet.transactions.json', './locales/en/app.welcome.json', './locales/en/electron.json', './locales/ru/app.create.json', './locales/ru/app.desktop.json', './locales/ru/app.dex.json', './locales/ru/app.import.json', './locales/ru/app.json', './locales/ru/app.keeper.json', './locales/ru/app.ledger.json', './locales/ru/app.restore.json', './locales/ru/app.sessions.json', './locales/ru/app.templates.json', './locales/ru/app.tokens.json', './locales/ru/app.ui.json', './locales/ru/app.utils.json', './locales/ru/app.wallet.assets.json', './locales/ru/app.wallet.json', './locales/ru/app.wallet.leasing.json', './locales/ru/app.wallet.portfolio.json', './locales/ru/app.wallet.transactions.json', './locales/ru/app.welcome.json', './locales/ru/electron.json', './manifest.json', './node_modules/@waves/waves-browser-bus/dist/browser-bus.min.js', './node_modules/parse-json-bignumber/dist/parse-json-bignumber.min.js', './node_modules/qrcode-reader/dist/index.min.js', './node_modules/ts-utils/dist/ts-utils.min.js', './themeConfig/theme.json', './trading-view/charting_library.min.d.ts', './trading-view/charting_library.min.js', './trading-view/datafeed-api.d.ts', './trading-view/static/ar-tv-chart.aa0061904b783ada8056.html', './trading-view/static/bundles/10.0b4b80ce7284d28083f7.js', './trading-view/static/bundles/13.87c51bb601702992e1dd.js', './trading-view/static/bundles/15.d0280d7e7496e08f4962.js', './trading-view/static/bundles/9.0f95ea8c401ed7b42af8.js', './trading-view/static/bundles/crosshair.6c091f7d5427d0c5e6d9dc3a90eb2b20.cur', './trading-view/static/bundles/dot.ed68e83c16f77203e73dbc4c3a7c7fa1.cur', './trading-view/static/bundles/ds-property-pages.4650c8fe6629bba016a1.js', './trading-view/static/bundles/editobjectdialog.1a53a3b4104302264052.js', './trading-view/static/bundles/eraser.0579d40b812fa2c3ffe72e5803a6e14c.cur', './trading-view/static/bundles/go-to-date-dialog-impl.4e462a33aa18010573c8.js', './trading-view/static/bundles/grab.bc156522a6b55a60be9fae15c14b66c5.cur', './trading-view/static/bundles/grabbing.1c0862a8a8c0fb02885557bc97fdafe7.cur', './trading-view/static/bundles/ie-fallback-logos.58dc8877847b4dced0e4.js', './trading-view/static/bundles/lazy-jquery-ui.ca86274e39963e6b5b5f.js', './trading-view/static/bundles/lazy-velocity.6843186d1d19426e2f3c.js', './trading-view/static/bundles/library.01ecad9b9548937f2d3ad7a1386065e0.css', './trading-view/static/bundles/library.0d361944a51eb9915ce0.js', './trading-view/static/bundles/lt-pane-views.9ecc943f945b2fd4fad6.js', './trading-view/static/bundles/objecttreedialog.e2f61129ab1c8c59ca83.js', './trading-view/static/bundles/propertypagesfactory.88d1e4b5f0c82c2d9b43.js', './trading-view/static/bundles/symbol-info-dialog-impl.1d95eab19af70ebdf07d.js', './trading-view/static/bundles/take-chart-image-dialog-impl.45288e052b450c5e2d11.js', './trading-view/static/bundles/vendors.9a5192b4c7a5579df994.js', './trading-view/static/bundles/vendors.a94ef44ed5c201cefcf6ad7460788c1a.css', './trading-view/static/bundles/zoom.e21f24dd632c7069139bc47ae89c54b5.cur', './trading-view/static/cs-tv-chart.aa0061904b783ada8056.html', './trading-view/static/da_DK-tv-chart.aa0061904b783ada8056.html', './trading-view/static/de-tv-chart.aa0061904b783ada8056.html', './trading-view/static/el-tv-chart.aa0061904b783ada8056.html', './trading-view/static/en-tv-chart.aa0061904b783ada8056.html', './trading-view/static/es-tv-chart.aa0061904b783ada8056.html', './trading-view/static/et_EE-tv-chart.aa0061904b783ada8056.html', './trading-view/static/fa-tv-chart.aa0061904b783ada8056.html', './trading-view/static/fonts/fontawesome-webfont.svg', './trading-view/static/fonts/fontawesome-webfont.ttf', './trading-view/static/fonts/fontawesome-webfont.woff', './trading-view/static/fr-tv-chart.aa0061904b783ada8056.html', './trading-view/static/he_IL-tv-chart.aa0061904b783ada8056.html', './trading-view/static/hu_HU-tv-chart.aa0061904b783ada8056.html', './trading-view/static/id_ID-tv-chart.aa0061904b783ada8056.html', './trading-view/static/images/balloon.png', './trading-view/static/images/bar-loader.gif', './trading-view/static/images/button-bg.png', './trading-view/static/images/charting_library/logo-widget-copyright-faded.png', './trading-view/static/images/charting_library/logo-widget-copyright.png', './trading-view/static/images/controlll.png', './trading-view/static/images/delayed.png', './trading-view/static/images/dialogs/checkbox.png', './trading-view/static/images/dialogs/close-flat.png', './trading-view/static/images/dialogs/large-slider-handle.png', './trading-view/static/images/dialogs/linewidth-slider.png', './trading-view/static/images/dialogs/opacity-slider.png', './trading-view/static/images/icons.png', './trading-view/static/images/prediction-clock-black.png', './trading-view/static/images/prediction-clock-white.png', './trading-view/static/images/prediction-failure-white.png', './trading-view/static/images/prediction-success-white.png', './trading-view/static/images/select-bg.png', './trading-view/static/images/sidetoolbar/instruments.png', './trading-view/static/images/sidetoolbar/toolgroup.png', './trading-view/static/images/svg/chart/bucket2.svg', './trading-view/static/images/svg/chart/font.svg', './trading-view/static/images/svg/chart/large-slider-handle.svg', './trading-view/static/images/svg/chart/pencil2.svg', './trading-view/static/images/svg/question-mark-rounded.svg', './trading-view/static/images/tvcolorpicker-bg-gradient.png', './trading-view/static/images/tvcolorpicker-bg.png', './trading-view/static/images/tvcolorpicker-check.png', './trading-view/static/images/tvcolorpicker-sprite.png', './trading-view/static/images/warning-icon.png', './trading-view/static/it-tv-chart.aa0061904b783ada8056.html', './trading-view/static/ja-tv-chart.aa0061904b783ada8056.html', './trading-view/static/ko-tv-chart.aa0061904b783ada8056.html', './trading-view/static/lib/external/spin.min.js', './trading-view/static/ms_MY-tv-chart.aa0061904b783ada8056.html', './trading-view/static/nl_NL-tv-chart.aa0061904b783ada8056.html', './trading-view/static/no-tv-chart.aa0061904b783ada8056.html', './trading-view/static/pl-tv-chart.aa0061904b783ada8056.html', './trading-view/static/pt-tv-chart.aa0061904b783ada8056.html', './trading-view/static/ro-tv-chart.aa0061904b783ada8056.html', './trading-view/static/ru-tv-chart.aa0061904b783ada8056.html', './trading-view/static/sk_SK-tv-chart.aa0061904b783ada8056.html', './trading-view/static/sv-tv-chart.aa0061904b783ada8056.html', './trading-view/static/th-tv-chart.aa0061904b783ada8056.html', './trading-view/static/tr-tv-chart.aa0061904b783ada8056.html', './trading-view/static/vi-tv-chart.aa0061904b783ada8056.html', './trading-view/static/zh_TW-tv-chart.aa0061904b783ada8056.html', './trading-view/static/zh-tv-chart.aa0061904b783ada8056.html', './tradingview-style/dark-style.css', './tradingview-style/style.css'];

const navigateFallback = $NAVIGATION_FALLBACK;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open($CACHE_STORE)
      .then(cache => {
        return cache.addAll($FILES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.open($CACHE_STORE)
      .then(cache => {
        return cache.keys()
          .then(cacheNames => {
            return Promise.all(
              cacheNames.filter(cacheName => {
                return $FILES.indexOf(cacheName) === -1;
              }).map(cacheName => {
                return caches.delete(cacheName);
              })
            );
          })
          .then(() => {
            return self.clients.claim();
          });
      })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method === 'GET') {
    console.log('###self.location.origin :', self.location.origin);
    let url = event.request.url.indexOf(self.location.origin) !== -1 ?
      event.request.url.split(`${self.location.origin}/`)[1] :
      event.request.url;
      console.log('&&&&&&&url :', url);
    let isFileCached = $FILES.indexOf(url) !== -1;

    // This is important part if your app needs to be available offline
    // If request wasn't found in array of files and this request has navigation mode and there is defined navigation fallback
    // then navigation fallback url is picked istead of real request url
    if (!isFileCached && event.request.mode === 'navigate' && navigateFallback) {
      url = navigateFallback;
      isFileCached = $FILES.indexOf(url) !== -1;
    }

    if (isFileCached) {
      event.respondWith(
        caches.open($CACHE_STORE)
          .then(cache => {
            return cache.match(url)
              .then(response => {
                if (response) {
                  return response;
                }
                throw Error('There is not response for such request', url);
              });
          })
          .catch(error => {
            return fetch(event.request);
          })
      );
    }
  }
});