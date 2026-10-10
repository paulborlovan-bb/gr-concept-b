/* @ds-bundle: {"format":4,"namespace":"GRIFFNERDesignSystem_559bd8","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Claim","sourcePath":"components/brand/Claim.jsx"},{"name":"Connector","sourcePath":"components/brand/Connector.jsx"},{"name":"ConnectorSplit","sourcePath":"components/brand/Connector.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Pattern","sourcePath":"components/brand/Pattern.jsx"},{"name":"Stage","sourcePath":"components/brand/Stage.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"WORDMARK_D","sourcePath":"components/brand/marks.js"},{"name":"CLAIM_D","sourcePath":"components/brand/marks.js"},{"name":"CLAIM_VIEWBOX","sourcePath":"components/brand/marks.js"},{"name":"ENDORSE_D","sourcePath":"components/brand/marks.js"},{"name":"ENDORSE_VIEWBOX","sourcePath":"components/brand/marks.js"},{"name":"MARK_COLORS","sourcePath":"components/brand/marks.js"},{"name":"Comparison","sourcePath":"components/content/Comparison.jsx"},{"name":"FactTable","sourcePath":"components/content/FactTable.jsx"},{"name":"ImageFrame","sourcePath":"components/content/ImageFrame.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"RuleList","sourcePath":"components/content/RuleList.jsx"},{"name":"StrikeList","sourcePath":"components/content/StrikeList.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"ChoiceGroup","sourcePath":"components/forms/ChoiceGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Closer","sourcePath":"components/navigation/Closer.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Headline","sourcePath":"components/type/Headline.jsx"},{"name":"InfoLine","sourcePath":"components/type/InfoLine.jsx"},{"name":"Notiz","sourcePath":"components/type/Notiz.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"f53700ba57de","components/brand/Claim.jsx":"df3badeddc7b","components/brand/Connector.jsx":"d569668e2221","components/brand/Logo.jsx":"a7e167b9e3d5","components/brand/Pattern.jsx":"1c6705847279","components/brand/Stage.jsx":"4e62d71e7948","components/brand/Wordmark.jsx":"b83dd6b50b3d","components/brand/marks.js":"297c6e91e157","components/content/Comparison.jsx":"3d41bff3c863","components/content/FactTable.jsx":"f912460a7aaf","components/content/ImageFrame.jsx":"01423ab8152a","components/content/ProjectCard.jsx":"178f5700eb64","components/content/RuleList.jsx":"11a3143cac19","components/content/StrikeList.jsx":"010480e1f593","components/forms/Checkbox.jsx":"b47c829cf46d","components/forms/ChoiceGroup.jsx":"70382f2bd6e4","components/forms/Select.jsx":"b009683525a5","components/forms/TextField.jsx":"f84af68aeddf","components/navigation/Closer.jsx":"1960d45f3282","components/navigation/SiteFooter.jsx":"d86cdd9d8ba4","components/navigation/SiteHeader.jsx":"a38ae07636aa","components/type/Headline.jsx":"580ab1bf00bf","components/type/InfoLine.jsx":"c6a417d46b6d","components/type/Notiz.jsx":"9a80bddce609","ui_kits/website/Architektur.jsx":"c29348381aed","ui_kits/website/Hausbau.jsx":"7d2539ddf699","ui_kits/website/Home.jsx":"807725569522","ui_kits/website/Projekt.jsx":"eb1ea9d69bd0","ui_kits/website/ProjektStarten.jsx":"55b68c7e20b3","ui_kits/website/data.js":"8cf011db6095","ui_kits/website/parts.jsx":"1aa507ac9a1e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GRIFFNERDesignSystem_559bd8 = window.GRIFFNERDesignSystem_559bd8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
/* Rechtwinklig, flach, kein Gelb. primary = volle Fläche, secondary = Kante, line = Text mit Linie. */
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  disabled = false,
  onClick,
  type = 'button',
  href,
  children,
  style
}) {
  const pad = size === 'lg' ? '20px 32px' : size === 'sm' ? '10px 16px' : '15px 24px';
  const fs = size === 'lg' ? 16 : size === 'sm' ? 12 : 14;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 14,
    fontFamily: 'var(--font-text)',
    fontWeight: 600,
    fontSize: fs,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  };
  const v = {
    primary: {
      background: 'var(--text-primary)',
      color: 'var(--surface-page)',
      border: '1px solid var(--text-primary)',
      padding: pad
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--text-primary)',
      padding: pad
    },
    line: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 0,
      padding: '6px 0',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14
    }
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontWeight: 500,
      letterSpacing: 0
    }
  }, "\u2192"));
  return /*#__PURE__*/React.createElement(Tag, {
    className: 'gri-btn gri-btn--' + variant,
    type: href ? undefined : type,
    href: href,
    disabled: href ? undefined : disabled,
    onClick: onClick,
    style: {
      ...base,
      ...v,
      ...style
    }
  }, label, variant === 'line' && /*#__PURE__*/React.createElement("span", {
    className: "gri-btn__rule",
    style: {
      display: 'block',
      width: '100%',
      height: 1,
      background: 'currentColor'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Connector.jsx
try { (() => {
/* Das gelbe Rechteck auf der Kante zwischen Bild und Fläche. Immer 5:4.
   edge: auf welcher Seite das Bild liegt. Die Bildhälfte hat 50 % Deckkraft. */
function Connector({
  width = 120,
  imageSide = 'top',
  style
}) {
  const h = width * 0.8;
  const vertical = imageSide === 'left' || imageSide === 'right';
  const half = {
    position: 'absolute',
    background: 'var(--griffner-gelb)'
  };
  const over = {
    position: 'absolute',
    background: 'var(--connector-overlay)'
  };
  let a, b;
  if (!vertical) {
    a = {
      left: 0,
      top: 0,
      width,
      height: h / 2
    };
    b = {
      left: 0,
      top: h / 2,
      width,
      height: h / 2
    };
    if (imageSide === 'bottom') [a, b] = [b, a];
  } else {
    a = {
      left: 0,
      top: 0,
      width: width / 2,
      height: h
    };
    b = {
      left: width / 2,
      top: 0,
      width: width / 2,
      height: h
    };
    if (imageSide === 'right') [a, b] = [b, a];
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width,
      height: h,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...over,
      ...a
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...half,
      ...b
    }
  }));
}

/* Bild + Fläche + Connector exakt auf der Kante. */
function ConnectorSplit({
  image,
  imagePosition = 'center',
  direction = 'vertical',
  imageShare = 0.5,
  connectorAt = 0.5,
  connectorWidth = 120,
  surface = 'var(--surface-page)',
  height = 640,
  children,
  style
}) {
  const stacked = direction === 'vertical';
  const pct = imageShare * 100 + '%';
  const cw = connectorWidth,
    ch = cw * 0.8;
  const pos = stacked ? {
    left: 'calc(' + connectorAt * 100 + '% - ' + cw / 2 + 'px)',
    top: 'calc(' + pct + ' - ' + ch / 2 + 'px)'
  } : {
    top: 'calc(' + connectorAt * 100 + '% - ' + ch / 2 + 'px)',
    left: 'calc(' + pct + ' - ' + cw / 2 + 'px)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateRows: stacked ? pct + ' 1fr' : '1fr',
      gridTemplateColumns: stacked ? '1fr' : pct + ' 1fr',
      height,
      background: surface,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--griffner-anthrazit)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: imagePosition,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minWidth: 0
    }
  }, children), /*#__PURE__*/React.createElement(Connector, {
    width: cw,
    imageSide: stacked ? 'top' : 'left',
    style: {
      position: 'absolute',
      ...pos
    }
  }));
}
Object.assign(__ds_scope, { Connector, ConnectorSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Connector.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stage.jsx
try { (() => {
/* Stage: das Gelb groß, als Bühne für eine Botschaft. Darf an zwei Kanten anschneiden. */
function Stage({
  children,
  width = '100%',
  ratio = '5 / 4',
  padding = 40,
  align = 'end',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: ratio,
      background: 'var(--griffner-gelb)',
      color: 'var(--griffner-schwarz)',
      padding,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: align === 'end' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Stage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stage.jsx", error: String((e && e.message) || e) }); }

// components/brand/marks.js
try { (() => {
// GRIFFNER Zeichen als Pfade, Wortmarke im Hausschnitt (logo/hausschnitt). Bold ist ersetzt. Nie nachsetzen, nie tippen.
const WORDMARK_D = "M25.6175,-56.2799c0,11.20975 3.53369,20.21351 10.65137,27.03844c7.15581,6.86148 17.16066,10.74236 30.87103,10.74236c4.96815,0 8.50697,-0.8061 12.3691,-1.96933l0,-42.46217h24.9939l0,57.77744l-1.226,0.90146c-6.02352,4.42902 -21.12992,9.8111 -36.9165,9.8111c-20.21738,0 -37.18365,-6.8534 -48.50981,-17.79528c-11.35724,-10.9719 -17.85059,-26.86115 -17.85059,-44.04402c0,-18.28634 7.01257,-35.0372 19.08935,-46.58802c12.04754,-11.52285 29.94264,-18.68108 51.01265,-18.68108c13.2843,0 26.20787,3.04911 33.95395,7.42282l1.53825,0.86855l0,25.04651l-4.45708,-2.28646c-7.71088,-3.95564 -19.01914,-7.46063 -30.09972,-7.46063c-14.73455,0 -25.71753,4.16415 -33.58926,11.64783c-7.83912,7.45268 -11.83064,17.42693 -11.83064,30.03047z M205.21355,-33.99743c-3.38938,0.35155 -6.23481,0.58183 -10.71755,0.58183c-7.65244,0 -10.69508,-0.3876 -14.8635,-0.99759v37.47819h-25.3057l0,-123.055h46.717c15.87667,0.06529 28.81055,3.90787 37.29433,10.86786c8.5691,7.02999 13.32017,17.93298 13.32017,30.54854c0,9.38225 -2.39398,17.82267 -6.66033,24.32575c-4.27781,6.52054 -9.10355,10.24684 -15.53701,13.6009l27.13716,43.71195h-28.74392zM218.55349,-62.2036c4.91627,-3.75645 6.8637,-8.60615 6.8637,-16.0582c0,-5.99161 -1.27187,-9.96813 -5.14359,-13.16941c-4.03263,-3.33434 -10.22514,-5.18466 -20.78881,-5.12389h-19.8523v39.26481c4.00979,0.61469 7.50415,0.90749 14.7076,0.90749c11.61829,0 19.15071,-1.95248 24.2134,-5.8208z M324.29349,-119.99l0,123.055h-24.9939v-123.055z M402.85289,-96.2433v22.2438l41.1576,0l0,23.7467l-41.1576,0v53.3178h-25.3057l0,-123.055l68.3341,0l0,23.7467z M516.80159,-96.2433v22.2438l41.1576,0l0,23.7467l-41.1576,0v53.3178h-25.3057l0,-123.055l68.3341,0l0,23.7467z M715.09218,3.6886h-7.41239l-77.24131,-73.84446l0,73.22086h-24.9939l0,-123.8345h7.08819l77.40961,72.97777l0,-72.19827l25.1498,0z M849.77558,3.065h-82.0533l0,-123.055l80.4943,0l0,23.7467l-56.124,0v22.2438l53.3178,0v23.7467l-53.3178,0v29.5711l57.683,0z M948.61543,-33.99743c-3.38938,0.35155 -6.23481,0.58183 -10.71755,0.58183c-7.65244,0 -10.69508,-0.3876 -14.8635,-0.99759v37.47819h-25.3057l0,-123.055h46.717c15.87667,0.06529 28.81055,3.90787 37.29433,10.86786c8.5691,7.02999 13.32017,17.93298 13.32017,30.54854c0,9.38225 -2.39398,17.82267 -6.66033,24.32575c-4.27781,6.52054 -9.10355,10.24684 -15.53701,13.6009l27.13716,43.71195h-28.74392zM961.95537,-62.2036c4.91627,-3.75645 6.8637,-8.60615 6.8637,-16.0582c0,-5.99161 -1.27187,-9.96813 -5.14359,-13.16941c-4.03263,-3.33434 -10.22514,-5.18466 -20.78881,-5.12389h-19.8523v39.26481c4.00979,0.61469 7.50415,0.90749 14.7076,0.90749c11.61829,0 19.15071,-1.95248 24.2134,-5.8208z";
const CLAIM_D = "M273 249 C181 249 110 295 75 369 L75 11 L0 11 L0 503 C0 666 106 775 257 775 C408 775 519 664 519 511 C519 361 414 249 273 249 Z M257 706 C152 706 75 627 75 512 C75 397 151 320 257 320 C367 320 442 397 442 512 C442 628 366 706 257 706 Z M837 775 C971 775 1056 693 1056 554 L1056 263 L976 263 L976 555 C976 646 923 704 837 704 C752 704 699 646 699 555 L699 263 L619 263 L619 554 C619 693 704 775 837 775 Z M1236 155 C1269 155 1290 136 1290 104 C1290 68 1269 50 1236 50 C1204 50 1181 68 1181 104 C1181 136 1204 155 1236 155 Z M1195 761 L1275 761 L1275 263 L1195 263 Z M1514 775 C1534 775 1554 770 1566 761 L1566 698 C1558 704 1546 706 1534 706 C1513 706 1501 694 1501 670 L1501 11 L1421 11 L1421 679 C1421 739 1457 775 1514 775 Z M1924 333 L1924 263 L1769 263 L1769 109 L1690 109 L1690 263 L1600 263 L1600 333 L1690 333 L1690 601 C1690 711 1746 775 1844 775 C1872 775 1905 768 1924 758 L1924 685 C1908 694 1881 701 1857 701 C1798 701 1769 666 1769 601 L1769 333 Z M2632 11 L2632 358 C2595 287 2531 249 2454 249 C2319 249 2216 360 2216 513 C2216 667 2318 775 2453 775 C2535 775 2601 733 2637 656 L2637 761 L2712 761 L2712 11 Z M2467 705 C2367 705 2294 631 2294 513 C2294 396 2368 320 2467 320 C2568 320 2644 397 2644 513 C2644 628 2568 705 2467 705 Z M2893 155 C2926 155 2947 136 2947 104 C2947 68 2926 50 2893 50 C2861 50 2838 68 2838 104 C2838 136 2861 155 2893 155 Z M2852 761 L2932 761 L2932 263 L2852 263 Z M3030 69 C3096 69 3127 103 3127 168 L3127 263 L2982 263 L2982 333 L3127 333 L3127 784 C3127 904 3181 977 3289 977 C3316 977 3341 971 3359 961 L3358 891 C3341 900 3322 906 3299 906 C3230 906 3206 862 3206 784 L3206 333 L3317 333 L3317 263 L3206 263 L3206 167 C3206 62 3145 0 3040 0 C3011 0 2988 5 2970 12 L2970 78 C2986 73 3006 69 3030 69 Z M3362 69 C3428 69 3459 103 3459 168 L3459 263 L3314 263 L3314 333 L3459 333 L3459 784 C3459 904 3513 977 3621 977 C3648 977 3673 971 3691 961 L3690 891 C3673 900 3654 906 3631 906 C3562 906 3538 862 3538 784 L3538 333 L3649 333 L3649 263 L3538 263 L3538 167 C3538 62 3477 0 3372 0 C3343 0 3320 5 3302 12 L3302 78 C3318 73 3338 69 3362 69 Z M4179 493 C4179 344 4090 249 3952 249 C3812 249 3709 354 3709 510 C3709 677 3808 775 3970 775 C4034 775 4107 760 4155 726 L4155 656 C4115 684 4052 706 3977 706 C3862 706 3796 650 3786 537 L4175 537 C4177 523 4179 508 4179 493 Z M3951 316 C4049 316 4101 376 4105 473 L3787 473 C3799 373 3863 316 3951 316 Z M4521 249 C4436 249 4379 308 4359 374 L4359 263 L4284 263 L4284 761 L4364 761 L4364 481 C4364 376 4428 322 4511 322 C4539 322 4566 328 4584 338 L4584 260 C4567 253 4542 249 4521 249 Z M5104 493 C5104 344 5015 249 4877 249 C4737 249 4634 354 4634 510 C4634 677 4733 775 4895 775 C4959 775 5032 760 5080 726 L5080 656 C5040 684 4977 706 4902 706 C4787 706 4721 650 4711 537 L5100 537 C5102 523 5104 508 5104 493 Z M4876 316 C4974 316 5026 376 5030 473 L4712 473 C4724 373 4788 316 4876 316 Z M5463 249 C5372 249 5308 304 5284 371 L5284 263 L5209 263 L5209 761 L5289 761 L5289 498 C5289 387 5352 314 5441 314 C5527 314 5579 378 5579 482 L5579 761 L5659 761 L5659 466 C5659 330 5581 249 5463 249 Z M6053 333 L6053 263 L5898 263 L5898 109 L5819 109 L5819 263 L5729 263 L5729 333 L5819 333 L5819 601 C5819 711 5875 775 5973 775 C6001 775 6034 768 6053 758 L6053 685 C6037 694 6010 701 5986 701 C5927 701 5898 666 5898 601 L5898 333 Z";
const CLAIM_VIEWBOX = "0 0 6053 977";
const ENDORSE_D = "M55 155 C88 155 109 136 109 104 C109 68 88 50 55 50 C23 50 0 68 0 104 C0 136 23 155 55 155 Z M14 761 L94 761 L94 263 L14 263 Z M369 775 C499 775 565 702 565 624 C565 553 522 512 442 480 L380 455 C337 438 316 421 316 387 C316 345 359 320 424 320 C467 320 506 332 534 347 L534 276 C510 262 465 249 423 249 C310 249 237 308 237 385 C237 451 278 488 348 516 L411 542 C464 563 490 583 490 623 C490 672 450 706 368 706 C310 706 257 687 229 666 L229 738 C256 759 308 775 369 775 Z M1164 249 C1072 249 1001 295 966 369 L966 11 L891 11 L891 503 C891 666 997 775 1148 775 C1299 775 1410 664 1410 511 C1410 361 1305 249 1164 249 Z M1148 706 C1043 706 966 627 966 512 C966 397 1042 320 1148 320 C1258 320 1333 397 1333 512 C1333 628 1257 706 1148 706 Z M1728 775 C1862 775 1947 693 1947 554 L1947 263 L1867 263 L1867 555 C1867 646 1814 704 1728 704 C1643 704 1590 646 1590 555 L1590 263 L1510 263 L1510 554 C1510 693 1595 775 1728 775 Z M2127 155 C2160 155 2181 136 2181 104 C2181 68 2160 50 2127 50 C2095 50 2072 68 2072 104 C2072 136 2095 155 2127 155 Z M2086 761 L2166 761 L2166 263 L2086 263 Z M2405 775 C2425 775 2445 770 2457 761 L2457 698 C2449 704 2437 706 2425 706 C2404 706 2392 694 2392 670 L2392 11 L2312 11 L2312 679 C2312 739 2348 775 2405 775 Z M2815 333 L2815 263 L2660 263 L2660 109 L2581 109 L2581 263 L2491 263 L2491 333 L2581 333 L2581 601 C2581 711 2637 775 2735 775 C2763 775 2796 768 2815 758 L2815 685 C2799 694 2772 701 2748 701 C2689 701 2660 666 2660 601 L2660 333 Z M3523 11 L3523 358 C3486 287 3422 249 3345 249 C3210 249 3107 360 3107 513 C3107 667 3209 775 3344 775 C3426 775 3492 733 3528 656 L3528 761 L3603 761 L3603 11 Z M3358 705 C3258 705 3185 631 3185 513 C3185 396 3259 320 3358 320 C3459 320 3535 397 3535 513 C3535 628 3459 705 3358 705 Z M3784 155 C3817 155 3838 136 3838 104 C3838 68 3817 50 3784 50 C3752 50 3729 68 3729 104 C3729 136 3752 155 3784 155 Z M3743 761 L3823 761 L3823 263 L3743 263 Z M3921 69 C3987 69 4018 103 4018 168 L4018 263 L3873 263 L3873 333 L4018 333 L4018 784 C4018 904 4072 977 4180 977 C4207 977 4232 971 4250 961 L4249 891 C4232 900 4213 906 4190 906 C4121 906 4097 862 4097 784 L4097 333 L4208 333 L4208 263 L4097 263 L4097 167 C4097 62 4036 0 3931 0 C3902 0 3879 5 3861 12 L3861 78 C3877 73 3897 69 3921 69 Z M4253 69 C4319 69 4350 103 4350 168 L4350 263 L4205 263 L4205 333 L4350 333 L4350 784 C4350 904 4404 977 4512 977 C4539 977 4564 971 4582 961 L4581 891 C4564 900 4545 906 4522 906 C4453 906 4429 862 4429 784 L4429 333 L4540 333 L4540 263 L4429 263 L4429 167 C4429 62 4368 0 4263 0 C4234 0 4211 5 4193 12 L4193 78 C4209 73 4229 69 4253 69 Z M5070 493 C5070 344 4981 249 4843 249 C4703 249 4600 354 4600 510 C4600 677 4699 775 4861 775 C4925 775 4998 760 5046 726 L5046 656 C5006 684 4943 706 4868 706 C4753 706 4687 650 4677 537 L5066 537 C5068 523 5070 508 5070 493 Z M4842 316 C4940 316 4992 376 4996 473 L4678 473 C4690 373 4754 316 4842 316 Z M5412 249 C5327 249 5270 308 5250 374 L5250 263 L5175 263 L5175 761 L5255 761 L5255 481 C5255 376 5319 322 5402 322 C5430 322 5457 328 5475 338 L5475 260 C5458 253 5433 249 5412 249 Z M5995 493 C5995 344 5906 249 5768 249 C5628 249 5525 354 5525 510 C5525 677 5624 775 5786 775 C5850 775 5923 760 5971 726 L5971 656 C5931 684 5868 706 5793 706 C5678 706 5612 650 5602 537 L5991 537 C5993 523 5995 508 5995 493 Z M5767 316 C5865 316 5917 376 5921 473 L5603 473 C5615 373 5679 316 5767 316 Z M6354 249 C6263 249 6199 304 6175 371 L6175 263 L6100 263 L6100 761 L6180 761 L6180 498 C6180 387 6243 314 6332 314 C6418 314 6470 378 6470 482 L6470 761 L6550 761 L6550 466 C6550 330 6472 249 6354 249 Z M6944 333 L6944 263 L6789 263 L6789 109 L6710 109 L6710 263 L6620 263 L6620 333 L6710 333 L6710 601 C6710 711 6766 775 6864 775 C6892 775 6925 768 6944 758 L6944 685 C6928 694 6901 701 6877 701 C6818 701 6789 666 6789 601 L6789 333 Z";
const ENDORSE_VIEWBOX = "0 0 6944 977";
const MARK_COLORS = {
  weiss: '#FFFFFF',
  schwarz: '#000000',
  gelb: '#FFB200'
};
Object.assign(__ds_scope, { WORDMARK_D, CLAIM_D, CLAIM_VIEWBOX, ENDORSE_D, ENDORSE_VIEWBOX, MARK_COLORS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/marks.js", error: String((e && e.message) || e) }); }

// components/brand/Claim.jsx
try { (() => {
function Claim({
  variant = 'claim',
  color = 'weiss',
  width = 240,
  style
}) {
  const sig = variant === 'signatur';
  const vb = sig ? __ds_scope.ENDORSE_VIEWBOX : __ds_scope.CLAIM_VIEWBOX;
  const [,, vw, vh] = vb.split(' ').map(Number);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: vb,
    width: width,
    height: width * vh / vw,
    role: "img",
    "aria-label": sig ? 'is built different' : 'built different',
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: __ds_scope.MARK_COLORS[color] || color,
    d: sig ? __ds_scope.ENDORSE_D : __ds_scope.CLAIM_D
  }));
}
Object.assign(__ds_scope, { Claim });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Claim.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const VARIANTS = {
  dunkel: {
    field: __ds_scope.MARK_COLORS.gelb,
    word: __ds_scope.MARK_COLORS.weiss
  },
  hell: {
    field: __ds_scope.MARK_COLORS.gelb,
    word: __ds_scope.MARK_COLORS.schwarz
  },
  weiss: {
    field: __ds_scope.MARK_COLORS.weiss,
    word: __ds_scope.MARK_COLORS.weiss
  },
  schwarz: {
    field: __ds_scope.MARK_COLORS.schwarz,
    word: __ds_scope.MARK_COLORS.schwarz
  }
};
function Logo({
  variant = 'dunkel',
  width = 120,
  clearspace = false,
  title = 'GRIFFNER',
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.dunkel;
  const w = Math.max(64, width);
  const pad = clearspace ? Math.round(w * 0.122) : 0;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: pad,
      lineHeight: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 1005.6",
    width: w,
    height: w * 1.0056,
    role: "img",
    "aria-label": title,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "1000",
    height: "800",
    fill: v.field
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1000)",
    fill: v.word
  }, /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.WORDMARK_D
  }))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Pattern.jsx
try { (() => {
/* Muster aus dem Grundriss: Viertelkreis = Türschwenk, Halbkreis = Öffnung, Kreis = Stütze. */
const SEQ = ['hR', 'ringI', 'logo', 'dot', 'qBL', 'qTR', 'dot', 'empty', 'hB', 'ringI', 'ringI', 'hL', 'hT', 'qTL', 'dot', 'hB', 'qBR', 'ringI', 'hR', 'qTL', 'dot', 'hT', 'qBL', 'ringI', 'hB', 'qTR', 'hL', 'dot', 'qBR', 'empty', 'ringI', 'hT', 'qTL', 'dot', 'hR', 'qBL'];
function Cell({
  kind,
  s,
  fg,
  bg,
  logoVariant
}) {
  const box = {
    position: 'relative',
    width: s,
    height: s,
    overflow: 'hidden'
  };
  const sh = {
    position: 'absolute',
    background: fg
  };
  const r = s / 2,
    inset = s * 0.104;
  switch (kind) {
    case 'hR':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          left: 0,
          top: 0,
          width: r,
          height: s,
          borderRadius: '0 ' + r + 'px ' + r + 'px 0'
        }
      }));
    case 'hL':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          left: r,
          top: 0,
          width: r,
          height: s,
          borderRadius: r + 'px 0 0 ' + r + 'px'
        }
      }));
    case 'hB':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          left: 0,
          top: 0,
          width: s,
          height: r,
          borderRadius: '0 0 ' + r + 'px ' + r + 'px'
        }
      }));
    case 'hT':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          left: 0,
          top: r,
          width: s,
          height: r,
          borderRadius: r + 'px ' + r + 'px 0 0'
        }
      }));
    case 'qBL':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          inset: 0,
          borderRadius: '0 0 0 ' + s + 'px'
        }
      }));
    case 'qTR':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          inset: 0,
          borderRadius: '0 ' + s + 'px 0 0'
        }
      }));
    case 'qTL':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          inset: 0,
          borderRadius: s + 'px 0 0 0'
        }
      }));
    case 'qBR':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          inset: 0,
          borderRadius: '0 0 ' + s + 'px 0'
        }
      }));
    case 'dot':
      return /*#__PURE__*/React.createElement("div", {
        style: box
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...sh,
          inset,
          borderRadius: '50%'
        }
      }));
    case 'ringI':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...box,
          background: fg
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset,
          borderRadius: '50%',
          background: bg
        }
      }));
    case 'logo':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...box,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
        variant: logoVariant,
        width: Math.round(s * 0.8)
      }));
    default:
      return /*#__PURE__*/React.createElement("div", {
        style: box
      });
  }
}
function Pattern({
  columns = 5,
  rows = 3,
  cell = 240,
  tone = 'dunkel',
  withLogo = false,
  offset = 0,
  style
}) {
  const fg = tone === 'hell' ? 'var(--griffner-weiss)' : 'var(--griffner-schwarz)';
  const bg = tone === 'hell' ? 'var(--griffner-kalk)' : 'var(--griffner-anthrazit)';
  const cells = [];
  for (let i = 0; i < columns * rows; i++) {
    let k = SEQ[(i + offset) % SEQ.length];
    if (k === 'logo' && !withLogo) k = 'dot';
    cells.push(/*#__PURE__*/React.createElement(Cell, {
      key: i,
      kind: k,
      s: cell,
      fg: fg,
      bg: bg,
      logoVariant: tone === 'hell' ? 'hell' : 'dunkel'
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', ' + cell + 'px)',
      gridAutoRows: cell + 'px',
      background: bg,
      overflow: 'hidden',
      ...style
    }
  }, cells);
}
Object.assign(__ds_scope, { Pattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Pattern.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function Wordmark({
  color = 'weiss',
  width = 120,
  title = 'GRIFFNER',
  style
}) {
  const w = Math.max(90, width);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 127.11",
    width: w,
    height: w * 0.12711,
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 121.55)",
    fill: __ds_scope.MARK_COLORS[color] || color
  }, /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.WORDMARK_D
  })));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Comparison.jsx
try { (() => {
/* Üblich gegen GRIFFNER: die rote Linie als Zeile. Haarlinien, keine Kästen, keine Häkchen. */
function Comparison({
  rows = [],
  usualLabel = 'Üblich',
  oursLabel = 'Bei GRIFFNER',
  size = 'var(--fs-body)',
  style
}) {
  const info = {
    fontFamily: 'var(--font-text)',
    fontWeight: 500,
    fontSize: 'var(--fs-label)',
    letterSpacing: 'var(--tracking-info)',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--line)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '48px minmax(0,1fr) minmax(0,1.3fr) minmax(0,1fr)',
      gap: 24,
      padding: '12px 0',
      borderBottom: '1px solid var(--line)',
      ...info,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, usualLabel), /*#__PURE__*/React.createElement("span", null, oursLabel), /*#__PURE__*/React.createElement("span", null, "Beweis")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px minmax(0,1fr) minmax(0,1.3fr) minmax(0,1fr)',
      gap: 24,
      padding: '18px 0',
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--font-text)',
      fontSize: size,
      lineHeight: 1.4,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-tertiary)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-secondary)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--text-primary)',
      textDecorationThickness: 1
    }
  }, r.usual), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, r.ours), /*#__PURE__*/React.createElement("span", {
    style: {
      ...info,
      fontSize: 'var(--fs-info)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.proof))));
}
Object.assign(__ds_scope, { Comparison });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Comparison.jsx", error: String((e && e.message) || e) }); }

// components/content/FactTable.jsx
try { (() => {
/* Fakten wie im Plan: Haarlinien, Schlüssel in Salbei, Werte versal. Fakten kommen zuletzt. */
function FactTable({
  rows = [],
  keyWidth = 180,
  size = 'var(--fs-info)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--line)',
      ...style
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: keyWidth + 'px 1fr',
      gap: 16,
      padding: '14px 0',
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums',
      fontSize: size,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v))));
}
Object.assign(__ds_scope, { FactTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FactTable.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageFrame.jsx
try { (() => {
/* Foto randscharf, ohne Rahmen. Label als schwarze Marke unten links, wie im Style Book. */
function ImageFrame({
  src,
  alt = '',
  label,
  ratio = '4 / 5',
  position = 'center',
  placeholder,
  height,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      position: 'relative',
      margin: 0,
      width: '100%',
      aspectRatio: height ? undefined : ratio,
      height,
      overflow: 'hidden',
      background: 'var(--surface-raised)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 20,
      top: 20,
      right: 20,
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--fs-label)',
      color: 'var(--griffner-kalk)'
    }
  }, placeholder || 'Bild folgt'), label && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      background: 'var(--griffner-schwarz)',
      padding: '8px 12px',
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--fs-info)',
      color: 'var(--griffner-weiss)'
    }
  }, label));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
/* Projekt oder Concept: Bild, Nummer / Ort, Name. Keine Grundrisse, keine Preise. */
function ProjectCard({
  image,
  position = 'center',
  number,
  place,
  title,
  coming,
  ratio = '4 / 3',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "gri-card",
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      cursor: onClick ? 'pointer' : 'default',
      textDecoration: 'none',
      color: 'inherit',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--surface-raised)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--fs-info)',
      color: 'var(--text-secondary)'
    }
  }, [number, place].filter(Boolean).join(' / '), coming && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      color: 'var(--text-primary)'
    }
  }, "Coming ", coming)), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: 'var(--tracking-headline)',
      textTransform: 'uppercase',
      lineHeight: 1.05,
      fontVariantLigatures: 'none'
    }
  }, title));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/RuleList.jsx
try { (() => {
/* Nummerierte Liste mit Haarlinien, wie die Regeln im Style Book. */
function RuleList({
  items = [],
  accent = false,
  size = 'var(--fs-body)',
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: '1px solid var(--line)',
      ...style
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1fr',
      padding: '16px 0',
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--font-text)',
      fontSize: size,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      color: accent ? 'var(--griffner-gelb)' : 'var(--text-tertiary)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, t))));
}
Object.assign(__ds_scope, { RuleList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RuleList.jsx", error: String((e && e.message) || e) }); }

// components/content/StrikeList.jsx
try { (() => {
/* Was als normal gilt, durchgestrichen. Die rote Linie jeder Seite beginnt hier. */
function StrikeList({
  title,
  items = [],
  columns = 4,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--fs-info)',
      color: 'var(--text-tertiary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))',
      gap: '10px 32px'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 400,
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.45,
      color: 'var(--text-secondary)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--text-primary)',
      textDecorationThickness: 2
    }
  }, t))));
}
Object.assign(__ds_scope, { StrikeList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StrikeList.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  radio = false,
  name,
  value,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(radio ? true : !inner);
    onChange && onChange(radio ? true : !on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: "gri-check",
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 14,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      fontSize: 'var(--fs-body)',
      lineHeight: 1.45,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: radio ? 'radio' : 'checkbox',
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gri-check__box",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 18,
      height: 18,
      marginTop: 3,
      border: '1px solid ' + (on ? 'var(--text-primary)' : 'var(--text-tertiary)'),
      borderRadius: radio ? '50%' : 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--text-primary)',
      borderRadius: radio ? '50%' : 0
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceGroup.jsx
try { (() => {
/* Auswahl in Kacheln: Kanten statt Kästen, die gewählte Kachel wird voll. */
function ChoiceGroup({
  options = [],
  value,
  defaultValue,
  onChange,
  columns,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  const cols = columns || options.length;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ', minmax(0,1fr))',
      gap: 1,
      background: 'var(--line)',
      border: '1px solid var(--line)',
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const d = typeof o === 'string' ? null : o.detail;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      role: "radio",
      "aria-checked": on,
      className: "gri-btn",
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        textAlign: 'left',
        padding: '18px 20px',
        border: 0,
        borderRadius: 0,
        cursor: 'pointer',
        background: on ? 'var(--text-primary)' : 'var(--surface-page)',
        color: on ? 'var(--surface-page)' : 'var(--text-primary)',
        fontFamily: 'var(--font-text)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 'var(--fs-body)'
      }
    }, l), d && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        fontSize: 'var(--fs-body-sm)',
        opacity: 0.7
      }
    }, d));
  }));
}
Object.assign(__ds_scope, { ChoiceGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "gri-field",
    name: name,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange ? e => onChange(e.target.value, e) : undefined,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid var(--line)',
      borderRadius: 0,
      padding: '8px 28px 12px 0',
      cursor: 'pointer'
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        color: '#000'
      }
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 8,
      pointerEvents: 'none',
      fontFamily: 'var(--font-text)',
      color: 'var(--text-secondary)',
      transform: 'rotate(90deg)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
const labelStyle = {
  fontFamily: 'var(--font-text)',
  fontWeight: 500,
  fontSize: 'var(--fs-label)',
  letterSpacing: 'var(--tracking-info)',
  textTransform: 'uppercase',
  color: 'var(--text-secondary)'
};

/* Kanten statt Kästen: nur die untere Haarlinie. */
function TextField({
  label,
  value,
  defaultValue,
  placeholder,
  onChange,
  type = 'text',
  multiline = false,
  rows = 4,
  hint,
  error,
  disabled,
  name,
  style
}) {
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement(Tag, {
    className: "gri-field",
    name: name,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange ? e => onChange(e.target.value, e) : undefined,
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 500,
      fontSize: 'var(--fs-body)',
      lineHeight: 1.45,
      color: 'var(--text-primary)',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (error ? 'var(--text-primary)' : 'var(--line)'),
      borderRadius: 0,
      padding: '8px 0 12px',
      resize: 'vertical',
      opacity: disabled ? 0.4 : 1,
      width: '100%',
      boxSizing: 'border-box'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: error ? 600 : 500,
      color: error ? 'var(--text-primary)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Closer.jsx
try { (() => {
/* Jede Seite endet so: HAUSBAU GEHT BESSER. LASS ES UNS ZEIGEN. Claim klein als Absender, Projekt starten. */
function Closer({
  onStart,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-12) var(--page-margin) var(--space-10)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 48,
      alignItems: 'end',
      background: 'var(--surface-page)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(56px,6vw,96px)',
      letterSpacing: 0,
      lineHeight: 'var(--leading-statement)',
      textTransform: 'uppercase',
      fontVariantLigatures: 'none'
    }
  }, "Hausbau geht besser.", /*#__PURE__*/React.createElement("br", null), "Lass es uns zeigen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    arrow: true,
    onClick: onStart
  }, "Projekt starten"), /*#__PURE__*/React.createElement(__ds_scope.Claim, {
    color: "weiss",
    width: 180
  })));
}
Object.assign(__ds_scope, { Closer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Closer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const COLS = [['Architektur', ['Concepts', 'Projects', 'Different Ideas of Living']], ['Hausbau', ['Hausbau geht besser', 'Dein Weg zum Haus', 'Serienmäßig']], ['GRIFFNER', ['Über GRIFFNER', 'Different Jobs', 'Kontakt']]];

/* Fußzeile: Wortmarke als Wiederholung, Infoebene, Haarlinie oben. */
function SiteFooter({
  columns = COLS,
  style
}) {
  const info = {
    fontFamily: 'var(--font-text)',
    fontWeight: 500,
    fontSize: 'var(--fs-label)',
    letterSpacing: 'var(--tracking-info)',
    textTransform: 'uppercase',
    color: 'var(--text-tertiary)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--space-9) var(--page-margin) var(--space-8)',
      borderTop: '1px solid var(--line)',
      background: 'var(--surface-page)',
      color: 'var(--text-primary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 64,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(' + columns.length + ', minmax(0,1fr))',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    color: "weiss",
    width: 120
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...info,
      color: 'var(--text-secondary)'
    }
  }, "Griffen / K\xE4rnten / AT")), columns.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: info
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: "gri-navlink",
    style: {
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 500
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      ...info
    }
  }, /*#__PURE__*/React.createElement("span", null, "Seit 1950"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "gri-navlink",
    style: {
      textDecoration: 'none'
    }
  }, "Impressum"), /*#__PURE__*/React.createElement("a", {
    className: "gri-navlink",
    style: {
      textDecoration: 'none'
    }
  }, "Datenschutz"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  id: 'architektur',
  label: 'Architektur'
}, {
  id: 'hausbau',
  label: 'Hausbau geht besser'
}, {
  id: 'weg',
  label: 'Dein Weg zum Haus'
}, {
  id: 'ueber',
  label: 'Über GRIFFNER'
}, {
  id: 'erleben',
  label: 'GRIFFNER erleben',
  coming: '12.11.'
}];

/* Kopf der Website. mark="logo" auf der ersten Ansicht, "wordmark" als Wiederholung, wenn das Gelb schon im Screen steht. */
function SiteHeader({
  items = DEFAULT_ITEMS,
  active,
  onNavigate,
  onStart,
  mark = 'logo',
  overlay = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: overlay ? 'absolute' : 'relative',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: mark === 'logo' ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: 32,
      padding: '28px var(--page-margin)',
      background: overlay ? 'transparent' : 'var(--surface-page)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      cursor: 'pointer',
      lineHeight: 0
    },
    "aria-label": "GRIFFNER Startseite"
  }, mark === 'logo' ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "dunkel",
    width: 72
  }) : /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    color: "weiss",
    width: 110
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
      minWidth: 0
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "gri-navlink",
    onClick: () => onNavigate && onNavigate(it.id),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      paddingBottom: 6,
      position: 'relative',
      borderBottom: '1px solid ' + (active === it.id ? 'var(--text-primary)' : 'transparent'),
      opacity: it.coming ? 0.5 : 1,
      display: 'inline-flex',
      whiteSpace: 'nowrap'
    }
  }, it.label, it.coming && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '100%',
      marginTop: 2,
      fontWeight: 500,
      fontSize: 9,
      letterSpacing: '.08em'
    }
  }, "Coming ", it.coming))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onStart
  }, "Projekt starten")));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/type/Headline.jsx
try { (() => {
const SIZES = {
  signal: 'var(--fs-signal)',
  statement: 'var(--fs-statement)',
  h1: 'var(--fs-h1)',
  h2: 'var(--fs-h2)',
  h3: 'var(--fs-h3)',
  h4: 'var(--fs-h4)'
};
const LIGHT = {
  statement: 1,
  h1: 1
};

/* Eine Headline-Stimme. Groß (statement, h1) in Display Light, klein (h2 bis h4) in Display Medium. Dazu das Signalwort. */
function Headline({
  voice = 'headline',
  size,
  weight,
  as,
  color,
  children,
  style
}) {
  const sz = size || (voice === 'statement' ? 'statement' : voice === 'signal' ? 'signal' : 'h1');
  const Tag = as || (sz === 'statement' || sz === 'h1' ? 'h1' : 'h2');
  const light = weight ? weight === 'light' : !!LIGHT[sz];
  const v = voice === 'signal' ? {
    fontWeight: 'var(--weight-signal)',
    letterSpacing: 'var(--tracking-signal)',
    lineHeight: 1,
    fontSize: SIZES[sz],
    whiteSpace: 'nowrap'
  } : light ? {
    fontWeight: 'var(--weight-signal)',
    letterSpacing: 0,
    lineHeight: 'var(--leading-statement)',
    fontSize: SIZES[sz]
  } : {
    fontWeight: 'var(--weight-headline)',
    letterSpacing: 'var(--tracking-headline)',
    lineHeight: 'var(--leading-headline)',
    fontSize: SIZES[sz]
  };
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontVariantLigatures: 'none',
      color: color || 'var(--text-primary)',
      margin: 0,
      textWrap: 'balance',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Headline.jsx", error: String((e && e.message) || e) }); }

// components/type/InfoLine.jsx
try { (() => {
/* Infoebene aus Plan und Werkstatt: versal, Tracking 80, tabellarische Ziffern, Schrägstrich als Trenner. */
function InfoLine({
  items = [],
  children,
  color,
  size = 'var(--fs-info)',
  weight = 500,
  style
}) {
  const parts = items.length ? items : [children];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: weight,
      fontSize: size,
      letterSpacing: 'var(--tracking-info)',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.3,
      color: color || 'var(--text-primary)',
      ...style
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && ' / ', p)));
}
Object.assign(__ds_scope, { InfoLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/InfoLine.jsx", error: String((e && e.message) || e) }); }

// components/type/Notiz.jsx
try { (() => {
/* Notiz: das Gelb als Eingriff, eine Markierung wie auf der Skizze. Zählt als das eine Gelb im Format. */
function Notiz({
  children,
  mode = 'underline',
  style
}) {
  if (mode === 'word') return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--griffner-gelb)',
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      borderBottom: 'var(--note-weight) solid var(--griffner-gelb)',
      paddingBottom: 2,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Notiz });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Notiz.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Architektur.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArchitekturScreen({
  go
}) {
  const {
    SiteHeader,
    Headline,
    ProjectCard,
    InfoLine
  } = DS;
  const [tab, setTab] = React.useState('alle');
  const list = CONCEPTS.filter(c => tab === 'alle' || c.kind === tab);
  const tabs = [['alle', 'Alle'], ['concept', 'Concepts'], ['project', 'Projects']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "architektur",
    onNavigate: go,
    onStart: () => go('start')
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 64,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Rise, null, /*#__PURE__*/React.createElement(Headline, {
    voice: "statement"
  }, "There is no one", /*#__PURE__*/React.createElement("br", null), "GRIFFNER house.")), /*#__PURE__*/React.createElement(Lead, null, "Es gibt verschiedene Ideen vom Leben. Concepts tragen die Namen ihrer Orte. Projects sind gebaut und bewohnt. ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, "Kein Haus 165. Jedes hat einen Ort und einen Namen.")))), /*#__PURE__*/React.createElement(Section, {
    pad: "0",
    style: {
      paddingTop: 0,
      paddingBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      borderBottom: '1px solid var(--line)',
      marginBottom: 'var(--space-8)'
    }
  }, tabs.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    className: "gri-navlink",
    onClick: () => setTab(id),
    style: {
      ...kitInfo,
      cursor: 'pointer',
      textDecoration: 'none',
      padding: '0 0 16px',
      marginBottom: -1,
      fontWeight: 600,
      color: tab === id ? 'var(--text-primary)' : 'var(--text-tertiary)',
      borderBottom: '1px solid ' + (tab === id ? 'var(--text-primary)' : 'transparent')
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...kitInfo,
      marginLeft: 'auto',
      color: 'var(--text-tertiary)'
    }
  }, String(list.length).padStart(2, '0'), " H\xE4user")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: '56px 24px'
    }
  }, list.map((c, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: c.id
  }, c, {
    ratio: i % 4 === 0 ? '4 / 5' : '4 / 3',
    onClick: () => go('projekt', c),
    style: i % 4 === 0 ? {
      gridRow: 'span 2'
    } : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--griffner-anthrazit)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 20,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--griffner-kalk)"
  }, "Satteldach, l\xE4ndlich / Bild folgt")), /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-secondary)",
    items: ['09', 'Satteldach']
  })))));
}
window.ArchitekturScreen = ArchitekturScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Architektur.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hausbau.jsx
try { (() => {
function HausbauScreen({
  go
}) {
  const {
    SiteHeader,
    Headline,
    Stage,
    StrikeList,
    RuleList,
    InfoLine,
    ImageFrame
  } = DS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "hausbau",
    onNavigate: go,
    onStart: () => go('start')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 720,
      overflow: 'hidden',
      background: '#000',
      padding: '0 var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--page-margin)',
      top: -80,
      width: 'min(56vw, 780px)'
    },
    className: "gri-fade"
  }, /*#__PURE__*/React.createElement(Stage, {
    padding: 48
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h1",
    color: "#000"
  }, "Hausbau", /*#__PURE__*/React.createElement("br", null), "geht besser."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin)',
      bottom: 80,
      maxWidth: 420,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-tertiary)"
  }, "Das Versprechen"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 'var(--fs-sub)',
      lineHeight: 'var(--leading-sub)'
    }
  }, "Nicht ein bisschen besser. Grundlegend besser."))), /*#__PURE__*/React.createElement(Section, {
    light: true
  }, /*#__PURE__*/React.createElement(StrikeList, {
    title: "Was als normal gilt",
    items: ['Standardisierte Häuser', 'Starre Grundrisse', 'Zu viele Schnittstellen', 'Individualität als Aufpreis']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 64,
      marginTop: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h2"
  }, "Was wir anders machen."), /*#__PURE__*/React.createElement(RuleList, {
    size: "var(--fs-lead)",
    items: ['Ein Architekt entwirft dein Haus von Hand, für deinen Ort.', 'Wir fertigen selbst, in Griffen. Weil wir Verantwortung nicht an der Werkstür abgeben.', 'Unsere eigenen Leute bauen auf. Keine Subunternehmer, keine Schnittstellen.', 'Serienmäßig heißt bei uns: inklusive Bodenplatte.']
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)",
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 24
    }
  }, [['Design.', 'skizze.png'], ['Engineer.', null], ['Make.', null], ['Build.', null]].map(([w, img], i) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, img ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(img),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '60% 60%',
      filter: 'grayscale(1) brightness(1.8) contrast(1.6)',
      mixBlendMode: 'multiply'
    }
  })) : /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 5",
    placeholder: ['Planung: Detail am Bildschirm', 'Fertigung: Hände, Holz, Maschine', 'Bauen: Kran, Wand wird gehoben'][i - 1]
  }), /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-tertiary)",
    items: ['0' + (i + 1)]
  }), /*#__PURE__*/React.createElement(Headline, {
    as: "h3",
    size: "h3"
  }, w))))));
}
window.HausbauScreen = HausbauScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hausbau.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HomeScreen({
  go
}) {
  const {
    SiteHeader,
    Headline,
    InfoLine,
    StrikeList,
    ConnectorSplit,
    ProjectCard,
    Button,
    Wordmark,
    Logo
  } = DS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 860,
      overflow: 'hidden',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('daemmerung-garten.jpg'),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bildschutz)'
    }
  }), /*#__PURE__*/React.createElement(SiteHeader, {
    overlay: true,
    onNavigate: go,
    onStart: () => go('start')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin)',
      right: 'var(--page-margin)',
      bottom: 72
    },
    className: "gri-fade"
  }, /*#__PURE__*/React.createElement(Signal, {
    word: "DIFFERENT"
  }))), /*#__PURE__*/React.createElement(Section, {
    light: true
  }, /*#__PURE__*/React.createElement(Split, {
    cols: "7fr 5fr",
    align: "end",
    left: /*#__PURE__*/React.createElement(Rise, null, /*#__PURE__*/React.createElement(Headline, {
      voice: "statement"
    }, "Die Freiheit eines Architekten. Die Sicherheit eines Herstellers.")),
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Lead, null, "Wir planen, fertigen und bauen individuelle H\xE4user. Mit eigener Fertigung in Griffen und eigenen Leuten auf der Baustelle. ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-primary)',
        fontWeight: 600
      }
    }, "Wir denken Architektur und Bauen als eins.")), /*#__PURE__*/React.createElement(Button, {
      variant: "line",
      arrow: true,
      onClick: () => go('ueber')
    }, "\xDCber GRIFFNER"))
  })), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)",
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(StrikeList, {
    title: "Was als normal gilt",
    items: ['Standardisierte Häuser', 'Starre Grundrisse', 'Komplexe Abläufe', 'Zu viele Schnittstellen', 'Individualität als Aufpreis', 'Architektur getrennt von Technik', 'Technik getrennt von Fertigung', 'Fertigung getrennt vom Bau']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '8fr 4fr',
      gap: 48,
      alignItems: 'end',
      marginTop: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    as: "h2",
    style: {
      fontSize: 'clamp(56px,8vw,128px)'
    }
  }, "Hausbau", /*#__PURE__*/React.createElement("br", null), "geht besser."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 'var(--fs-sub)',
      lineHeight: 'var(--leading-sub)'
    }
  }, "Nicht ein bisschen besser. Grundlegend besser."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    onClick: () => go('hausbau')
  }, "Was wir anders machen")))), /*#__PURE__*/React.createElement(ConnectorSplit, {
    image: IMG('wald-fassade.jpg'),
    imagePosition: "center 55%",
    imageShare: 0.58,
    connectorAt: 0.3,
    connectorWidth: 150,
    height: 1040
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '96px var(--page-margin) 64px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 48,
      alignContent: 'start'
    }
  }, [['Besser planen.', 'Ein Architekt entwirft dein Haus von Hand. Für deinen Ort, nicht aus dem Katalog.'], ['Besser bauen.', 'Gefertigt in Griffen, gebaut von unseren eigenen Leuten. Eine Hand von der Skizze bis zum Schlüssel.'], ['Besser leben.', 'Holz, Licht und Raum, gedacht für das Leben, das du darin führen willst.']].map(([h, t]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      borderTop: '1px solid var(--line)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    as: "h3",
    size: "h4"
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      lineHeight: 1.45
    }
  }, t))))), /*#__PURE__*/React.createElement(Section, {
    tone: "salbei"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      gap: 48,
      marginBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    voice: "statement",
    size: "h1",
    style: {
      fontSize: 'clamp(48px,6vw,96px)'
    }
  }, "Different ideas", /*#__PURE__*/React.createElement("br", null), "of living."), /*#__PURE__*/React.createElement(Lead, {
    style: {
      maxWidth: '30ch'
    }
  }, "Es gibt kein GRIFFNER Haus. Jedes antwortet auf seinen Ort und seine Menschen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 24
    }
  }, CONCEPTS.slice(0, 4).map(c => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: c.id
  }, c, {
    ratio: "4 / 5",
    onClick: () => go('projekt', c)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    arrow: true,
    onClick: () => go('architektur')
  }, "Alle Concepts und Projects"))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)",
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 1,
      background: 'var(--line)'
    }
  }, [['Serienmäßig', 'Neu inklusive Bodenplatte.', '05.11.'], ['Experience', 'Zwei Wochen deiner Zeit. Den Rest übernehmen wir.', '12.11.'], ['Partnerships', 'Mit Studio F. A. Porsche.', '26.11.']].map(([k, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: '#000',
      padding: '32px 32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-tertiary)",
    items: ['Coming', d]
  }), /*#__PURE__*/React.createElement(Headline, {
    as: "h3",
    size: "h4"
  }, k, "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      lineHeight: 1.45,
      maxWidth: '28ch'
    }
  }, t))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projekt.jsx
try { (() => {
function ProjektScreen({
  go,
  project
}) {
  const {
    SiteHeader,
    Headline,
    InfoLine,
    FactTable,
    ImageFrame,
    Connector,
    Button
  } = DS;
  const p = project || CONCEPTS[0];
  const chapter = (n, t) => /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-tertiary)",
    items: [n, t]
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 820,
      background: '#000',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: p.position || 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bildschutz)'
    }
  }), /*#__PURE__*/React.createElement(SiteHeader, {
    overlay: true,
    active: "architektur",
    onNavigate: go,
    onStart: () => go('start')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin)',
      bottom: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    },
    className: "gri-rise"
  }, /*#__PURE__*/React.createElement(InfoLine, {
    items: [p.number, p.place, 'AT']
  }), /*#__PURE__*/React.createElement(Headline, {
    voice: "statement",
    style: {
      maxWidth: '12ch'
    }
  }, p.title, "."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 9fr',
      gap: 48
    }
  }, chapter('01', 'Der Mensch'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 'clamp(26px,2.6vw,40px)',
      lineHeight: 1.25,
      maxWidth: '28ch',
      textWrap: 'pretty'
    }
  }, "Zwei Menschen, die viel drau\xDFen sind und drinnen Ruhe suchen. Das Haus sollte den Wald nicht aussperren."))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      height: 640,
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('skizze.png'),
    alt: "Handskizze",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '68% 62%',
      filter: 'grayscale(1) brightness(1.8) contrast(1.6)',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...kitInfo,
      position: 'absolute',
      left: 24,
      bottom: 24,
      color: '#000'
    }
  }, "02 / Die Idee")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('weiss-tag.jpg'),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement(Connector, {
    width: 140,
    imageSide: "right",
    style: {
      position: 'absolute',
      left: 'calc(50% - 70px)',
      top: 260
    }
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 4fr 5fr',
      gap: 48,
      alignItems: 'start'
    }
  }, chapter('03', 'Der Ort'), /*#__PURE__*/React.createElement(Headline, {
    size: "h2"
  }, "Offen zum Wald. Geschlossen zur Stra\xDFe."), /*#__PURE__*/React.createElement(Lead, null, "Das Grundst\xFCck f\xE4llt nach S\xFCden ab. Das Haus legt sich quer zum Hang und \xF6ffnet den Wohnraum \xFCber die ganze L\xE4nge zu den B\xE4umen."))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG('schlafen-fels.jpg'),
    ratio: "4 / 3",
    position: "15% 30%",
    label: "04 / Die Architektur"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG('schlafen-hell.jpg'),
    ratio: "auto",
    position: "18% 70%",
    label: "06 / Das Leben",
    style: {
      height: '100%'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    light: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 4fr 5fr',
      gap: 48
    }
  }, chapter('05', 'Der Plan'), /*#__PURE__*/React.createElement(FactTable, {
    rows: [['Projekt', p.number + ' / ' + p.place], ['Ort', 'Kärnten / AT'], ['Wohnfläche', '186 m²'], ['Wand', 'Holz / 240 mm'], ['Status', p.kind === 'project' ? 'Gebaut' : 'Concept']]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Lead, null, "Grundrisse zeigen wir im Gespr\xE4ch, nicht im Netz. Weil jedes Haus erst mit dir fertig gedacht ist."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    onClick: () => go('start')
  }, "Gespr\xE4ch vereinbaren")))));
}
window.ProjektScreen = ProjektScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projekt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjektStarten.jsx
try { (() => {
function StartScreen({
  go
}) {
  const {
    SiteHeader,
    Headline,
    InfoLine,
    ChoiceGroup,
    TextField,
    Select,
    Checkbox,
    Button
  } = DS;
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const steps = ['Dein Ort', 'Deine Idee', 'Kontakt'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    onNavigate: go,
    onStart: () => {}
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-10)",
    style: {
      minHeight: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h1"
  }, "Projekt starten."), /*#__PURE__*/React.createElement(Lead, null, "Drei Fragen, dann melden wir uns. Ein Architekt aus Griffen, kein Callcenter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--line)',
      marginTop: 24
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      padding: '14px 0',
      borderBottom: '1px solid var(--line)',
      ...kitInfo,
      color: i === step && !sent ? 'var(--text-primary)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "0", i + 1), /*#__PURE__*/React.createElement("span", null, s))))), sent ? /*#__PURE__*/React.createElement("div", {
    className: "gri-rise",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-tertiary)"
  }, "Gesendet"), /*#__PURE__*/React.createElement(Headline, {
    voice: "statement",
    size: "h1",
    style: {
      fontSize: 'clamp(48px,6vw,88px)'
    }
  }, "Danke. Wir melden uns."), /*#__PURE__*/React.createElement(Lead, null, "Innerhalb von zwei Werktagen ruft dich jemand aus unserem Team an."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    arrow: true,
    onClick: () => go('architektur')
  }, "Inzwischen H\xE4user ansehen"))) : /*#__PURE__*/React.createElement("div", {
    key: step,
    className: "gri-rise",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-secondary)"
  }, "Hast du ein Grundst\xFCck"), /*#__PURE__*/React.createElement(ChoiceGroup, {
    defaultValue: "ja",
    options: [{
      value: 'ja',
      label: 'Ja',
      detail: 'Grundstück vorhanden'
    }, {
      value: 'suche',
      label: 'Auf der Suche',
      detail: 'Wir helfen mit'
    }, {
      value: 'nein',
      label: 'Noch nicht',
      detail: 'Erst die Idee'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(InfoLine, {
    color: "var(--text-secondary)"
  }, "Wie liegt es"), /*#__PURE__*/React.createElement(ChoiceGroup, {
    columns: 4,
    options: ['Eben', 'Hang', 'Wald', 'Stadt']
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "Ort",
    placeholder: "z. B. Klagenfurt, Graz, M\xFCnchen"
  })), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextField, {
    label: "Deine Idee vom Leben",
    multiline: true,
    rows: 5,
    placeholder: "Wer wohnt im Haus, was ist dir wichtig, was soll anders sein"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Wann m\xF6chtest du einziehen",
    options: ['In 12 Monaten', 'In 24 Monaten', 'Noch offen']
  })), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    placeholder: "Vor- und Nachname"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Telefon",
    type: "tel",
    placeholder: "+43"
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "E-Mail",
    type: "email",
    placeholder: "name@adresse.at"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ich bin einverstanden, dass GRIFFNER mich zu meinem Projekt kontaktiert.",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      borderTop: '1px solid var(--line)',
      paddingTop: 32
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setStep(step - 1)
  }, "Zur\xFCck"), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => step < 2 ? setStep(step + 1) : setSent(true)
  }, step < 2 ? 'Weiter' : 'Absenden'), /*#__PURE__*/React.createElement("span", {
    style: {
      ...kitInfo,
      marginLeft: 'auto',
      color: 'var(--text-tertiary)'
    }
  }, "Schritt ", step + 1, " / 3"))))));
}
window.StartScreen = StartScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjektStarten.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.CONCEPTS = [{
  id: 'wald',
  number: '01',
  place: 'Wald',
  title: 'Haus am Waldrand',
  image: '../../assets/photos/wald-abend.jpg',
  kind: 'concept'
}, {
  id: 'lichtung',
  number: '02',
  place: 'Lichtung',
  title: 'Haus in der Lichtung',
  image: '../../assets/photos/sonne.jpg',
  kind: 'concept'
}, {
  id: 'hang',
  number: '03',
  place: 'Hang',
  title: 'Haus am Hang',
  image: '../../assets/photos/weiss-tag.jpg',
  kind: 'concept'
}, {
  id: 'strasse',
  number: '04',
  place: 'Straße',
  title: 'Haus an der Straße',
  image: '../../assets/photos/strasse-003.jpg',
  kind: 'concept'
}, {
  id: 'garten',
  number: '05',
  place: 'Garten',
  title: 'Haus im Garten',
  image: '../../assets/photos/weiss-abend.jpg',
  kind: 'project',
  position: 'center'
}, {
  id: 'blau',
  number: '06',
  place: 'Blaue Stunde',
  title: 'Haus am Abend',
  image: '../../assets/photos/daemmerung-garten.jpg',
  kind: 'project',
  position: 'center 30%'
}, {
  id: 'kiefern',
  number: '07',
  place: 'Kiefern',
  title: 'Haus unter Kiefern',
  image: '../../assets/photos/wald-fassade.jpg',
  kind: 'project',
  position: 'center 40%'
}, {
  id: 'einfahrt',
  number: '08',
  place: 'Einfahrt',
  title: 'Haus an der Einfahrt',
  image: '../../assets/photos/weiss-detail.jpg',
  kind: 'project',
  position: '70% center'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
const DS = window.GRIFFNERDesignSystem_559bd8;
const IMG = p => '../../assets/photos/' + p;
const kitInfo = {
  fontFamily: 'var(--font-text)',
  fontWeight: 500,
  fontSize: 'var(--fs-info)',
  letterSpacing: 'var(--tracking-info)',
  textTransform: 'uppercase',
  fontVariantNumeric: 'tabular-nums'
};
function Signal({
  word = 'DIFFERENT',
  color = '#FFFFFF'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 118",
    style: {
      width: '100%',
      display: 'block',
      overflow: 'visible'
    },
    "aria-label": word
  }, /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "104",
    textLength: "1000",
    lengthAdjust: "spacing",
    style: {
      fontFamily: 'Ofelia Display',
      fontWeight: 300,
      fontSize: 140,
      fill: color
    }
  }, word));
}
function Section({
  children,
  pad = 'var(--space-12)',
  bg = 'var(--surface-page)',
  light = false,
  tone,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: tone ? 'gri-' + tone : light ? 'gri-hell' : undefined,
    style: {
      background: tone ? 'var(--surface-page)' : light ? '#fff' : bg,
      color: 'var(--text-primary)',
      padding: pad + ' var(--page-margin)',
      position: 'relative',
      ...style
    }
  }, children);
}
function Split({
  left,
  right,
  cols = '5fr 7fr',
  gap = 'var(--space-9)',
  align = 'start'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap,
      alignItems: align
    }
  }, left, right);
}
function Lead({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: '36ch',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Rise({
  children,
  delay = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gri-rise",
    style: {
      animationDelay: delay + 'ms'
    }
  }, children);
}
Object.assign(window, {
  DS,
  IMG,
  kitInfo,
  Signal,
  Section,
  Split,
  Lead,
  Rise
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Claim = __ds_scope.Claim;

__ds_ns.Connector = __ds_scope.Connector;

__ds_ns.ConnectorSplit = __ds_scope.ConnectorSplit;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pattern = __ds_scope.Pattern;

__ds_ns.Stage = __ds_scope.Stage;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.WORDMARK_D = __ds_scope.WORDMARK_D;

__ds_ns.CLAIM_D = __ds_scope.CLAIM_D;

__ds_ns.CLAIM_VIEWBOX = __ds_scope.CLAIM_VIEWBOX;

__ds_ns.ENDORSE_D = __ds_scope.ENDORSE_D;

__ds_ns.ENDORSE_VIEWBOX = __ds_scope.ENDORSE_VIEWBOX;

__ds_ns.MARK_COLORS = __ds_scope.MARK_COLORS;

__ds_ns.Comparison = __ds_scope.Comparison;

__ds_ns.FactTable = __ds_scope.FactTable;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.RuleList = __ds_scope.RuleList;

__ds_ns.StrikeList = __ds_scope.StrikeList;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ChoiceGroup = __ds_scope.ChoiceGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Closer = __ds_scope.Closer;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.InfoLine = __ds_scope.InfoLine;

__ds_ns.Notiz = __ds_scope.Notiz;

})();
