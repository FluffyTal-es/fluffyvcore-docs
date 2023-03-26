import{_ as a,c as r,x as e,a as n,t as o,S as s,o as l}from"./chunks/framework.175b5f45.js";const g=JSON.parse('{"title":"AthenaShared.interfaces.eventCall.EventCall","description":"","frontmatter":{"title":"AthenaShared.interfaces.eventCall.EventCall","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_eventCall_EventCall.md","lastUpdated":1679834335000}'),i={name:"api/interfaces/shared_interfaces_eventCall_EventCall.md"},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=s('<p><a href="./../modules/shared_interfaces_eventCall">shared/interfaces/eventCall</a>.EventCall</p><p>Used in the job system to invoke various detached events.</p><p><strong><code>Export</code></strong></p><p><strong><code>Interface</code></strong></p><p>EventCall</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="callatstart" tabindex="-1">callAtStart <a class="header-anchor" href="#callatstart" aria-label="Permalink to &quot;callAtStart&quot;">​</a></h3><p>• <code>Optional</code> <strong>callAtStart</strong>: <code>boolean</code></p><p>Used to call an event right when an objective is started. Only useful for the job system.</p><p><strong><code>Memberof</code></strong></p><p>EventCall</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/eventCall.ts#L34" target="_blank" rel="noreferrer">shared/interfaces/eventCall.ts:34</a></p><hr><h3 id="eventname" tabindex="-1">eventName <a class="header-anchor" href="#eventname" aria-label="Permalink to &quot;eventName&quot;">​</a></h3><p>• <strong>eventName</strong>: <code>string</code></p><p>The name of the event to call. ie. &#39;openTrunk&#39;</p><p><strong><code>Memberof</code></strong></p><p>EventCall</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/eventCall.ts#L15" target="_blank" rel="noreferrer">shared/interfaces/eventCall.ts:15</a></p><hr><h3 id="isserver" tabindex="-1">isServer <a class="header-anchor" href="#isserver" aria-label="Permalink to &quot;isServer&quot;">​</a></h3><p>• <strong>isServer</strong>: <code>boolean</code></p><p>Does this event get emitted to the server? Only useful for client-side.</p><p>Use alt.on to get this event if set to false. Must be entirely client-side or entirely server-side if false.</p><p><strong><code>Memberof</code></strong></p><p>EventCall</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/eventCall.ts#L26" target="_blank" rel="noreferrer">shared/interfaces/eventCall.ts:26</a></p>',30);function p(t,f,v,_,b,m){return l(),r("div",null,[e("h1",d,[n(o(t.$frontmatter.title)+" ",1),c]),h])}const C=a(i,[["render",p]]);export{g as __pageData,C as default};
