


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>QUnit-to-JsTestDriver-adapter/QUnitAdapter.tests.js at master · exnor/QUnit-to-JsTestDriver-adapter</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe17.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="495517" name="octolytics-actor-id" /><meta content="chrislaughlin" name="octolytics-actor-login" /><meta content="eb4227a63c42a80a21aadbabee10bb3f8c6ce41796a7994211bd6350f290e659" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="vmWwcERpOFO4sGdBjW1jEdd/SglaQOtnAnLgXuoKtPs=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-7fa78c4fe7b5df12714028525116e8696e587c1f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-27344f3be2108122f35c75101081563094420059.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-d3008e616d3b9f4112995c08deb6c468ad36fa91.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="c5bb64024e20327545b4552c2f528741">

        <link data-pjax-transient rel='permalink' href='/exnor/QUnit-to-JsTestDriver-adapter/blob/81a1db5574fbacadb0b89b8f109e8c5694209a8f/QUnitAdapter.tests.js'>
  <meta property="og:title" content="QUnit-to-JsTestDriver-adapter"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/exnor/QUnit-to-JsTestDriver-adapter"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="QUnit-to-JsTestDriver-adapter - Qunit Adapter provides a small wrapper for JsTestRunner to run QUnit tests"/>

  <meta name="description" content="QUnit-to-JsTestDriver-adapter - Qunit Adapter provides a small wrapper for JsTestRunner to run QUnit tests" />

  <meta content="729240" name="octolytics-dimension-user_id" /><meta content="exnor" name="octolytics-dimension-user_login" /><meta content="2389617" name="octolytics-dimension-repository_id" /><meta content="exnor/QUnit-to-JsTestDriver-adapter" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2389617" name="octolytics-dimension-repository_network_root_id" /><meta content="exnor/QUnit-to-JsTestDriver-adapter" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/exnor/QUnit-to-JsTestDriver-adapter/commits/master.atom" rel="alternate" title="Recent Commits to QUnit-to-JsTestDriver-adapter:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="chrislaughlin"
      data-repo="exnor/QUnit-to-JsTestDriver-adapter"
      data-branch="master"
      data-sha="7a816c3361b7ab645a6c544ead381355c7c653da"
  >

    <input type="hidden" name="nwo" value="exnor/QUnit-to-JsTestDriver-adapter" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/chrislaughlin" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/2ff062148633bce06aa972be0ff1c244?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> chrislaughlin
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings "
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="exnor/QUnit-to-JsTestDriver-adapter">This repository</span>
    </li>
    <li>
      <a href="/exnor/QUnit-to-JsTestDriver-adapter/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="vmWwcERpOFO4sGdBjW1jEdd/SglaQOtnAnLgXuoKtPs=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2389617" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/exnor/QUnit-to-JsTestDriver-adapter/watchers">
          2
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/exnor/QUnit-to-JsTestDriver-adapter/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/exnor/QUnit-to-JsTestDriver-adapter/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/exnor/QUnit-to-JsTestDriver-adapter/stargazers">8</a>
</div>

  </li>


        <li>
          <a href="/exnor/QUnit-to-JsTestDriver-adapter/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/exnor/QUnit-to-JsTestDriver-adapter/network" class="social-count">4</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/exnor" class="url fn" itemprop="url" rel="author"><span itemprop="title">exnor</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/exnor/QUnit-to-JsTestDriver-adapter" class="js-current-repository js-repo-home-link">QUnit-to-JsTestDriver-adapter</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/exnor/QUnit-to-JsTestDriver-adapter" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /exnor/QUnit-to-JsTestDriver-adapter">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/exnor/QUnit-to-JsTestDriver-adapter/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /exnor/QUnit-to-JsTestDriver-adapter/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/exnor/QUnit-to-JsTestDriver-adapter/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /exnor/QUnit-to-JsTestDriver-adapter/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/exnor/QUnit-to-JsTestDriver-adapter/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /exnor/QUnit-to-JsTestDriver-adapter/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/exnor/QUnit-to-JsTestDriver-adapter/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /exnor/QUnit-to-JsTestDriver-adapter/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/exnor/QUnit-to-JsTestDriver-adapter/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /exnor/QUnit-to-JsTestDriver-adapter/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/exnor/QUnit-to-JsTestDriver-adapter/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /exnor/QUnit-to-JsTestDriver-adapter/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/exnor/QUnit-to-JsTestDriver-adapter.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/exnor/QUnit-to-JsTestDriver-adapter.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:exnor/QUnit-to-JsTestDriver-adapter.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:exnor/QUnit-to-JsTestDriver-adapter.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/exnor/QUnit-to-JsTestDriver-adapter" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/exnor/QUnit-to-JsTestDriver-adapter" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>

  <a href="http://mac.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/exnor/QUnit-to-JsTestDriver-adapter/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:c4efc2e6f8feceefd056b845bb59f212 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:c4efc2e6f8feceefd056b845bb59f212 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/exnor/QUnit-to-JsTestDriver-adapter/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/exnor/QUnit-to-JsTestDriver-adapter/blob/master/QUnitAdapter.tests.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/exnor/QUnit-to-JsTestDriver-adapter" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">QUnit-to-JsTestDriver-adapter</span></a></span></span><span class="separator"> / </span><strong class="final-path">QUnitAdapter.tests.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="QUnitAdapter.tests.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/exnor/QUnit-to-JsTestDriver-adapter/contributors/master/QUnitAdapter.tests.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>89 lines (73 sloc)</span>
        <span>2.256 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/exnor/QUnit-to-JsTestDriver-adapter/edit/master/QUnitAdapter.tests.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/exnor/QUnit-to-JsTestDriver-adapter/raw/master/QUnitAdapter.tests.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/exnor/QUnit-to-JsTestDriver-adapter/blame/master/QUnitAdapter.tests.js" class="button minibutton ">Blame</a>
          <a href="/exnor/QUnit-to-JsTestDriver-adapter/commits/master/QUnitAdapter.tests.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/exnor/QUnit-to-JsTestDriver-adapter/delete/master/QUnitAdapter.tests.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="nx">module</span><span class="p">(</span> <span class="s2">&quot;Module Test A&quot;</span> <span class="p">);</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="nx">test</span><span class="p">(</span> <span class="s2">&quot;Generic test&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC5'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC6'>	<span class="kd">var</span> <span class="nx">poo</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC7'>	<span class="nx">equal</span><span class="p">(</span> <span class="nx">poo</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="s2">&quot;Should pass&quot;</span> <span class="p">);</span></div><div class='line' id='LC8'><span class="p">});</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="nx">test</span><span class="p">(</span> <span class="s2">&quot;Generic test with expect in argument&quot;</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC11'>	<span class="kd">var</span> <span class="nx">poo</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC12'>	<span class="nx">equal</span><span class="p">(</span> <span class="nx">poo</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="s2">&quot;Should pass&quot;</span> <span class="p">);</span></div><div class='line' id='LC13'><span class="p">});</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;Module Test B with setup and teardown&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC16'>	<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC17'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="s2">&quot;once extra assert per test&quot;</span><span class="p">);</span></div><div class='line' id='LC18'>		<span class="k">this</span><span class="p">.</span><span class="nx">testData</span> <span class="o">=</span> <span class="s2">&quot;foobar&quot;</span><span class="p">;</span></div><div class='line' id='LC19'>	<span class="p">},</span></div><div class='line' id='LC20'>	<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="s2">&quot;and one extra assert after each test&quot;</span><span class="p">);</span></div><div class='line' id='LC22'>	<span class="p">}</span></div><div class='line' id='LC23'><span class="p">});</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;test with setup and teardown&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="nx">expect</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="c1">// test depreciated method (same == deepEqual)</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="nx">same</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">testData</span><span class="p">,</span> <span class="s2">&quot;foobar&quot;</span><span class="p">);</span></div><div class='line' id='LC29'><span class="p">});</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="nx">module</span><span class="p">(</span> <span class="s2">&quot;Module Test C&quot;</span> <span class="p">);</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="nx">test</span><span class="p">(</span> <span class="s2">&quot;JsTestDriver DOM Comments&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC35'>	<span class="cm">/*:DOC += &lt;div id=&quot;foo&quot;&gt;test&lt;/div&gt; */</span></div><div class='line' id='LC36'>	<span class="nx">equal</span><span class="p">(</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">&#39;foo&#39;</span><span class="p">).</span><span class="nx">innerHTML</span><span class="p">,</span> <span class="s1">&#39;test&#39;</span><span class="p">,</span> <span class="s2">&quot;Should pass&quot;</span> <span class="p">);</span></div><div class='line' id='LC37'><span class="p">});</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'><span class="nx">test</span><span class="p">(</span> <span class="s2">&quot;Testing deep equal&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC40'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC41'>	<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="p">{</span><span class="nx">a</span><span class="o">:</span> <span class="mi">1</span><span class="p">};</span></div><div class='line' id='LC42'>	<span class="c1">//equal(actual, {a: 1}, &quot;must fail, same content, but different object, not handled by equals&quot;);</span></div><div class='line' id='LC43'>	<span class="nx">notDeepEqual</span><span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="p">{</span><span class="nx">a</span><span class="o">:</span> <span class="s2">&quot;1&quot;</span><span class="p">},</span> <span class="s2">&quot;must not be deep equal, expected value is a string, actual a number&quot;</span><span class="p">);</span></div><div class='line' id='LC44'>	<span class="nx">deepEqual</span><span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="p">{</span><span class="nx">a</span><span class="o">:</span> <span class="mi">1</span><span class="p">},</span> <span class="s2">&quot;must pass, same content, but different object&quot;</span><span class="p">);</span></div><div class='line' id='LC45'><span class="p">});</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'><span class="nx">test</span><span class="p">(</span> <span class="s2">&quot;Testing strictEqual&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC48'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC49'>	<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC50'>	<span class="nx">equal</span><span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="s2">&quot;Passes, as 0 and false are the same when compared with ==&quot;</span><span class="p">);</span></div><div class='line' id='LC51'>	<span class="nx">notStrictEqual</span><span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="s2">&quot;Not strict equal, as 0 is a Number type, false Boolean&quot;</span><span class="p">);</span></div><div class='line' id='LC52'><span class="p">});</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;Testing of raises() with no error param&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC55'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC56'>	<span class="nx">raises</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC57'>		<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;failing test&quot;</span><span class="p">);</span></div><div class='line' id='LC58'>	<span class="p">},</span> <span class="s2">&quot;must throw error to pass&quot;</span><span class="p">);</span></div><div class='line' id='LC59'><span class="p">});</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;Testing of raises() with error param&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC62'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC63'>	<span class="kd">function</span> <span class="nx">CustomError</span><span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC64'>	<span class="nx">raises</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC65'>		<span class="k">throw</span> <span class="k">new</span> <span class="nx">CustomError</span><span class="p">();</span></div><div class='line' id='LC66'>	<span class="p">},</span> <span class="nx">CustomError</span><span class="p">(),</span> <span class="s2">&quot;must throw error to pass&quot;</span><span class="p">);</span></div><div class='line' id='LC67'><span class="p">});</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="nx">asyncTest</span><span class="p">(</span> <span class="s2">&quot;Test of asyncTest() with start()&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC70'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span>	</div><div class='line' id='LC71'>	<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC74'>		 <span class="nx">strictEqual</span><span class="p">(</span> <span class="nx">actual</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="s2">&quot;actual should be defined as false&quot;</span> <span class="p">);</span></div><div class='line' id='LC75'>		 <span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC76'>	<span class="p">},</span> <span class="mi">200</span> <span class="p">);</span></div><div class='line' id='LC77'><span class="p">});</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'><span class="nx">test</span><span class="p">(</span> <span class="s2">&quot;aSyncronous testing with start() and stop()&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC80'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>	<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC83'>	<span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC86'>		 <span class="nx">strictEqual</span><span class="p">(</span> <span class="nx">actual</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="s2">&quot;actual should be defined as false 2&quot;</span> <span class="p">);</span></div><div class='line' id='LC87'>		 <span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC88'>	<span class="p">},</span> <span class="mi">200</span> <span class="p">);</span></div><div class='line' id='LC89'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.11090s from fe17.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/exnor/QUnit-to-JsTestDriver-adapter/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

