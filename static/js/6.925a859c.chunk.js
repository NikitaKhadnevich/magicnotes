(this.webpackJsonpmagicnotes=this.webpackJsonpmagicnotes||[]).push([[6],{235:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(185),r=a(141),d=a(90),c=a(190),o=a(80),l=a(79),s=a(194),h=a(229),j=a(6),p=Object(o.a)(n.a,j.a)({marginTop:"15px !important"}),x=Object(o.a)(s.a,j.a)({display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:"fitContent",boxSizing:"border-box",borderRadius:"7px",background:j.a.palette.primary.light,outline:"2px solid ".concat(j.a.palette.primary.dark),boxShadow:"0px 0px 10px 6px ".concat(j.a.palette.primary.dark)}),b=Object(o.a)(s.a,j.a)({display:"flex",justifyContent:"center",alignItems:"center",minHeight:"140px",boxSizing:"border-box",borderRadius:"7px",background:j.a.palette.primary.main,outline:"2px solid ".concat(j.a.palette.primary.main),boxShadow:"0px 0px 15px 3px ".concat(j.a.palette.primary.main)}),u=Object(o.a)(d.a,j.a)({display:"flex",flexDirection:"column",width:"100%",margin:"0",alignSelf:"center",background:"green",maxHeight:"fitContent !importnat",overflow:"auto !important"}),m=Object(o.a)(r.a,j.a)({display:"flex",justifyContent:"center",width:"100%",margin:"0",textAlign:"center"}),O=Object(o.a)(r.a,j.a)({maxHeight:"20px",overflow:"hidden",display:"block",color:j.a.palette.primary.dark}),g=Object(o.a)(h.a,j.a)({width:"100%",maxHeight:"fitContent",margin:0,marginTop:"5px",background:j.a.palette.primary.light,display:"flex"}),f=Object(o.a)(l.a,j.a)({position:"relative",minHeight:"100vh"}),v=a(205),S=a.n(v),y=a(240),N=a(2),w=function(e){var t=e.id,a=e.handleItem,i=e.callToEditNote,n=e.noteList;return Object(N.jsx)(y.a,{"aria-label":"edit",onClick:function(){return a(t,n,i)},children:Object(N.jsx)(S.a,{})})},C=w;w.defaultProps={handleItem:"handleItem",callToEditNote:"callToEditNote",noteList:"noteList",id:"id"};var D=a(206),k=a.n(D),I=function(e){var t=e.id,a=e.noteList,i=e.handleShare;return Object(N.jsx)(y.a,{"aria-label":"edit",onClick:function(){return i(t,a)},children:Object(N.jsx)(k.a,{})})},L=I;I.defaultProps={noteList:"noteList",id:"id",handleShare:"handleShare"};var T=a(207),H=a.n(T),E=function(e){var t=e.id,a=e.handleSaveNote,i=e.updateDescription;return Object(N.jsx)(h.a,{direction:"row",spacing:.5,alignItems:"center",children:Object(N.jsx)(y.a,{id:t,"aria-label":"save",color:"primary",onClick:function(){return a(t,i)},children:Object(N.jsx)(H.a,{})})})};E.defaultProps={handleSaveNote:"handleSaveNote",updateDescription:"updateDescription",id:"id"};var P=E,A=a(208),R=a.n(A),z=function(e){var t=e.index,a=e.handleDelete,i=e.id,n=e.currentState;return Object(N.jsx)(h.a,{direction:"row",spacing:.5,alignItems:"center",children:Object(N.jsx)(y.a,{"aria-label":"delete",color:"primary",onClick:function(){return a(t,n,i)},children:Object(N.jsx)(R.a,{})})})};z.defaultProps={handleDelete:"handleDelete",index:"index",id:"id",currentState:"currentState"};var B=z,J=a(12),V=a(239),q=a(236),F=a(234),G=Object(o.a)(V.a,j.a)({height:"100%",display:"flex",width:"100%",justifyContent:"space-between !important",marginLeft:"-30px !important"}),K=Object(o.a)(V.a,j.a)({display:"flex",maxidth:"0px !important",maxHeight:"45px"}),M=Object(o.a)(F.a,j.a)({width:"100%"}),Q=function(e){var t=e.isChange,a=e.description,n=e.handleSaveNote,r=e.id,d=e.handleDelete,c=e.index,o=e.currentState,l=Object(i.useState)(a),s=Object(J.a)(l,2),h=s[0],j=s[1],p=function(e){e!==h&&e&&j(e)};return Object(N.jsx)(q.a,{in:t,children:t?Object(N.jsxs)(G,{children:[Object(N.jsx)(M,{style:{width:"100%"},label:"Note Description",defaultValue:a,multiline:!0,rows:2,variant:"standard",onChange:function(e){return p(e.target.value)}}),Object(N.jsxs)(V.a,{children:[Object(N.jsx)(P,{updateDescription:h,handleSaveNote:n,id:r}),Object(N.jsx)(B,{handleDelete:d,index:c,id:r,currentState:o})]})]}):Object(N.jsxs)(K,{children:[Object(N.jsx)(M,{label:"Note Description",defaultValue:a,multiline:!0,rows:2,variant:"standard",onChange:function(e){return p(e.target.value)}}),Object(N.jsxs)(V.a,{children:[Object(N.jsx)(P,{updateDescription:h,handleSaveNote:n,id:r}),Object(N.jsx)(B,{handleDelete:d,index:c,id:r,currentState:o})]})]})})},U=Q;Q.defaultProps={isChange:"isChange",handleSaveNote:"handleSaveNote",description:"description",id:"id",index:"index",handleDelete:"handleDelete",currentState:"currentState"};var W=a(56),X=function(e){var t=e.handleItem,a=e.handleShare,i=e.handleSaveNote,o=e.handleDelete,l=e.chooseNote,s=e.sliceDescription,h=e.callToEditNote,j=e.noteList,v=W.a.noAddedNotes;return Object(N.jsx)(p,{container:!0,spacing:2,children:j.length?j.map((function(e,p){return Object(N.jsxs)(n.a,{item:!0,xs:12,sm:6,md:4,children:[e.isActive?Object(N.jsx)(x,{onClick:function(){return t(e.id,j,l)},sx:{width:"100%",padding:"0px",cursor:"pointer"},children:Object(N.jsxs)(u,{children:[Object(N.jsx)(c.a,{children:Object(N.jsx)(m,{variant:"h6",id:e.title,children:e.title})}),Object(N.jsx)(c.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(N.jsx)(O,{variant:"body2",children:s(e.description)})}),Object(N.jsx)(c.a,{children:Object(N.jsx)(r.a,{variant:"subtitle2",children:e.date})})]},"".concat(e.id,"listbox"))},"".concat(e.id,"gridlist")):Object(N.jsx)(b,{onClick:function(){return t(e.id,j,l)},sx:{width:"100%",padding:"0px",cursor:"pointer"},children:Object(N.jsxs)(u,{children:[Object(N.jsx)(c.a,{children:Object(N.jsx)(m,{variant:"h6",id:e.title,children:e.title})}),Object(N.jsx)(c.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(N.jsx)(O,{variant:"body2",children:s(e.description)})}),Object(N.jsx)(c.a,{children:Object(N.jsx)(r.a,{variant:"subtitle2",children:e.date})})]},"".concat(e.id,"listbox"))},"".concat(e.id,"gridlist")),Object(N.jsxs)(g,{direction:"row",spacing:-3,alignItems:"flex-start",justifyContent:"flex-start",children:[Object(N.jsxs)(d.a,{style:{background:"red",maxHeight:"40px",justifyContent:"start",position:"static",margin:"0",width:"fitContent",boxShadow:"none",borderRadius:"none",outline:"none"},children:[Object(N.jsx)(C,{handleItem:t,callToEditNote:h,noteList:j,id:e.id}),Object(N.jsx)(L,{handleShare:a,noteList:j,id:e.id})]},"".concat(e.id,"edit")),Object(N.jsx)(U,{handleSaveNote:i,handleDelete:o,isChange:e.isChange,description:e.description,id:e.id,index:p,currentState:j},"".concat(e.id,"input"))]},"".concat(e.id,"buttonStack"))]})})):Object(N.jsx)(f,{children:Object(N.jsx)(r.a,{component:"h5",variant:"h5",align:"center",children:v})})})};X.defaultProps={noteList:"noteList",callToEditNote:"callToEditNote",sliceDescription:"sliceDescription",chooseNote:"chooseNote",handleItem:"handleItem",handleShare:"handleShare",handleSaveNote:"handleSaveNote",handleDelete:"handleDelete"};t.default=X}}]);
//# sourceMappingURL=6.925a859c.chunk.js.map