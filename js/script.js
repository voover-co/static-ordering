$(document).ready(function () {
	$(".burger-menu").click(function(){
		$(".menu").toggleClass("open");
		$(this).toggleClass("open");
	});

	$.fn.select2.defaults.set("width", "100%");

    $('.industry .select2-selection').select2({
        // tags: true,
        allowClear: true,
        // tokenSeparators: [',', ' ']
    });

	$('.skill .select2-selection').select2({
		dropdownCssClass: "skill-dropdown",
		allowClear: true,
	});



    $('.select2-selection-dynamic').select2({
        tags: true,
        allowClear: true,
        // tokenSeparators: [',', ' ']
    });

    $(".skill ul.select2-selection__rendered").sortable({
        containment: 'parent'
    });
	 
    $(".industry ul.select2-selection__rendered").sortable({
        containment: 'parent'
    });

	

	

    $('.date-input .form-control').datepicker({
        startDate:new Date(),
		todayHighlight: true,
		format: 'dd M yyyy',
		// format: "mm-yyyy",
		autoclose: true,
        format: "M-yyyy",
        viewMode: "months", 
        minViewMode: "months"
		//setDate: null
	});

	// images select from post delete image 
	$(document).on("click", ".post-image-block span.post-image-del", function () {
		$(this).closest(".post-image-block").remove();

	});
	// images select from post delete image 

    var imagesPreview = function (input, placeToInsertImagePreview) {

		if (input.files) {
			var filesAmount = input.files.length;

			for (i = 0; i < filesAmount; i++) {
				var reader = new FileReader();
				reader.onload = function (event) {

					// $('.placeholder').html('say somthing about this photos');
					$('.post-custom-media').addClass('active');

					var img = $("<img/>", {
						src: event.target.result,
						class: "post-single-img img-fluid"

					})[0].outerHTML;

					var postImageDiv = $("<div/>", {

						class: "post-image",
						html: img,

					})[0].outerHTML;

					var postImageDelCtrl = $('<span/>', {
						class: 'post-image-del',
						html: '<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg> '
					})[0].outerHTML;

					var postImageControl = $("<div/>", {

						class: "post-image-control",
						html:  postImageDelCtrl 


					})[0].outerHTML;

					var postImageBlock = $("<div/>", {
						class: "post-image-block",
						html: postImageControl + postImageDiv,


					}).appendTo(placeToInsertImagePreview);


				}
				reader.readAsDataURL(input.files[i]);
			}
		}

	};


	$('.upload-btn input[type="file"]').on('change', function () {
		imagesPreview(this, '.post-custom-media');
	});

});