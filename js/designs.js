// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(e) {

	$("tr").remove();
	$("td").remove();
	// Select size input
	let height = $("#input_height").val();
	let width = $("#input_width").val();
	
	for (let i = height - 1; i >= 0; i--) {
		$("table").append("<tr></tr>\n");
		for (let j = width - 1; j >= 0; j--) {
			$("table tr:last-child").append("<td></td>\n");
		}	
	}
		// Change the color of the grid
	$("td").click(function(){
		// Select color input
		let color = $("#colorPicker").val();
		$(this).css("background-color",color);
	})
	
	return e.preventDefault();
})


