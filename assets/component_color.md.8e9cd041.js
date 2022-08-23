import{g as F,M as w,r as g,o as s,c as N,w as i,a as d,e as o,d as l,i as x,u as a,F as b,q as _,k as t,b as n,N as T,D as M,O as S,P as V,Q as P}from"./app.5ad9d4dc.js";const E={class:"demo-color-box-group"},L={class:"value",text:"xs"},j={class:"demo-color-box-group"},q={class:"value",text:"xs"},z={class:"demo-color-box-group"},A={class:"value",text:"xs"},J={class:"demo-color-box-group"},Q=n(" Basic Black "),W=n(" Basic White "),Y=o("div",{class:"demo-color-box demo-color-box-other demo-color-box-lite bg-transparent"},[n(" Transparent "),o("div",{class:"value",text:"xs"},"Transparent")],-1),G={class:"value",text:"xs"},H=F({__name:"neutral-color",setup(U){const p=["page","","overlay"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Background`:"Base Background",var:w(T("bg-color",e))})),u=["darker","dark","","light","lighter","extra-light"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Border`:"Base Border",var:w(T("border-color",e))})),m=["darker","dark","","light","lighter","extra-light","blank"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Fill`:"Base Fill",var:w(T("fill-color",e))})),c=["primary","regular","secondary","placeholder","disabled"].map(e=>({name:`${e[0].toUpperCase()+e.slice(1)} Text`,var:w(T("text-color",e))})),C="#000000",k="#FFFFFF";return(e,O)=>{const B=g("el-col"),D=g("el-row");return s(),N(D,{gutter:12},{default:i(()=>[d(B,{span:6,xs:{span:12}},{default:i(()=>[o("div",E,[(s(!0),l(b,null,x(a(c),(r,v)=>(s(),l("div",{key:v,class:"demo-color-box demo-color-box-other",style:_({color:"var(--el-bg-color)",background:r.var.value})},[n(t(r.name)+" ",1),o("div",L,t(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),d(B,{span:6,xs:{span:12}},{default:i(()=>[o("div",j,[(s(!0),l(b,null,x(a(u),(r,v)=>(s(),l("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:_({background:r.var.value})},[n(t(r.name)+" ",1),o("div",q,t(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),d(B,{span:6,xs:{span:12}},{default:i(()=>[o("div",z,[(s(!0),l(b,null,x(a(m),(r,v)=>(s(),l("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:_({background:r.var.value,border:`1px solid ${r.name==="Blank Fill"?"var(--el-border-color-light)":"transparent"}`})},[n(t(r.name)+" ",1),o("div",A,t(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),d(B,{span:6,xs:{span:12}},{default:i(()=>[o("div",J,[o("div",{class:"demo-color-box demo-color-box-other",style:_({background:C})},[Q,o("div",{class:"value",text:"xs"},t(C))],4),o("div",{class:"demo-color-box demo-color-box-other",style:_({background:k,color:"#303133",border:"1px solid #eee"})},[W,o("div",{class:"value",text:"xs"},t(k))],4),Y,(s(!0),l(b,null,x(a(p),(r,v)=>(s(),l("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:_({background:r.var.value,border:"1px solid "+(!a(M)||r.name==="Base Background"?"var(--el-border-color-light)":"transparent")})},[n(t(r.name)+" ",1),o("div",G,t(r.var.value.toUpperCase()),1)],4))),128))])]),_:1})]),_:1})}}}),I={class:"value",text:"xs"},K={class:"bg-color-sub"},R=["onClick"],X=F({__name:"secondary-colors",setup(U){const h=["success","warning","danger","info"],p=[3,5,7,8,9].map(u=>`light-${u}`);p.unshift("dark-2");const{copyColor:f}=S();return(u,y)=>{const m=g("el-col"),$=g("el-row");return s(),N($,{gutter:12},{default:i(()=>[(s(),l(b,null,x(h,(c,C)=>d(m,{key:C,span:6,xs:{span:12}},{default:i(()=>[o("div",{class:"demo-color-box",style:_({background:a(V)(c)})},[n(t(c.charAt(0).toUpperCase()+c.slice(1))+" ",1),o("div",I,t(a(V)(c).toUpperCase()),1),o("div",K,[(s(!0),l(b,null,x(a(p),(k,e)=>(s(),l("div",{key:e,class:"bg-secondary-sub-item transition cursor-pointer hover:shadow",style:_({width:`${100/6}%`,background:`var(--el-color-${c}-`+k+")"}),onClick:O=>a(f)(c+"-"+k)},null,12,R))),128))])],4)]),_:2},1024)),64))]),_:1})}}}),Z=n(" Brand Color "),oo={class:"value",text:"xs"},eo=["onClick"],ro=F({__name:"main-color",setup(U){const h=P("--el-color-primary"),p=[3,5,7,8,9].map(u=>`light-${u}`);p.unshift("dark-2");const{copyColor:f}=S();return(u,y)=>{const m=g("el-col"),$=g("el-row");return s(),N($,{gutter:12},{default:i(()=>[d(m,{span:10,xs:{span:12}},{default:i(()=>[o("div",{class:"demo-color-box",style:_({background:a(h)})},[Z,o("div",oo,t(a(h).toUpperCase()),1),o("div",{class:"bg-color-sub",style:_({background:a(h)})},[(s(!0),l(b,null,x(a(p),c=>(s(),l("div",{key:c,class:"bg-blue-sub-item cursor-pointer hover:shadow",style:_({width:`${100/6}%`,background:"var(--el-color-primary-"+c+")"}),onClick:C=>a(f)("primary-"+c)},null,12,eo))),128))],4)],4)]),_:1})]),_:1})}}});const so=o("h1",{id:"color",tabindex:"-1"},[n("Color "),o("a",{class:"header-anchor",href:"#color","aria-hidden":"true"},"#")],-1),lo=o("p",null,"Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.",-1),ao=o("h2",{id:"main-color",tabindex:"-1"},[n("Main Color "),o("a",{class:"header-anchor",href:"#main-color","aria-hidden":"true"},"#")],-1),to=o("p",null,"The main color of Element Plus is bright and friendly blue.",-1),no=o("h2",{id:"secondary-color",tabindex:"-1"},[n("Secondary Color "),o("a",{class:"header-anchor",href:"#secondary-color","aria-hidden":"true"},"#")],-1),co=o("p",null,"Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)",-1),io=o("h2",{id:"neutral-color",tabindex:"-1"},[n("Neutral Color "),o("a",{class:"header-anchor",href:"#neutral-color","aria-hidden":"true"},"#")],-1),uo=o("p",null,"Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.",-1),ho=JSON.parse('{"title":"Color","description":"","frontmatter":{"title":"Color","lang":"en-US"},"headers":[{"level":2,"title":"Main Color","slug":"main-color"},{"level":2,"title":"Secondary Color","slug":"secondary-color"},{"level":2,"title":"Neutral Color","slug":"neutral-color"}],"relativePath":"component/color.md"}'),_o={name:"component/color.md"},mo=Object.assign(_o,{setup(U){return(h,p)=>{const f=ro,u=g("ClientOnly"),y=X,m=H;return s(),l("div",null,[so,lo,ao,to,d(u,null,{default:i(()=>[d(f)]),_:1}),no,co,d(u,null,{default:i(()=>[d(y)]),_:1}),io,uo,d(u,null,{default:i(()=>[d(m)]),_:1})])}}});export{ho as __pageData,mo as default};