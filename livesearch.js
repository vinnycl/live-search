$('#search').keyup(function () {
		var searchFld = $('#search').val();
		if (searchFld.length)
		{
		var searchTm = new RegExp(searchFld, "i");
		var found = 0;

	 $.getJSON('globo.json', function (data) {
	 var output = '<ul class="searchresults">';

	 $.each(data.hightlights, function(key, val) {
			if (val.title.search(searchTm) !== -1) {
			console.log(val);
					 found = 1;
			output += '<li>';
			output += '<h2>' + val.title + '</h2>';
			output += '<a href="' + val.url + '" target="_blank" >' + val.title + '</a>';
			output += '</li>';
			}
	 });
			output += '</ul>';
			if (found==1) {
			$('#update').removeClass('update-hidden');
			$('#update').html(output);
			}
			else {
					$('#update').addClass('update-hidden');
			}

});
		} else {
			$('#update').addClass('update-hidden');
		}
});
