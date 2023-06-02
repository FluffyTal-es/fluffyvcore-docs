import{_ as e,o as t,c as a,V as l}from"./chunks/framework.7ae304b1.js";const b=JSON.parse('{"title":"FluffyVServer.systems.global","description":"","frontmatter":{"title":"FluffyVServer.systems.global","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_systems_global.md","filePath":"modules/server_systems_global.md","lastUpdated":null}'),r={name:"modules/server_systems_global.md"},s=l('<h1 id="fluffyvserver-systems-global" tabindex="-1">FluffyVServer.systems.global <a class="header-anchor" href="#fluffyvserver-systems-global" aria-label="Permalink to &quot;FluffyVServer.systems.global&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/server_systems_global_IGlobal">IGlobal</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="decrease" tabindex="-1">decrease <a class="header-anchor" href="#decrease" aria-label="Permalink to &quot;decrease&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.global.<strong>decrease</strong>(<code>key</code>, <code>decreaseByValue?</code>, <code>startValue?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Decrease the value of a key in the document by a given value</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The key of the field you want to update.</td></tr><tr><td style="text-align:left;"><code>decreaseByValue?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">The amount to decrease the value by.</td></tr><tr><td style="text-align:left;"><code>startValue</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The value to start the counter at.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/global.ts#L113" target="_blank" rel="noreferrer">server/systems/global.ts:113</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.global.<strong>get</strong>&lt;<code>IGlobal</code>&gt;(): <code>Promise</code>&lt;<code>IGlobal</code>&gt;</p></div><p>It fetches the singleton document from the database.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>IGlobal</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>IGlobal</code>&gt;</p><p>A promise of an IGlobal object.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/global.ts#L80" target="_blank" rel="noreferrer">server/systems/global.ts:80</a></p><hr><h3 id="getkey" tabindex="-1">getKey <a class="header-anchor" href="#getkey" aria-label="Permalink to &quot;getKey&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.global.<strong>getKey</strong>&lt;<code>T</code>&gt;(<code>key</code>): <code>Promise</code>&lt;<code>T</code>&gt;</p></div><p><code>get</code> returns the value of the specified key from the specified document</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The key to fetch from the database.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>T</code>&gt;</p><p>The value of the key.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/global.ts#L70" target="_blank" rel="noreferrer">server/systems/global.ts:70</a></p><hr><h3 id="increase" tabindex="-1">increase <a class="header-anchor" href="#increase" aria-label="Permalink to &quot;increase&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.global.<strong>increase</strong>(<code>key</code>, <code>increaseByValue?</code>, <code>startValue?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Increase the value of a key in a document by a given value</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The key to increase.</td></tr><tr><td style="text-align:left;"><code>increaseByValue?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">The amount to increase the value by.</td></tr><tr><td style="text-align:left;"><code>startValue?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">The value to start the counter at.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/global.ts#L90" target="_blank" rel="noreferrer">server/systems/global.ts:90</a></p><hr><h3 id="isready" tabindex="-1">isReady <a class="header-anchor" href="#isready" aria-label="Permalink to &quot;isReady&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.global.<strong>isReady</strong>(): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Checks if the Global document is ready for handling requests.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>The <code>isReady</code> function returns a <code>Promise</code> that resolves to <code>true</code> when the <code>uid</code> is defined.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/global.ts#L37" target="_blank" rel="noreferrer">server/systems/global.ts:37</a></p><hr><h3 id="setkey" tabindex="-1">setKey <a class="header-anchor" href="#setkey" aria-label="Permalink to &quot;setKey&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.global.<strong>setKey</strong>&lt;<code>T</code>&gt;(<code>key</code>, <code>value</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>It sets and overrides the value of the key in the database.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The key to set.</td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">The value to be set.</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/global.ts#L60" target="_blank" rel="noreferrer">server/systems/global.ts:60</a></p>',68),o=[s];function d(i,n,c,h,f,u){return t(),a("div",null,o)}const m=e(r,[["render",d]]);export{b as __pageData,m as default};
