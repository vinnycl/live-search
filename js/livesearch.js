function replaceSpecialChars(str) {
	str = str.replace(/[àáâãäåÀÁÂÃÄÅ]/,"a");
	str = str.replace(/[ÈÉÊËé]/,"e");
	str = str.replace(/[íÍ]/,"i");
	str = str.replace(/[úÚ]/,"u");
	str = str.replace(/[çÇ]/,"c");
	return str.replace(/[^a-z0-9]/gi,'');
}

$('#search').keyup(function () {
	var valatSearc = $('#search').val();
	var searchFld = replaceSpecialChars(valatSearc);

	if (searchFld.length) {
		var searchTm = new RegExp(searchFld, "i");
		var valsearch = 0;

		$.getJSON('suggest.json', function (data) {

			output = '<ul class="searchresults">';

			$.each(data.hightlights, function(i, item) {
				if (item.queries[i].search(searchTm) != -1) {
					valsearch = 1;
					output += '<li class="header-suggestion">';
					output += '<a class="logo-suggestion" href="' + item.url + '" target="_blank" ><img src="' + item.logo + ' " ></a> ';
					output += '<a class="title-suggestion"  href="' + item.url + '" target="_blank" >' + item.title + '</a>';
					output += '</li>';
				}
		 	});
			output += '<li id="suggestion-type">Sugestões de busca</li>';
			$.each(data.suggestions, function(i, item) {
				if (item.search(searchTm) != -1) {
					valsearch = 1;
					output += '<li class="suggestion-more"> <a href="http://g1.globo.com/busca/?q=' + item +' " >' + item + '</a></li>';
				}
			 });
			output += '<li class="suggestion-searcher on-globo"> <a href="http://g1.globo.com/busca/?q=' + searchFld + '"> buscar &#39;<span>' + valatSearc + '</span>&#39; na Globo.com <b>&rsaquo;</b> </a></li>';
			output += '<li class="suggestion-searcher on-web"> <a href="https://www.google.com.br/#q=' + searchFld + '"> buscar &#39;<span>' + valatSearc + '</span>&#39; na Web <b>&rsaquo;</b> </a></li>';
			output += '</ul>';
			if (valsearch==1) {
				$('#suggestions').removeClass('suggestions-hidden');
				$('#suggestions').html(output);
			} else {
				$('#suggestions').addClass('suggestions-hidden');
			}
		});
	} else {
		$('#suggestions').addClass('suggestions-hidden');
	}
});
