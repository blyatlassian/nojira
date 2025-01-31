import{j as r}from"./index-BCTLmoWb.js";import{g as i,u}from"./useQuery-CR0GNrZj.js";const c={},d=i`
    query Problems {
  queryProblem {
    id
    created_at
    title
    status
    updated_at
  }
}
    `;function a(t){const e={...c,...t};return u(d,e)}const l=()=>{var s;const{data:t,loading:e,error:o}=a();return e?r.jsx("div",{children:"Loading..."}):o?r.jsx("div",{children:"Error loading problems."}):r.jsx("div",{children:r.jsx("ul",{children:(s=t==null?void 0:t.queryProblem)==null?void 0:s.map(n=>r.jsx("li",{children:n==null?void 0:n.title},n==null?void 0:n.id))})})},m=function(){return r.jsx(l,{})};export{m as component};
