(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{300:function(e,t,n){},301:function(e,t,n){e.exports={UserPhoto:"UserElement_UserPhoto__1YiJQ"}},302:function(e,t,n){e.exports={currentPage:"Paginator_currentPage__333nY"}},309:function(e,t,n){"use strict";n.r(t);var a=n(28),o=n(29),l=n(31),r=n(30),c=n(0),s=n.n(c),i=n(12),u=n(62),g=(n(300),n(301)),m=n.n(g),f=n(46),p=n.n(f),h=n(11),b=s.a.memo((function(e){var t=e.user,n=e.followIsProgressing,a=e.FollowOrUnfollow;return s.a.createElement("div",null,s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement(h.b,{to:"/profile/"+t.id},s.a.createElement("img",{className:m.a.UserPhoto,src:null===t.photos.large?p.a:t.photos.large}))),s.a.createElement("div",null,t.followed?s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,!1)}},"Unfollow"):s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,!0)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null," ",t.status)),s.a.createElement("span",null,s.a.createElement("div",null,"\u041c\u043e\u0441\u043a\u0432\u0430"),s.a.createElement("div",null,"\u0420\u043e\u0441\u0441\u0438\u044f"))))})),d=n(56),E=n(302),O=n.n(E),j=s.a.memo((function(e){var t=e.onPageChanged,n=e.totalItems,a=e.pageSize,o=Math.ceil(n/a),l=Object(i.c)(),r=Object(i.d)((function(e){return e.UsersPage.currentPage})),g=Object(c.useCallback)((function(e){l(Object(u.d)(e))}),[l]);Object(c.useEffect)((function(){t(r)}),[r,t]);for(var m=Object(c.useState)(1),f=Object(d.a)(m,2),p=f[0],h=f[1],b=Object(c.useState)(10),E=Object(d.a)(b,2),j=E[0],v=E[1],w=[],P=p;P<=j&&(w.push(P),!(P>=o));P++);return s.a.createElement("div",null,1===p?null:s.a.createElement("span",null,s.a.createElement("button",{onClick:p>1&&function(){v(10),h(1),g(1)}},"back"),s.a.createElement("button",{onClick:p>1&&function(){g(p-10),v(j-10),h(p-10)}},"\u2190")),w.map((function(e){return s.a.createElement("button",{onClick:function(){g(e)},className:r===e&&O.a.currentPage},e)})),s.a.createElement("button",{onClick:j<o&&function(){g(p+10),v(j+10),h(p+10)}},"\u2192"),s.a.createElement("button",{onClick:j<o&&function(){h(o-10),v(o),g(o-10)}},"next"))})),v=n(74),w=function(e){return s.a.createElement("div",null,s.a.createElement(j,{onPageChanged:e.onPageChanged,totalItems:e.totalUsersCount,pageSize:e.pageSize}),e.isFetching?s.a.createElement(v.a,null):e.users.map((function(t){return s.a.createElement(b,{key:t.id,user:t,toggleFollow:e.toggleFollow,followIsProgressing:e.followIsProgressing,FollowOrUnfollow:e.FollowOrUnfollow})})))},P=n(8),C=n(137),U=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;0===this.props.users.length&&this.props.requestUsers(t,n)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(w,Object.assign({},this.props,{onPageChanged:this.onPageChanged,changeSizeToRight:this.changeSizeToRight,changeSizeToLeft:this.changeSizeToLeft,isFetching:this.props.isFetching})))}}]),n}(s.a.Component);t.default=Object(P.d)(Object(i.b)((function(e){return{users:Object(C.f)(e),pageSize:Object(C.d)(e),totalUsersCount:Object(C.e)(e),isFetching:Object(C.c)(e),followIsProgressing:Object(C.b)(e)}}),{requestUsers:u.c,FollowOrUnfollow:u.a}))(U)}}]);
//# sourceMappingURL=3.86e85575.chunk.js.map