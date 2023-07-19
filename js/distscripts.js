let pokemonRepository=function(){let t=[];function e(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}function n(){return t}function o(e){t.push(e)}function i(t){e(t).then(function(){let e=document.querySelector(".modal-body");document.querySelector(".modal-header").innerHTML=`<h1>${t.name}</h1>`,e.innerHTML=`
        <img src="${t.imageUrl}" alt="${t.name}">
        <p>Height: ${t.height}</p>
        <p>Type(s): ${t.types.map(t=>t.type.name).join(", ")}</p>
      `})}return{add:o,getAll:n,addListItem:function t(e){let n=document.querySelector(".list-group"),o=document.createElement("li"),r=document.createElement("button");r.innerText=e.name,r.classList.add("btn","btn-primary"),r.setAttribute("data-toggle","modal"),r.setAttribute("data-target","#myModal"),r.addEventListener("click",function(){i(e)}),o.appendChild(r),o.classList.add("list-group-item"),n.appendChild(o)},loadList:function t(){return fetch("js/pokemonjson.json").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){o({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:e,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})}),pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)});