(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{310:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),l=t(37),m=t(42),u=t(138),o=t(25),p=t(53),s=t.n(p),i=t(32),h=function(e){var a=Object(m.a)("input");return c.a.createElement("div",{className:s.a.CaptchaControl},c.a.createElement("span",{className:s.a.CaptchaSpan},"Write captcha"),c.a.createElement("img",{className:s.a.CaptchaImg,src:e.CaptchaImg}),Object(i.a)("captcha",[],a,"Enter captcha",{className:s.a.CaptchaInput}))},b=Object(m.a)("input"),E=Object(u.a)({form:"login"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},Object(i.a)("email",[o.b],b,"Enter your email",null),Object(i.a)("password",[o.b],b,"Enter your password",null),Object(i.a)("rememberMe",null,b,null,{type:"checkbox"},"rememberMe"),e.error&&"Incorrect anti-bot symbols"!==e.error&&c.a.createElement("div",{className:s.a.someoneError},c.a.createElement("span",null,e.error)),""!==e.CaptchaImg?c.a.createElement(h,{CaptchaImg:e.CaptchaImg}):null,c.a.createElement("div",null,c.a.createElement("button",null,"LOG IN")))})),g=t(10);a.default=Object(r.b)((function(e){return{isAuth:e.Auth.isAuth,CaptchaImg:e.Auth.CaptchaImg}}),{authLogin:l.c})((function(e){return e.isAuth?c.a.createElement(g.a,{to:"/"}):c.a.createElement("div",null,c.a.createElement("h1",null,"LOGIN"),c.a.createElement(E,{CaptchaImg:e.CaptchaImg,onSubmit:function(a){console.log(a),e.authLogin(a.email,a.password,a.rememberMe,a.captcha)}}))}))}}]);
//# sourceMappingURL=8.2b8291c1.chunk.js.map