import{_ as e,c as t,o as a,V as s}from"./chunks/framework.be58fd72.js";const m=JSON.parse('{"title":"Athena.systems.job.system.Job","description":"","frontmatter":{"title":"Athena.systems.job.system.Job","outline":[1,3],"order":0},"headers":[],"relativePath":"api/classes/server_systems_job_system_Job.md","lastUpdated":null}'),o={name:"api/classes/server_systems_job_system_Job.md"},r=s(`<h1 id="athena-systems-job-system-job" tabindex="-1">Athena.systems.job.system.Job <a class="header-anchor" href="#athena-systems-job-system-job" aria-label="Permalink to &quot;Athena.systems.job.system.Job&quot;">​</a></h1><p><a href="./../modules/server_systems_job_system">server/systems/job/system</a>.Job</p><p>Create a Job Instance</p><p>A job can be specified as a series of tasks to complete with specific criteria.</p><p>The complexity of a job is limited to your programming knowledge.</p><p>ie. Go to this location, interact with this thing, ensure you have this item, etc.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Never recycle the same job instance</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someJob </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Job</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Never recycle objectives between job instances</span></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">objective</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createAndAdd</span><span style="color:#A6ACCD;">(someJob</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Go to a position.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">z</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Always subtract 1 from a player position</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">criteria</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">objective</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">buildCriteria</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NO_VEHICLE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NO_WEAPON</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">range</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">objective</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">WAYPOINT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Adding a player to this job instance starts it</span></span>
<span class="line"><span style="color:#A6ACCD;">someJob</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addPlayer</span><span style="color:#A6ACCD;">(somePlayer)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Job</strong>()</p><p>Creates an instance of a job handler.</p><p>Used to build a Job for usage.</p><p>This instance should be called each time to create new job instances.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L68" target="_blank" rel="noreferrer">server/systems/job/system.ts:68</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="completedcallback" tabindex="-1">completedCallback <a class="header-anchor" href="#completedcallback" aria-label="Permalink to &quot;completedCallback&quot;">​</a></h3><p>• <code>Private</code> <strong>completedCallback</strong>: (<code>job</code>: <a href="./server_systems_job_system_Job"><code>Job</code></a>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.(<code>job</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>job</code></td><td style="text-align:left;"><a href="./server_systems_job_system_Job"><code>Job</code></a></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L56" target="_blank" rel="noreferrer">server/systems/job/system.ts:56</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>• <code>Private</code> <strong>id</strong>: <code>number</code></p><p>The ID of the player.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L51" target="_blank" rel="noreferrer">server/systems/job/system.ts:51</a></p><hr><h3 id="objectives" tabindex="-1">objectives <a class="header-anchor" href="#objectives" aria-label="Permalink to &quot;objectives&quot;">​</a></h3><p>• <code>Private</code> <strong>objectives</strong>: <code>Objective</code>[] = <code>[]</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L53" target="_blank" rel="noreferrer">server/systems/job/system.ts:53</a></p><hr><h3 id="player" tabindex="-1">player <a class="header-anchor" href="#player" aria-label="Permalink to &quot;player&quot;">​</a></h3><p>• <code>Private</code> <strong>player</strong>: <code>Player</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L52" target="_blank" rel="noreferrer">server/systems/job/system.ts:52</a></p><hr><h3 id="quitcallback" tabindex="-1">quitCallback <a class="header-anchor" href="#quitcallback" aria-label="Permalink to &quot;quitCallback&quot;">​</a></h3><p>• <code>Private</code> <strong>quitCallback</strong>: (<code>job</code>: <a href="./server_systems_job_system_Job"><code>Job</code></a>, <code>reason</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.(<code>job</code>, <code>reason</code>): <code>void</code></p></div><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>job</code></td><td style="text-align:left;"><a href="./server_systems_job_system_Job"><code>Job</code></a></td></tr><tr><td style="text-align:left;"><code>reason</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L57" target="_blank" rel="noreferrer">server/systems/job/system.ts:57</a></p><hr><h3 id="starttime" tabindex="-1">startTime <a class="header-anchor" href="#starttime" aria-label="Permalink to &quot;startTime&quot;">​</a></h3><p>• <code>Private</code> <strong>startTime</strong>: <code>number</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L55" target="_blank" rel="noreferrer">server/systems/job/system.ts:55</a></p><hr><h3 id="vehicles" tabindex="-1">vehicles <a class="header-anchor" href="#vehicles" aria-label="Permalink to &quot;vehicles&quot;">​</a></h3><p>• <code>Private</code> <strong>vehicles</strong>: { <code>uid</code>: <code>string</code> ; <code>vehicle</code>: <code>Vehicle</code> }[] = <code>[]</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L54" target="_blank" rel="noreferrer">server/systems/job/system.ts:54</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addnextobjective" tabindex="-1">addNextObjective <a class="header-anchor" href="#addnextobjective" aria-label="Permalink to &quot;addNextObjective&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>addNextObjective</strong>(<code>objectiveData</code>): <code>void</code></p></div><p>Inserts an objective to the beginning of the objectives array.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>objectiveData</code></td><td style="text-align:left;"><code>Objective</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L333" target="_blank" rel="noreferrer">server/systems/job/system.ts:333</a></p><hr><h3 id="addobjective" tabindex="-1">addObjective <a class="header-anchor" href="#addobjective" aria-label="Permalink to &quot;addObjective&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>addObjective</strong>(<code>objectiveData</code>): <code>void</code></p></div><p>Add an objective to this job. Use the objective interface to generate the objective information.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>objectiveData</code></td><td style="text-align:left;"><code>Objective</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L92" target="_blank" rel="noreferrer">server/systems/job/system.ts:92</a></p><hr><h3 id="addplayer" tabindex="-1">addPlayer <a class="header-anchor" href="#addplayer" aria-label="Permalink to &quot;addPlayer&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>addPlayer</strong>(<code>player</code>): <code>void</code></p></div><p>Add the player to the job this job and start it.</p><p>Ensure that this Job is initialized with new Job first.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L78" target="_blank" rel="noreferrer">server/systems/job/system.ts:78</a></p><hr><h3 id="addvehicle" tabindex="-1">addVehicle <a class="header-anchor" href="#addvehicle" aria-label="Permalink to &quot;addVehicle&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>addVehicle</strong>(<code>player</code>, <code>model</code>, <code>pos</code>, <code>rot</code>, <code>color1?</code>, <code>color2?</code>): <code>Vehicle</code></p></div><p>Create a unique vehicle for this job.</p><p>Objective eventually removes the job vehicle.</p><p>This unique job vehicle is temporarily assinged to the player.</p><p>Returns a vehicle with a &#39;uid&#39;.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td></tr><tr><td style="text-align:left;"><code>model</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>rot</code></td><td style="text-align:left;"><code>IVector3</code></td></tr><tr><td style="text-align:left;"><code>color1?</code></td><td style="text-align:left;"><code>RGBA</code></td></tr><tr><td style="text-align:left;"><code>color2?</code></td><td style="text-align:left;"><code>RGBA</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Vehicle</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L108" target="_blank" rel="noreferrer">server/systems/job/system.ts:108</a></p><hr><h3 id="getcurrentobjective" tabindex="-1">getCurrentObjective <a class="header-anchor" href="#getcurrentobjective" aria-label="Permalink to &quot;getCurrentObjective&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>getCurrentObjective</strong>(): <code>any</code></p></div><p>Get the current objective the player is completing.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L313" target="_blank" rel="noreferrer">server/systems/job/system.ts:313</a></p><hr><h3 id="getelapsedmilliseconds" tabindex="-1">getElapsedMilliseconds <a class="header-anchor" href="#getelapsedmilliseconds" aria-label="Permalink to &quot;getElapsedMilliseconds&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>getElapsedMilliseconds</strong>(): <code>number</code></p></div><p>Get the time since this job has started.</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L323" target="_blank" rel="noreferrer">server/systems/job/system.ts:323</a></p><hr><h3 id="getplayer" tabindex="-1">getPlayer <a class="header-anchor" href="#getplayer" aria-label="Permalink to &quot;getPlayer&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>getPlayer</strong>(): <code>Player</code></p></div><p>Get the current player that is utilizing this job instance.</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Player</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L263" target="_blank" rel="noreferrer">server/systems/job/system.ts:263</a></p><hr><h3 id="getvehicles" tabindex="-1">getVehicles <a class="header-anchor" href="#getvehicles" aria-label="Permalink to &quot;getVehicles&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>getVehicles</strong>(): { <code>uid</code>: <code>string</code> ; <code>vehicle</code>: <code>Vehicle</code> }[]</p></div><p>Return job instance vehicles</p><p><strong><code>Memberof</code></strong></p><p>Job</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>{ <code>uid</code>: <code>string</code> ; <code>vehicle</code>: <code>Vehicle</code> }[]</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L174" target="_blank" rel="noreferrer">server/systems/job/system.ts:174</a></p><hr><h3 id="gotonextobjective" tabindex="-1">goToNextObjective <a class="header-anchor" href="#gotonextobjective" aria-label="Permalink to &quot;goToNextObjective&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<code>Private</code> <strong>goToNextObjective</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Remove the first element of the objective list and move on to the next.</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L231" target="_blank" rel="noreferrer">server/systems/job/system.ts:231</a></p><hr><h3 id="loadobjectives" tabindex="-1">loadObjectives <a class="header-anchor" href="#loadobjectives" aria-label="Permalink to &quot;loadObjectives&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>loadObjectives</strong>(<code>objectiveData</code>): <code>void</code></p></div><p>Appends a list of objectives into the Job Framework.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>objectiveData</code></td><td style="text-align:left;"><code>Objective</code>[]</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L183" target="_blank" rel="noreferrer">server/systems/job/system.ts:183</a></p><hr><h3 id="quit" tabindex="-1">quit <a class="header-anchor" href="#quit" aria-label="Permalink to &quot;quit&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>quit</strong>(<code>reason</code>): <code>void</code></p></div><p>Call this to cleanup a job.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>reason</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L208" target="_blank" rel="noreferrer">server/systems/job/system.ts:208</a></p><hr><h3 id="removeallvehicles" tabindex="-1">removeAllVehicles <a class="header-anchor" href="#removeallvehicles" aria-label="Permalink to &quot;removeAllVehicles&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>removeAllVehicles</strong>(): <code>void</code></p></div><p>Remove all vehicles from this job.</p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L138" target="_blank" rel="noreferrer">server/systems/job/system.ts:138</a></p><hr><h3 id="removeattachable" tabindex="-1">removeAttachable <a class="header-anchor" href="#removeattachable" aria-label="Permalink to &quot;removeAttachable&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>removeAttachable</strong>(): <code>void</code></p></div><p>Remove the current job attachable.</p><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L272" target="_blank" rel="noreferrer">server/systems/job/system.ts:272</a></p><hr><h3 id="removevehicle" tabindex="-1">removeVehicle <a class="header-anchor" href="#removevehicle" aria-label="Permalink to &quot;removeVehicle&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>removeVehicle</strong>(<code>uid</code>): <code>void</code></p></div><p>Remove a vehicle by unique identifier assigned when adding a vehicle.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>uid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">A unique string</td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L153" target="_blank" rel="noreferrer">server/systems/job/system.ts:153</a></p><hr><h3 id="setcompletedcallback" tabindex="-1">setCompletedCallback <a class="header-anchor" href="#setcompletedcallback" aria-label="Permalink to &quot;setCompletedCallback&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>setCompletedCallback</strong>(<code>callback</code>): <code>void</code></p></div><p>Set the async callback that is called when a user completed a job.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L345" target="_blank" rel="noreferrer">server/systems/job/system.ts:345</a></p><hr><h3 id="setquitcallback" tabindex="-1">setQuitCallback <a class="header-anchor" href="#setquitcallback" aria-label="Permalink to &quot;setQuitCallback&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<strong>setQuitCallback</strong>(<code>callback</code>): <code>void</code></p></div><p>Set the callback that is called when a user quits a job.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>job</code>: <a href="./server_systems_job_system_Job"><code>Job</code></a>, <code>reason</code>: <code>string</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L355" target="_blank" rel="noreferrer">server/systems/job/system.ts:355</a></p><hr><h3 id="syncobjective" tabindex="-1">syncObjective <a class="header-anchor" href="#syncobjective" aria-label="Permalink to &quot;syncObjective&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>Athena.systems.job.system.Job.<code>Private</code> <strong>syncObjective</strong>(): <code>void</code></p></div><p>Emits data down to the player to start handling job information.</p><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-24" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-24" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/4945ccd/src/core/server/systems/job/system.ts#L286" target="_blank" rel="noreferrer">server/systems/job/system.ts:286</a></p>`,224),l=[r];function n(c,i,d,h,p,b){return a(),t("div",null,l)}const u=e(o,[["render",n]]);export{m as __pageData,u as default};