(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(e,t,n){"use strict";n.r(t);var s=n(2),a={props:["page"],components:{ArrowNarrowLeft:Object(s.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},this.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null).exports,ArrowNarrowRight:Object(s.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},this.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null).exports}},o=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.page.posts?n("div",[n("div",{staticClass:"pt-2 pb-6 space-y-4 bg-white lg:pb-10"},[n("div",{staticClass:"relative max-w-lg mx-auto lg:px-6 xl:px-0 lg:max-w-7xl"},[n("div",{staticClass:"grid gap-5 divide-y-2 divide-gray-200 lg:divide-y-0 lg:gap-16 lg:grid-cols-2"},e._l(e.page.posts,(function(t,s){return n("article",{key:s,staticClass:"flex flex-col justify-between space-y-3 bg-white",class:{"pt-5 lg:pt-0":s>0}},[n("div",{staticClass:"space-y-1"},[n("p",{staticClass:"text-xs leading-4 text-gray-500 md:text-sm md:leading-5"},[e._v("\n              "+e._s(e._f("date")(t.createdAt))+"\n            ")]),e._v(" "),n("saber-link",{staticClass:"inline-block text-gray-900 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500",attrs:{to:t.permalink}},[n("h3",{staticClass:"text-base font-semibold leading-6 md:text-xl md:leading-7"},[e._v("\n                "+e._s(t.title)+"\n              ")])])],1),e._v(" "),n("div",{staticClass:"flex flex-col flex-1"},[n("p",{staticClass:"prose",domProps:{innerHTML:e._s(t.excerpt)}})]),e._v(" "),n("div",[n("saber-link",{staticClass:"text-base font-semibold leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-400",attrs:{to:t.permalink}},[e._v("\n              Ver post\n            ")])],1)])})),0)]),e._v(" "),n("nav",{staticClass:"flex items-center justify-between px-4 space-y-4 sm:px-0",class:{"border-t border-gray-200":e.page.pagination.hasPrev||e.page.pagination.hasNext}},[e.page.pagination.hasPrev?n("saber-link",{staticClass:"inline-flex items-center text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-400",attrs:{to:e.page.pagination.prevLink}},[n("ArrowNarrowLeft",{staticClass:"w-5 h-5 mr-3 text-gray-400"}),e._v(" "),n("span",[e._v("Anterior")])],1):e._e(),e._v(" "),e.page.pagination.hasNext?n("saber-link",{staticClass:"inline-flex items-center text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-400",attrs:{to:e.page.pagination.nextLink}},[n("span",[e._v("Siguiente")]),e._v(" "),n("ArrowNarrowRight",{staticClass:"w-5 h-5 ml-3 text-gray-400"})],1):e._e()],1)])]):e._e()}),[],!1,null,null,null).exports,l={render:function(e){return e("layout-manager",{scopedSlots:{component:function(t){return e(o,{props:t})}}})}},i=function(e){var t,n,s,a,o,l,i,r,p,c,u=(t=void 0,n="post",o={},l="markdown",i="vue-componentes-privados-con-jsx",r="Vue: Componentes privados con JSX",p={},c="Importar SVGs como componentes Vue",(s={}).type=a="page",s.internal=t,s.contentType="vue",s.slug="index",s.content=t,s.createdAt=new Date(1595544053824),s.updatedAt=new Date(1597377388269),s.layout=a,s.injectAllPosts=!0,s.permalink="/",s.assets={},s.attributes=s,s.posts=[o,p],s.pagination={hasPrev:!1,hasNext:!1,total:1,current:1,prevLink:"/page/2",nextLink:t},o.type=n,o.internal=t,o.contentType=l,o.slug=i,o.content=t,o.createdAt=new Date(15969312e5),o.updatedAt=new Date(1597016819879),o.title=r,o.date="2020-08-09",o.layout=n,o.markdownHeadings=[{text:r,slug:i,level:2},{text:"JSX",slug:"jsx",level:3},{text:"Cheatsheet Vue <-> JSX",slug:"cheatsheet-vue-lt-gt-jsx",level:3},{text:"Contenido",slug:"contenido",level:4},{text:"Binding",slug:"binding",level:4},{text:"Eventos",slug:"eventos",level:4},{text:"Binding de class y style",slug:"binding-de-class-y-style",level:4},{text:"Binding de class y style en JSX",slug:"binding-de-class-y-style-en-jsx",level:4},{text:"Componentes",slug:"componentes",level:4},{text:"Componente dinámico",slug:"componente-dinámico",level:4},{text:"Loops",slug:"loops",level:4},{text:"Condicionales",slug:"condicionales",level:4},{text:"Slots",slug:"slots",level:4},{text:"Links de interés",slug:"links-de-interés",level:3}],o.excerpt='<p>En general, creo que la mejor manera de escribir aplicaciones Vue es usando <a href="https://vuejs.org/v2/guide/single-file-components.html">Single File Components (SFC)</a>. Escalan bien en proyectos pequeños, medianos y grandes, podemos usar <a href="(https://vue-loader.vuejs.org/guide/scoped-css.html)">Scoped CSS</a> (básicamente, CSS con alcance límitado a dicho componente), son muy intuitivos y fáciles de usar, entre otras.</p>\n',o.permalink="/2020/08/08/vue-componentes-privados-con-jsx",o.assets={},o.attributes=o,p.type=n,p.internal=t,p.contentType=l,p.slug="vue-importar-svg-componentes",p.content=t,p.createdAt=new Date(15963264e5),p.updatedAt=new Date(1596999505703),p.title=c,p.date="2020-08-02",p.layout=n,p.markdownHeadings=[{text:c,slug:"importar-svgs-como-componentes-vue",level:2},{text:"Vue CLI",slug:"vue-cli",level:3},{text:"Saber",slug:"saber",level:3}],p.excerpt='<p>La idea es poder utilizar cualquier archivo <code v-pre="">.svg</code> como un componente Vue más; para ello, necesitamos incluir un <em>loader</em> en nuestro proyecto, <a href="https://www.npmjs.com/package/svg-to-vue-component">svg-to-vue-component</a></p>\n',p.permalink="/2020/08/01/vue-importar-svg-componentes",p.assets={},p.attributes=p,s),d=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=u}].concat(d);["layout","transition"].forEach((function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=u[t])})),u.slug&&(e.options.name="page-wrapper-"+u.slug.replace(/[^0-9a-z\-]/gi,"-"))},r=Object(s.a)(l,void 0,void 0,!1,null,null,null);"function"==typeof i&&i(r);t.default=r.exports}}]);