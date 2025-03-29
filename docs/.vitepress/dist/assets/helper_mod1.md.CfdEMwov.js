import{_ as r,a as o,b as a}from"./chunks/10.DTpHyHrX.js";import{_ as s,c as e,o as p,ag as d}from"./chunks/framework.H_OR3Abd.js";const n="/assets/1.CMJwxo_H.png",i="/assets/2.BFhbGfW8.png",m="/assets/3.CRfSUTBn.png",c="/assets/4.CMUiRug6.png",l="/assets/5.xVM-av-S.png",h="/assets/6.C6O7V06X.png",g="/assets/7.-o0OO0wf.png",H=JSON.parse('{"title":"模组前置问题","description":"","frontmatter":{"title":"模组前置问题"},"headers":[],"relativePath":"helper/mod1.md","filePath":"helper/mod1.md","lastUpdated":1743138343000}'),_={name:"helper/mod1.md"};function b(f,t,u,M,C,q){return p(),e("div",null,t[0]||(t[0]=[d('<h1 id="模组前置问题" tabindex="-1">模组前置问题 <a class="header-anchor" href="#模组前置问题" aria-label="Permalink to &quot;模组前置问题&quot;">​</a></h1><p><strong>和此篇有关的任何问题，请前往用户群询问！请不要在崩溃群询问任何有关模组前置的问题</strong></p><table tabindex="0"><thead><tr><th>用户群</th><th>群号</th><th>用户群</th><th>群号</th></tr></thead><tbody><tr><td>HMCL 用户群 ①</td><td>633640264</td><td>HMCL 用户群 ②</td><td>203232161</td></tr><tr><td>HMCL 用户群 ③</td><td>201034984</td><td>HMCL 用户群 ④</td><td>533529045</td></tr><tr><td>HMCL 用户群 ⑤</td><td>744304553</td><td>HMCL 用户群 ⑥</td><td>282845310</td></tr><tr><td>HMCL 用户群 ⑦</td><td>482624681</td><td>HMCL 用户群 ⑧</td><td>991620626</td></tr><tr><td>HMCL 用户群 ⑨</td><td>657677715</td><td>HMCL 用户群 ⑩</td><td>775084843</td></tr></tbody></table><h2 id="什么是模组前置" tabindex="-1">什么是模组前置 <a class="header-anchor" href="#什么是模组前置" aria-label="Permalink to &quot;什么是模组前置&quot;">​</a></h2><p>模组前置是为其他模组提供必要依赖库或基础功能的辅助模组，通常包含核心代码或API，确保主体模组能正常运行</p><p>若一个模组需要另一个模组作为前置，而你没有安装这个前置，极大可能会导致游戏崩溃</p><h2 id="如何下载前置" tabindex="-1">如何下载前置 <a class="header-anchor" href="#如何下载前置" aria-label="Permalink to &quot;如何下载前置&quot;">​</a></h2><h3 id="若你知道了缺失的前置的名字" tabindex="-1">若你知道了缺失的前置的名字 <a class="header-anchor" href="#若你知道了缺失的前置的名字" aria-label="Permalink to &quot;若你知道了缺失的前置的名字&quot;">​</a></h3><p>以下为HMCL崩溃群中，缺前置&quot;enderio&quot;为示例：</p><br><p><img src="'+n+'" alt="示例"></p><br><p>在<strong>绝大多数情况</strong>下，崩溃群提供的前置名一般为<strong>类名</strong>或<strong>ModID</strong>，而不是模组名称</p><p>你需要将名字在以下网站进行搜索</p><p><strong>mcmod.cn</strong> : 如果是类名或ModID：搜索出来的结果的名字不一定准确，如下图中&quot;Ender IO&quot;即为我们需要安装的模组</p><p>请注意mcmod因为搜索策略的原因，直接搜索类名或ModID可能找不到对应的模组，你需要使用下面其他的方式</p><br><p><img src="'+i+'" alt="示例"></p><br><p><strong>modrinth.com</strong> : 网站全英文，请自己使用翻译工具，但因为搜索策略的问题，搜索出的第一个模组不一定为需要安装的模组，如下图</p><br><p><img src="'+m+'" alt="示例"></p><br><p>有些情况你需要往下滑才能找到正确的模组</p><br><p><img src="'+c+'" alt="示例"></p><br><p><strong>curseforge.com</strong> : 网站全英文，请自己使用翻译工具，但有些模组在modrinth收录，在curseforge没有收录，请自行查找</p><br><p><strong>问AI</strong> ： 如今的技术如此发达，有时候问AI也是一个好的办法</p><br><p><img src="'+l+'" alt="示例"></p><br><h3 id="若你不知道缺失的前置的名字" tabindex="-1">若你不知道缺失的前置的名字 <a class="header-anchor" href="#若你不知道缺失的前置的名字" aria-label="Permalink to &quot;若你不知道缺失的前置的名字&quot;">​</a></h3><p><strong>mcmod.cn</strong> 是目前较好的查看模组前置的网站，下面以tweakeroo为例：</p><br><p><img src="'+h+'" alt="示例"></p><br><p>我们在图中即可确认tweakeroo模组需要MaLiLib作为前置</p><p><strong>问AI</strong> ： 如今的技术如此发达，有时候问AI也是一个好的办法</p><br><p><img src="'+g+'" alt="示例"></p><br><p><strong>手动查询模组需要的前置</strong> : 首先下载你需要知道的模组，此处以tweakeroo-fabric-1.20.4-0.19.3为例</p><p>下载好模组后解压，打开文件夹，打开其中的fabric.mod.json文件(记事本即可打开)</p><p>找到depends项，即可找到需要的前置以及对应的版本</p><br><p><img src="'+r+'" alt="示例"></p><br><p>forge模组以Steam_Rails-1.6.7+forge-mc1.20.1为例</p><p>下载好模组后解压，打开文件夹，打开META-INF文件夹，打开mods.toml文件，以记事本即可打开，此处使用VSC打开</p><p><img src="'+o+'" alt="示例"><img src="'+a+'" alt="示例"></p><p>我们在dependencies选项即可看到模组需要的前置以及对应版本</p><h2 id="如何安装前置" tabindex="-1">如何安装前置 <a class="header-anchor" href="#如何安装前置" aria-label="Permalink to &quot;如何安装前置&quot;">​</a></h2><p>在你下载好了正确的前置版本之后，只需要将前置模组正确添加到你游玩的游戏版本中即可</p><p>这与添加其他模组的方法是相同的，此处不在赘述，你可以通过百度搜索或前往用户群询问解决这一问题</p>',56)]))}const I=s(_,[["render",b]]);export{H as __pageData,I as default};
