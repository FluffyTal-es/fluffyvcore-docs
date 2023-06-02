import{_ as e,o as s,c as a,V as t}from"./chunks/framework.7ae304b1.js";const h=JSON.parse('{"title":"FluffyVServer.systems.defaults.displayId","description":"","frontmatter":{"title":"FluffyVServer.systems.defaults.displayId","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_systems_defaults_displayId.md","filePath":"modules/server_systems_defaults_displayId.md","lastUpdated":null}'),l={name:"modules/server_systems_defaults_displayId.md"},o=t(`<h1 id="fluffyvserver-systems-defaults-displayid" tabindex="-1">FluffyVServer.systems.defaults.displayId <a class="header-anchor" href="#fluffyvserver-systems-defaults-displayid" aria-label="Permalink to &quot;FluffyVServer.systems.defaults.displayId&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="disable" tabindex="-1">disable <a class="header-anchor" href="#disable" aria-label="Permalink to &quot;disable&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.defaults.displayId.<strong>disable</strong>(): <code>void</code></p></div><p>Disable default id display on-screen for players.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FluffyV</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">displayId</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">disable</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/defaults/displayId.ts#L47" target="_blank" rel="noreferrer">server/systems/defaults/displayId.ts:47</a></p><hr><h3 id="setlocation" tabindex="-1">setLocation <a class="header-anchor" href="#setlocation" aria-label="Permalink to &quot;setLocation&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.defaults.displayId.<strong>setLocation</strong>(<code>x</code>, <code>y</code>): <code>void</code></p></div><p>Change the position of the on-screen id a player sees</p><p>X as 1 = Right of Screen Y as 1 = Bottom of Screen</p><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Place in the very center of the screen. I&#39;m sure everyone would love it.</span></span>
<span class="line"><span style="color:#A6ACCD;">FluffyV</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">displayId</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLocation</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0 - 1.0</td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0 - 1.0</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/defaults/displayId.ts#L69" target="_blank" rel="noreferrer">server/systems/defaults/displayId.ts:69</a></p>`,24),r=[o];function n(d,i,p,c,y,f){return s(),a("div",null,r)}const m=e(l,[["render",n]]);export{h as __pageData,m as default};
