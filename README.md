enemyBoxes
==========

jQuery extensions for make sets of checkboxes that can't be checked at the same time.


Usage
-----

+ Import jQuery
+ Import jQuery.enemyBoxes.js
+ Create an anonymous jQuery function calling enemyBoxes() for the selector.

Example
-------

	<html>
		<head>
			<title>enemyBox example</title>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
			<script src="js/jQuery.enemyBoxes.js"></script>

			<script>
				$(function() {
					$(".A").enemyBoxes();
					$(".B").enemyBoxes();
					$(".C").enemyBoxes();
				});
			</script>
		</head>
		<body>

			<input class="A" type="checkbox"/>A<br/>
			<input class="B" type="checkbox"/>B<br/>
			<input class="B C" type="checkbox"/>B C<br/>
			<input class="C" type="checkbox"/>C<br/>
			<input class="A C" type="checkbox"/>A C<br/>
		</body>
	</html>
