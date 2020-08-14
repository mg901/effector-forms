import{combine as r,createStore as e,createEvent as o,sample as n,guard as t}from"effector";import{useStore as s}from"effector-react";function i(r,n,t){const s="function"==typeof n.init?n.init():n.init,i=t?t.store(s):e(s),u=t?t.store([]):e([]),l=u.map(r=>r[0]?r[0]:null);return{name:r,$value:i,$errors:u,$firstError:l,onChange:t?t.event():o(),onBlur:t?t.event():o()}}function u({$form:e,submitEvent:o,field:t,rules:s,formValidationEvents:i,fieldValidationEvents:u}){const{$value:l,$errors:a,onBlur:f,onChange:c}=t,d=function(r){return(e,o)=>{const n=[];for(const t of r){const r=t.validator(e,o);"boolean"!=typeof r||r||n.push({rule:t.name,value:e}),"object"!=typeof r||r.isValid||n.push({rule:t.name,errorText:r.errorText,value:e})}return n}}(s),m=[...i,...u],v=[];m.includes("submit")&&v.push(n({source:r({fieldValue:l,form:e}),clock:o})),m.includes("blur")&&v.push(n({source:r({fieldValue:l,form:e}),clock:f})),m.includes("change")&&v.push(n({source:r({fieldValue:l,form:e}),clock:c})),a.on(v,(r,{form:e,fieldValue:o})=>d(o,e)),m.includes("change")||a.reset(c)}function l({$value:r,onChange:e,name:o},n){r.on(e,(r,e)=>e).on(n,(r,e)=>e.hasOwnProperty(o)?e[o]:r)}function a(e){const{filter:s,domain:a,fields:f,validateOn:c}=e,d={};for(const r in f){if(!f.hasOwnProperty(r))continue;const e=f[r];d[r]=i(r,e,a)}const m=function(e){const o={};for(const r in e)e.hasOwnProperty(r)&&(o[r]=e[r].$value);return r(o)}(d),v=function(e){const o=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:n}=e[r];o.push(n)}return r(o).map(r=>r.every(r=>null===r))}(d),h=s?r(v,s,(r,e)=>r&&e):v,p=a?a.event():o(),E=a?a.event():o(),$=a?a.event():o(),V=n(m,p);for(const r in d){if(!d.hasOwnProperty(r))continue;const e=f[r],o=d[r];l(o,$),e.rules&&u({$form:m,rules:e.rules,submitEvent:p,field:o,formValidationEvents:c||["submit"],fieldValidationEvents:e.validateOn?e.validateOn:[]})}return t({source:V,filter:h,target:E}),{fields:d,$values:m,$eachValid:v,submit:p,setForm:$,formValidated:E}}function f(r){const e=s(r.$value),o=s(r.$errors),n=s(r.$firstError);return{name:r.name,value:e,errors:o,firstError:n,onChange:r.onChange,onBlur:r.onBlur,errorText:r=>n?r&&r[n.rule]?r[n.rule]:n.errorText||"":""}}function c(r){const e={};for(const o in r.fields){if(!r.fields.hasOwnProperty(o))continue;const n=r.fields[o];e[o]=f(n)}const o=s(r.$values),n=s(r.$eachValid);return{fields:e,values:o,hasError:r=>r?!!e[r]&&Boolean(e[r].firstError):!n,eachValid:n,errors:r=>e[r]?e[r].errors:[],error:r=>e[r]?e[r].firstError:null,errorText:(r,o)=>{const n=e[r];return n&&n.firstError?o&&o[n.firstError.rule]?o[n.firstError.rule]:n.firstError.errorText||"":""},submit:r.submit,setForm:r.setForm,formValidated:r.formValidated}}export{a as createForm,f as useField,c as useForm};
//# sourceMappingURL=effector-form.es.js.map
