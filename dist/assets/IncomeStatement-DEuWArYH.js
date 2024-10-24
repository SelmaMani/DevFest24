import{r as o,j as e,x as s,T as r,G as n,O as i,I as T}from"./index-CTEygqs1.js";import{E as G}from"./ExportComponent-DU4d7r3f.js";import"./MenuItem-DvTaKpXT.js";function N(){const[l,j]=o.useState(""),[u,v]=o.useState(""),[c,y]=o.useState(""),[p,I]=o.useState(""),[h,C]=o.useState(""),[x,f]=o.useState(""),[g,b]=o.useState(""),[S,F]=o.useState([]),m=()=>parseFloat(l||0)-parseFloat(u||0),d=()=>m()-parseFloat(c||0),O=()=>d()+parseFloat(p||0)-parseFloat(h||0),P=()=>{const t=O();f(`Net Income: $${t.toFixed(2)}`);const a={income_statement_data:{revenue:parseFloat(l||0),cost_of_goods_sold:parseFloat(u||0),gross_profit:m(),operating_expenses:parseFloat(c||0),operating_income:d(),other_income:parseFloat(p||0),taxes:parseFloat(h||0),net_income:t},query:"Analyze the income statement result and provide insights on revenue and expenses."};_(a);const E=[{Category:"Revenue",Value:parseFloat(l||0)},{Category:"Cost of Goods Sold",Value:parseFloat(u||0)},{Category:"Gross Profit",Value:m()},{Category:"Operating Expenses",Value:parseFloat(c||0)},{Category:"Operating Income",Value:d()},{Category:"Other Income",Value:parseFloat(p||0)},{Category:"Taxes",Value:parseFloat(h||0)},{Category:"Net Income",Value:t}];F(E)},_=t=>{fetch("http://127.0.0.1/generate_insights_income",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(a=>a.json()).then(a=>{console.log("Insights:",a.insights),b(a.insights)}).catch(a=>{console.error("Error:",a)})};return e.jsxs(s,{p:4,bgcolor:"white",borderRadius:2,boxShadow:3,children:[e.jsx(r,{variant:"h4",gutterBottom:!0,children:"Income Statement Calculator"}),e.jsx(r,{variant:"h6",gutterBottom:!0,children:"Revenue"}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Total Revenue",variant:"outlined",value:l,onChange:t=>j(t.target.value),type:"number",InputProps:{inputProps:{min:0}}})})}),e.jsx(r,{variant:"h6",gutterBottom:!0,mt:4,children:"Cost of Goods Sold"}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Cost of Goods Sold",variant:"outlined",value:u,onChange:t=>v(t.target.value),type:"number",InputProps:{inputProps:{min:0}}})})}),e.jsx(r,{variant:"h6",gutterBottom:!0,mt:4,children:"Operating Expenses"}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Operating Expenses",variant:"outlined",value:c,onChange:t=>y(t.target.value),type:"number",InputProps:{inputProps:{min:0}}})})}),e.jsx(r,{variant:"h6",gutterBottom:!0,mt:4,children:"Other Income"}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Other Income",variant:"outlined",value:p,onChange:t=>I(t.target.value),type:"number",InputProps:{inputProps:{min:0}}})})}),e.jsx(r,{variant:"h6",gutterBottom:!0,mt:4,children:"Taxes"}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Taxes",variant:"outlined",value:h,onChange:t=>C(t.target.value),type:"number",InputProps:{inputProps:{min:0}}})})}),e.jsx(s,{mt:4,children:e.jsx(T,{variant:"contained",color:"primary",onClick:P,children:"Calculate Income"})}),x&&e.jsx(s,{mt:3,children:e.jsx(r,{variant:"h6",children:x})}),e.jsx(s,{mt:3,children:e.jsx(G,{data:S,fileName:"CustomIncomeStatement"})}),e.jsxs("div",{children:[e.jsx("br",{}),e.jsx(r,{variant:"h4",children:"Notes : "}),e.jsx(s,{p:2,border:1,borderColor:"grey.700",borderRadius:1,bgcolor:"grey.200",sx:{whiteSpace:"pre-line"},children:e.jsx(r,{variant:"body1",children:g||"No insights available yet."})})]})]})}export{N as default};
