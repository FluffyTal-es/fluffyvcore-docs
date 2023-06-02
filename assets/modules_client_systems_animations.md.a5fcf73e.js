import{_ as t,o as e,c as a,V as l}from"./chunks/framework.7ae304b1.js";const u=JSON.parse('{"title":"FluffyVClient.systems.animations","description":"","frontmatter":{"title":"FluffyVClient.systems.animations","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/client_systems_animations.md","filePath":"modules/client_systems_animations.md","lastUpdated":null}'),d={name:"modules/client_systems_animations.md"},n=l('<h1 id="fluffyvclient-systems-animations" tabindex="-1">FluffyVClient.systems.animations <a class="header-anchor" href="#fluffyvclient-systems-animations" aria-label="Permalink to &quot;FluffyVClient.systems.animations&quot;">​</a></h1><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><h3 id="animation-flags" tabindex="-1">ANIMATION_FLAGS <a class="header-anchor" href="#animation-flags" aria-label="Permalink to &quot;ANIMATION\\_FLAGS&quot;">​</a></h3><p>Renames and re-exports <a href="./server_config#player">player</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="loadanimation" tabindex="-1">loadAnimation <a class="header-anchor" href="#loadanimation" aria-label="Permalink to &quot;loadAnimation&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.animations.<strong>loadAnimation</strong>(<code>dict</code>, <code>count?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Attempts to load an animation dictionary multiple times before returning false.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dict</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The name of the animation dictionary.</td></tr><tr><td style="text-align:left;"><code>count?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">Do not modify this. Leave it as zero.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/animations.ts#L16" target="_blank" rel="noreferrer">client/systems/animations.ts:16</a></p><hr><h3 id="playanimation" tabindex="-1">playAnimation <a class="header-anchor" href="#playanimation" aria-label="Permalink to &quot;playAnimation&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.animations.<strong>playAnimation</strong>(<code>dict</code>, <code>name</code>, <code>flags?</code>, <code>duration?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Play an animation for the local player.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dict</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The dictionary of the animation.</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The name of the animation.</td></tr><tr><td style="text-align:left;"><code>flags?</code></td><td style="text-align:left;"><code>ANIMATION_FLAGS</code></td><td style="text-align:left;"><code>ANIMATION_FLAGS.CANCELABLE</code></td><td style="text-align:left;">A combination of flags. ie. (ANIMATION_FLAGS.CANCELABLE | ANIMATION_FLAGS.UPPERBODY_ONLY)</td></tr><tr><td style="text-align:left;"><code>duration</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>-1</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/animations.ts#L51" target="_blank" rel="noreferrer">client/systems/animations.ts:51</a></p><hr><h3 id="playpedanimation" tabindex="-1">playPedAnimation <a class="header-anchor" href="#playpedanimation" aria-label="Permalink to &quot;playPedAnimation&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.animations.<strong>playPedAnimation</strong>(<code>scriptID</code>, <code>dict</code>, <code>name</code>, <code>flags?</code>, <code>duration?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Play an animation on a Pedestrian</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scriptID</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>dict</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>flags?</code></td><td style="text-align:left;"><code>ANIMATION_FLAGS</code></td><td style="text-align:left;"><code>ANIMATION_FLAGS.CANCELABLE</code></td></tr><tr><td style="text-align:left;"><code>duration?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>-1</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/animations.ts#L87" target="_blank" rel="noreferrer">client/systems/animations.ts:87</a></p>',34),o=[n];function i(s,r,c,f,m,h){return e(),a("div",null,o)}const g=t(d,[["render",i]]);export{u as __pageData,g as default};
