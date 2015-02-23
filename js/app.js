	function addListItem() {
	var text = $('#new-text').val();
	$('.list-group').append('<li class="list-group-item"><span class="glyphicon glyphicon-ok glyph-list-ok item-done"></span><span class="list-item">'+text+'</span><span class="glyphicon glyphicon-remove glyph-list-remove item-remove pull-right"></span></li>');
	$('#new-text').val('');
}

	function deleteItem() {
		$(this).parent().remove();
	}

	function finishItem() {
		if($(this).parent().css('textDecoration') == 'line-through') {
			$(this).parent().css('textDecoration', 'none');
		} else {
		$(this).parent().css({
			'textDecoration': 'line-through',
			'fontStyle': 'italic'
		});
	}
	}

$(document).ready(function () {
	$('#add').on('click', addListItem);
	$(document).on('keypress', function(e) {
		if(e.which == 13) {
			addListItem();
			input.setCustomValidity('');
		}
	})
	$(document).on('click', '.glyph-list-remove', deleteItem);
	$(document).on('click', '.item-done', finishItem);
});
