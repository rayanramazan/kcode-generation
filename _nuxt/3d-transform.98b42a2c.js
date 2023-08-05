import{_ as m}from"./CodeEditor.vue.ed3c233d.js";import{_ as u}from"./Footer.e36f3b85.js";import{e as p,i as _,o,l as d,s,t as a,q as x,u as t,F as $,v as f,x as n,y as h,z as g}from"./entry.1e3ce3f0.js";import"./Icon.69cd4899.js";import"./_plugin-vue_export-helper.a1a6add7.js";const b={class:"w-full mt-26 lg:mx-0 p-4"},k={class:"mt-8 text-xl md:text-2xl text-white font-bold"},w={class:"box"},X={class:"cube-wrap"},Y={class:"front"},Z={class:"back"},y={class:"top"},B={class:"bottom"},S={class:"left"},F={class:"right"},V={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-30 mb-10"},z={class:"text-white"},C=["min","max","step","onUpdate:modelValue"],D=s("br",null,null,-1),R=p({__name:"3d-transform",setup(E){const e=_([{id:1,title:"ScaleX",value:1,min:-3,max:3,steps:.1},{id:2,title:"ScaleY",value:1,min:-3,max:3,steps:.1},{id:3,title:"ScaleZ",value:1,min:-3,max:3,steps:.1},{id:4,title:"rotateX",value:44,min:-365,max:365,steps:1},{id:5,title:"rotateY",value:-40,min:-365,max:365,steps:1},{id:6,title:"rotateZ",value:0,min:-365,max:365,steps:1},{id:7,title:"translateX",value:0,min:-100,max:100,steps:1},{id:8,title:"translateY",value:0,min:-100,max:100,steps:1},{id:9,title:"translateZ",value:0,min:-100,max:100,steps:1},{id:10,title:"skewX",value:0,min:-180,max:180,steps:1},{id:11,title:"skewY",value:0,min:-180,max:180,steps:1},{id:12,title:"skewZ",value:0,min:-180,max:180,steps:1}]);return(l,L)=>{const c=m,v=u;return o(),d("div",b,[s("span",k,a(l.$t("3d-transform")),1),s("div",w,[s("div",X,[s("div",{style:x(`transform: scaleX(${t(e)[0].value}) scaleY(${t(e)[1].value}) scaleZ(${t(e)[2].value}) rotateX(${t(e)[3].value}deg) rotateY(${t(e)[4].value}deg) rotateZ(${t(e)[5].value}deg) translateX(${t(e)[6].value}px) translateY(${t(e)[7].value}px) translateZ(${t(e)[8].value}px) skewX(${t(e)[9].value}deg) skewY(${t(e)[10].value}deg);`),class:"cube"},[s("div",Y,a(l.$t("front")),1),s("div",Z,a(l.$t("back")),1),s("div",y,a(l.$t("top")),1),s("div",B,a(l.$t("bottom")),1),s("div",S,a(l.$t("left")),1),s("div",F,a(l.$t("right")),1)],4)])]),s("div",V,[(o(!0),d($,null,f(t(e),i=>(o(),d("div",{key:i.id,class:"flex flex-col gap-2"},[s("span",z,a(i.title),1),h(s("input",{class:"rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full",type:"range",min:i.min,max:i.max,step:i.steps,"onUpdate:modelValue":r=>i.value=r},null,8,C),[[g,i.value]])]))),128))]),n(c,{code:`<div class='box'>
   <div class='cube-wrap'>
     <div class='cube'>
          <div class='front'>
              Front
          </div>
          <div class='back'>
              Back
          </div>
          <div class='top'>
              Top
          </div>
          <div class='bottom'>
              Bottom
          </div>
          <div class='left'>
              Left
          </div>
          <div class='right'>
              Right
          </div>
      </div>
   </div>
</div>`}),D,n(c,{code:`.cube {
   transform: scaleX(${t(e)[0].value})
   scaleY(${t(e)[1].value})
   scaleZ(${t(e)[2].value})
   rotateX(${t(e)[3].value}deg)
   rotateY(${t(e)[4].value}deg)
   rotateZ(${t(e)[5].value}deg)
   translateX(${t(e)[6].value}px)
   translateY(${t(e)[7].value}px)
   translateZ(${t(e)[8].value}px)
   skewX(${t(e)[9].value}deg)
   skewY(${t(e)[10].value}deg);
}`},null,8,["code"]),n(v)])}}});export{R as default};
