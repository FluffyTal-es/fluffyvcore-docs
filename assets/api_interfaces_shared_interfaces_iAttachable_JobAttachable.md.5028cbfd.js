import{_ as t,c as r,x as e,a as i,t as o,S as n,o as h}from"./chunks/framework.175b5f45.js";const A=JSON.parse('{"title":"AthenaShared.interfaces.iAttachable.JobAttachable","description":"","frontmatter":{"title":"AthenaShared.interfaces.iAttachable.JobAttachable","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/shared_interfaces_iAttachable_JobAttachable.md","lastUpdated":1679834335000}'),d={name:"api/interfaces/shared_interfaces_iAttachable_JobAttachable.md"},c={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),l=n('<p><a href="./../modules/shared_interfaces_iAttachable">shared/interfaces/iAttachable</a>.JobAttachable</p><p>Used in the attachement system when attaching objects to a player.</p><p><strong><code>Export</code></strong></p><p><strong><code>Interface</code></strong></p><p>IAttachable</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./shared_interfaces_iAttachable_default"><code>default</code></a></p><p>↳ <strong><code>JobAttachable</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="atobjectivestart" tabindex="-1">atObjectiveStart <a class="header-anchor" href="#atobjectivestart" aria-label="Permalink to &quot;atObjectiveStart&quot;">​</a></h3><p>• <code>Optional</code> <strong>atObjectiveStart</strong>: <code>boolean</code></p><p>Attach the object when the objective is loaded?</p><p><strong><code>Memberof</code></strong></p><p>JobAttachable</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L75" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:75</a></p><hr><h3 id="bone" tabindex="-1">bone <a class="header-anchor" href="#bone" aria-label="Permalink to &quot;bone&quot;">​</a></h3><p>• <strong>bone</strong>: <code>PedBone</code></p><p>Where to begin attaching the object.</p><p>If this is not defined it will be around center position of the player it is attached to.</p><p>This is a &#39;Bone ID&#39; and not a &#39;Bone Index&#39;</p><p>Use the PedBone enum provided in Athena for correct value</p><p><strong><code>Memberof</code></strong></p><p>IAttachable</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_iAttachable_default">default</a>.<a href="./shared_interfaces_iAttachable_default#bone">bone</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L51" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:51</a></p><hr><h3 id="duration" tabindex="-1">duration <a class="header-anchor" href="#duration" aria-label="Permalink to &quot;duration&quot;">​</a></h3><p>• <code>Optional</code> <strong>duration</strong>: <code>number</code></p><p>How long should this object be attached. Set this to -1 for infinite.</p><p><strong><code>Memberof</code></strong></p><p>Attachable</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L68" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:68</a></p><hr><h3 id="entityid" tabindex="-1">entityID <a class="header-anchor" href="#entityid" aria-label="Permalink to &quot;entityID&quot;">​</a></h3><p>• <code>Optional</code> <strong>entityID</strong>: <code>number</code></p><p>Do not define this. Leave it alone.</p><p><strong><code>Memberof</code></strong></p><p>IAttachable</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_iAttachable_default">default</a>.<a href="./shared_interfaces_iAttachable_default#entityID">entityID</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L58" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:58</a></p><hr><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>• <strong>model</strong>: <code>string</code></p><p>The model or object of the attachable.</p><p><strong><code>Memberof</code></strong></p><p>IAttachable</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_iAttachable_default">default</a>.<a href="./shared_interfaces_iAttachable_default#model">model</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L23" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:23</a></p><hr><h3 id="pos" tabindex="-1">pos <a class="header-anchor" href="#pos" aria-label="Permalink to &quot;pos&quot;">​</a></h3><p>• <strong>pos</strong>: <code>IVector3</code></p><p>The position where the object should be attached.</p><p><strong><code>Memberof</code></strong></p><p>IAttachable</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_iAttachable_default">default</a>.<a href="./shared_interfaces_iAttachable_default#pos">pos</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L30" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:30</a></p><hr><h3 id="rot" tabindex="-1">rot <a class="header-anchor" href="#rot" aria-label="Permalink to &quot;rot&quot;">​</a></h3><p>• <strong>rot</strong>: <code>IVector3</code></p><p>The rotation where the object should be attached.</p><p><strong><code>Memberof</code></strong></p><p>IAttachable</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_iAttachable_default">default</a>.<a href="./shared_interfaces_iAttachable_default#rot">rot</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L37" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:37</a></p><hr><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>• <code>Optional</code> <strong>uid</strong>: <code>string</code></p><p>The unique identifier for this attachable.</p><p><strong><code>Memberof</code></strong></p><p>IAttachable</p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./shared_interfaces_iAttachable_default">default</a>.<a href="./shared_interfaces_iAttachable_default#uid">uid</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/shared/interfaces/iAttachable.ts#L16" target="_blank" rel="noreferrer">shared/interfaces/iAttachable.ts:16</a></p>',86);function f(a,b,p,u,m,_){return h(),r("div",null,[e("h1",c,[i(o(a.$frontmatter.title)+" ",1),s]),l])}const q=t(d,[["render",f]]);export{A as __pageData,q as default};
