import{j as r}from"./index-BCTLmoWb.js";import{g as i,u as a}from"./useQuery-CR0GNrZj.js";const c={},l=i`
    query GetUsername($name: String!) {
  getUser(name: $name) {
    name
  }
}
    `;function u(n){const e={...c,...n};return a(l,e)}function m({username:n}){var o;const{data:e,loading:s,error:t}=u({variables:{name:n}});return s?r.jsx("div",{children:"Loading..."}):t?r.jsxs("div",{children:["Error: ",t.message]}):(o=e==null?void 0:e.getUser)!=null&&o.name?e.getUser.name:"nojira user"}const d={},g=i`
    query Problem($id: ID!) {
  getProblem(id: $id) {
    id
    claimedAt
    created_at
    detailedDescription
    requiredSkills
    shortDescription
    status
    title
    updated_at
  }
}
    `;function p(n){const e={...d,...n};return a(g,e)}function x({id:n}){var o;const{data:e,loading:s,error:t}=p({variables:{id:n}});return s?r.jsx("div",{children:"Loading..."}):t?(console.log(t),r.jsx("div",{children:"Check console for errors"})):r.jsx("div",{children:r.jsx("h1",{children:(o=e==null?void 0:e.getProblem)==null?void 0:o.title})})}const h=function(){return r.jsxs("div",{className:"p-2",children:[r.jsx("h3",{children:"Welcome Home!"}),r.jsx(m,{username:"gsovereignty"}),r.jsx(x,{id:"0x9be96148ea"})]})};export{h as component};
