import s from"./ContentSlot.5f425b3f.js";import{a,o,i as r,k as _,m as c,j as l,x as p}from"./entry.a5971c34.js";const d={class:"alert-content"},i=a({__name:"Alert",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(t,u)=>{const n=s;return o(),r("div",{class:l(["alert",[e.type]])},[_("div",d,[c(n,{use:t.$slots.default,unwrap:"p"},null,8,["use"])])],2)}}});const v=p(i,[["__scopeId","data-v-96372d72"]]);export{v as default};