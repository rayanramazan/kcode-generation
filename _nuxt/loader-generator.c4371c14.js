import{_ as p}from"./CodeEditor.vue.ed3c233d.js";import{_ as m}from"./Footer.e36f3b85.js";import{e as u,k as g,i as h,o as e,l as a,s as x,F as b,v as f,u as o,x as s}from"./entry.1e3ce3f0.js";import"./Icon.69cd4899.js";import"./_plugin-vue_export-helper.a1a6add7.js";const k={"loader-generator":[{id:1,html:"<div class='custom-loader1'></div>",css:`.custom-loader1{
     width:50px;
     height:50px;
     border-radius:50%;
     border:8px solid;
     border-color:#3BA676 #0000;
     animation:1s infinite s1
}
@keyframes s1{
     to{
     transform:rotate(.5turn)
     }
}`},{id:2,html:"<div class='custom-loader2'></div>",css:`.custom-loader2{
     width:50px;
     height:50px;
     border-radius:50%;
     border:8px solid;
     border-color:#E4E4ED;
     border-right-color: #766DF4;
     animation:1s infinite s2
}
@keyframes s2{
     to{
     transform:rotate(1turn)
     }
}`},{id:3,html:"<div class='custom-loader3'></div>",css:`.custom-loader3{
     width:50px;
     height:50px;
     border-radius:50%;
     background:conic-gradient(#0000 10%,#3BA676)
     -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
     animation:s3 1s infinite linear;
}
@keyframes s3{
     to{
     transform:rotate(1turn)
     }
}`},{id:4,html:"<div class='custom-loader4'></div>",css:`.custom-loader4{
     width:50px;
     height:50px;
     border-radius:50%;
     padding:3px;
     background: radial-gradient(farthest-side,#3BA67695%,#0000) 50% 0/12px 12px no-repeat,
     radial-gradient(farthest-side,#0000 calc(100% - 5px),#3BA676calc(100% - 4px)) content-box;
     animation:s6 2s infinite;
}
@keyframes s6{
     to{
     transform:rotate(1turn)
     }
}`},{id:5,html:"<div class='custom-loader5'></div>",css:`.custom-loader5{
     width:50px;
     height:50px;
     --c: radial-gradient(farthest-side,#3BA67692%,#0000);
     background: var(--c) 50%  0, var(--c) 50%  100%, var(--c) 100% 50%, var(--c) 0 50%;
          background-size: 10px 10px;
     background-repeat: no-repeat;
     animation: s8 1s infinite;
     position: relative;
}
.custom-loader::before {
     content:'';
     position: absolute;
     inset:0;
     margin: 3px;
     background:repeating-conic-gradient(#0000 0 35deg,#3BA6760 90deg);
     -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
     border-radius: 50%;
     }@keyframes s8{
     to{
     transform:rotate(.5turn)
     }
}`},{id:6,html:"<div class='custom-loader6'></div>",css:`.custom-loader6{
     width:50px;
     height:50px;
     --c: radial-gradient(farthest-side,#3BA67692%,#0000);
     background: var(--c) 50%  0, var(--c) 50%  100%, var(--c) 100% 50%, var(--c) 0 50%;
          background-size: 12px 12px;
     background-repeat: no-repeat;
     animation: s10 1s infinite;
}
@keyframes s10{
     to{
     transform:rotate(.5turn)
     }
}`},{id:7,html:"<div class='custom-loader7'></div>",css:`.custom-loader7{
     width:50px;
     height:50px;
     display: grid;
     border: 4px solid #0000
          border-radius: 50%
     border-color: #3BA676 #0000
     animation: s11 1s infinite linear;
}
.custom-loader7::before,
.custom-loader7::after {
     content: '';
     grid-area: 1/1;
     margin: 2px;
     border: inherit;
     border-radius: 50%;
}
.custom-loader7::before{
      border-color: #3BA676 #0000;
     animation: inherit;
     animation-duration: .5s;
     animation-direction: reverse;
}
.custom-loader7::after{
     margin: 8px;
}
@keyframes s11{
     100%{
     transform:rotate(1turn)
     }
}`},{id:8,html:"<div class='custom-loader8'></div>",css:`.custom-loader8{
     width:50px;
     height:50px;
     border-radius:50%;
     padding: 1px;
      background:conic-gradient(#0000 10%,#3BA676) content-box;
     -webkit-mask: repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
    radial-gradient(farthest-side,#0000 calc(100% - 9px),
#000 calc(100% - 8px));
     -webkit-mask-composite: destination-in;
     mask-composite: intersect;
     animation: s12 1s infinite steps(10);
}
@keyframes s12{
     to{
     transform:rotate(1turn)
     }
}`},{id:9,html:"<div class='custom-loader9'></div>",css:`.custom-loader9{
     width:12px;
     height:12px;
     background: 3BA676;
     border-radius: 50%;
      box-shadow: 20px 0 #6df47222,-20px 0 #766DF4;
     animation: d1 1s infinite linear alternate;
}
@keyframes d1{
     0%{
     box-shadow: 20px 0 #766DF4,-20px 0 #6df47222;background: #766DF4
     }
33%{
     box-shadow: 20px 0 #766DF4,-20px 0 #6df47222;background: #6df47222
}
66%{
     box-shadow: 20px 0 #766DF422,-20px 0 #766DF4;background: #6df47222
     }
}`},{id:10,html:"<div class='custom-loader10'></div>",css:`.custom-loader10{
     width:32px;
     height:32px;
     --c:radial-gradient(circle closest-side,#3BA676 90%,#0000);
     background: var(--c) 0    0,var(--c) 0    100%,var(--c) 100% 100%;
      background-size:12px 12px;
     background-repeat: no-repeat;
     animation: d2 1s infinite linear ;
}
@keyframes d2{
    25% {background-position:100% 0   ,0 100%,100% 100%}
    50% {background-position:100% 0   ,0 0   ,100% 100%}
    75% {background-position:100% 0   ,0 0   ,0    100%}
    100%{background-position:100% 100%,0 0   ,0    100%}}`},{id:11,html:"<div class='custom-loader11'></div>",css:`.custom-loader11{
     width:52px;
     height:12px;
     --c:radial-gradient(farthest-side,#3BA676 90%,#0000);
     background:var(--c) left,var(--c) right;
     background-size:12px 12px;
     background-repeat:no-repeat;
     display:grid
}
.custom-loader11:after,
.custom-loader11:before{
     content:'';
     width:12px;
     height:12px;
     grid-area:1/1;
     margin:auto;
     border-radius:50%;
     transform-origin:-12px 50%;
     background:#3BA676;
     animation:1s linear infinite d9
}
.custom-loader11:after{
     transform-origin:calc(100% + 12px) 50%;
     --s:-1;
     animation-delay:-.5s
}
@keyframes d9{
     100%,58%{
     transform:rotate(calc(var(--s,1)*1turn))
}
}`},{id:12,html:"<div class='custom-loader12'></div>",css:`.custom-loader12{
     width:50px;
     height:28px;
     background:radial-gradient(farthest-side,#3BA67690%,#0000) 50% 0,
radial-gradient(farthest-side,#3BA67690%,#0000) 100% 0;
     background-size:12px 12px;
     background-repeat:no-repeat;
     position:relative;
     animation:1.5s linear infinite d3-0
}
.custom-loader12:before{
     content:'';
     position:absolute;
     width:12px;
     height:12px;
     border-radius:50%;
     background:#766df4;
     left:0;
     top:0;
     animation:1.5s linear infinite d3-1,.5s cubic-bezier(0,200,.8,200) infinite d3-2
}
@keyframes d3-0{
     0%,31%,43%,64%,79%{
     background-position:50% 0,100% 0}33%
{background-position:50% 100%,100% 0}66%
{background-position:50% 0,100% 100%}100%
{transform:translateX(calc(-100%/3))
}
}
@keyframes d3-1{
     100%{
     left:calc(100% + 7px)}
    
}
@keyframes d3-2{
     100%{
     top:-.1px
     }
}`},{id:13,html:"<div class='custom-loader13'></div>",css:`.custom-loader13{
     width:120px;
     height:20px;
     border-radius:20px;
     background:repeating-linear-gradient(135deg,#3ba676 0 10px,#3ba67646 0 20px) 
left/0 100% no-repeat,
repeating-linear-gradient(135deg,#3ba67646 0 10px
,#3ba67626 0 20px) left/100% 100%;
     animation:2s infinite p3
}
@keyframes p3{
     100%{background-size:100% 100%}
}`},{id:14,html:"<div class='custom-loader14'></div>",css:`.custom-loader14{
     width:120px;
     height:20px;
     -webkit-mask:linear-gradient(90deg,#766DF4 70%,#0000 0) left/20% 100%;
background:linear-gradient(#766df4 0 0) left/0 100% no-repeat #e4e4ed;
     animation:2s steps(6) infinite p4
}
@keyframes p4{
     100%{background-size:120% 100%}
     }`},{id:15,html:"<div class='custom-loader15'></div>",css:`.custom-loader15{
     width:40px;
     height:40px;
     color:#3ba676;
     background:linear-gradient(currentColor 0 0),
linear-gradient(currentColor 0 0),
linear-gradient(currentColor 0 0),
linear-gradient(currentColor 0 0);
     background-size:21px 21px;
     background-repeat:no-repeat;
     animation:1.5s cubic-bezier(.3,1,0,1) infinite sh5
}
@keyframes sh5{
     0%{background-position:0 0,100% 0,100% 100%,0 100%}
     33%{background-position:0 0,100% 0,100% 100%,0 100%;width:60px;height:60px}
     66%{background-position:100% 0,100% 100%,0 100%,0 0;width:60px;height:60px}
     100%{background-position:100% 0,100% 100%,0 100%,0 0}
}`},{id:16,html:"<div class='custom-loader16'></div>",css:`.custom-loader16{
     width:40px;
     height:40px;
     border-radius:50%;
     border:2px solid #3ba676;
     position:relative;
     transform-origin:left;
     animation:1s linear infinite h2
}
.custom-loader16::after,
.custom-loader16::before{
     content:'';
     position:absolute;
     inset:0 0 auto;
     margin:auto;
     width:50%;
     height:50%;
     border-radius:50%;
     border:2px solid #3ba676;
     transform-origin:50% calc(100% - 4px);
     animation:inherit
}
.custom-loader16::after{
     inset:auto 0 calc(100% + 2px);
     animation-duration:.5s;
     animation-direction:reverse;
     transform-origin:50% calc(200% - 2px)
}
@keyframes h2{     
100%{transform:rotate(1turn)}
}`}]},v=async()=>k,w={class:"flex flex-col gap-x-2 gap-y-3 mt-26 lg:mx-0 p-4"},_={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3"},y=["innerHTML","onClick"],M=u({__name:"loader-generator",async setup(A){let n,t;const d=([n,t]=g(()=>v()),n=await n,t(),n),i=h("");return(B,z)=>{const c=p,l=m;return e(),a("div",w,[x("div",_,[(e(!0),a(b,null,f(o(d)["loader-generator"],r=>(e(),a("div",{key:r.id,innerHTML:r.html,onClick:C=>i.value=r.css,class:"bg-[#411A4A] h-40 w-full flex justify-center items-center z-30 rounded border border-white/10 duration-300 hover:border-primary"},null,8,y))),128))]),s(c,{code:o(i)},null,8,["code"]),s(l)])}}});export{M as default};
