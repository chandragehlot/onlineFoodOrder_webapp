(this.webpackJsonponlinefoodorderwebapp=this.webpackJsonponlinefoodorderwebapp||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(20),s=c.n(r),i=(c(47),c(48),c(10)),o=c(4),j=c(17),l=c(5),d=c(21),b=c(3),u="FETCH_MENU_REQ_START",m="FETCH_MENU_REQ_SUCCESS",h="FETCH_MENU_REQ_ERR",O="FETCH_CATEGORY_REQ_START",x="EETCH_CATEGORY_REQ_SUCC",p="FETCH_CATEGORY_REQ_ERR",v="SET_CATEGORY",_="ADD_TO_CART",f={menuitemsCont:{},isLoading:!1,isError:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isError:!1});case m:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,menuitemsCont:Object(b.a)(Object(b.a)({},e.menuitemsCont),{},Object(d.a)({},t.category,t.payload))});case h:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!0});default:return e}},y=c(23),N={categoryitems:[],selectedCategory:"",isLoading:!1,isError:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{categoryitems:[],isLoading:!0,isError:!1};case x:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,categoryitems:Object(y.a)(t.payload)});case p:return{categoryitems:[],isLoading:!1,isError:!0};case v:return Object(b.a)(Object(b.a)({},e),{},{selectedCategory:t.payload});default:return e}},E=(c.p,c.p,c.p,c.p,c.p,function(e,t){var c=e.cartitems,a=void 0===c?[]:c,n=(e.carttotal,a.findIndex((function(e){return e.id===t.id})));if(n>=0)return a.splice(n,1,t),{cartitems:a,carttotal:k(a)};var r=[].concat(Object(y.a)(a),[t]);return{cartitems:r,carttotal:k(r)}});function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.reduce((function(e,t){return e+t.item_total_price}),0);return t}var T={cartitems:[],carttotal:0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return t.type===_?E(e,t.payload):e},H=Object(j.b)({menuData:g,categories:C,cart:w}),S=c(40),R=c(41),q=c.p+"static/media/khana-khazana.0ad95e77.jpeg",L=c(0),A=function(){return Object(L.jsx)("header",{className:"app-header",children:Object(L.jsxs)("div",{className:"appHeader__cont",children:[Object(L.jsx)("div",{className:"appHeader__logoCont",children:Object(L.jsx)("div",{className:"appHeader__logo",children:Object(L.jsx)(i.b,{to:"/",children:Object(L.jsx)("img",{src:q,alt:"khana khajana"})})})}),Object(L.jsxs)("nav",{className:"appHeader__section-cont",children:[Object(L.jsx)("div",{className:"appHeader__items",children:Object(L.jsx)(i.b,{to:"/offers",children:"Offers"})}),Object(L.jsx)("div",{className:"appHeader__items",children:Object(L.jsx)(i.b,{to:"/stores",children:"Store finder"})}),Object(L.jsx)("div",{className:"appHeader__items",children:Object(L.jsx)(i.b,{to:"/help",children:"Help"})}),Object(L.jsx)("div",{className:"appHeader__items",children:Object(L.jsx)(i.b,{to:"/contact",children:"contact us"})})]}),Object(L.jsxs)("nav",{className:"appHeader__section-cont",children:[Object(L.jsx)("div",{className:"appHeader__items",children:Object(L.jsx)(i.b,{to:"/help",children:"SignUp"})}),Object(L.jsx)("div",{className:"appHeader__items",children:Object(L.jsx)(i.b,{to:"/contact",children:"Login"})})]})]})})},F=c.p+"static/media/loading.61700b5a.svg",D=function(){return Object(L.jsx)("div",{className:"loading__cont",children:Object(L.jsx)("div",{className:"laoding_base",children:Object(L.jsx)("div",{className:"loading__symbol-cont",children:Object(L.jsx)("div",{className:"loading__symbol",children:Object(L.jsx)("img",{src:F,alt:"Loading..."})})})})})},I="http://localhost:9000/api/v1",M="https://ik.imagekit.io/a6n7g8ldqgi/fooddelivery",B="banner_yxocxn3KgV1.jpeg?updatedAt=1638912407414",Q=function(e){return"".concat(M,"/").concat(e)},U=function(){var e=B;return Object(L.jsxs)("div",{className:"banner__section",children:[Object(L.jsx)("div",{className:"banner__tagline-layer",children:Object(L.jsx)("div",{className:"banner__tagline-cont",children:"Eat healty, Stay healthy"})}),Object(L.jsx)("img",{className:"banner__img",src:Q(e),alt:"Banner"})]})},G=c(12),Y=c.n(G),P=c(16),J=c(24),z=c.n(J),K={getMenuItems:function(){return z.a.get("".concat(I,"/")).then((function(e){return e.data}))},fetchCategories:function(){return z.a.get("".concat(I,"/menu/categories")).then((function(e){return e.data}))},getMenuByCategory:function(e){var t="".concat(I,"/menu/menuitem/bycategory/").concat(e);return z.a.get(t).then((function(e){return e.data}))}},V=function(e){var t=Object(l.b)(),c=function(c){t(function(e,t){return function(c){c({type:v,payload:t}),e.history.push("/menu")}}(e,c))},a=e.categories;return Object(L.jsx)("div",{className:"category__section",children:Object(L.jsx)("div",{className:"category__cont",children:Object(L.jsx)("div",{className:"category__items vh-center",children:a.length>0&&a.map((function(e,t){return Object(L.jsxs)("div",{className:"category__item",onClick:function(){return c(e.category)},children:[Object(L.jsx)("img",{className:"category__image",src:Q(e.image_url_key),alt:"categoryitem"}),Object(L.jsx)("div",{className:"category__name",children:e.category})]},"".concat(t,"-").concat(e.category))}))})})})},W=function(e){var t=Object(l.c)((function(e){return e.categories})),c=t.categoryitems,n=void 0===c?[]:c,r=t.isLoading,s=void 0!==r&&r,i=Object(l.b)();return Object(a.useEffect)((function(){i(function(e){return function(){var t=Object(P.a)(Y.a.mark((function t(c){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:O}),t.next=4,K.fetchCategories();case 4:a=t.sent,c({type:x,payload:a.resData}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),c({type:p}),e.history.push("/error");case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[i,e]),Object(L.jsx)("div",{className:"foodorder-app",children:s?Object(L.jsx)(D,{}):Object(L.jsxs)("div",{className:"foodorder-container",children:[Object(L.jsx)(U,{}),Object(L.jsx)("h3",{className:"sub-heading",children:" Categories "}),Object(L.jsx)(V,Object(b.a)({categories:n},e))]})})},X=function(){var e=Object(l.c)((function(e){return e.categories})),t=e.categoryitems,c=e.selectedCategory,a=Object(l.b)(),n=function(e){a(function(e){return function(t){t({type:v,payload:e})}}(e))};return Object(L.jsx)("div",{className:"navigation__cont",children:t.length&&t.map((function(e,t){return Object(L.jsx)("div",{onClick:function(){return n(e.category)},className:"navigation__item ".concat(e.category===c?"highlight":""),children:e.category},"".concat(e.category,"-").concat(t))}))})},Z=c(42),$=function(e){var t=parseInt(e.price)*parseInt(e.quantity);return Object(b.a)(Object(b.a)({},e),{},{item_total_price:t})},ee=function(e){var t=Object(a.useState)([]),c=Object(Z.a)(t,2),n=c[0],r=c[1],s=Object(l.b)(),i=Object(l.c)((function(e){return e.categories})).selectedCategory,o=Object(l.c)((function(e){return e.menuData})).menuitemsCont,j=void 0===o?{}:o,d=function(e){var t=n.map((function(t){return t.id===e.id&&(t.quantity=t.quantity+1),t}));r(t),s(function(e){return function(){var t=Object(P.a)(Y.a.mark((function t(c){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{c({type:_,payload:$(e)})}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(a.useEffect)((function(){var e=(Object.keys(j).length>0&&void 0!==j[i]?j[i]:[]).map((function(e){return Object(b.a)(Object(b.a)({},e),{},{quantity:0})}));r(e)}),[j,i]),Object(a.useEffect)((function(){var t=Object.keys(j);0!==t.length&&t.includes(i)||s(function(e,t){return function(){var c=Object(P.a)(Y.a.mark((function c(a){var n;return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a({type:u}),c.next=4,K.getMenuByCategory(t);case 4:n=c.sent,a({type:m,payload:n.resData,category:t}),c.next=13;break;case 8:c.prev=8,c.t0=c.catch(0),console.log(c.t0),a({type:h}),e.history.push("/error");case 13:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()}(e,i))}),[s,j,e,i]),Object(L.jsx)("div",{className:"menuitem__cont",children:n.length&&n.map((function(e){return Object(L.jsxs)("div",{className:"menuitem__card",children:[Object(L.jsxs)("div",{className:"menuitem__left-sec",children:[Object(L.jsxs)("div",{className:"menuitem__row",children:[Object(L.jsx)("div",{className:"menuitem__foodtype-icon",children:e.type}),Object(L.jsxs)("div",{className:"menuitem__rating",children:[" ",e.rating," ","star"]})]}),Object(L.jsx)("div",{className:"menuitem__row",children:Object(L.jsx)("div",{className:"font-l",children:e.name})}),Object(L.jsx)("div",{className:"menuitem__row",children:Object(L.jsxs)("div",{className:"font-s",children:[" ",e.price," "]})})]}),Object(L.jsxs)("div",{className:"menuitem__right-sec",children:[Object(L.jsx)("div",{className:"menuitem__imgcont"}),Object(L.jsxs)("div",{className:"menuitem__quantitySelector",children:[Object(L.jsx)("div",{className:"menuitem__quantity",onClick:function(){return function(e){var t=n.map((function(t){return t.id===e.id&&(t.quantity=t.quantity>0?t.quantity-1:0),t}));r(t)}(e)},children:"-"}),Object(L.jsx)("div",{className:"menuitem__quantity",children:e.quantity}),Object(L.jsx)("div",{className:"menuitem__quantity",onClick:function(){return d(e)},children:"+"})]})]})]},"".concat(e.id))}))})},te=function(){var e=Object(l.c)((function(e){return e.cart})),t=e.cartitems,c=void 0===t?[]:t,a=e.carttotal,n=void 0===a?null:a;return Object(L.jsxs)("div",{className:"cart__cont",children:[Object(L.jsx)("h2",{className:"text-xxl",children:" Cart "}),c.length?Object(L.jsxs)("div",{children:[Object(L.jsxs)("p",{className:"text-xs",children:[" ","".concat(c.length," Items")]}),c.map((function(e,t){return Object(L.jsxs)("div",{className:"cart__item text-s",children:[Object(L.jsxs)("div",{className:"cart__item-name",children:[" ",e.name," "]}),Object(L.jsxs)("div",{className:"cart__item-quantity",children:[" ",e.quantity," "]}),Object(L.jsxs)("div",{className:"cart__item-price",children:[" ",e.item_total_price," "]})]})})),Object(L.jsxs)("div",{className:"cart__total",children:[Object(L.jsx)("div",{className:"cart__total-tag",children:" SubTotal "}),Object(L.jsxs)("div",{className:"cart__total-val",children:[" ",n," "]})]}),Object(L.jsx)("div",{className:"cart__disclaimer",children:"Extra charges may apply"}),Object(L.jsx)("div",{className:"cart__checkout",children:Object(L.jsx)("button",{className:"button-A",children:"Checkout"})})]}):Object(L.jsx)("div",{children:" No Iterm Selected Yet "})]})},ce=function(e){return Object(L.jsx)("div",{className:"menu-page",children:Object(L.jsxs)("div",{className:"menupage__cont d-flex",children:[Object(L.jsx)("div",{className:"menupage__navigation-cont",children:Object(L.jsx)(X,{})}),Object(L.jsx)("div",{className:"menupage__menu-cont",children:Object(L.jsx)(ee,{})}),Object(L.jsx)("div",{className:"menupage__cart-cont",children:Object(L.jsx)(te,{})})]})})},ae=function(){return Object(L.jsxs)("footer",{children:[Object(L.jsxs)("div",{className:"content",children:[Object(L.jsxs)("div",{className:"left box",children:[Object(L.jsxs)("div",{className:"upper",children:[Object(L.jsx)("div",{className:"topic",children:"About us"}),Object(L.jsx)("p",{children:"We are a online food deliver store, having wide variety of food"})]}),Object(L.jsxs)("div",{className:"lower",children:[Object(L.jsx)("div",{className:"topic",children:"Contact us"}),Object(L.jsx)("div",{className:"phone",children:Object(L.jsxs)("a",{href:"/error",children:[Object(L.jsx)("i",{className:"fas fa-phone-volume"}),"+00 000000000"]})}),Object(L.jsx)("div",{className:"email",children:Object(L.jsxs)("a",{href:"/error",children:[Object(L.jsx)("i",{className:"fas fa-envelope"}),"abc@gmail.com"]})})]})]}),Object(L.jsxs)("div",{className:"middle box",children:[Object(L.jsx)("div",{className:"topic",children:"Company"}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:"/error",children:"Blog"})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:"/error",children:"Feedback"})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:"/error",children:"Terms & Conditions"})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:"/error",children:"Privacy Policy"})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:"/error",children:"Disclaimer"})}),Object(L.jsx)("div",{children:Object(L.jsx)("a",{href:"/error",children:"Gift Cards"})})]}),Object(L.jsxs)("div",{className:"right box",children:[Object(L.jsx)("div",{className:"topic",children:"Subscribe us"}),Object(L.jsxs)("div",{className:"media-icons",children:[Object(L.jsx)("a",{href:"/error",children:Object(L.jsx)("i",{className:"fab fa-facebook-f"})}),Object(L.jsx)("a",{href:"/error",children:Object(L.jsx)("i",{className:"fab fa-instagram"})}),Object(L.jsx)("a",{href:"/error",children:Object(L.jsx)("i",{className:"fab fa-twitter"})}),Object(L.jsx)("a",{href:"/error",children:Object(L.jsx)("i",{className:"fab fa-youtube"})}),Object(L.jsx)("a",{href:"/error",children:Object(L.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]}),Object(L.jsx)("div",{className:"bottom",children:Object(L.jsxs)("p",{children:["Copyright \xa9 2020 ",Object(L.jsx)("a",{href:"/error",children:"CodingLab"})," All rights reserved"]})})]})},ne=function(){return Object(L.jsx)("div",{className:"error__section",children:Object(L.jsxs)("div",{className:"error_desc",children:[Object(L.jsx)("h1",{className:"error__item1",children:"Something went wrong"}),Object(L.jsxs)("div",{className:"error__item2",children:[Object(L.jsx)("span",{children:"Click"}),Object(L.jsx)("span",{children:Object(L.jsx)(i.b,{to:"/",children:" here "})}),Object(L.jsx)("span",{children:" to try again "})]})]})})},re=Object(R.createLogger)({}),se=Object(j.c)(H,Object(j.a)(S.a,re));var ie=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(l.a,{store:se,children:Object(L.jsxs)(i.a,{children:[Object(L.jsx)(A,{}),Object(L.jsx)("div",{className:"app-body-holder",children:Object(L.jsxs)(o.d,{children:[Object(L.jsx)(o.b,{exact:!0,path:"/",children:Object(L.jsx)(o.a,{to:"/home"})}),Object(L.jsx)(o.b,{path:"/home",component:W}),Object(L.jsx)(o.b,{path:"/menu",component:ce}),Object(L.jsx)(o.b,{path:"/error",component:ne})]})}),Object(L.jsx)(ae,{})]})})})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[74,1,2]]]);
//# sourceMappingURL=main.b0b612da.chunk.js.map