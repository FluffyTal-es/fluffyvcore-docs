import{_ as a,c as n,x as e,a as s,t as o,S as l,o as r}from"./chunks/framework.74a8bdba.js";const m=JSON.parse('{"title":"Athena.controllers.interaction","description":"","frontmatter":{"title":"Athena.controllers.interaction","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/server_controllers_interaction.md","lastUpdated":null}'),c={name:"api/modules/server_controllers_interaction.md"},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=l(`<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-label="Permalink to &quot;append&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>append</strong>(<code>interaction</code>): <code>string</code></p></div><p>Add an interaction to the scene.</p><p>An interaction is where a player can walk up to an invisible marker and press the interaction key to trigger a callback.</p><p>Interactions are accessible by all players.</p><p>Additional options may be added to the example interaction below.</p><p>See type interface in VSCode for more information.</p><blockquote><p>Always subtract 1 from the &#39;z&#39; axis when getting positions in-game.</p></blockquote><p>Returns a uid or generates one if not specified.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> uid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">z</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">isPlayerOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">isVehicleOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">callback</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">player</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Player</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> interacted with an interaction!</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">uid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">the-uid-you-specified</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">z</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">isPlayerOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">isVehicleOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">callback</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">player</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Player</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> interacted with an interaction!</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>interaction</code></td><td style="text-align:left;"><code>Interaction</code></td><td style="text-align:left;">The interaction object to be added.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>A string representing the uid of the interaction.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L298" target="_blank" rel="noreferrer">server/controllers/interaction.ts:298</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>get</strong>(<code>uid</code>): <a href="./../classes/server_extensions_extColshape_InteractionShape"><code>InteractionShape</code></a> | <code>undefined</code></p></div><p>Returns interaction information.</p><p>This includes the internal ColShapes as well.</p><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> interaction </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">the-uid-you-specified</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>uid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">A unique string - The unique identifier of the interaction.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../classes/server_extensions_extColshape_InteractionShape"><code>InteractionShape</code></a> | <code>undefined</code></p><p>The InteractionShape object.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L367" target="_blank" rel="noreferrer">server/controllers/interaction.ts:367</a></p><hr><h3 id="getbindings" tabindex="-1">getBindings <a class="header-anchor" href="#getbindings" aria-label="Permalink to &quot;getBindings&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>getBindings</strong>(): <code>Object</code></p></div><p>Used to obtain current interactions that are bound to a player id.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L386" target="_blank" rel="noreferrer">server/controllers/interaction.ts:386</a></p><hr><h3 id="override" tabindex="-1">override <a class="header-anchor" href="#override" aria-label="Permalink to &quot;override&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any interaction controller function.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;append&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>interaction</code>: <code>Interaction</code>) =&gt; <code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L421" target="_blank" rel="noreferrer">server/controllers/interaction.ts:421</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any interaction controller function.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;remove&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>uid</code>: <code>string</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L422" target="_blank" rel="noreferrer">server/controllers/interaction.ts:422</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any interaction controller function.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;get&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>uid</code>: <code>string</code>) =&gt; <a href="./../classes/server_extensions_extColshape_InteractionShape"><code>InteractionShape</code></a> | <code>undefined</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L423" target="_blank" rel="noreferrer">server/controllers/interaction.ts:423</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>override</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any interaction controller function.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;getBindings&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; { <code>[player_id: string]</code>: <a href="./../classes/server_extensions_extColshape_InteractionShape"><code>InteractionShape</code></a>; }</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L424" target="_blank" rel="noreferrer">server/controllers/interaction.ts:424</a></p><hr><h3 id="overrideinternal" tabindex="-1">overrideInternal <a class="header-anchor" href="#overrideinternal" aria-label="Permalink to &quot;overrideInternal&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>overrideInternal</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal interaction controller function. Handles things such as entering colshapes, leaving, and trigger them.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;trigger&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>player</code>: <code>Player</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L436" target="_blank" rel="noreferrer">server/controllers/interaction.ts:436</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>overrideInternal</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal interaction controller function. Handles things such as entering colshapes, leaving, and trigger them.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;leave&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>colshape</code>: <a href="./../classes/server_extensions_extColshape_InteractionShape"><code>InteractionShape</code></a>, <code>entity</code>: <code>Entity</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L437" target="_blank" rel="noreferrer">server/controllers/interaction.ts:437</a></p><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>overrideInternal</strong>(<code>functionName</code>, <code>callback</code>): <code>any</code></p></div><p>Used to override any internal interaction controller function. Handles things such as entering colshapes, leaving, and trigger them.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>&quot;enter&quot;</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>colshape</code>: <a href="./../classes/server_extensions_extColshape_InteractionShape"><code>InteractionShape</code></a>, <code>entity</code>: <code>Entity</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L438" target="_blank" rel="noreferrer">server/controllers/interaction.ts:438</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.controllers.interaction.<strong>remove</strong>(<code>uid</code>): <code>void</code></p></div><p>Removes an interaction from existence.</p><p>Removes the associated ColShape as well.</p><h4 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(someUid)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">the-uid-you-specified</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>uid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">A unique string - The unique identifier of the interaction to remove.</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><p>None</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/bde990b/src/core/server/controllers/interaction.ts#L346" target="_blank" rel="noreferrer">server/controllers/interaction.ts:346</a></p>`,115);function h(t,y,u,D,b,f){return r(),n("div",null,[e("h1",i,[s(o(t.$frontmatter.title)+" ",1),p]),d])}const g=a(c,[["render",h]]);export{m as __pageData,g as default};