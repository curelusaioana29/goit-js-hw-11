var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=e.parcelRequirea610;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequirea610=o),o.register("2POL7",(function(e,r){var t,o,n,a;t=e.exports,o="fetchImages",n=function(){return i},Object.defineProperty(t,o,{get:n,set:a,enumerable:!0,configurable:!0});const i=async(e,r=1)=>{const t=`https://pixabay.com/api/?key=40900428-54443f612c799a2d78c562301&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=40`;try{return(await axios.get(t)).data}catch(e){throw console.error("Error fetching images:",e),e}}})),o("2POL7");
//# sourceMappingURL=index.9d75b7ff.js.map
