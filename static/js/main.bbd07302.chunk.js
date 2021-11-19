(this.webpackJsonpmagicnotes=this.webpackJsonpmagicnotes||[]).push([[0],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(80),i=a(79),r=a(6),o=Object(n.a)(i.a,r.a)({minHeight:"100vh",background:r.a.palette.primary.main});t.b=o;var s=Object(n.a)(i.a,r.a)({paddingTop:"30px"})},101:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(80),i=a(79),r=a(6),o=Object(n.a)(i.a,r.a)({position:"relative",background:r.a.palette.primary.main,height:"100vh","& h5":{paddingTop:"40px !important"}});t.b=o;var s=Object(n.a)(i.a,r.a)({position:"relative",background:r.a.palette.primary.main,height:"100vh","& h5":{paddingTop:"40px !important"}})},102:function(e,t,a){"use strict";var n=a(56);a.d(t,"a",(function(){return n.a}));var i=a(34);a.d(t,"b",(function(){return i.a}))},106:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i.a}));var n={title:"What am I talking about?",describe:"Nice to see you on this \u2018Waha Note\u2019 page. There is a SPA that contains information about the main characters of the \u2018Warhammer 40k\u2019 universe. It is very good if you know any information about this Universe, and I hope that this resource will be useful to you. So, this minimalistic list of notes consists of two main pages and one additional page. The first page is titled 'Note' and contains basic information such as name, description, and other information about the current person. The second block is called 'share-note' and this page acts as an archive or collection of interesting notes. Each note can be edited, deleted or sent. In the future I am going to add a filter block, more lines for the current person and maybe a few images, also I want to add user validation. Follow the news and may the will of the Emperor be with you."},i=a(34)},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(57),o=a.n(r),s=a(187),c=a(40),h=a(6),d=a(186),l=a(75),u=a(7),b=a(80),p=a(79),j=Object(b.a)(p.a,h.a)({minHeight:"100vh",margin:"5px",maxWidth:"100% !important",padding:"0 10px !important",boxSizing:"border-box",boxShadow:"0px 0px 10px ".concat(h.a.palette.primary.dark)}),f=a(12),m=Object(b.a)(p.a,h.a)({boxSizing:"border-box",margin:"0 auto",padding:"0 5px !important",marginTop:"10px",maxWidth:"100% !important",display:"flex",height:"fit-content",flexDirection:"column"}),g=a(34),x=i.a.lazy((function(){return Promise.all([a.e(3),a.e(6)]).then(a.bind(null,235))})),O=i.a.lazy((function(){return a.e(5).then(a.bind(null,237))})),v=a(21),y=a(115),C={sharedArr:[],isShared:!1,urlPath:""},S=Object(y.a)({name:"shared-reducer",initialState:C,reducers:{GET_SHARED_POST:function(e,t){e.sharedArr=[].concat(Object(v.a)(e.sharedArr),[t.payload])},GET_UPDATE_SHARED_POST:function(e,t){e.sharedArr=t.payload}}}),A=S.reducer,w=S.actions,T=w.GET_SHARED_POST,k=w.GET_UPDATE_SHARED_POST,N=function(e){return e.notesShare.sharedArr},D=a(48),H=a(16),B=function(e,t){var a,n=t;return a=e,n=n.map((function(e){return e.id===a?Object(H.a)(Object(H.a)({},e),{},{isActive:!e.isActive,isChange:!1}):Object(H.a)(Object(H.a)({},e),{},{isActive:!1,isChange:!1})}))},E=function(e,t){var a,n=t;return a=e,n=n.map((function(e){return e.id===a?Object(H.a)(Object(H.a)({},e),{},{isActive:!e.isActive,isChange:!e.isChange}):Object(H.a)(Object(H.a)({},e),{},{isActive:!1,isChange:!1})}))},M=function(e,t,a){var n,i=t;return n=e,i=i.map((function(e){return e.id===n?Object(H.a)(Object(H.a)({},e),{},{description:a,isChange:!1}):Object(H.a)(Object(H.a)({},e),{},{isChange:!1})}))},W=function(e){var t=D.b.limit,a=D.b.after;return e.slice(0,t)+a},L=function(e,t){var a=Object(v.a)(t);return 1!==a.length?a.splice(e,1):a.splice(0),a},G=function(e){localStorage.setItem("NoteData",JSON.stringify(e))},I=function(e,t){var a=t.filter((function(t){return t.id===e})),n=(new Date).toLocaleString(),i=a.map((function(e){return Object(H.a)(Object(H.a)({},e),{},{sharedTime:n})}));return Object(f.a)(i,1)[0]},z=function(e,t){return t.filter((function(t){return t.id!==e}))},F=a(2),_=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(D.c),o=Object(f.a)(r,2),s=o[0],h=o[1],d=Object(c.b)(),l=Object(c.c)(N);Object(n.useEffect)((function(){var e=function(){var e=localStorage.getItem("NoteData");return JSON.parse(e)}();e&&h(e)}),[]);return Object(n.useEffect)((function(){i(s),s.length?G(s):G(D.c)}),[s]),Object(F.jsx)(m,{children:Object(F.jsxs)(n.Suspense,{fallback:Object(F.jsx)(g.a,{}),children:[Object(F.jsx)(O,{mainNotes:a}),Object(F.jsx)(x,{handleItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,a=arguments.length>2?arguments[2]:void 0,n=a(e,t);h(n)},handleShare:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,a=I(e,t);d(T(a))},handleSaveNote:function(e,t){var a=M(e,s,t);h(a);var n=M(e,l,t);d(k(n))},handleDelete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,a=arguments.length>2?arguments[2]:void 0,n=L(e,t);h(n);var i=z(a,l);d(k(i))},chooseNote:B,sliceDescription:W,callToEditNote:E,noteList:s})]})})},P=a(192),R=a(179),K=Object(b.a)(P.a,h.a)({minHeight:"0px !important",maxHeight:"70px !important",position:"relative !important",background:"".concat(h.a.palette.primary.dark," !important"),margin:"5px 0px "}),J=Object(b.a)(R.a,h.a)({display:"flex",margin:"5px 0px",justifyContent:"center !important",flexWrap:"wrap",gap:"1rem",padding:"0 "}),U=a(112),q=a.n(U),Q=a(141),V=a(90),X=Object(b.a)(V.a,h.a)({maxWidth:"140px",justifyContent:"center",display:"flex","& *":{height:"fitContent",alignSelf:"center",justifySekf:"center",fontWeight:"400"}}),Y=Object(b.a)(V.a,h.a)({display:"flex",justifyContent:"center",flexWrap:"wrap","& h6":{margin:"5px 10px"},"& *":{transition:".5s"},"& *:hover":{background:h.a.palette.primary.light,borderRadius:"20px",transition:".5s"}}),Z=Object(b.a)(l.b,h.a)({textDecoration:"none",color:h.a.palette.secondary.dark}),$=function(){return Object(F.jsxs)(X,{style:{minHeight:"0px !important"},children:[Object(F.jsx)(q.a,{}),Object(F.jsx)(Q.a,{variant:"h6",children:"Waha Notes"})]})},ee={notes:"/notes",notFound:"/not-found",sharedNotes:"/shared-notes",about:"/about"},te=ee.notes,ae=ee.sharedNotes,ne=ee.about,ie=function(){return Object(F.jsxs)(Y,{children:[Object(F.jsx)(Z,{to:te,"data-path":te,children:Object(F.jsx)(Q.a,{variant:"h6",children:"Notes"})}),Object(F.jsx)(Z,{to:ae,"data-path":ae,children:Object(F.jsx)(Q.a,{variant:"h6",children:"SharedNotes"})}),Object(F.jsx)(Z,{to:ne,"data-path":ne,children:Object(F.jsx)(Q.a,{variant:"h6",children:"About"})})]})},re=function(){return Object(F.jsx)(K,{children:Object(F.jsxs)(J,{children:[Object(F.jsx)($,{}),Object(F.jsx)(ie,{})]})})},oe=a(185),se=a(194),ce=a(190),he=a(56),de=Object(b.a)(oe.a,h.a)({marginTop:"15px","& h5":{textAlign:"center"}}),le=(Object(b.a)(p.a,h.a)({minHeight:"100vh",background:h.a.palette.primary.main}),Object(b.a)(V.a,h.a)({display:"flex",flexDirection:"column",height:"100%",width:"100%",margin:"0",alignSelf:"center",gridTemplateColumns:"auto auto auto",justifyContent:"start",borderRadius:"7px",border:"1px solid ".concat(h.a.palette.primary.dark)})),ue=Object(b.a)(Q.a,h.a)({display:"flex",justifyContent:"center",width:"fitContent",margin:"0",color:h.a.palette.secondary.light,msJustifySelf:"start"}),be=Object(b.a)(Q.a,h.a)({maxHeight:"fitContent",color:h.a.palette.secondary.dark,fontWeight:"600",width:"fitContent",textAlign:"justify"}),pe=Object(b.a)(Q.a,h.a)({color:h.a.palette.secondary.light}),je=Object(b.a)(p.a,h.a)({paddingTop:"15px",position:"relative",minHeight:"100vh"}),fe=function(){var e=Object(c.c)(N),t=he.a.noNotes;return Object(F.jsx)(de,{container:!0,spacing:2,children:e.length?e.map((function(e){return Object(F.jsx)(oe.a,{item:!0,xs:12,children:Object(F.jsx)(se.a,{sx:{width:"100%",padding:"0px"},children:Object(F.jsxs)(le,{children:[Object(F.jsx)(ce.a,{children:Object(F.jsx)(ue,{variant:"body2",id:e.title,children:e.title})}),Object(F.jsx)(ce.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(F.jsx)(be,{variant:"body2",children:e.description})}),Object(F.jsx)(ce.a,{children:Object(F.jsxs)(pe,{variant:"body2",children:["shared ",e.sharedTime]})})]},"".concat(e.id,"sharebox"))},"".concat(e.id,"sharelist"))})})):Object(F.jsx)(oe.a,{item:!0,xs:12,children:Object(F.jsx)(je,{children:Object(F.jsx)(Q.a,{component:"h5",variant:"h5",align:"center",children:t})})})})},me=a(100),ge=a(106),xe=i.a.lazy((function(){return a.e(4).then(a.bind(null,232))})),Oe=function(){return Object(F.jsx)(me.b,{children:Object(F.jsx)(n.Suspense,{fallback:Object(F.jsx)(ge.a,{}),children:Object(F.jsx)(xe,{})})})},ve=a(101),ye=i.a.lazy((function(){return a.e(7).then(a.bind(null,233))})),Ce=a(102),Se=function(){return Object(F.jsx)(ve.b,{children:Object(F.jsx)(n.Suspense,{fallback:Object(F.jsx)(Ce.b,{}),children:Object(F.jsx)(ye,{})})})};var Ae=function(){var e=ee.notes,t=ee.notFound,a=ee.sharedNotes,n=ee.about;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(d.a,{}),Object(F.jsx)(l.a,{children:Object(F.jsxs)(j,{children:[Object(F.jsx)(re,{}),Object(F.jsxs)(u.d,{children:[Object(F.jsx)(u.b,{path:"*",element:Object(F.jsx)(u.a,{replace:!0,to:t})}),Object(F.jsx)(u.b,{path:t,element:Object(F.jsx)(Se,{})}),Object(F.jsx)(u.b,{path:e,element:Object(F.jsx)(_,{})}),Object(F.jsx)(u.b,{path:a,element:Object(F.jsx)(fe,{})}),Object(F.jsx)(u.b,{path:n,element:Object(F.jsx)(Oe,{})})]})]})})]})},we=a(18),Te=Object(we.b)({notesShare:A}),ke={notesShare:C},Ne=we.c.apply(void 0,[we.a.apply(void 0,[])].concat([])),De=Object(we.d)(Te,ke,Ne),He=document.getElementById("root");o.a.render(Object(F.jsxs)(c.a,{store:De,children:[Object(F.jsx)(s.a,{theme:h.a,children:Object(F.jsx)(Ae,{})}),","]}),He)},34:function(e,t,a){"use strict";a(0);var n=a(90),i=a(141),r=(a(137),a(2));t.a=function(){return Object(r.jsxs)(n.a,{className:"center",children:[Object(r.jsx)(i.a,{variant:"h6",children:"Loading..."}),Object(r.jsx)(n.a,{className:"loader"}),Object(r.jsx)(n.a,{})]})}},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="Select note to display",i={limit:20,after:"..."};t.c=[{id:1,title:"Abaddon the Despoiler",description:"Abaddon the Despoiler is the Warmaster of Chaos, former First Captain and now absolute leader of the Black Legion and rumored to be the clone progeny of Warmaster Horus",date:"06.11.2021 18:12:40",isActive:!1,isChange:!1,sharedTime:""},{id:2,title:"Ahzek Ahriman",description:"Ahzek Ahriman, also known as Sorcerer of the Red Cyclops and Ahriman of the Thousand Sons, is an exceptionally powerful Chaos Space Marine sorcerer belonging to the Thousand Sons legion. ",date:"09.11.2021 14:10:12",isActive:!1,isChange:!1,sharedTime:""},{id:3,title:"Fabius Bile",description:"Fabius Bile is a major antagonist in Warhammer 40,000. He is a Chaos Space Marine apothecary and former Lieutenant-Commander of the Emperors Children Traitor Legion who specializes in horrific genetic engineering and illegal cloning",date:"03.10.2021 4:19:12",isActive:!1,isChange:!1,sharedTime:""},{id:4,title:"Lucius the Eternal",description:"Lucius the Eternal is one of the most powerful champions of the Chaos God/Goddess Slaanesh and is also known as The Soulthief, Fulgrims Champion, Blade of Aeons and the Scion of Chemos.",date:"03.09.2021 7:40:14",isActive:!1,isChange:!1,sharedTime:""},{id:5,title:"Kharn the Betrayer",description:'Kharn the Betrayer is a powerful follower of Khorne. He is a formidable opponent on the battlefield for almost anyone who happens to face him (including Greater Daemons) and he and his many followers seek "Blood For The Blood God" via mass slaughter and mayhem.',date:"22.09.2021 10:18:12",isActive:!1,isChange:!1,sharedTime:""},{id:6,title:"Mephiston",description:"Mephiston is the Chief Librarian of the Blood Angels and the only Blood Angel ever to overcome the Black Rage. Before taking the name of Mephiston and the title of Lord of Death, he was originally known as Brother Calistarius",date:"22.10.2021 10:58:54",isActive:!1,isChange:!1,sharedTime:""},{id:7,title:"Gabriel Angelos",description:"Gabriel Angelos is the current Chapter Master of the Blood Ravens Space Marine Chapter and former captain of that Chapters 3rd Company. Angelos was recently responsible for slaying the Chapters former Chapter Master and Chief Librarian, Azariah Kyras, who had become a pawn of Chaos.",date:"2.09.2021 22:28:12",isActive:!1,isChange:!1,sharedTime:""},{id:8,title:"Dante",description:'Commander Dante, sometimes called the "Lord of Angels" and "Bringer of Sanguinius" Light is the current Chapter Master of the Blood Angels Space Marine Chapter, and has been the Chapter Master for 1,100 standard years.Dantes power armour incorporates a highly ornate golden death mask beneath his Iron Halo, called the Death Mask of Sanguinius, which is said to have been worn by and shaped to match the fear-inspiring features of Sanguinius, the Blood Angels primarch, at the moment of his death at the hands of the Arch-traitor Horus.',date:"21.10.2021 12:37:43",isActive:!1,isChange:!1,sharedTime:""},{id:9,title:"Kelbor-Hal",description:'Kelbor-Hal was the Fabricator-General of Mars, the political and spiritual leader of the Mechanicum and the magi of the Cult Mechanicus, during the latter days of the Great Crusade and the Horus Heresy in the early 31st Millennium. When the Heresy began he swore allegiance to the service of the Warmaster Horus and the forces of Chaos, becoming the first leader of what was later termed the "Dark Mechanicum."',date:"16.09.2021 11:11:23",isActive:!1,isChange:!1,sharedTime:""}]},56:function(e,t,a){"use strict";t.a={visit404:"Something went wrong - 404",noNotes:"There are no shared Notes",noAddedNotes:"There are no new Notes"}},6:function(e,t,a){"use strict";var n=a(89),i=Object(n.a)({palette:{primary:{main:"#eceff1",light:"#ffffff",dark:"#aebfbe"},secondary:{main:"#212121",light:"#484848",dark:"#000000"}}});t.a=i}},[[138,1,2]]]);
//# sourceMappingURL=main.bbd07302.chunk.js.map