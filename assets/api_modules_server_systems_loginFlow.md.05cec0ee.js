import{_ as a,c as r,x as e,a as o,t as l,S as d,o as n}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.systems.loginFlow","description":"","frontmatter":{"title":"Athena.systems.loginFlow","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_systems_loginFlow.md","lastUpdated":1679834335000}'),s={name:"api/modules/server_systems_loginFlow.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=d('<h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/server_systems_loginFlow_FlowInfo">FlowInfo</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>(<code>name</code>, <code>weight</code>, <code>callback</code>): <code>boolean</code></p><p>Adds a flow option to the login flow.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>weight</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L24" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:24</a></p><hr><h3 id="getflow" tabindex="-1">getFlow <a class="header-anchor" href="#getflow" aria-label="Permalink to &quot;getFlow&quot;">​</a></h3><p>▸ <strong>getFlow</strong>(<code>player</code>): <code>Object</code></p><p>Return the flow that a player is currently utilizing.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>flow</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_loginFlow_FlowInfo"><code>FlowInfo</code></a>[]</td></tr><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L97" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:97</a></p><hr><h3 id="getweightedflow" tabindex="-1">getWeightedFlow <a class="header-anchor" href="#getweightedflow" aria-label="Permalink to &quot;getWeightedFlow&quot;">​</a></h3><p>▸ <strong>getWeightedFlow</strong>(): <a href="./../interfaces/server_systems_loginFlow_FlowInfo"><code>FlowInfo</code></a>[]</p><p>Returns all currently registered flow information, their weight, name, and callbacks.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/server_systems_loginFlow_FlowInfo"><code>FlowInfo</code></a>[]</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L83" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:83</a></p><hr><h3 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h3><p>▸ <strong>next</strong>(<code>player</code>): <code>any</code></p><p>Invokes the next flow for an individual player. If the array index exceeds the total amount of available registered flows. It will spawn the player.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L140" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:140</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;add&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>name</code>: <code>string</code>, <code>weight</code>: <code>number</code>, <code>callback</code>: (<code>player</code>: <code>Player</code>) =&gt; <code>void</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L177" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:177</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>name</code>: <code>string</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L178" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:178</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getWeightedFlow&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <a href="./../interfaces/server_systems_loginFlow_FlowInfo"><code>FlowInfo</code></a>[]</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L179" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:179</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getFlow&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; { <code>flow</code>: <a href="./../interfaces/server_systems_loginFlow_FlowInfo"><code>FlowInfo</code></a>[] ; <code>index</code>: <code>number</code> }</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L180" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:180</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;register&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L181" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:181</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;unregister&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L182" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:182</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override login flow functions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;next&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L183" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:183</a></p><hr><h3 id="register" tabindex="-1">register <a class="header-anchor" href="#register" aria-label="Permalink to &quot;register&quot;">​</a></h3><p>▸ <strong>register</strong>(<code>player</code>): <code>any</code></p><p>Registers a player to start a login flow. Invokes the first callable function in the weighted flow.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L111" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:111</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><p>▸ <strong>remove</strong>(<code>name</code>): <code>boolean</code></p><p>Removes weighted flow info by name.</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L63" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:63</a></p><hr><h3 id="unregister" tabindex="-1">unregister <a class="header-anchor" href="#unregister" aria-label="Permalink to &quot;unregister&quot;">​</a></h3><p>▸ <strong>unregister</strong>(<code>player</code>): <code>any</code></p><p>Unregister player flow information.</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/loginFlow.ts#L125" target="_blank" rel="noreferrer">server/systems/loginFlow.ts:125</a></p>',136);function f(t,b,g,u,y,p){return n(),r("div",null,[e("h1",i,[o(l(t.$frontmatter.title)+" ",1),c]),h])}const q=a(s,[["render",f]]);export{x as __pageData,q as default};
