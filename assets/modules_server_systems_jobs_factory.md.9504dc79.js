import{_ as e,o as t,c as a,V as r}from"./chunks/framework.7ae304b1.js";const p=JSON.parse('{"title":"FluffyVServer.systems.jobs.factory","description":"","frontmatter":{"title":"FluffyVServer.systems.jobs.factory","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_systems_jobs_factory.md","filePath":"modules/server_systems_jobs_factory.md","lastUpdated":null}'),s={name:"modules/server_systems_jobs_factory.md"},o=r('<h1 id="fluffyvserver-systems-jobs-factory" tabindex="-1">FluffyVServer.systems.jobs.factory <a class="header-anchor" href="#fluffyvserver-systems-jobs-factory" aria-label="Permalink to &quot;FluffyVServer.systems.jobs.factory&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getalljobs" tabindex="-1">getAllJobs <a class="header-anchor" href="#getalljobs" aria-label="Permalink to &quot;getAllJobs&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>getAllJobs</strong>(): <a href="./../interfaces/server_systems_jobs_interfaces_IJob"><code>IJob</code></a>[]</p></div><p>Get all available jobs.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 1:59:34 AM</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/server_systems_jobs_interfaces_IJob"><code>IJob</code></a>[]</p><p>All available jobs.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L179" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:179</a></p><hr><h3 id="getallplayerswithjob" tabindex="-1">getAllPlayersWithJob <a class="header-anchor" href="#getallplayerswithjob" aria-label="Permalink to &quot;getAllPlayersWithJob&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>getAllPlayersWithJob</strong>(<code>jobIdentifier</code>): <code>Promise</code>&lt;<code>Character</code>[]&gt;</p></div><p>Get all players with a specific <a href="./../interfaces/server_systems_jobs_interfaces_IJob">IJob</a> from the database.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 2:02:37 AM</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>jobIdentifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The identifier of the job.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>Character</code>[]&gt;</p><p>Returns all players with the specific job.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L315" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:315</a></p><hr><h3 id="getjobbyname" tabindex="-1">getJobByName <a class="header-anchor" href="#getjobbyname" aria-label="Permalink to &quot;getJobByName&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>getJobByName</strong>(<code>jobName</code>): <a href="./../interfaces/server_systems_jobs_interfaces_IJob"><code>IJob</code></a></p></div><p>Returns all data for a specific <a href="./../interfaces/server_systems_jobs_interfaces_IJob">IJob</a>.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 12:26:48 AM</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>jobName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The name of the job.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/server_systems_jobs_interfaces_IJob"><code>IJob</code></a></p><p>The job data.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L165" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:165</a></p><hr><h3 id="getonlineplayerswithjob" tabindex="-1">getOnlinePlayersWithJob <a class="header-anchor" href="#getonlineplayerswithjob" aria-label="Permalink to &quot;getOnlinePlayersWithJob&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>getOnlinePlayersWithJob</strong>(<code>jobIdentifier</code>): <code>Player</code>[]</p></div><p>Get all online players with a specific <a href="./../interfaces/server_systems_jobs_interfaces_IJob">IJob</a>.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 2:02:00 AM</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>jobIdentifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The identifier of the job.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Player</code>[]</p><p>Returns all online players with the specific job.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L289" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:289</a></p><hr><h3 id="getplayerjob" tabindex="-1">getPlayerJob <a class="header-anchor" href="#getplayerjob" aria-label="Permalink to &quot;getPlayerJob&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>getPlayerJob</strong>(<code>player</code>): <a href="./../interfaces/server_systems_jobs_interfaces_IPlayerJob"><code>IPlayerJob</code></a></p></div><p>Get the <a href="./../interfaces/server_systems_jobs_interfaces_IPlayerJob">IPlayerJob</a> for a specific player.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 1:59:51 AM</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">The player to get the job for.</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/server_systems_jobs_interfaces_IPlayerJob"><code>IPlayerJob</code></a></p><p>The job of the player.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L194" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:194</a></p><hr><h3 id="notifyjobplayers" tabindex="-1">notifyJobPlayers <a class="header-anchor" href="#notifyjobplayers" aria-label="Permalink to &quot;notifyJobPlayers&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>notifyJobPlayers</strong>(<code>jobIdentifier</code>, <code>message</code>): <code>void</code></p></div><p>Send a message to all online players with a specific <a href="./../interfaces/server_systems_jobs_interfaces_IJob">IJob</a>.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 2:24:44 AM</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>jobIdentifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The identifier of the job.</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The message to send.</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L328" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:328</a></p><hr><h3 id="setplayerjob" tabindex="-1">setPlayerJob <a class="header-anchor" href="#setplayerjob" aria-label="Permalink to &quot;setPlayerJob&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>setPlayerJob</strong>(<code>player</code>, <code>jobIdentifier</code>, <code>gradeRank</code>): <code>boolean</code></p></div><p>Sets the <a href="./../interfaces/server_systems_jobs_interfaces_IPlayerJob">IPlayerJob</a> for a specific player.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 1:40:47 PM</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">The player to set the job for.</td></tr><tr><td style="text-align:left;"><code>jobIdentifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The identifier of the job.</td></tr><tr><td style="text-align:left;"><code>gradeRank</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The rank of the grade.</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><p>Return true If the job was set successfully.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L212" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:212</a></p><hr><h3 id="setplayerjobgrade" tabindex="-1">setPlayerJobGrade <a class="header-anchor" href="#setplayerjobgrade" aria-label="Permalink to &quot;setPlayerJobGrade&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>setPlayerJobGrade</strong>(<code>player</code>, <code>gradeRank</code>): <code>boolean</code></p></div><p>Sets the <a href="./../interfaces/server_systems_jobs_interfaces_IJobGrade">IJobGrade</a> for a specific player.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 1:40:17 PM</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">The player to set the job grade for.</td></tr><tr><td style="text-align:left;"><code>gradeRank</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The rank of the grade.</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><p>Returns true If the grade was set successfully.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L253" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:253</a></p><hr><h3 id="upsertjob" tabindex="-1">upsertJob <a class="header-anchor" href="#upsertjob" aria-label="Permalink to &quot;upsertJob&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>upsertJob</strong>(<code>job</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Upserts a new job into the database or updates it.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 12:13:37 AM</p><p><strong><code>Async</code></strong></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>job</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_jobs_interfaces_IJob"><code>IJob</code></a></td><td style="text-align:left;">The job to upsert.</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Whether the upsert was successful or not.</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L140" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:140</a></p><hr><h3 id="waituntilloadingisdone" tabindex="-1">waitUntilLoadingIsDone <a class="header-anchor" href="#waituntilloadingisdone" aria-label="Permalink to &quot;waitUntilLoadingIsDone&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.jobs.factory.<strong>waitUntilLoadingIsDone</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></div><p>Function to wait until the loading of all Jobs is done.</p><p><strong><code>Date</code></strong></p><p>5/29/2023 - 12:24:11 AM</p><p><strong><code>Async</code></strong></p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/5c2bc05/src/core/plugins/fluffyvcore/server/systems/jobs/factory.ts#L119" target="_blank" rel="noreferrer">server/systems/jobs/factory.ts:119</a></p>',127),l=[o];function i(n,d,c,f,h,b){return t(),a("div",null,l)}const u=e(s,[["render",i]]);export{p as __pageData,u as default};
