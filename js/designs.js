// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$("#sizePicker").submit(function makeGrid() {

	$("tr").remove();
	$("td").remove();
	
	let height = $("#input_height").val();
	let width = $("#input_width").val();
	
		for (let i = height - 1; i >= 0; i--) {
			$("table").append("<tr></tr>\n");
				for (let j = width - 1; j >= 0; j--) {
					$("table tr:last-child").append("<td></td>\n");
				}
		}

	let color = $("#colorPicker").val();
	$("td").click(function(){
		$(this).css("background-color",color);
	})

	return false;
})

