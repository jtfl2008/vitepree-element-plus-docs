import{_ as u,r as e,o as l,c as r,w as n,a as s,b as a,d,u as C,e as t,f}from"./app.c09757fe.js";const F={},D=a("Offset top 120px");function k(i,o){const p=e("el-button"),c=e("el-affix");return l(),r(c,{offset:120},{default:n(()=>[s(p,{type:"primary"},{default:n(()=>[D]),_:1})]),_:1})}var _=u(F,[["render",k]]),h=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));const x={},g=a("Offset bottom 20px");function b(i,o){const p=e("el-button"),c=e("el-affix");return l(),r(c,{position:"bottom",offset:20},{default:n(()=>[s(p,{type:"primary"},{default:n(()=>[g]),_:1})]),_:1})}var m=u(x,[["render",b]]),A=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));const v={},y={class:"affix-container"},B=a("Target container");function T(i,o){const p=e("el-button"),c=e("el-affix");return l(),d("div",y,[s(c,{target:".affix-container",offset:80},{default:n(()=>[s(p,{type:"primary"},{default:n(()=>[B]),_:1})]),_:1})])}var S=u(v,[["render",T],["__scopeId","data-v-0fce8c0c"]]),O=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const P=t("h1",{id:"affix",tabindex:"-1"},[a("Affix "),t("a",{class:"header-anchor",href:"#affix","aria-hidden":"true"},"#")],-1),N=t("p",null,"Fix the element to a specific visible area.",-1),q=t("h2",{id:"basic-usage",tabindex:"-1"},[a("Basic Usage "),t("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#")],-1),w=t("p",null,"Affix is fixed at the top of the page by default.",-1),$=t("p",null,"affix/basic",-1),V=t("h2",{id:"target-container",tabindex:"-1"},[a("Target Container "),t("a",{class:"header-anchor",href:"#target-container","aria-hidden":"true"},"#")],-1),j=t("p",null,[a("You can set "),t("code",null,"target"),a(" attribute to keep the affix in the container at all times. It will be hidden if out of range.")],-1),z=t("p",null,"affix/target",-1),I=t("h2",{id:"fixed-position",tabindex:"-1"},[a("Fixed Position "),t("a",{class:"header-anchor",href:"#fixed-position","aria-hidden":"true"},"#")],-1),M=t("p",null,[a("The affix component provides two fixed positions: "),t("code",null,"top"),a(" and "),t("code",null,"bottom"),a(".")],-1),U=t("p",null,"affix/fixed",-1),Y=f('<h2 id="affix-api" tabindex="-1">Affix API <a class="header-anchor" href="#affix-api" aria-hidden="true">#</a></h2><h3 id="affix-attributes" tabindex="-1">Affix Attributes <a class="header-anchor" href="#affix-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th><th>Required</th></tr></thead><tbody><tr><td><code>offset</code></td><td>offset distance.</td><td><code>number</code></td><td><code>0</code></td><td>No</td></tr><tr><td><code>position</code></td><td>position of affix.</td><td><code>&#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>No</td></tr><tr><td><code>target</code></td><td>target container. (CSS selector)</td><td><code>string</code></td><td>\u2014</td><td>No</td></tr><tr><td><code>z-index</code></td><td><code>z-index</code> of affix</td><td><code>number</code></td><td><code>100</code></td><td>No</td></tr></tbody></table><h3 id="affix-events" tabindex="-1">Affix Events <a class="header-anchor" href="#affix-events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>change</code></td><td>triggers when fixed state changed.</td><td><code>(fixed: boolean) =&gt; void</code></td></tr><tr><td><code>scroll</code></td><td>triggers when scrolling.</td><td><code>(value: { scrollTop: number, fixed: boolean }) =&gt; void</code></td></tr></tbody></table><h3 id="affix-exposes" tabindex="-1">Affix Exposes <a class="header-anchor" href="#affix-exposes" aria-hidden="true">#</a></h3><table><thead><tr><th>Method</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>update</code></td><td>update affix state manually</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="affix-slots" tabindex="-1">Affix Slots <a class="header-anchor" href="#affix-slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>customize default content.</td></tr></tbody></table>',9),H='{"title":"Affix","description":"","frontmatter":{"title":"Affix","lang":"en-US"},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage"},{"level":2,"title":"Target Container","slug":"target-container"},{"level":2,"title":"Fixed Position","slug":"fixed-position"},{"level":2,"title":"Affix API","slug":"affix-api"},{"level":3,"title":"Affix Attributes","slug":"affix-attributes"},{"level":3,"title":"Affix Events","slug":"affix-events"},{"level":3,"title":"Affix Exposes","slug":"affix-exposes"},{"level":3,"title":"Affix Slots","slug":"affix-slots"}],"relativePath":"component/affix.md"}',R={name:"component/affix.md"},J=Object.assign(R,{setup(i){const o={"../examples/affix/basic.vue":h,"../examples/affix/fixed.vue":A,"../examples/affix/target.vue":O};return(p,c)=>{const E=e("VPDemo");return l(),d("div",null,[P,N,q,w,s(E,{demos:C(o),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E120%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOffset%20top%20120px%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-affix%20%3Aoffset%3D%22120%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20top%20120px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3EYou%20can%20set%20%3Ccode%3Eoffset%3C%2Fcode%3E%20attribute%20to%20change%20the%20offset%20top%EF%BC%8Cthe%20default%20value%20is%200%E3%80%82%3C%2Fp%3E%0A"},{default:n(()=>[$]),_:1},8,["demos"]),V,j,s(E,{demos:C(o),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaffix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etarget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E.affix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E80%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ETarget%20container%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.affix-container%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Etext-align%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20400px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eborder-radius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%204px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ebackground%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--el-color-primary-light-9%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/target","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22affix-container%22%3E%0A%20%20%20%20%3Cel-affix%20target%3D%22.affix-container%22%20%3Aoffset%3D%2280%22%3E%0A%20%20%20%20%20%20%3Cel-button%20type%3D%22primary%22%3ETarget%20container%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-affix%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%3E%0A.affix-container%20%7B%0A%20%20text-align%3A%20center%3B%0A%20%20height%3A%20400px%3B%0A%20%20border-radius%3A%204px%3B%0A%20%20background%3A%20var(--el-color-primary-light-9)%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3EPlease%20notice%20that%20the%20container%20avoid%20having%20scrollbar.%3C%2Fp%3E%0A"},{default:n(()=>[z]),_:1},8,["demos"]),I,M,s(E,{demos:C(o),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebottom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOffset%20bottom%2020px%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/fixed","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-affix%20position%3D%22bottom%22%20%3Aoffset%3D%2220%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20bottom%2020px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3EYou%20can%20set%20%3Ccode%3Eposition%3C%2Fcode%3E%20attribute%20to%20change%20the%20fixed%20position%2C%20the%20default%20value%20is%20%3Ccode%3Etop%3C%2Fcode%3E.%3C%2Fp%3E%0A"},{default:n(()=>[U]),_:1},8,["demos"]),Y])}}});export{H as __pageData,J as default};
