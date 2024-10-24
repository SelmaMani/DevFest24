import{g as O,a as Z,S as L,U as N,s as X,T as p,b as D,_ as h,r as V,u as E,e as H,V as q,W as Y,j as e,h as J,i as K,v as n,A as Q,d as B,X as ee,w as re,G as t,H as m,Y as u,o as te,x as v}from"./index-CTEygqs1.js";import{T as le}from"./Tooltip-B515WghB.js";function se(r){return Z("MuiLink",r)}const ae=O("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),P={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ie=r=>P[r]||r,oe=({theme:r,ownerState:s})=>{const a=ie(s.color),i=L(r,`palette.${a}`,!1)||s.color,c=L(r,`palette.${a}Channel`);return"vars"in r&&c?`rgba(${c} / 0.4)`:N(i,.4)},ne=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],ce=r=>{const{classes:s,component:a,focusVisible:i,underline:c}=r,d={root:["root",`underline${D(c)}`,a==="button"&&"button",i&&"focusVisible"]};return K(d,se,s)},de=X(p,{name:"MuiLink",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:a}=r;return[s.root,s[`underline${D(a.underline)}`],a.component==="button"&&s.button]}})(({theme:r,ownerState:s})=>h({},s.underline==="none"&&{textDecoration:"none"},s.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},s.underline==="always"&&h({textDecoration:"underline"},s.color!=="inherit"&&{textDecorationColor:oe({theme:r,ownerState:s})},{"&:hover":{textDecorationColor:"inherit"}}),s.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ae.focusVisible}`]:{outline:"auto"}})),A=V.forwardRef(function(s,a){const i=E({props:s,name:"MuiLink"}),{className:c,color:d="primary",component:x="a",onBlur:o,onFocus:y,TypographyClasses:G,underline:T="always",variant:f="inherit",sx:b}=i,M=H(i,ne),{isFocusVisibleRef:k,onBlur:F,onFocus:$,ref:S}=q(),[z,C]=V.useState(!1),U=Y(a,S),W=g=>{F(g),k.current===!1&&C(!1),o&&o(g)},_=g=>{$(g),k.current===!0&&C(!0),y&&y(g)},w=h({},i,{color:d,component:x,focusVisible:z,underline:T,variant:f}),I=ce(w);return e.jsx(de,h({color:d,className:J(I.root,c),classes:G,component:x,onBlur:W,onFocus:_,ref:U,ownerState:w,variant:f,sx:[...Object.keys(P).includes(d)?[]:[{color:d}],...Array.isArray(b)?b:[b]]},M))}),j=({color:r,outline:s,size:a,sx:i,...c})=>{const d=r&&!s&&{color:"background.paper",bgcolor:`${r}.main`},x=s&&{color:r?`${r}.main`:"primary.main",bgcolor:"background.paper",border:"2px solid",borderColor:r?`${r}.main`:"primary.main"};let o={};switch(a){case"badge":o={width:28,height:28};break;case"xs":o={width:34,height:34};break;case"sm":o={width:40,height:40};break;case"lg":o={width:72,height:72};break;case"xl":o={width:82,height:82};break;case"md":o={width:60,height:60};break;default:o={}}return e.jsx(Q,{sx:{...d,...x,...o,...i},...c})};j.propTypes={color:n.string,outline:n.bool,size:n.string,sx:n.object};const R=({title:r,link:s,icon:a})=>{const i=B();return e.jsx(le,{title:r||"Reference",placement:"left",children:e.jsxs(ee,{disableRipple:!0,children:[!a&&e.jsx(j,{component:A,href:s,"aria-label":"redirect pages",target:"_blank",alt:"MUI Logo",size:"badge",outline:!0,children:e.jsxs("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0)",children:[e.jsx("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:i.palette.primary[800]}),e.jsx("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:i.palette.primary.main}),e.jsx("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:i.palette.primary[800]}),e.jsx("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:i.palette.primary.main})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0",children:e.jsx("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),a&&e.jsx(j,{component:A,href:s,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"material-ui",children:a})]})})};R.propTypes={icon:n.node,link:n.string,title:n.string};const l=({bgcolor:r,title:s,data:a,dark:i})=>e.jsxs(e.Fragment,{children:[e.jsx(te,{sx:{mb:3},children:e.jsxs(v,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4.5,bgcolor:r,color:i?"grey.800":"#ffffff"},children:[s&&e.jsx(p,{variant:"subtitle1",color:"inherit",children:s}),!s&&e.jsx(v,{sx:{p:1.15}})]})}),a&&e.jsxs(t,{container:!0,justifyContent:"space-between",alignItems:"center",children:[e.jsx(t,{item:!0,children:e.jsx(p,{variant:"subtitle2",children:a.label})}),e.jsx(t,{item:!0,children:e.jsx(p,{variant:"subtitle1",sx:{textTransform:"uppercase"},children:a.color})})]})]});l.propTypes={bgcolor:n.string,title:n.string,data:n.object.isRequired,dark:n.bool};const ge=()=>{const r=B();return e.jsx(re,{title:"Color Palette",secondary:e.jsx(R,{link:"https://next.material-ui.com/system/palette/"}),children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Primary Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"primary.light",data:{label:"Blue-50",color:r.palette.primary.light},title:"primary.light",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"primary.200",data:{label:"Blue-200",color:r.palette.primary[200]},title:"primary[200]",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"primary.main",data:{label:"Blue-500",color:r.palette.primary.main},title:"primary.main"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"primary.dark",data:{label:"Blue-600",color:r.palette.primary.dark},title:"primary.dark"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"primary.800",data:{label:"Blue-800",color:r.palette.primary[800]},title:"primary[800]"})})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Secondary Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"secondary.light",data:{label:"DeepPurple-50",color:r.palette.secondary.light},title:"secondary.light",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"secondary.200",data:{label:"DeepPurple-200",color:r.palette.secondary[200]},title:"secondary[200]",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"secondary.main",data:{label:"DeepPurple-500",color:r.palette.secondary.main},title:"secondary.main"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"secondary.dark",data:{label:"DeepPurple-600",color:r.palette.secondary.dark},title:"secondary.dark"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"secondary.800",data:{label:"DeepPurple-800",color:r.palette.secondary[800]},title:"secondary[800]"})})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Success Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"success.light",data:{label:"Green-A100",color:r.palette.success.light},title:"success.light",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"success.200",data:{label:"Green-A200",color:r.palette.success[200]},title:"success[200]"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"success.main",data:{label:"Green-A400",color:r.palette.success.main},title:"success.main"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"success.dark",data:{label:"Green-A700",color:r.palette.success.dark},title:"success.dark"})})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Orange Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"orange.light",data:{label:"DeepOrange-50",color:r.palette.orange.light},title:"orange.light",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"orange.main",data:{label:"DeepOrange-200",color:r.palette.orange.main},title:"orange.main"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"orange.dark",data:{label:"DeepOrange-800",color:r.palette.orange.dark},title:"orange.dark"})})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Error Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"error.light",data:{label:"Red-50",color:r.palette.error.light},title:"error.light",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"error.main",data:{label:"Red-200",color:r.palette.error.main},title:"error.main"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"error.dark",data:{label:"Red-800",color:r.palette.error.dark},title:"error.dark"})})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Warning Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"warning.light",data:{label:"Amber-50",color:r.palette.warning.light},title:"warning.light",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"warning.main",data:{label:"Amber-100",color:r.palette.warning.main},title:"warning.main",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"warning.dark",data:{label:"Amber-500",color:r.palette.warning.dark},title:"warning.dark"})})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(u,{title:"Grey Color",children:e.jsxs(t,{container:!0,spacing:m,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.50",data:{label:"Grey-50",color:r.palette.grey[50]},title:"grey[50]",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.100",data:{label:"Grey-100",color:r.palette.grey[100]},title:"grey[100]",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.200",data:{label:"Grey-200",color:r.palette.grey[200]},title:"grey[200]",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.300",data:{label:"Grey-300",color:r.palette.grey[300]},title:"grey[300]",dark:!0})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.500",data:{label:"Grey-500",color:r.palette.grey[500]},title:"grey[500]"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.600",data:{label:"Grey-600",color:r.palette.grey[600]},title:"grey[600]"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.700",data:{label:"Grey-700",color:r.palette.grey[700]},title:"grey[700]"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"grey.900",data:{label:"Grey-900",color:r.palette.grey[900]},title:"grey[900]"})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:2,children:e.jsx(l,{bgcolor:"#fff",data:{label:"Pure White",color:"#ffffff"},title:"Pure White",dark:!0})})]})})})]})})};export{ge as default};
