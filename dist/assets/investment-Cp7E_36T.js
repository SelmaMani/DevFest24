import{r as n,j as t,w as c,T as u,z as i}from"./index-BMXZjJfw.js";import{E as f}from"./table-BJ9O0aVw.js";import"@fortawesome/fontawesome-svg-core";import"./TableRow-BHg9EW-L.js";import"./Checkbox-D0vYSOc6.js";import"./MenuItem-CZMDMPpu.js";import"./Tooltip-D_fHSjTZ.js";function E(){const[a,r]=n.useState([]),o=[{id:"id",numeric:!0,disablePadding:!1,label:"Investment ID"},{id:"description",numeric:!1,disablePadding:!1,label:"Description"},{id:"amount",numeric:!0,disablePadding:!1,label:"Amount"},{id:"investment_date",numeric:!1,disablePadding:!1,label:"Investment Date"}],d=async()=>{const{data:{user:e}}=await i.auth.getUser(),l=e==null?void 0:e.id,{data:m,error:s}=await i.from("investments").select("*").eq("user_id",l);s?console.error("Error fetching investment data:",s):r(m)};return n.useEffect(()=>{d()},[]),t.jsx(c,{title:"Investment Data",children:a.length>0?t.jsx(f,{rows:a,headCells:o,title:"Investments"}):t.jsx(u,{variant:"body2",children:"No data available"})})}export{E as default};