import{at as B,o as h,c as C,u as j,a as e,r as t,aq as s}from"../app.c209622b.js";var z={__name:"pro-table",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},index:{type:Boolean,default:!0},selection:{type:Boolean,default:!1},pagination:{type:[Boolean,Object],default:!0}},setup(i){const{data:c,columns:d,index:m,selection:b,pagination:f}=i;let y=B(),_=()=>d.map(r=>{let{label:o,prop:v,cellRenderer:n,cellSlot:u,buttons:p,...x}=r,k={default:l=>{if(n)return n(l);if(u)return y[u](l);if(p)return p.map(a=>e(t("el-button"),s({type:"primary",link:!0,onClick:()=>{a.click(l)}},a),{default:()=>[a.label]}))}};return e(t("el-table-column"),s({label:o,prop:v},x),k)}),g=()=>e("div",{class:"pro-table"},[e(t("el-table"),{data:c,border:!0,"table-layout":"auto"},{default:()=>[b&&e(t("el-table-column"),{type:"selection",width:50},null),m&&e(t("el-table-column"),{label:"\u5E8F\u53F7",type:"index",width:60},null),_()]}),f&&e(t("el-pagination"),{"page-sizes":[100,200,300,400],layout:"total, sizes, prev, pager, next, jumper",total:40},null)]);return(r,o)=>(h(),C(j(g)))}};export{z as _};
