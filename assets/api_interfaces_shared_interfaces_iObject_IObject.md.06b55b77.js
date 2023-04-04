import{_ as t,c as r,x as e,a as i,t as n,S as o,o as s}from"./chunks/framework.74a8bdba.js";const O=JSON.parse('{"title":"AthenaShared.interfaces.iObject.IObject","description":"","frontmatter":{"title":"AthenaShared.interfaces.iObject.IObject","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_iObject_IObject.md","lastUpdated":null}'),c={name:"api/interfaces/shared_interfaces_iObject_IObject.md"},d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),l=o('<p><a href="./../modules/shared_interfaces_iObject">shared/interfaces/iObject</a>.IObject</p><p>Used to pass object information from server to client.</p><p><strong><code>Interface</code></strong></p><p>IObject</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="dimension" tabindex="-1">dimension <a class="header-anchor" href="#dimension" aria-label="Permalink to &quot;dimension&quot;">​</a></h3><p>• <code>Optional</code> <strong>dimension</strong>: <code>number</code></p><p>Will show across all dimensions.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L60" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:60</a></p><hr><h3 id="maxdistance" tabindex="-1">maxDistance <a class="header-anchor" href="#maxdistance" aria-label="Permalink to &quot;maxDistance&quot;">​</a></h3><p>• <code>Optional</code> <strong>maxDistance</strong>: <code>number</code></p><p>The max distance this object should render at.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L53" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:53</a></p><hr><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>• <strong>model</strong>: <code>string</code></p><p>The model name this object.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L39" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:39</a></p><hr><h3 id="nocollision" tabindex="-1">noCollision <a class="header-anchor" href="#nocollision" aria-label="Permalink to &quot;noCollision&quot;">​</a></h3><p>• <code>Optional</code> <strong>noCollision</strong>: <code>boolean</code></p><p>Should this object have no collision?</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L67" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:67</a></p><hr><h3 id="pos" tabindex="-1">pos <a class="header-anchor" href="#pos" aria-label="Permalink to &quot;pos&quot;">​</a></h3><p>• <strong>pos</strong>: <code>IVector3</code></p><p>Position of the Object in a 3D space.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L32" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:32</a></p><hr><h3 id="rot" tabindex="-1">rot <a class="header-anchor" href="#rot" aria-label="Permalink to &quot;rot&quot;">​</a></h3><p>• <code>Optional</code> <strong>rot</strong>: <code>IVector3</code></p><p>The rotation of this object.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L46" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:46</a></p><hr><h3 id="subtype" tabindex="-1">subType <a class="header-anchor" href="#subtype" aria-label="Permalink to &quot;subType&quot;">​</a></h3><p>• <code>Optional</code> <strong>subType</strong>: <code>string</code></p><p>Use this parameter to help you identify what this item does on client-side.</p><p>Useful for wheel menu based functionality.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L25" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:25</a></p><hr><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>• <code>Optional</code> <strong>uid</strong>: <code>string</code></p><p>A unique identifier for this object.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/c82c34f/src/core/shared/interfaces/iObject.ts#L15" target="_blank" rel="noreferrer">shared/interfaces/iObject.ts:15</a></p>',53);function f(a,b,p,u,m,_){return s(),r("div",null,[e("h1",d,[i(n(a.$frontmatter.title)+" ",1),h]),l])}const j=t(c,[["render",f]]);export{O as __pageData,j as default};