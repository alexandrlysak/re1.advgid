(function(b){var a=("placeholder" in document.createElement("input"));b.fn.placeholder=function(c){if(!a){if(c){switch(c){case"clear":this.each(function(){var d=b(this);if(d.data("isEmpty")||d.val()==d.attr("placeholder")){d.val("")}});break}return this}this.each(function(){if(!b(this).data("gotPlaceholder")){b(this).focus(function(){var d=b(this);if(d.data("isEmpty")){d.val("").removeClass("placeholder")}}).blur(function(){var d=b(this);if(d.data("isEmpty")||!d.val().length){d.val(d.attr("placeholder")).addClass("placeholder")}}).keyup(function(){var d=b(this);d.data("isEmpty",(d.val().length==0))}).data("gotPlaceholder",true);if(!b(this).val().length||b(this).val()==b(this).attr("placeholder")){b(this).val(b(this).attr("placeholder")).addClass("placeholder").data("isEmpty",true)}}})}return this}})(jQuery);