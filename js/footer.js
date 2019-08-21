document.write('\
<footer id="footer">\
<div class="inner">\
			<section class="gridWrapper">\
				<article class="grid">\
					<p class="logo"><a href="index.html" title="ホーム" rel="home">Kunugi\'s Website<br />\
					<span>\
					<script>\
						var modified = new Date(document.lastModified);\
						var year = modified.getFullYear();\
						var month= modified.getMonth() + 1;\
						var date = modified.getDate();\
						document.write( "最終更新 " + year + "/" + month + "/" + date);\
					</script>\
					</span></a><br>\
				</article>\
				<article class="grid">\
					<p class="tel"><span>お問い合わせ:</span> <strong>kunugiweb[at]gmail.com</strong> <span>[at]は@に変えてください。</span></p>\
					<!--<p class="open">受付時間: 平日 PM 18:00 〜 PM 23:00</p>-->\
				</article>\
				<article class="grid copyright">\
					<p><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fkunugiha.github.io%2F&width=130&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId" width="130" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>\
					<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Kunugi&#39;s Websiteを訪問しました!" data-url="https://m-kunugi.github.io" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>\
					<span>Copyright(c) 2019 kunugi All Rights Reserved. Design by <a href="http://f-tpl.com" target="_blank" rel="nofollow">http://f-tpl.com</a></span>\
				</article>\
			</section>\
		</div>\
</footer>\
'); 