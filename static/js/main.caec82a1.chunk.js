(this["webpackJsonphotel-search"]=this["webpackJsonphotel-search"]||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(26),r=a.n(n),i=(a(58),a(20)),o=(a(59),a(60),a(61),a(49)),l=a(2);var d=function(e){return Object(l.jsx)(o.a,{initialValues:"login"===e.type?{login:"",password:""}:{location:"",date:"",days:""},validate:function(t){var a={};return"login"===e.type?(t.login?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t.login)||(a.login="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0447\u0442\u044b"):a.login="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",t.password?/[\u0430-\u044f\u0451]/i.test(t.password)?a.password="\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0443":t.password.length<8&&(a.password="\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):a.password="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"):(t.location||(a.location="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),t.date||(a.date="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),t.days||(a.days="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")),a},onSubmit:function(t,a){var s,c=a.resetForm;s="login"!==e.type?t.date.split(".").reverse().join("-"):"","login"===e.type?e.formSubmit():e.formSubmit(s,t.days,t.location),c(t)},children:function(t){var a=t.values,s=t.errors,c=t.touched,n=t.handleChange,r=t.handleBlur,i=t.handleSubmit;t.status;return"login"===e.type?Object(l.jsxs)("form",{className:"form form__login",onSubmit:i,children:[Object(l.jsx)("h2",{className:"form__heading",children:"Simple Hotel Check"}),Object(l.jsx)("p",{className:"form__title ".concat(s.login&&c.login&&s.login?"form__title-error":""),children:"\u041b\u043e\u0433\u0438\u043d"}),Object(l.jsx)("input",{className:"form__input ".concat(s.login&&c.login&&s.login?"form__input-error":""),type:"email",name:"login",onChange:n,onBlur:r,value:a.login}),Object(l.jsx)("span",{className:"form__span-error",children:s.login&&c.login&&s.login}),Object(l.jsx)("p",{className:"form__title ".concat(s.password&&c.password&&s.password?"form__title-error":""),children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{className:"form__input ".concat(s.password&&c.password&&s.password?"form__input-error":""),type:"password",name:"password",onChange:n,onBlur:r,value:a.password}),Object(l.jsx)("span",{className:"form__span-error",children:s.password&&c.password&&s.password}),Object(l.jsx)("button",{className:"form__button",type:"submit",disabled:"".concat(s.login&&c.login&&s.login||s.password&&c.password&&s.password?"disabled":""),children:"\u0412\u043e\u0439\u0442\u0438"})]}):Object(l.jsxs)("form",{className:"form form__search",onSubmit:i,children:[Object(l.jsx)("p",{className:"form__title form__title_bold ".concat(s.location&&c.location&&s.location?"form__title-error":""),children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f"}),Object(l.jsx)("input",{className:"form__input ".concat(s.location&&c.location&&s.location?"form__input-error":""),type:"text",name:"location",onChange:n,onBlur:r,value:a.location}),Object(l.jsx)("span",{className:"form__span-error",children:s.location&&c.location&&s.location}),Object(l.jsx)("p",{className:"form__title form__title_bold ".concat(s.date&&c.date&&s.date?"form__title-error":""),children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f"}),Object(l.jsx)("input",{className:"form__input ".concat(s.date&&c.date&&s.date?"form__input-error":""),type:"date",name:"date",onChange:n,onBlur:r,value:a.date}),Object(l.jsx)("span",{className:"form__span-error",children:s.date&&c.date&&s.date}),Object(l.jsx)("p",{className:"form__title form__title_bold ".concat(s.days&&c.days&&s.days?"form__title-error":""),children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439"}),Object(l.jsx)("input",{className:"form__input ".concat(s.days&&c.days&&s.days?"form__input-error":""),type:"number",name:"days",onChange:n,onBlur:r,value:a.days}),Object(l.jsx)("span",{className:"form__span-error",children:s.days&&c.days&&s.days}),Object(l.jsx)("button",{className:"form__button",type:"submit",disabled:"".concat(s.location&&c.location&&s.location||s.date&&c.date&&s.date||s.days&&c.days&&s.days?"disabled":""),children:"\u041d\u0430\u0439\u0442\u0438"})]})}})};var u=function(e){return Object(l.jsx)("section",{className:"login",children:Object(l.jsx)("div",{className:"cover",children:Object(l.jsx)(d,{formSubmit:e.formSubmit,type:"login"})})})},m=(a(64),a.p+"static/media/exit_button.f65d4d55.svg"),j=a.p+"static/media/selected_switch.b59b3573.svg",h=a.p+"static/media/unselected_switch.de1f0e93.svg",b=(a(65),a.p+"static/media/active_star.e3444657.svg"),p=a.p+"static/media/inactive_star.859db9dd.svg",_=a.p+"static/media/like_active.3d60a0c0.svg",f=a.p+"static/media/like_inactive.21956604.svg",g=a(14),O="GET_HOTEL_PRICE",v="GET_HOTEL_PRICE_SUCCESS",x="ADD_TO_FAVORITES",y="REMOVE_FROM_FAVORITES",N="SORT_BY_PRICE",w="SORT_BY_STARS",S=function(e,t,a,s){return{type:O,date:e,daysDate:t,location:a,daysNumber:s}},E=function(e){return{type:v,data:e}},C=function(e){return{type:y,name:e}};var R=Object(g.b)((function(e){return{data:e}}))((function(e){var t=c.a.useState(!1),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(g.c)();function o(){var t,a=Math.round(e.price).toString().split("");return e.price&&(4===a.length?t=a[0]+" "+a[1]+a[2]+a[3]:5===a.length?t=a[0]+a[1]+" "+a[2]+a[3]+a[4]:6===a.length?t=a[0]+a[1]+a[2]+" "+a[3]+a[4]+a[5]:4===a.length&&(t=e.price)),t}function d(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}return c.a.useEffect((function(){e.data.favorites.find((function(t){return t.name===e.name}))?n(!0):n(!1)}),[e.data.favorites,e.name]),Object(l.jsxs)("div",{className:"hotel",children:[Object(l.jsx)("div",{className:"hotel__img ".concat("favorites"===e.type?"hotel__img_incative":"")}),Object(l.jsxs)("ul",{className:"hotel__list",children:[Object(l.jsxs)("li",{className:"hotel__item",children:[Object(l.jsx)("p",{className:"hotel__name",children:e.name}),Object(l.jsx)("img",{className:"like ".concat("favorites"!==e.type?"like_main":""),src:"favorites"===e.type||s?_:f,alt:"\u041b\u0430\u0439\u043a",onClick:function(){var t,a,c,i,l;"favorites"!==e.type?s?(n(!1),r(C(e.name))):(n(!0),r((t=e.name,a=e.data.dateEn,c=e.data.days,i=o(),l=e.stars,{type:x,name:t,date:a,days:c,price:i,stars:l}))):r(C(e.name))}})]}),Object(l.jsx)("li",{className:"hotel__item",children:Object(l.jsxs)("p",{className:"hotel__date",children:["favorites"!==e.type?e.data.dateEn:e.date," ",Object(l.jsx)("span",{className:"dash",children:"\u2013"})," ","favorites"!==e.type?e.data.days+" "+d(e.data.days,["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"]):e.days+" "+d(e.days,["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"])]})}),Object(l.jsxs)("li",{className:"hotel__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"hotel__star",src:e.stars>0?b:p,alt:"\u0437\u0432\u0435\u0437\u0434\u0430"}),Object(l.jsx)("img",{className:"hotel__star",src:e.stars>1?b:p,alt:"\u0437\u0432\u0435\u0437\u0434\u0430"}),Object(l.jsx)("img",{className:"hotel__star",src:e.stars>2?b:p,alt:"\u0437\u0432\u0435\u0437\u0434\u0430"}),Object(l.jsx)("img",{className:"hotel__star",src:e.stars>3?b:p,alt:"\u0437\u0432\u0435\u0437\u0434\u0430"}),Object(l.jsx)("img",{className:"hotel__star",src:e.stars>4?b:p,alt:"\u0437\u0432\u0435\u0437\u0434\u0430"})]}),Object(l.jsxs)("p",{className:"hotel__price ".concat("favorites"!==e.type?"hotel__price_main":""),children:["price:"," ",Object(l.jsxs)("span",{className:"hotel__price-number",children:["favorites"!==e.type?o():e.price,"\u20bd"]})]})]})]})]})})),k=a.p+"static/media/pointer.9998c04c.svg",D=a.p+"static/media/hard_img_1.6bbb3b72.png",F=a.p+"static/media/hard_img_2.2f721756.png",M=a.p+"static/media/hard_img_3.8f894683.png";var T=Object(g.b)((function(e){return{data:e}}))((function(e){var t,a,s=c.a.useState(""),n=Object(i.a)(s,2),r=n[0],o=n[1],u=Object(g.c)(),b=(new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1,p=(new Date).getFullYear()+"-"+b+"-"+(new Date).getDate(),_=e.dateCalculation(1);return c.a.useEffect((function(){u(S(p,_,"\u041c\u043e\u0441\u043a\u0432\u0430",1))}),[u,p,_]),Object(l.jsxs)("section",{className:"main",children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{className:"header__title",children:"Simple Hotel Check"}),Object(l.jsx)("img",{className:"header__button",onClick:e.logout,alt:"\u0412\u044b\u0439\u0442\u0438",src:m})]}),Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsxs)("div",{className:"side-bar",children:[Object(l.jsx)(d,{formSubmit:e.formSubmit}),Object(l.jsxs)("div",{className:"favorites",children:[Object(l.jsx)("h2",{className:"favorites__title",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(l.jsxs)("button",{className:"rating ".concat("rating"===r?"rating_selected":"rating_unselected"),type:"button",onClick:function(){o("rating"),u({type:w})},children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433"," ",Object(l.jsx)("img",{className:"rating__img",src:"rating"===r?j:h,alt:"\u0412\u044b\u0431\u043e\u0440"})]}),Object(l.jsxs)("button",{className:"rating ".concat("price"===r?"rating_selected":"rating_unselected"),type:"button",onClick:function(){o("price"),u({type:N})},children:["\u0426\u0435\u043d\u0430"," ",Object(l.jsx)("img",{className:"rating__img",src:"price"===r?j:h,alt:"\u0412\u044b\u0431\u043e\u0440"})]}),Object(l.jsx)("div",{className:"favorites-contain",children:e.data.favorites.length>0?e.data.favorites.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(R,{type:"favorites",date:e.date,days:e.days,name:e.name,price:e.price,stars:e.stars}),Object(l.jsx)("hr",{className:"line"})]},e.name)})):null})]})]}),Object(l.jsxs)("div",{className:"hotels",children:[Object(l.jsxs)("div",{className:"hotels__header",children:[Object(l.jsxs)("h2",{className:"hotels__title",children:["\u041e\u0442\u0435\u043b\u0438",Object(l.jsx)("img",{className:"hotels__pointer",src:k,alt:"\u0441\u0442\u0440\u0435\u043b\u043a\u0430"}),e.data.location]}),Object(l.jsx)("p",{className:"hotels__date",children:e.data.dateRu})]}),Object(l.jsx)("div",{className:"slider",children:Object(l.jsxs)("div",{className:"slide-track",children:[Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:D}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:F}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:M}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:D}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:F}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:M}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:D}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:F}),Object(l.jsx)("img",{className:"slide",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:M})]})}),Object(l.jsxs)("p",{className:"hotels_favorites",children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435:"," ",Object(l.jsx)("span",{className:"hotels_favorites hotels_favorites_bold",children:e.data.favorites.length})," ",(t=e.data.favorites.length,a=["\u043e\u0442\u0435\u043b\u044c","\u043e\u0442\u0435\u043b\u044f","\u043e\u0442\u0435\u043b\u0435\u0439"],a[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]])]}),Object(l.jsx)("div",{className:"hotels__contain",children:null!==e.data.hotels?e.data.hotels.data.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(R,{name:e.hotelName,price:e.priceFrom,stars:e.stars}),Object(l.jsx)("hr",{className:"line"})]},e.hotelId)})):null})]})]})]})})),I=a(52),B=a(53),A=a(6),J=["component"],P=function(e){var t=e.component,a=Object(B.a)(e,J);return Object(l.jsx)(A.b,{children:function(){return a.type?Object(l.jsx)(t,Object(I.a)({},a)):Object(l.jsx)(A.a,{to:"/login"})}})};var Y=function(){var e=c.a.useState(!0),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(A.g)(),r=Object(g.c)();function o(e){var t=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()).getTime(),a=new Date(t+864e5*e),s=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;return a.getFullYear()+"-"+s+"-"+a.getDate()}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");e?s(!0):e||s(!1)}),[]),Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)(A.d,{children:[Object(l.jsx)(A.b,{exact:!0,path:"/login",children:Object(l.jsx)(u,{formSubmit:function(){localStorage.setItem("jwt","test-token"),n.push("/")}})}),Object(l.jsx)(P,{path:"/",type:a,component:T,logout:function(){localStorage.removeItem("jwt"),n.push("/login")},formSubmit:function(e,t,a){r(S(e,o(t),a,t))},dateCalculation:o})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))},L=a(29),V=a(23),U=a(51),Z=a(18),G=a.n(Z),$=a(21),q=a(48),z=a.n(q),K=G.a.mark(W),Q=G.a.mark(X);function W(e){var t;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object($.b)((function(){return z.a.get("https://engine.hotellook.com/api/v2/cache.json?location=".concat(e.location,"&currency=rub&checkIn=").concat(e.date,"&checkOut=").concat(e.daysDate,"&limit=15")).then((function(e){return e}))}));case 3:return t=a.sent,a.next=6,Object($.c)(E(t));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0);case 11:case"end":return a.stop()}}),K,null,[[0,8]])}function X(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)(O,W);case 2:case"end":return e.stop()}}),Q)}var ee=G.a.mark(te);function te(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([X()]);case 2:case"end":return e.stop()}}),ee)}var ae=a(50),se={hotels:null,favorites:[],dateRu:"",dateEn:"",location:"",days:""};function ce(e){var t,a=e.split("-");switch(a[1]){case"1":return t="\u042f\u043d\u0432\u0430\u0440\u044f",a[2]+" "+t+" "+a[0];case"2":return t="\u0424\u0435\u0432\u0440\u0430\u043b\u044f",a[2]+" "+t+" "+a[0];case"3":return t="\u041c\u0430\u0440\u0442\u0430",a[2]+" "+t+" "+a[0];case"4":return t="\u0410\u043f\u0440\u0435\u043b\u044f",a[2]+" "+t+" "+a[0];case"5":return t="\u041c\u0430\u044f",a[2]+" "+t+" "+a[0];case"6":return t="\u0418\u044e\u043d\u044f",a[2]+" "+t+" "+a[0];case"7":return t="\u0418\u044e\u043b\u044f",a[2]+" "+t+" "+a[0];case"8":return t="\u0410\u0432\u0433\u0443\u0441\u0442\u0430",a[2]+" "+t+" "+a[0];case"9":return t="\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f",a[2]+" "+t+" "+a[0];case"10":return t="\u041e\u043a\u0442\u044f\u0431\u0440\u044f",a[2]+" "+t+" "+a[0];case"11":return t="\u041d\u043e\u044f\u0431\u0440\u044f",a[2]+" "+t+" "+a[0];case"12":return t="\u0414\u0435\u043a\u0430\u0431\u0440\u044f",a[2]+" "+t+" "+a[0];default:return""}}function ne(e){var t,a=e.split("-");switch(a[1]){case"1":return t="January",a[2]+" "+t+", "+a[0];case"2":return t="February",a[2]+" "+t+", "+a[0];case"3":return t="March",a[2]+" "+t+", "+a[0];case"4":return t="April",a[2]+" "+t+", "+a[0];case"5":return t="May",a[2]+" "+t+", "+a[0];case"6":return t="June",a[2]+" "+t+", "+a[0];case"7":return t="July",a[2]+" "+t+", "+a[0];case"8":return t="August",a[2]+" "+t+", "+a[0];case"9":return t="September",a[2]+" "+t+", "+a[0];case"10":return t="October",a[2]+" "+t+", "+a[0];case"11":return t="November",a[2]+" "+t+", "+a[0];case"12":return t="December",a[2]+" "+t+", "+a[0];default:return""}}var re=Object(U.a)(),ie=Object(V.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{hotels:e.hotels,favorites:e.favorites,dateRu:ce(t.date),dateEn:ne(t.date),location:t.location[0].toUpperCase()+t.location.slice(1),days:t.daysNumber};case v:return{hotels:t.data,favorites:e.favorites,dateRu:e.dateRu,dateEn:e.dateEn,location:e.location[0].toUpperCase()+e.location.slice(1),days:e.days};case x:return{hotels:e.hotels,favorites:[].concat(Object(ae.a)(e.favorites),[{name:t.name,date:t.date,days:t.days,price:t.price,stars:t.stars}]),dateRu:e.dateRu,dateEn:e.dateEn,location:e.location,days:e.days};case y:return{hotels:e.hotels,favorites:e.favorites.filter((function(e){return e.name!==t.name})),dateRu:e.dateRu,dateEn:e.dateEn,location:e.location,days:e.days};case N:return{hotels:e.hotels,favorites:e.favorites.sort((function(e,t){return Number(e.price.split(" ").join(""))-Number(t.price.split(" ").join(""))})),dateRu:e.dateRu,dateEn:e.dateEn,location:e.location,days:e.days};case w:return{hotels:e.hotels,favorites:e.favorites.sort((function(e,t){return t.stars-e.stars})),dateRu:e.dateRu,dateEn:e.dateEn,location:e.location,days:e.days};default:return e}}),Object(V.a)(re));re.run(te),r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L.a,{children:Object(l.jsx)(g.a,{store:ie,children:Object(l.jsx)(Y,{})})})}),document.getElementById("root")),H()}},[[88,1,2]]]);
//# sourceMappingURL=main.caec82a1.chunk.js.map