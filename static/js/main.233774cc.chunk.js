(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(6),o=n.n(i),s=(n(31),n(4)),r=(n.p,n(32),n(7)),l=n.n(r),d=n(22),h=a.a.createContext(),j=n(8),u=n.n(j),b=n(1);function v(){return(v=Object(d.a)(l.a.mark((function e(t,n,c){var a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.name?n.name:n.title,e.next=3,u()(a,{id:!0});case 3:i=e.sent,console.log("handleClick",i,a),c.setModalOpen(!0),c.setModalMovie(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){var t=e.movie,n=e.isLargeRow,a=Object(c.useContext)(h);return console.log("contexttt",a),Object(b.jsxs)("div",{className:"col",onClick:function(e){return function(e,t,n){return v.apply(this,arguments)}(e,t,a)},children:[Object(b.jsx)("img",{className:"image",src:"https://image.tmdb.org/t/p/original/".concat(n?t.poster_path:t.backdrop_path)}),Object(b.jsx)("div",{className:"movie-title",children:t.name?t.name:t.title})]})},g=n(23),p=n.n(g).a.create({baseURL:"https://api.themoviedb.org/3"}),O=n(11),m=a.a.createContext();var x=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),o=Object(s.a)(i,2),r=o[0],l=o[1];return Object(c.useEffect)((function(){p.get(n).then((function(e){l(e.data.results)}))}),[n]),console.log("RowCOntext",n),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"cat-title",children:Object(b.jsx)("h1",{children:t})}),Object(b.jsx)("div",{className:"row",children:r.length>0?r.map((function(e,t){return Object(b.jsx)(f,{movie:e,isLargeRow:a},t)})):null})]})};var w=function(){var e=Object(c.useContext)(m);return console.log("ddwsdwwdw",e),Object(b.jsx)("header",{style:{background:"url(https://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")")},className:"banner",children:Object(b.jsxs)("div",{className:"banner-contents",children:[Object(b.jsx)("div",{className:"banner-title",children:e.name}),Object(b.jsx)("button",{className:"banner-button",children:"Play"}),Object(b.jsx)("button",{className:"banner-button",children:"My list"}),Object(b.jsx)("div",{className:"banner-desciption",children:e.overview})]})})},k="9231db9a28420c80df01d3b88b3db4e7",_={fetchTrending:"/trending/all/week?api_key=".concat(k,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(k,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(k,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(k,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(k,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(k,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(k,"&with_genres=10749"),fetchDocumentariesMovies:"/discover/movie?api_key=".concat(k,"&with_genres=99")},N=(n(73),n(26));var y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),r=o[0],l=o[1],d=Object(c.useState)(null),j=Object(s.a)(d,2),v=j[0],f=j[1];return Object(c.useEffect)((function(){p.get(_.fetchNetflixOriginals).then((function(e){var t=Math.floor(Math.random()*(e.data.results.length-1));console.log("random ",t),a(e.data.results[t]),u()("Oceans Eleven").then((function(e){return console.log("response",e)}))}))}),[]),console.log("App.js"),Object(b.jsxs)("div",{className:"App",children:["Netflix clone",Object(b.jsx)(m.Provider,{value:n,children:Object(b.jsx)(w,{})}),Object(b.jsxs)(h.Provider,{value:{setModalMovie:f,setModalOpen:l},children:[Object(b.jsx)(x,{title:"Top Netflix Originals",fetchUrl:_.fetchNetflixOriginals,isLargeRow:!0,data:!0}),Object(b.jsx)(x,{title:"Top Trending",fetchUrl:_.fetchTrending}),Object(b.jsx)(x,{title:"Top Rated",fetchUrl:_.fetchTopRated})]}),Object(b.jsx)(N.a,{open:r,onClose:function(){return l(!1)},children:Object(b.jsx)(O.a,{videoId:v})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),M()}},[[74,1,2]]]);
//# sourceMappingURL=main.233774cc.chunk.js.map