import{_ as n,c as s,x as e,a as t,t as o,S as l,o as i}from"./chunks/framework.175b5f45.js";const b=JSON.parse('{"title":"Installing on Windows","description":"","frontmatter":{"title":"Installing on Windows","order":-97},"headers":[],"relativePath":"intro/install/installing-on-windows.md","lastUpdated":1679227477000}'),r={name:"intro/install/installing-on-windows.md"},p={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=l(`<h2 id="install-on-windows-10" tabindex="-1">Install on Windows 10+ <a class="header-anchor" href="#install-on-windows-10" aria-label="Permalink to &quot;Install on Windows 10+&quot;">​</a></h2><p>Installing on windows is very straight forward but you will need to do a handful of things to ensure your environment is setup correctly. There is a lot to cover when installing Athena but these instructions cover nearly everything you need to do in a Windows Environment to get Athena running.</p><p>Read them carefully, read them twice, and double check your steps.</p><h2 id="rules-for-for-folder-paths" tabindex="-1">Rules for for Folder Paths <a class="header-anchor" href="#rules-for-for-folder-paths" aria-label="Permalink to &quot;Rules for for Folder Paths&quot;">​</a></h2><p>This is <strong>REALLY IMPORTANT</strong> so please read carefully.</p><ul><li>No special characters in your folder path.</li><li><strong>DO NOT</strong> store Athena in a folder with brackets such as <code>[]{}()</code>.</li><li>Plain English folder paths work best <ul><li>If your Windows username contains non-english this may also be an issue.</li></ul></li></ul><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><p>You will need to install, setup, or create accounts for all of the links that are in this section.</p><ul><li><p><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Download and Install GIT</a></p><ul><li>Used to pull down and push up code changes to your repositories.</li></ul></li><li><p><a href="https://nodejs.org/en/download/current/" target="_blank" rel="noreferrer">Download and Install NodeJS 17-18</a></p><ul><li>A runtime that runs JavaScript code.</li><li>Using the incorrect version may cause issues.</li></ul></li><li><p><a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noreferrer">Download and Install MongoDB Community Server</a></p><ul><li>A NoSQL Database that is fast and easy.</li></ul></li><li><p><a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">Download and Install VSCode</a></p><ul><li>An integrated development environment for writing code and getting suggestions as you write code.</li></ul></li><li><p><a href="https://github.com/" target="_blank" rel="noreferrer">Create a GitHub Account</a></p><ul><li>GitHub will let you privately store a modified version of the Athena codebase.</li></ul></li><li><p><a href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&amp;gl=US" target="_blank" rel="noreferrer">Download Windows Terminal</a></p><ul><li>Great for inputting commands like the ones you will see in this tutorial. Highly recommended to install and pin it to your desktop somewhere.</li></ul></li></ul><h2 id="setup-ssh-key" tabindex="-1">Setup SSH Key <a class="header-anchor" href="#setup-ssh-key" aria-label="Permalink to &quot;Setup SSH Key&quot;">​</a></h2><p>You need to add an SSH key to your GitHub account.</p><ul><li><a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noreferrer">Setup SSH Key</a></li><li><a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank" rel="noreferrer">Add SSH Key</a></li></ul><p>Here&#39;s a <a href="https://www.youtube.com/watch?v=a-zX_qc2S-M" target="_blank" rel="noreferrer">video guide</a> if you need further help.</p><h2 id="ensure-mongodb-running-as-a-service" tabindex="-1">Ensure MongoDB Running as a Service <a class="header-anchor" href="#ensure-mongodb-running-as-a-service" aria-label="Permalink to &quot;Ensure MongoDB Running as a Service&quot;">​</a></h2><p>MongoDB does not have to be installed locally but if it is this is an important step. Open your Task Manager and ensure that you see MongoDB running as a service.</p><p><img src="https://i.imgur.com/mJ9FPxX.png" alt="You can check that MongoDB is running as a service by going into Task Manager &gt; Services"></p><h2 id="port-forwarding" tabindex="-1">Port Forwarding <a class="header-anchor" href="#port-forwarding" aria-label="Permalink to &quot;Port Forwarding&quot;">​</a></h2><p>Port forwarding is <strong>not required for local development</strong>. If you need other players to join and test you must open port <code>7788</code>. If you are putting the server in production mode you must open <code>7788</code>.</p><p>Here&#39;s a <code>.bat</code> script that will open both ports in your <strong>Windows Firewall.</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ECHO OFF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo Opening 7788 for TCP</span></span>
<span class="line"><span style="color:#A6ACCD;">netsh advfirewall firewall add rule name=&quot;alt:V-7788-IN-TCP&quot; dir=in action=allow protocol=TCP localport=7788</span></span>
<span class="line"><span style="color:#A6ACCD;">netsh advfirewall firewall add rule name=&quot;alt:V-7788-OUT-TCP&quot; dir=out action=allow protocol=TCP localport=7788</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo Opening 7788 for UDP</span></span>
<span class="line"><span style="color:#A6ACCD;">netsh advfirewall firewall add rule name=&quot;alt:V-7788-IN-UDP&quot; dir=in action=allow protocol=UDP localport=7788</span></span>
<span class="line"><span style="color:#A6ACCD;">netsh advfirewall firewall add rule name=&quot;alt:V-7788-OUT-UDP&quot; dir=out action=allow protocol=UDP localport=7788</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pause</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If you need additional help with port forwarding in your router you should check out this<a href="https://portforward.com/router.htm" target="_blank" rel="noreferrer"> Port Forward Website</a> where you can find instructions for your router based on brand.</p><p><em>You can verify that ports have been opened successfully after you setup the rest of Athena.</em></p><h2 id="setup-private-repo" tabindex="-1">Setup Private Repo <a class="header-anchor" href="#setup-private-repo" aria-label="Permalink to &quot;Setup Private Repo&quot;">​</a></h2><ul><li><a href="https://github.com/new" target="_blank" rel="noreferrer">Create a New Private Repository</a></li></ul><p>Leave everything as default, <strong>do not</strong> add any README files or anything else.</p><p>Make sure you navigate to the next page where there&#39;s a URL ending in <code>.git</code> at the top.</p><h3 id="clone-into-private-repository" tabindex="-1">Clone into Private Repository <a class="header-anchor" href="#clone-into-private-repository" aria-label="Permalink to &quot;Clone into Private Repository&quot;">​</a></h3><p>Open a Windows Terminal such as command line or powershell.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/Stuyk/altv-athena altv-athena-private</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Navigate into the folder through command line, or powershell.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd altv-athena-private</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Go back to the page where we created a new private repository, and COPY the URL that is located in the box at the top</p><p><img src="https://i.imgur.com/UNKxVoz.png" alt=""></p><p><em>I don&#39;t specifically mean the URL in this image, go to your private repository page and copy that URL there.</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote set-url --push THE_COPIED_URL_GOES_HERE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git add *</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git commit -m &quot;init&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git push origin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote add upstream https://github.com/Stuyk/altv-athena</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote set-url --push upstream DISABLE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote set-url --push origin THE_COPIED_URL_GOES_HERE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If you refresh the GitHub page you should see a clone of Athena inside of your private repository if you were successful.</p><h2 id="pushing-updates" tabindex="-1">Pushing updates <a class="header-anchor" href="#pushing-updates" aria-label="Permalink to &quot;Pushing updates&quot;">​</a></h2><p>When you make changes to the code base you can push it by doing:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &quot;Whatever You Changed&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="installing-dependencies" tabindex="-1">Installing Dependencies <a class="header-anchor" href="#installing-dependencies" aria-label="Permalink to &quot;Installing Dependencies&quot;">​</a></h2><p>This installs all NodeJS packages and dependencies that help run the server.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="installing-server-files" tabindex="-1">Installing Server Files <a class="header-anchor" href="#installing-server-files" aria-label="Permalink to &quot;Installing Server Files&quot;">​</a></h2><p>From this point forward you can simply run this <code>npm</code> command to update dependencies.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run update</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="starting-the-server" tabindex="-1">Starting the Server <a class="header-anchor" href="#starting-the-server" aria-label="Permalink to &quot;Starting the Server&quot;">​</a></h2><p><strong>Hey Listen,</strong> normally you start the server through altv-server.exe but <strong>we do not do that with Athena</strong>. There are other programs that run along-side Athena that allow it to function. You will need to run one of the commands below.</p><h3 id="update-the-server-cfg" tabindex="-1">Update the server.cfg <a class="header-anchor" href="#update-the-server-cfg" aria-label="Permalink to &quot;Update the server.cfg&quot;">​</a></h3><p>Do not modify the server.cfg, yes you are reading this correctly.</p><p>Instead, you should do the following.</p><p>Open 1 of the 3 configuration(s) in the <code>configs</code> folder.</p><p>You should see any of the following configurations:</p><ul><li>dev.json</li><li>devtest.json</li><li>prod.json</li></ul><p>Edit all of these but remember this very important rule.</p><p>Do not change &#39;host&#39; because 0.0.0.0 is correct.</p><h3 id="production-mode" tabindex="-1">Production Mode <a class="header-anchor" href="#production-mode" aria-label="Permalink to &quot;Production Mode&quot;">​</a></h3><p>This is the mode you should use when you are having users connect.</p><p>Enter the following in a terminal:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run windows</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="development-test-mode" tabindex="-1">Development Test Mode <a class="header-anchor" href="#development-test-mode" aria-label="Permalink to &quot;Development Test Mode&quot;">​</a></h3><p>This is the mode you should use when you are having a limited set of users connect with <code>debug</code> mode on.</p><p>Enter the following in a terminal:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run devtest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="development-mode" tabindex="-1">Development Mode <a class="header-anchor" href="#development-mode" aria-label="Permalink to &quot;Development Mode&quot;">​</a></h3><p>This is the mode you should use when you want to work on making changes. Limited to 1 user joining at a time. This should be used for all your major development. This is the fastest way to develop your game mode and requires the least amount of compile time to test things.</p><p>Enter the following in a terminal:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="checking-ports" tabindex="-1">Checking Ports <a class="header-anchor" href="#checking-ports" aria-label="Permalink to &quot;Checking Ports&quot;">​</a></h2><p>Check if the ports are currently open <strong>while the server is running</strong>. Check port <code>7788</code>.</p><p><a href="https://www.yougetsignal.com/tools/open-ports/" target="_blank" rel="noreferrer">Check Ports with YouGetSignal</a></p><h2 id="connecting" tabindex="-1">Connecting <a class="header-anchor" href="#connecting" aria-label="Permalink to &quot;Connecting&quot;">​</a></h2><p>Remember to get the <a href="https://altv.mp" target="_blank" rel="noreferrer">https://altv.mp/</a> client and connect.</p><h3 id="what-ip-to-use" tabindex="-1">What IP to use? <a class="header-anchor" href="#what-ip-to-use" aria-label="Permalink to &quot;What IP to use?&quot;">​</a></h3><p>If you are running this on your local machine you should connect to <code>127.0.0.1:7788</code> or <code>0.0.0.0:7788</code> if it does not work.</p><p>If you are running this on an external server you should connect to the server&#39;s IP address.</p><h2 id="successful-installation" tabindex="-1">Successful Installation <a class="header-anchor" href="#successful-installation" aria-label="Permalink to &quot;Successful Installation&quot;">​</a></h2><p>A successful installation and bootup will look like the following...</p><p><img src="https://i.imgur.com/NuppQyc.png" alt=""></p>`,84);function h(a,u,g,m,y,f){return i(),s("div",null,[e("h1",p,[t(o(a.$frontmatter.title)+" ",1),c]),d])}const v=n(r,[["render",h]]);export{b as __pageData,v as default};
