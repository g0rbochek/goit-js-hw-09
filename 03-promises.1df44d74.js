function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");function i(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}const u=document.querySelector(".form");let a,d,f;console.log(u),u.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const{delay:n,step:r,amount:o}=t.currentTarget.elements;a=Number(n.value),d=Number(r.value),f=Number(o.value);for(let t=1;t<=f;t+=1)i(t,a+d*(t-1)).then((t=>e(l).Notify.success(t))).catch((t=>e(l).Notify.failure(t)))}));
//# sourceMappingURL=03-promises.1df44d74.js.map
