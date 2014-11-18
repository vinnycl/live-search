Live search
====
An live search using Json to suggest the user to find similar results.
Info
--
livesearch.js contains the loop to mount the structure.
suggest.json has the titles, urls and queries.
About the project
--
Jquery and other files was add on this projects to work offline.
An extra function was added in livesearch.js to exclude special character, in order the  search read clearly.
Run it on Localhost in order to load Json.
Editing
--
To change your Json edit livesearch.js <br>
<code>$.getJSON('<strong>suggest.json</strong>', function (data) {</code><br>
Json loop starte here:<br>
<code>$.each(data.<strong>hightlights</strong>, function(i, item) {</code><br>
If he find the word, put the special header<br>
<code>if (item.queries[i].search(<strong>searchTm</strong>) != -1) {</code>
Files
--
<ul>
	<li>css/</li>
		<ul>
			<li>css/style.css</li>
		</ul>
	<li>images/</li>
		<ul>
			<li>images/globo-search.png</li>
			<li>images/logo.png</li>
			<li>images/sprite_suggest.png</li>
		</ul>
	<li>js/</li>
		<ul>
			<li>js/jquery</li>
			<li>js/livesearch.js</li>
		</ul>
	<li>README.md</li>
	<li>index.html</li>
	<li>suggest.json</li>
</ul>
