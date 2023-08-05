import{_ as V}from"./CodeEditor.vue.ed3c233d.js";import{O as z,o as g,H as j,T as ue,t as ae,b as de,N as te,u as N,a as T,d as H,m as ce,P as O,e as $}from"./focus-management.76cced0a.js";import{a as pe,f as se}from"./hidden.8bd67812.js";import{e as k,i as I,h as D,j as y,L as ne,C as G,w as fe,N as me,F as re,M as ie,B as K,k as J,o as R,l as U,s as b,t as A,x as n,G as c,u as a,m as v}from"./entry.1e3ce3f0.js";import{_ as be}from"./Footer.e36f3b85.js";import"./Icon.69cd4899.js";import"./_plugin-vue_export-helper.a1a6add7.js";function ve(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(l=>setTimeout(()=>{throw l}))}let xe=k({props:{onFocus:{type:Function,required:!0}},setup(e){let l=I(!0);return()=>l.value?D(se,{as:"button",type:"button",features:pe.Focusable,onFocus(p){p.preventDefault();let d,s=50;function i(){var o;if(s--<=0){d&&cancelAnimationFrame(d);return}if((o=e.onFocus)!=null&&o.call(e)){l.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(i)}d=requestAnimationFrame(i)}}):null}});var ge=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ge||{}),he=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(he||{});let le=Symbol("TabsContext");function B(e){let l=K(le,null);if(l===null){let p=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,B),p}return l}let Q=Symbol("TabsSSRContext"),X=k({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:l,attrs:p,emit:d}){var s;let i=I((s=e.selectedIndex)!=null?s:e.defaultIndex),o=I([]),f=I([]),x=y(()=>e.selectedIndex!==null),_=y(()=>x.value?e.selectedIndex:i.value);function h(r){var t;let u=z(m.tabs.value,g),w=z(m.panels.value,g),L=u.filter(q=>{var F;return!((F=g(q))!=null&&F.hasAttribute("disabled"))});if(r<0||r>u.length-1){let q=N(i.value===null?0:Math.sign(r-i.value),{[-1]:()=>1,[0]:()=>N(Math.sign(r),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});i.value=N(q,{[0]:()=>u.indexOf(L[0]),[1]:()=>u.indexOf(L[L.length-1])}),m.tabs.value=u,m.panels.value=w}else{let q=u.slice(0,r),F=[...u.slice(r),...q].find(oe=>L.includes(oe));if(!F)return;let W=(t=u.indexOf(F))!=null?t:m.selectedIndex.value;W===-1&&(W=m.selectedIndex.value),i.value=W,m.tabs.value=u,m.panels.value=w}}let m={selectedIndex:y(()=>{var r,t;return(t=(r=i.value)!=null?r:e.defaultIndex)!=null?t:null}),orientation:y(()=>e.vertical?"vertical":"horizontal"),activation:y(()=>e.manual?"manual":"auto"),tabs:o,panels:f,setSelectedIndex(r){_.value!==r&&d("change",r),x.value||h(r)},registerTab(r){var t;if(o.value.includes(r))return;let u=o.value[i.value];o.value.push(r),o.value=z(o.value,g);let w=(t=o.value.indexOf(u))!=null?t:i.value;w!==-1&&(i.value=w)},unregisterTab(r){let t=o.value.indexOf(r);t!==-1&&o.value.splice(t,1)},registerPanel(r){f.value.includes(r)||(f.value.push(r),f.value=z(f.value,g))},unregisterPanel(r){let t=f.value.indexOf(r);t!==-1&&f.value.splice(t,1)}};ne(le,m);let E=I({tabs:[],panels:[]}),M=I(!1);G(()=>{M.value=!0}),ne(Q,y(()=>M.value?null:E.value));let C=y(()=>e.selectedIndex);return G(()=>{fe([C],()=>{var r;return h((r=e.selectedIndex)!=null?r:e.defaultIndex)},{immediate:!0})}),me(()=>{if(!x.value||_.value==null||m.tabs.value.length<=0)return;let r=z(m.tabs.value,g);r.some((t,u)=>g(m.tabs.value[u])!==g(t))&&m.setSelectedIndex(r.findIndex(t=>g(t)===g(m.tabs.value[_.value])))}),()=>{let r={selectedIndex:i.value};return D(re,[o.value.length<=0&&D(xe,{onFocus:()=>{for(let t of o.value){let u=g(t);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return!1}}),j({theirProps:{...p,...ue(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:r,slots:l,attrs:p,name:"TabGroup"})])}}}),Y=k({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:l,slots:p}){let d=B("TabList");return()=>{let s={selectedIndex:d.selectedIndex.value},i={role:"tablist","aria-orientation":d.orientation.value};return j({ourProps:i,theirProps:e,slot:s,attrs:l,slots:p,name:"TabList"})}}}),S=k({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${ae()}`}},setup(e,{attrs:l,slots:p,expose:d}){let s=B("Tab"),i=I(null);d({el:i,$el:i}),G(()=>s.registerTab(i)),ie(()=>s.unregisterTab(i));let o=K(Q),f=y(()=>{if(o.value){let t=o.value.tabs.indexOf(e.id);return t===-1?o.value.tabs.push(e.id)-1:t}return-1}),x=y(()=>{let t=s.tabs.value.indexOf(i);return t===-1?f.value:t}),_=y(()=>x.value===s.selectedIndex.value);function h(t){var u;let w=t();if(w===H.Success&&s.activation.value==="auto"){let L=(u=ce(i))==null?void 0:u.activeElement,q=s.tabs.value.findIndex(F=>g(F)===L);q!==-1&&s.setSelectedIndex(q)}return w}function m(t){let u=s.tabs.value.map(w=>g(w)).filter(Boolean);if(t.key===T.Space||t.key===T.Enter){t.preventDefault(),t.stopPropagation(),s.setSelectedIndex(x.value);return}switch(t.key){case T.Home:case T.PageUp:return t.preventDefault(),t.stopPropagation(),h(()=>O(u,$.First));case T.End:case T.PageDown:return t.preventDefault(),t.stopPropagation(),h(()=>O(u,$.Last))}if(h(()=>N(s.orientation.value,{vertical(){return t.key===T.ArrowUp?O(u,$.Previous|$.WrapAround):t.key===T.ArrowDown?O(u,$.Next|$.WrapAround):H.Error},horizontal(){return t.key===T.ArrowLeft?O(u,$.Previous|$.WrapAround):t.key===T.ArrowRight?O(u,$.Next|$.WrapAround):H.Error}}))===H.Success)return t.preventDefault()}let E=I(!1);function M(){var t;E.value||(E.value=!0,!e.disabled&&((t=g(i))==null||t.focus(),s.setSelectedIndex(x.value),ve(()=>{E.value=!1})))}function C(t){t.preventDefault()}let r=de(y(()=>({as:e.as,type:l.type})),i);return()=>{var t;let u={selected:_.value},{id:w,...L}=e,q={ref:i,onKeydown:m,onMousedown:C,onClick:M,id:w,role:"tab",type:r.value,"aria-controls":(t=g(s.panels.value[x.value]))==null?void 0:t.id,"aria-selected":_.value,tabIndex:_.value?0:-1,disabled:e.disabled?!0:void 0};return j({ourProps:q,theirProps:L,slot:u,attrs:l,slots:p,name:"Tab"})}}}),Z=k({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:p}){let d=B("TabPanels");return()=>{let s={selectedIndex:d.selectedIndex.value};return j({theirProps:e,ourProps:{},slot:s,attrs:p,slots:l,name:"TabPanels"})}}}),P=k({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${ae()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:l,slots:p,expose:d}){let s=B("TabPanel"),i=I(null);d({el:i,$el:i}),G(()=>s.registerPanel(i)),ie(()=>s.unregisterPanel(i));let o=K(Q),f=y(()=>{if(o.value){let h=o.value.panels.indexOf(e.id);return h===-1?o.value.panels.push(e.id)-1:h}return-1}),x=y(()=>{let h=s.panels.value.indexOf(i);return h===-1?f.value:h}),_=y(()=>x.value===s.selectedIndex.value);return()=>{var h;let m={selected:_.value},{id:E,tabIndex:M,...C}=e,r={ref:i,id:E,role:"tabpanel","aria-labelledby":(h=g(s.tabs.value[x.value]))==null?void 0:h.id,tabIndex:_.value?M:-1};return!_.value&&e.unmount&&!e.static?D(se,{as:"span",...r}):j({ourProps:r,theirProps:C,slot:m,attrs:l,slots:p,features:te.Static|te.RenderStrategy,visible:_.value,name:"TabPanel"})}}});const ye={html_code:`<div class='wrapper'>
  <div class='squares td-instant bg-primary' tabindex='0'>
    instant
    <p class='duration'>
      0ms
    </p>  
</div>  
<div class='squares td-speedy bg-primary' tabindex='0'>
    speedy   <p class='duration'>
      200ms
    </p>
  </div>
  <div class='squares td-middling bg-primary' tabindex='0'>
    middling
    <p class='duration'>
      800ms
    </p>
  </div>
  <div class='squares td-glacial bg-primary' tabindex='0'>
    glacial
    <p class='duration'>
      5000ms
    </p>
  </div>
</div>`,css_code:`.squares {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: springgreen;
  transition-property: transform;
  transition-timing-function: ease;
  padding: 8px;
}
.squares.td-instant {
  transition-duration: 0s;
}
.squares.td-speedy {
  transition-duration: 200ms;
}
.squares.td-middling {
  transition-duration: 800ms;
}
.squares.td-glacial {
  transition-duration: 5s;
}
.squares:is(:hover, :focus) {
  transform: scale(0.8);
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
}
.wrapper .squares:nth-child(odd) {
  justify-self: end;
}
.wrapper .squares:nth-child(even) {
  justify-self: start;
}`},_e={html_code:`<div class='square ttf-linear bg-primary' tabindex='0'>linear</div>
 <div class='square ttf-ease bg-primary' tabindex='0'>ease</div>
 <div class='square ttf-ease-in bg-primary' tabindex='0'>ease-in</div>
 <div class='square ttf-ease-out bg-primary' tabindex='0'>ease-out</div>
 <div class='square ttf-ease-in-out bg-primary' tabindex='0'>ease-in-out</div>
 <div class='square ttf-steps bg-primary' tabindex='0'>steps</div>
 <div class='square ttf-cubic bg-primary' tabindex='0'>cubic</div>
`,css_code:`.square {
   width: 150px;
   max-height: 100px;
   background-color: lightcoral;
   border-radius: 8px;
   text-align: center;
   padding: 8px;
   margin-bottom: 4px;
   transition-property: width;
   transition-duration: 1s;
}

.square.ttf-linear {
   transition-timing-function: linear;
}

.square.ttf-ease {
   transition-timing-function: ease;
}

.square.ttf-ease-in {
   transition-timing-function: ease-in;
}
.square.ttf-ease-out {
   transition-timing-function: ease-out;
}

.square.ttf-ease-in-out {
   transition-timing-function: ease-in-out;
}

.square.ttf-steps {
   transition-timing-function: steps(3);
}

.square.ttf-cubic {
   transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.square:is(:hover, :focus) {
   width: 50%;
}
`},we={html_code:`<div class='rectangle bg-primary' tabindex='0'>no delay</div>
 <div class='rectangle bg-primary' tabindex='0'>100ms delay</div>
<div class='rectangle bg-primary' tabindex='0'>200ms delay</div>
<div class='rectangle bg-primary' tabindex='0'>500ms delay</div>
<div class='rectangle bg-primary' tabindex='0'>1000ms delay</div>
`,css_code:`.rectangle {
    width: 150px;
    max-height: 100px;
    border-radius: 8px;
    text-align: right;
    padding: 8px;
    margin-bottom: 4px;
 }

.rectangle:nth-child(1) {
    transition-delay: 0s;
 }

 .rectangle:nth-child(2) {
    transition-delay: 100ms;
 }

 .rectangle:nth-child(3) {
    transition-delay: 200ms;
 }

 .rectangle:nth-child(4) {
    transition-delay: 500ms;
 }

 .rectangle:nth-child(5) {
    transition-delay: 1000ms;
 }

 .rectangle:is(:hover, :focus) {
    background-color: transparent;
 }
`},qe={transition_duration:ye,transition_timing_function:_e,transition_delay:we},ee=async()=>qe,Te={class:"mt-26 lg:p-0 p-4 lg:mr-4"},$e={class:"mb-12 text-xl md:text-2xl text-white font-bold"},Ie={class:"w-full px-2 sm:px-0 mt-4"},Se=["innerHTML"],Pe=k({__name:"transition-timing-function",async setup(e){let l,p;const d=([l,p]=J(()=>ee()),l=await l,p(),l);return I({html_code:`<div class="square ttf-linear bg-primary" tabindex="0">linear</div>
<div class="square ttf-ease bg-primary" tabindex="0">ease</div>
<div class="square ttf-ease-in bg-primary" tabindex="0">ease-in</div>
<div class="square ttf-ease-out bg-primary" tabindex="0">ease-out</div>
<div class="square ttf-ease-in-out bg-primary" tabindex="0">ease-in-out</div>
<div class="square ttf-steps bg-primary" tabindex="0">steps</div>
<div class="square ttf-cubic bg-primary" tabindex="0">cubic</div>
`,css_code:`.square {
   width: 150px;
   max-height: 100px;
   background-color: lightcoral;
   border-radius: 8px;
   text-align: center;
   padding: 8px;
   margin-bottom: 4px;
   transition-property: width;
   transition-duration: 1s;
}

.square.ttf-linear {
   transition-timing-function: linear;
}

.square.ttf-ease {
   transition-timing-function: ease;
}

.square.ttf-ease-in {
   transition-timing-function: ease-in;
}
.square.ttf-ease-out {
   transition-timing-function: ease-out;
}

.square.ttf-ease-in-out {
   transition-timing-function: ease-in-out;
}

.square.ttf-steps {
   transition-timing-function: steps(3);
}

.square.ttf-cubic {
   transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.square:is(:hover, :focus) {
   width: 50%;
}
`}),(s,i)=>{const o=V;return R(),U("div",Te,[b("span",$e,A(s.$t("transitions-timing-function")),1),b("div",Ie,[n(a(X),null,{default:c(()=>[n(a(Y),{class:"flex space-x-1 rounded-xl bg-primary/20 p-1"},{default:c(()=>[n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:f})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",f?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])},A(s.$t("result")),3)]),_:1}),n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:f})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",f?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])}," HTML ",2)]),_:1}),n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:f})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",f?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])}," CSS ",2)]),_:1})]),_:1}),n(a(Z),{class:"mt-2"},{default:c(()=>[n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[b("span",{class:"flex flex-col justify-center items-center",innerHTML:a(d).transition_timing_function.html_code},null,8,Se)]),_:1}),n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[n(o,{code:a(d).transition_timing_function.html_code,lang:"html"},null,8,["code"])]),_:1}),n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[n(o,{code:a(d).transition_timing_function.css_code,lang:"css"},null,8,["code"])]),_:1})]),_:1})]),_:1})])])}}}),ke={class:"lg:mr-4"},Le={class:"mt-8 mb-4 text-xl md:text-2xl text-white font-bold"},Ee={class:"w-full px-2 sm:px-0"},Fe=["innerHTML"],Me=k({__name:"transition-delay",async setup(e){let l,p;const d=([l,p]=J(()=>ee()),l=await l,p(),l);return(s,i)=>{const o=V;return R(),U("div",ke,[b("span",Le,A(s.$t("transitions-delay")),1),b("div",Ee,[n(a(X),null,{default:c(()=>[n(a(Y),{class:"flex space-x-1 rounded-xl bg-primary/20 p-1"},{default:c(()=>[n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:f})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",f?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])},A(s.$t("result")),3)]),_:1}),n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:f})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",f?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])}," HTML ",2)]),_:1}),n(a(S),{style:{"z-index":"999"},as:"template"},{default:c(({selected:f})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",f?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])}," CSS ",2)]),_:1})]),_:1}),n(a(Z),{class:"mt-2"},{default:c(()=>[n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[b("span",{class:"flex flex-col justify-center items-center",innerHTML:a(d).transition_delay.html_code},null,8,Fe)]),_:1}),n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[n(o,{code:a(d).transition_delay.html_code,lang:"html"},null,8,["code"])]),_:1}),n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[n(o,{code:a(d).transition_delay.css_code,lang:"html"},null,8,["code"])]),_:1})]),_:1})]),_:1})])])}}}),Oe={class:"lg:mr-4"},Ae={class:"mt-8 mb-4 text-xl md:text-2xl text-white font-bold"},Ce={class:"w-full px-2 sm:px-0"},ze=["innerHTML"],je=k({__name:"transition-duration",async setup(e){let l,p;const d=([l,p]=J(()=>ee()),l=await l,p(),l);return(s,i)=>{const o=V,f=be;return R(),U("div",Oe,[b("span",Ae,A(s.$t("transitions-duration")),1),b("div",Ce,[n(a(X),null,{default:c(()=>[n(a(Y),{class:"flex space-x-1 rounded-xl bg-primary/20 p-1"},{default:c(()=>[n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:x})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",x?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])},A(s.$t("result")),3)]),_:1}),n(a(S),{as:"template",style:{"z-index":"999"}},{default:c(({selected:x})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",x?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])}," HTML ",2)]),_:1}),n(a(S),{style:{"z-index":"999"},as:"template"},{default:c(({selected:x})=>[b("button",{class:v(["w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white","focus:outline-none",x?"bg-primary shadow":"text-[#fff] hover:bg-white/[0.12] hover:text-white"])}," CSS ",2)]),_:1})]),_:1}),n(a(Z),{class:"mt-2"},{default:c(()=>[n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[b("span",{class:"flex flex-col justify-center items-center",innerHTML:a(d).transition_duration.html_code},null,8,ze)]),_:1}),n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[n(o,{code:a(d).transition_duration.html_code,lang:"html"},null,8,["code"])]),_:1}),n(a(P),{class:v(["rounded-xl bg-primary/20 p-3 border-primary border","focus:outline-none"])},{default:c(()=>[n(o,{code:a(d).transition_duration.css_code,lang:"css"},null,8,["code"])]),_:1})]),_:1})]),_:1})]),n(f)])}}}),We={__name:"transitions",setup(e){return(l,p)=>(R(),U(re,null,[n(a(Pe)),n(Me),n(je)],64))}};export{We as default};
