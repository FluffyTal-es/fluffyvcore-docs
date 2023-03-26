import{_ as a,c as r,x as e,a as s,t as o,S as i,o as d}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"AthenaClient.streamers.item","description":"","frontmatter":{"title":"AthenaClient.streamers.item","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_streamers_item.md","lastUpdated":null}'),l={name:"api/modules/client_streamers_item.md"},n={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="createddrop" tabindex="-1">CreatedDrop <a class="header-anchor" href="#createddrop" aria-label="Permalink to &quot;CreatedDrop&quot;">​</a></h3><p>Ƭ <strong>CreatedDrop</strong>: <a href="./server_config#player"><code>player</code></a> &amp; { <code>createdObject?</code>: <code>alt.Object</code> }</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/streamers/item.ts#L8" target="_blank" rel="noreferrer">client/streamers/item.ts:8</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getclosest" tabindex="-1">getClosest <a class="header-anchor" href="#getclosest" aria-label="Permalink to &quot;getClosest&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.streamers.item.<strong>getClosest</strong>(): <a href="./server_config#player"><code>player</code></a>[]</p></div><p>Return an array of items that are closest to the player.</p><p><strong><code>Static</code></strong></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./server_config#player"><code>player</code></a>[]</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/streamers/item.ts#L132" target="_blank" rel="noreferrer">client/streamers/item.ts:132</a></p><hr><h3 id="getdropped" tabindex="-1">getDropped <a class="header-anchor" href="#getdropped" aria-label="Permalink to &quot;getDropped&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.streamers.item.<strong>getDropped</strong>(<code>id</code>): <a href="./client_streamers_item#CreatedDrop"><code>CreatedDrop</code></a> | <code>undefined</code></p></div><p>Determine if this alt.Object is an item drop.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./client_streamers_item#CreatedDrop"><code>CreatedDrop</code></a> | <code>undefined</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/streamers/item.ts#L161" target="_blank" rel="noreferrer">client/streamers/item.ts:161</a></p><hr><h3 id="setdefaultdropmodel" tabindex="-1">setDefaultDropModel <a class="header-anchor" href="#setdefaultdropmodel" aria-label="Permalink to &quot;setDefaultDropModel&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.streamers.item.<strong>setDefaultDropModel</strong>(<code>model</code>): <code>void</code></p></div><p>Overrides the default model for item drops. By default it is a cardboard box.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>model</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/streamers/item.ts#L142" target="_blank" rel="noreferrer">client/streamers/item.ts:142</a></p><hr><h3 id="setdefaultmaxdistance" tabindex="-1">setDefaultMaxDistance <a class="header-anchor" href="#setdefaultmaxdistance" aria-label="Permalink to &quot;setDefaultMaxDistance&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>AthenaClient.streamers.item.<strong>setDefaultMaxDistance</strong>(<code>distance?</code>): <code>void</code></p></div><p>Set the maximum distance a player can see item drops.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>distance?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>5</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/streamers/item.ts#L151" target="_blank" rel="noreferrer">client/streamers/item.ts:151</a></p>',44);function m(t,p,u,f,b,g){return d(),r("div",null,[e("h1",n,[s(o(t.$frontmatter.title)+" ",1),c]),h])}const y=a(l,[["render",m]]);export{x as __pageData,y as default};
