import{a as b,S as L,i as p}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function g(e,r){return(await b.get(`${e}${r}`)).data}const v=document.querySelector(".gallery");function S(e){let r="";e.forEach(o=>{r+=`
            <li class="gallery_item">
                <a class="gallery_link" href="${o.largeImageURL}" title="${o.tags}">
                    <img
                        class="gallery-image"
                        src="${o.webformatURL}"
                        alt="${o.tags}"
                    />
                </a>
                <ul class="gallery_info">
                    <li><span class="bold_text">Likes</span><p class="text">${o.likes}</p></li>
                    <li><span class="bold_text">Views</span><p class="text">${o.views}</p></li>
                    <li><span class="bold_text">Comments</span><p class="text">${o.comments}</p></li>
                    <li><span class="bold_text">Downloads</span><p class="text">${o.downloads}</p></li>
                </ul>
            </li>
        `}),v.insertAdjacentHTML("beforeend",r),new L(".gallery a",{nav:!0,overlay:!0,captions:!0,captionSelector:"self",captionType:"attr",captionData:"title",captionPosition:"bottom",captionDelay:250}).refresh()}const x=document.querySelector("form"),y=document.querySelector(".search_bar"),f=document.querySelector(".loader"),l=document.querySelector(".load"),E=document.querySelector(".gallery"),m="https://pixabay.com/api/?",n=new URLSearchParams({key:"46749030-b6cef6a6b69e043ecf4444c1b",image_type:"photo",orientation:"horizontal",per_page:12}),_="Sorry, there are no images matching your search query. Please try again!",$="We're sorry, but you've reached the end of search results.",w=e=>document.dispatchEvent(new CustomEvent("imagesFetched",{detail:e}));let i;x.addEventListener("submit",e=>{e.preventDefault();let r=y.value.trim();r&&(i=1,E.innerHTML="",n.set("page",i),n.set("q",r),f.style.display="block",g(m,n).then(s=>{l.style.display="block",h(s),d()}).catch(s=>{u(s),d()}))});l.addEventListener("click",()=>{n.set("page",++i),g(m,n).then(e=>{h(e)}).catch(e=>{u(e),d()})});document.addEventListener("imagesFetched",e=>{S(e.detail)});function h(e){e.total?(w(e.hits),parseInt(n.get("per_page"))*parseInt(n.get("page"))>e.total&&(l.style.display="none",q($)),console.log(e)):(l.style.display="none",console.log(e),u(_))}function u(e){p.error({message:e,position:"topRight",color:"red",theme:"dark"})}function q(e){p.error({message:e,position:"topRight",color:"blue",theme:"dark"})}function d(){f.style.display="none",y.value=""}
//# sourceMappingURL=index.js.map
