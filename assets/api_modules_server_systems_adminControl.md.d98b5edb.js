import{_ as a,c as r,x as e,a as o,t as s,S as l,o as n}from"./chunks/framework.175b5f45.js";const g=JSON.parse('{"title":"Athena.systems.adminControl","description":"","frontmatter":{"title":"Athena.systems.adminControl","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_adminControl.md","lastUpdated":null}'),d={name:"api/modules/server_systems_adminControl.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=l('<h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><ul><li><a href="./server_systems_adminControl_Internal">Internal</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addcontrol" tabindex="-1">addControl <a class="header-anchor" href="#addcontrol" aria-label="Permalink to &quot;addControl&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.adminControl.<strong>addControl</strong>(<code>control</code>, <code>callback</code>): <code>boolean</code></p></div><p>Creates a restricted admin control function.</p><p>When a function is invoked it is automatically checked for proper permissions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>control</code></td><td style="text-align:left;"><code>AdminControl</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./server_systems_adminControl_Internal#PlayerCallback"><code>PlayerCallback</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/2226a0a/src/core/server/systems/adminControl.ts#L18" target="_blank" rel="noreferrer">server/systems/adminControl.ts:18</a></p><hr><h3 id="getcontrols" tabindex="-1">getControls <a class="header-anchor" href="#getcontrols" aria-label="Permalink to &quot;getControls&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.adminControl.<strong>getControls</strong>(<code>player</code>): <code>any</code></p></div><p>Get all admin controls available for a player.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/2226a0a/src/core/server/systems/adminControl.ts#L40" target="_blank" rel="noreferrer">server/systems/adminControl.ts:40</a></p><hr><h3 id="updatecontrols" tabindex="-1">updateControls <a class="header-anchor" href="#updatecontrols" aria-label="Permalink to &quot;updateControls&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.adminControl.<strong>updateControls</strong>(<code>player</code>): <code>void</code></p></div><p>Parses controls and pushes them down to the client. Updating their control list.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/2226a0a/src/core/server/systems/adminControl.ts#L63" target="_blank" rel="noreferrer">server/systems/adminControl.ts:63</a></p>',35);function m(t,p,u,b,f,y){return n(),r("div",null,[e("h1",i,[o(s(t.$frontmatter.title)+" ",1),c]),h])}const k=a(d,[["render",m]]);export{g as __pageData,k as default};
