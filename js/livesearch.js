$('#search').keyup(function () {
		var searchFld = $('#search').val();
		if (searchFld.length) {
			var searchTm = new RegExp(searchFld, "i");
			var found = 0;

	 $.getJSON('suggest.json', function (data) {
		 output = '<ul class="searchresults">';

		 $.each(data.hightlights, function(key, val) {
				if (val.title.search(searchTm) !== -1) {
						 found = 1;
					output += '<li class="header-suggestion">';
					output += '<a class="logo-suggestion" href="' + val.url + '" target="_blank" ><img src="' + val.logo + ' " ></a> ';
					output += '<a class="title-suggestion"  href="' + val.url + '" target="_blank" >' + val.title + '</a>';
					output += '</li>';
				}
		 });
		 output += '<li id="suggestion-type"> Sugestões de busca</li>';
		 $.each(data.suggestions, function(key, val) {
				if (val.search(searchTm) !== -1) {
						 found = 1;
				output += '<li class="suggestion-more"> <a href="http://g1.globo.com/busca/?q=' + val +' " >' + val + '</a></li>';
				}
		 });
		 output += '<li class="suggestion-searcher on-globo"> <a href="http://g1.globo.com/busca/?q=' + searchFld + '"> buscar &#39;<span>' + searchFld + '</span>&#39; na Globo.com &rsaquo; </a></li>';
		 output += '<li class="suggestion-searcher on-web"> <a href="https://www.google.com.br/#q=' + searchFld + '"> buscar &#39;<span>' + searchFld + '</span>&#39; na Web &rsaquo; </a></li>';
		output += '</ul>';
		if (found==1) {
			$('#suggestions').removeClass('suggestions-hidden');
			$('#suggestions').html(output);
		}
		else {
				$('#suggestions').addClass('suggestions-hidden');
		}
});
		} else {
			$('#suggestions').addClass('suggestions-hidden');
		}
});
