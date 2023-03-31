import{_ as t,c as r,x as e,a as i,t as n,S as o,o as d}from"./chunks/framework.74a8bdba.js";const _=JSON.parse('{"title":"AthenaShared.interfaces.iPed.IPed","description":"","frontmatter":{"title":"AthenaShared.interfaces.iPed.IPed","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_iPed_IPed.md","lastUpdated":null}'),s={name:"api/interfaces/shared_interfaces_iPed_IPed.md"},h={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),l=o('<p><a href="./../modules/shared_interfaces_iPed">shared/interfaces/iPed</a>.IPed</p><p>Used to pass static ped information from server to client.</p><p><strong><code>Interface</code></strong></p><p>IPed</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="animations" tabindex="-1">animations <a class="header-anchor" href="#animations" aria-label="Permalink to &quot;animations&quot;">​</a></h3><p>• <code>Optional</code> <strong>animations</strong>: <a href="./shared_interfaces_animation_Animation"><code>Animation</code></a>[]</p><p>A list of random animations to play on this pedestrian.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L51" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:51</a></p><hr><h3 id="dimension" tabindex="-1">dimension <a class="header-anchor" href="#dimension" aria-label="Permalink to &quot;dimension&quot;">​</a></h3><p>• <code>Optional</code> <strong>dimension</strong>: <code>number</code></p><p>Will show across all dimensions.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L81" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:81</a></p><hr><h3 id="heading" tabindex="-1">heading <a class="header-anchor" href="#heading" aria-label="Permalink to &quot;heading&quot;">​</a></h3><p>• <code>Optional</code> <strong>heading</strong>: <code>number</code></p><p>The rotation of this Ped. 0 - 360</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L30" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:30</a></p><hr><h3 id="isbeingcreated" tabindex="-1">isBeingCreated <a class="header-anchor" href="#isbeingcreated" aria-label="Permalink to &quot;isBeingCreated&quot;">​</a></h3><p>• <code>Optional</code> <strong>isBeingCreated</strong>: <code>boolean</code></p><p>Local Ped Info Do not automatically fill this out.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L74" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:74</a></p><hr><h3 id="local" tabindex="-1">local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;local&quot;">​</a></h3><p>• <code>Optional</code> <strong>local</strong>: <code>number</code></p><p>Local Ped ID. Do not actually fill this out.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L66" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:66</a></p><hr><h3 id="maxdistance" tabindex="-1">maxDistance <a class="header-anchor" href="#maxdistance" aria-label="Permalink to &quot;maxDistance&quot;">​</a></h3><p>• <code>Optional</code> <strong>maxDistance</strong>: <code>number</code></p><p>The max distance this Ped should render at.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L37" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:37</a></p><hr><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>• <strong>model</strong>: <code>string</code></p><p>The model name this Ped.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L23" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:23</a></p><hr><h3 id="pos" tabindex="-1">pos <a class="header-anchor" href="#pos" aria-label="Permalink to &quot;pos&quot;">​</a></h3><p>• <strong>pos</strong>: <code>IVector3</code></p><p>Position of the Ped in a 3D space.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L16" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:16</a></p><hr><h3 id="randomizeappearance" tabindex="-1">randomizeAppearance <a class="header-anchor" href="#randomizeappearance" aria-label="Permalink to &quot;randomizeAppearance&quot;">​</a></h3><p>• <code>Optional</code> <strong>randomizeAppearance</strong>: <code>boolean</code></p><p>Should the appearance of this ped be randomized when spawned?</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L58" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:58</a></p><hr><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>• <code>Optional</code> <strong>uid</strong>: <code>string</code></p><p>A unique identifier for this Ped.</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/97e73cc/src/core/shared/interfaces/iPed.ts#L44" target="_blank" rel="noreferrer">shared/interfaces/iPed.ts:44</a></p>',64);function f(a,p,b,m,u,P){return d(),r("div",null,[e("h1",h,[i(n(a.$frontmatter.title)+" ",1),c]),l])}const k=t(s,[["render",f]]);export{_ as __pageData,k as default};