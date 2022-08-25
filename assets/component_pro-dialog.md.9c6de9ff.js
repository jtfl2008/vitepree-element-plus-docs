import{W as w,r as E,o as s,c as g,w as e,d as c,i as _,u as a,F as i,a as D,ap as x,aq as T,b as m,k as v,K as y,g as S,n as q,ar as V,e as r}from"./app.c209622b.js";const f={__name:"pro-dialog",props:{showCancelButton:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},cancelButtonText:{type:String,default:"\u5173\u95ED"},submitButtonText:{type:String,default:"\u63D0\u4EA4"}},emits:["on-submit","on-cancel"],setup(F,{emit:n}){const{showCancelButton:C,showSubmitButton:u,cancelButtonText:p,submitButtonText:k}=F;let B=w(()=>[{label:k,type:"success",click:"on-submit",visible:u},{label:p,type:"",click:"on-cancel",visible:C}]),A=t=>{n(t.onClick,t)};return(t,b)=>{const o=E("el-scrollbar"),d=E("el-button"),h=E("el-dialog");return s(),g(h,T(t.$attrs,{width:"60%"}),{footer:e(()=>[(s(!0),c(i,null,_(a(B),l=>(s(),c(i,null,[l.visible?(s(),g(d,{key:l.click,type:l.type,onClick:J=>a(A)(l)},{default:e(()=>[m(v(l.label),1)]),_:2},1032,["type","onClick"])):y("",!0)],64))),256))]),default:e(()=>[D(o,{"max-height":400},{default:e(()=>[x(t.$slots,"default")]),_:3})]),_:3},16)}}};var P=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));const j=m(" \u6253\u5F00 "),N=S({__name:"basic",setup(F){let n=q(!1),C=!0,u=!0,p="\u786E\u8BA4",k="\u53D6\u6D88",B=()=>{n.value=!0};return(A,t)=>{const b=E("el-button");return s(),c(i,null,[D(b,{onClick:a(B)},{default:e(()=>[j]),_:1},8,["onClick"]),D(f,{modelValue:a(n),"onUpdate:modelValue":t[0]||(t[0]=o=>V(n)?n.value=o:n=o),title:"\u6D4B\u8BD5\u6807\u9898",showCancelButton:a(C),showSubmitButton:a(u),cancelButtonText:a(p),submitButtonText:a(k)},{default:e(()=>[(s(),c(i,null,_(500,(o,d)=>r("p",{key:d},v(o),1)),64))]),_:1},8,["modelValue","showCancelButton","showSubmitButton","cancelButtonText","submitButtonText"])],64)}}});var O=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const $=r("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[m("\u57FA\u672C\u4F7F\u7528 "),r("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1),z=r("p",null,"pro-dialog/basic",-1),L=JSON.parse('{"title":"\u5F39\u7A97\u5C01\u88C5","description":"","frontmatter":{"title":"\u5F39\u7A97\u5C01\u88C5","lang":"zh-CN"},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"}],"relativePath":"component/pro-dialog.md"}'),M={name:"component/pro-dialog.md"},R=Object.assign(M,{setup(F){const n={"../examples/pro-dialog/basic.vue":O,"../examples/pro-dialog/pro-dialog.vue":P};return(C,u)=>{const p=E("VPDemo");return s(),c("div",null,[$,D(p,{demos:a(n),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonDialog%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%E6%89%93%E5%BC%80%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Epro-dialog%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%B5%8B%E8%AF%95%E6%A0%87%E9%A2%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AshowCancelButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EshowCancelButton%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AshowSubmitButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EshowSubmitButton%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AcancelButtonText%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcancelButtonText%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AsubmitButtonText%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EsubmitButtonText%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(item%2C%20index)%20in%20500%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eindex%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Epro-dialog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20ProDialog%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2Fpro-dialog.vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20visible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20showCancelButton%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20showSubmitButton%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20cancelButtonText%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E7%A1%AE%E8%AE%A4'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20submitButtonText%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%8F%96%E6%B6%88'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonDialog%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20visible%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"pro-dialog/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-button%20%40click%3D%22onDialog%22%3E%20%E6%89%93%E5%BC%80%20%3C%2Fel-button%3E%0A%20%20%3Cpro-dialog%0A%20%20%20%20v-model%3D%22visible%22%0A%20%20%20%20title%3D%22%E6%B5%8B%E8%AF%95%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%3AshowCancelButton%3D%22showCancelButton%22%0A%20%20%20%20%3AshowSubmitButton%3D%22showSubmitButton%22%0A%20%20%20%20%3AcancelButtonText%3D%22cancelButtonText%22%0A%20%20%20%20%3AsubmitButtonText%3D%22submitButtonText%22%0A%20%20%3E%0A%20%20%20%20%3Cp%20v-for%3D%22(item%2C%20index)%20in%20500%22%20%3Akey%3D%22index%22%3E%0A%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fpro-dialog%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20ProDialog%20from%20'.%2Fpro-dialog.vue'%3B%0Alet%20visible%20%3D%20ref(false)%3B%0Alet%20showCancelButton%20%3D%20true%3B%0Alet%20showSubmitButton%20%3D%20true%3B%0Alet%20cancelButtonText%20%3D%20'%E7%A1%AE%E8%AE%A4'%3B%0Alet%20submitButtonText%20%3D%20'%E5%8F%96%E6%B6%88'%3B%0Alet%20onDialog%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E5%8F%AF%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%3Ccode%3EshowCancelButton%3C%2Fcode%3E%2C%3Ccode%3EshowSubmitButton%3C%2Fcode%3E%2C%3Ccode%3EcancelButtonText%3C%2Fcode%3E%2C%3Ccode%3EsubmitButtonText%3C%2Fcode%3E%2C%20%E4%BA%8B%E4%BB%B6%E6%B4%BE%E5%8F%91%20%3Ccode%3Eon-submit%3C%2Fcode%3E%2C%3Ccode%3Eon-cancel%3C%2Fcode%3E%2C%3C%2Fp%3E%0A"},{default:e(()=>[z]),_:1},8,["demos"])])}}});export{L as __pageData,R as default};