import{_ as a,c as o,x as e,a as r,t as l,S as d,o as n}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"Athena.vehicle.controls","description":"","frontmatter":{"title":"Athena.vehicle.controls","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_vehicle_controls.md","lastUpdated":1679834335000}'),c={name:"api/modules/server_vehicle_controls.md"},i={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=d('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="islocked" tabindex="-1">isLocked <a class="header-anchor" href="#islocked" aria-label="Permalink to &quot;isLocked&quot;">​</a></h3><p>▸ <strong>isLocked</strong>(<code>vehicle</code>): <code>boolean</code></p><p>Returns true if the vehicle is currently locked.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L84" target="_blank" rel="noreferrer">server/vehicle/controls.ts:84</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override vehicle control functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toggleLock&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L168" target="_blank" rel="noreferrer">server/vehicle/controls.ts:168</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override vehicle control functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toggleDoor&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>, <code>door</code>: <code>0</code> | <code>3</code> | <code>2</code> | <code>1</code> | <code>4</code> | <code>5</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L169" target="_blank" rel="noreferrer">server/vehicle/controls.ts:169</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override vehicle control functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;toggleEngine&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L170" target="_blank" rel="noreferrer">server/vehicle/controls.ts:170</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override vehicle control functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;update&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L171" target="_blank" rel="noreferrer">server/vehicle/controls.ts:171</a></p><p>▸ <strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p><p>Used to override vehicle control functionality</p><p><strong><code>Export</code></strong></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;isLocked&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>vehicle</code>: <code>Vehicle</code>) =&gt; <code>boolean</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L172" target="_blank" rel="noreferrer">server/vehicle/controls.ts:172</a></p><hr><h3 id="toggledoor" tabindex="-1">toggleDoor <a class="header-anchor" href="#toggledoor" aria-label="Permalink to &quot;toggleDoor&quot;">​</a></h3><p>▸ <strong>toggleDoor</strong>(<code>vehicle</code>, <code>door</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Toggles a vehicle door.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr><tr><td style="text-align:left;"><code>door</code></td><td style="text-align:left;"><code>0</code> | <code>3</code> | <code>2</code> | <code>1</code> | <code>4</code> | <code>5</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>The new state of the door. true = open</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L63" target="_blank" rel="noreferrer">server/vehicle/controls.ts:63</a></p><hr><h3 id="toggleengine" tabindex="-1">toggleEngine <a class="header-anchor" href="#toggleengine" aria-label="Permalink to &quot;toggleEngine&quot;">​</a></h3><p>▸ <strong>toggleEngine</strong>(<code>vehicle</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Toggles a vehicle engine.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>The new state of the engine. true = on</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L35" target="_blank" rel="noreferrer">server/vehicle/controls.ts:35</a></p><hr><h3 id="togglelock" tabindex="-1">toggleLock <a class="header-anchor" href="#togglelock" aria-label="Permalink to &quot;toggleLock&quot;">​</a></h3><p>▸ <strong>toggleLock</strong>(<code>vehicle</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Toggles a vehicle door lock.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>The new state of the lock. true = locked</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L13" target="_blank" rel="noreferrer">server/vehicle/controls.ts:13</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <strong>update</strong>(<code>vehicle</code>): <code>any</code></p><p>Update the given vehicle in the database.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L99" target="_blank" rel="noreferrer">server/vehicle/controls.ts:99</a></p><hr><h3 id="updatelastused" tabindex="-1">updateLastUsed <a class="header-anchor" href="#updatelastused" aria-label="Permalink to &quot;updateLastUsed&quot;">​</a></h3><p>▸ <strong>updateLastUsed</strong>(<code>vehicle</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Update the vehicle&#39;s last used value.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td><td style="text-align:left;">An alt:V Vehicle Entity</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/vehicle/controls.ts#L149" target="_blank" rel="noreferrer">server/vehicle/controls.ts:149</a></p>',115);function f(t,b,u,p,g,m){return n(),o("div",null,[e("h1",i,[r(l(t.$frontmatter.title)+" ",1),s]),h])}const v=a(c,[["render",f]]);export{x as __pageData,v as default};
