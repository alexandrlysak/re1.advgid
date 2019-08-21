var reglang = {
    'msk': {'text': 'шоссе', 'title': 'Шоссе', 'is_rayons': true},
    'spb': {'text': 'район', 'title': 'Район', 'is_rayons': true},
    'slg': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'krl': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'tvr': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'psk': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'ekt': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'ufa': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'nvs': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'smr': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'oms': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'clb': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'kzn': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'nnv': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'kmr': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'krs': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'yars': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'vlg': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'vnv': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'sml': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'klg': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'brn': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'orl': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'tla': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'rzn': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'vld': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'ivn': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'srt': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'blg': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'vrn': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'kst': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'lpc': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'tmb': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'krsk': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'irkt': {'text': 'район', 'title': 'Район', 'is_rayons': false},
    'prm': {'text': 'район', 'title': 'Район', 'is_rayons': false}
};

DialogRegion = {
    is_open: false,
    dialog: null,
    def_reg: 'msk',
    o: {},
    open: function (o) {
        return false;
        o = o || {};
        var self = this;
        self.is_open = true;
        self.o = o;
        if (o.show_all === true) {
            $('#global_dialog_regions .all-regions').show();
        } else {
            $('#global_dialog_regions .all-regions').hide();
        }
        $('#global_dialog_regions .region-item').removeClass('active');
        if (o.active !== undefined) {
            self.setActive(o.active);
        }
        if (o.title !== undefined) {
            $('#global_dialog_regions .h1').html(o.title).show();
        } else {
            $('#global_dialog_regions .h1').html('').hide();
        }
        $('#global_dialog_regions .region-item span').each(function () {
            self.setSelect($(this), o);
        });
        var dialog = $('#global_dialog_regions').dialog({
            autoOpen: false,
            modal: true,
            minHeight: 20,
            minWidth: 680,
            draggable: false,
            resizable: false,
            close: function () {
                self.close(o);
            }
        });
        self.dialog = dialog.parents('.ui-dialog');
        if (o.dialogtitle !== false) {
            $('#global_dialog_regions').dialog('option', 'title', (o.dialogtitle !== undefined ? o.dialogtitle : 'Выбор региона'));
        } else {
            var header = self.dialog.find('.ui-dialog-titlebar');
            header.find('span.ui-dialog-title').hide();
            header.css({
                position: 'absolute',
                top: '10px',
                right: '3px',
                background: 'none',
                border: 'none',
                'z-index': '1000'
            });
        }
        $('#global_dialog_regions').dialog('open');
    },
    setSelect: function (item) {
        var self = this;
        if (typeof self.o.select === 'function') {
            item.on('click', function () {
                $('#global_dialog_regions').dialog('close');
                self.o.select(this);
            });
        } else {
            item.on('click', function () {
                var region = $(this).parent().attr('data-val');
                if (region == self.def_reg) {
                    $('#global_dialog_regions').dialog('close');
                } else {
                    window.location = $(this).attr('data-h');
                }
            });
        }
    },
    setActive: function (active) {
        var self = this;
        if (self.is_open) {
            $('#global_dialog_regions .region-item').removeClass('active');
            $('#global_dialog_regions #region-item-' + active).addClass('active');
        }
    },
    setClientRegion: function (active) {
        var self = this;
        if (self.is_open) {
            var old_item = $('#global_dialog_regions #region-item-' + active);
            var new_item = old_item.clone();
            self.setSelect(new_item.find('span'));
            $('#global_dialog_regions .h2').append(new_item).show();
            old_item.hide();
        }
    },
    close: function (o) {
        var self = this;
        self.is_open = false;
        $('#global_dialog_regions').dialog('destroy');
        $('#global_dialog_regions .region-item span').off('click');
        $('#global_dialog_regions .h2').html('').hide();
        $('#global_dialog_regions .region-item').show();
        if (typeof o.close === 'function') {
            o.close();
        }
    }
}


DialogRegion2 = {
        o: {},
        open: function (o) {
            o = o || {};
            var self = this;
            self.o = o;
            var dialog = $('#global_dialog_regions_2').dialog({
                autoOpen: false,
                modal: true,
                minHeight: 20,
                minWidth: 680,
                draggable: false,
                resizable: false,
                close: function () {
                    self.close(o);
                }
            });
            self.dialog = dialog.parents('.ui-dialog');
            if (o.dialogtitle !== false) {
                $('#global_dialog_regions_2').dialog('option', 'title', (o.dialogtitle !== undefined ? o.dialogtitle : 'Выбор региона'));
            } else {
                var header = self.dialog.find('.ui-dialog-titlebar');
                header.find('span.ui-dialog-title').hide();
                header.css({
                    position: 'absolute',
                    top: '10px',
                    right: '3px',
                    background: 'none',
                    border: 'none',
                    'z-index': '1000'
                });
            }
            $('#global_dialog_regions_2').dialog('open');
        },

        close: function (o) {
            var self = this;
            $('#global_dialog_regions_2').dialog('destroy');
            if (typeof o.close === 'function') {
                o.close();
            }
        },

        setClientRegion: function (url) {
            $('#client-city').html(url);
        }

    }

    $(function () {
        $("#city-autocomplete").autocomplete({
            source: function (request, response) {
                $.ajax({
                    type: 'post',
                    url: '/cottage-arenda/area/msk.html',
                    data: ({
                        ajax: 'GetCities',
                        q: request.term,
                        'is_room_page': 0
                    }),
                    dataType: 'json',
                    success: function (json) {
                        response(json);
                    }
                });
            },
            select: function (event, ui) {
                window.location.href = ui.item.url;
            },
        });
    });

    $('#select-region-changer').html('Ваш регион: <a rel="nofollow" href="#" class="diz-hlinks" onclick="setRegionChanger(); return false;"><span class="opt-link">Москва</span></a>');

function setRegionChanger() {
    DialogRegion2.open();
}

    setChanelCode();

function setChanelCode() {
    var html = 'Ваш идентификатор: <span class="orange">0</span>';
    $('#my-ch-code').html(html);
}

    $(function () {
    });

function setFilterRegion() {
    var val = $('[name=area]').val();
    /*DialogRegion.open({
      active: val,
      show_all: (val === '0' ? true : false),
      select: function(e) {
        var region = $(e).parent().attr('data-val');
        $('[name=area]').val(region);
        if (region === '0') {
          $('#region_title').text('Регион не выбран');
          $('#region_select_title').text('Выбрать регион');
          $('#dist-select input').addClass('f-disabled', true);
          $('#dist-select').hide();
        } else {
          $('#dist-select input').removeClass('f-disabled', false);
          $('#dist-select').show();
          $('#region_title').text($(e).text());
          $('.rt-text').text(reglang[region].text);
          $('.rt-title').text(reglang[region].title);
          if (reglang[region].is_rayons) {
            $('#dialog_rayons').dialog('option', 'title', 'Выбрать '+reglang[region].text);
            $('#rayon_title_wrap').show();
          } else {
            $('#rayon_title_wrap').hide();
          }
          $('#region_select_title').text('Изменить регион');
        }
        $('#rayons_names').html('');
        $('#rayons_wrap').slideUp();
      }
  });*/
    DialogRegion2.open();
}

    $(function () {
        $('#dialog_rayons').dialog({
            autoOpen: false,
            modal: true,
            title: 'Выбрать шоссе',
            width: 500,
            height: 780,
            draggable: false,
            resizable: false,
            buttons: {
                'Выбрать': function () {
                    var html = '';
                    var rayons = [];
                    $('#dialog_rayons').find('input.rayons-checkbox:checked').each(function () {
                        html += '<input type="hidden" name="rayons" value="' + $(this).val() + '" />';
                        rayons[rayons.length] = $(this).parent().find('span.rname').html();
                    });
                    if (rayons.length) {
                        $('#rayons_names').html(rayons.join(', ') + html);
                        $('#rayons_wrap').slideDown();
                    } else {
                        $('#rayons_names').html('');
                        $('#rayons_wrap').slideUp();
                    }
                    $(this).dialog('close');
                }
            }
        });
    });

function openDialogRegion() {
    $('#dialog_rayons').html('<div style="margin: 50px; text-align: center;"><img src="/template/img/ajax-loader-big.gif" /></div>');
    $('#dialog_rayons').dialog('open');
    var rayons = [];
    var region = $('input[name="area"]').val();
    $('input[name="rayons"]').each(function () {
        rayons[rayons.length] = $(this).val();
    });
    $.ajax({
        type: 'post',
        url: '/cottage-arenda/area/msk.html',
        data: ({
            ajax: 'GetRayonsList',
            area: region,
            rayons: rayons
        }),
        dataType: 'html',
        success: function (html) {
            $('#dialog_rayons').html(html);
            setCustumInputs();
        },
        error: function () {

        }
    });
}
    $(function () {
        setPeopleSlider();
        setPriceSlider();
        setDistanceSlider();
    });

function setPeopleSlider() {
    $('#slider-1').slider({
        range: true,
        min: 1,
        max: 81,
        step: 1,
        values: [1, 81],
        slide: function (event, ui) {
            if ((ui.values[1] - ui.values[0]) < 1) {
                return false;
            }
            updatePeopleSliderValue(ui.values[0], ui.values[1]);
        }
    });
    updatePeopleSliderValue($('#slider-1').slider('values', 0), $('#slider-1').slider('values', 1));
}

function setPriceSlider() {
    $('#slider-2').slider({
        range: true,
        min: 2900,
        max: 200100,
        step: 100,
        values: [2900, 200100],
        slide: function (event, ui) {
            if ((ui.values[1] - ui.values[0]) < 100) {
                return false;
            }
            updatePriceSliderValue(ui.values[0], ui.values[1]);
        }
    });
    updatePriceSliderValue($('#slider-2').slider('values', 0), $('#slider-2').slider('values', 1));
}

function setDistanceSlider() {
    $('#slider-3').slider({
        range: true,
        min: 0,
        max: 151,
        step: 1,
        values: [0, 151],
        slide: function (event, ui) {
            if ((ui.values[1] - ui.values[0]) < 1) {
                return false;
            }
            updateDistanceSliderValue(ui.values[0], ui.values[1]);
        }
    });
    updateDistanceSliderValue($('#slider-3').slider('values', 0), $('#slider-3').slider('values', 1));
}

function updatePeopleSliderValue(val1, val2) {
    var smin = $('#slider-1').slider('option', 'min');
    var smax = $('#slider-1').slider('option', 'max');
    $('input[name="peomple_min"]').val(val1);
    $('input[name="peomple_max"]').val(val2);
    if (val1 <= smin && val2 >= smax) {
        $('#slider-label-1').html('<span style="font-weight: bold;" class="st">не задано</span>');
    }
    if (val1 > smin && val2 < smax) {
        $('#slider-label-1').html('<span style="font-weight: bold;" class="st">' + val1 + ' - ' + val2 + '</span>');
    }
    if (val1 <= smin && val2 < smax) {
        $('#slider-label-1').html('<span style="font-weight: bold;" class="st">до ' + val2 + '</span>');
    }
    if (val1 > smin && val2 >= smax) {
        $('#slider-label-1').html('<span style="font-weight: bold;" class="st">от ' + val1 + '</span>');
    }
}

function updatePriceSliderValue(val1, val2) {
    var smin = $('#slider-2').slider('option', 'min');
    var smax = $('#slider-2').slider('option', 'max');
    $('input[name="price_min"]').val(val1);
    $('input[name="price_max"]').val(val2);
    if (val1 <= smin && val2 >= smax) {
        $('#slider-label-2').html('<span style="font-weight: bold;" class="st">не задана</span>');
    }
    if (val1 > smin && val2 < smax) {
        $('#slider-label-2').html('<span style="font-weight: bold;" class="st">' + val1 + ' - ' + val2 + '</span> руб.');
    }
    if (val1 <= smin && val2 < smax) {
        $('#slider-label-2').html('<span style="font-weight: bold;" class="st">до ' + val2 + '</span> руб.');
    }
    if (val1 > smin && val2 >= smax) {
        $('#slider-label-2').html('<span style="font-weight: bold;" class="st">от ' + val1 + '</span> руб.');
    }
}

function updateDistanceSliderValue(val1, val2) {
    var smin = $('#slider-3').slider('option', 'min');
    var smax = $('#slider-3').slider('option', 'max');
    $('input[name="distance_min"]').val(val1);
    $('input[name="distance_max"]').val(val2);
    if (val1 <= smin && val2 >= smax) {
        $('#slider-label-3').html('<span style="font-weight: bold;" class="st">не задано</span>');
    }
    if (val1 > smin && val2 < smax) {
        $('#slider-label-3').html('<span style="font-weight: bold;" class="st">' + val1 + ' - ' + val2 + '</span> км.');
    }
    if (val1 <= smin && val2 < smax) {
        $('#slider-label-3').html('<span style="font-weight: bold;" class="st">до ' + val2 + '</span> км.');
    }
    if (val1 > smin && val2 >= smax) {
        $('#slider-label-3').html('<span style="font-weight: bold;" class="st">от ' + val1 + '</span> км.');
    }
}

var ajax_url = '/in-cottages-calendar.html';
$(document).ready(function () {
    $('.cottage-calendar').each(function () {
        loadCottageCalendar(this, 1);
    })
});

function loadCottageCalendar(element, page) {
    var object_id = Number($(element).attr('data-cc'));
    $.ajax({
        type: 'post',
        url: ajax_url,
        data: {
            't': 'getCalendar',
            'p': page,
            'o': object_id,
        },
        dataType: 'json',
        success: function (json) {
            if (json) {
                if (json.error) {
                    $(element).html(json.error);
                } else {
                    $(element).html(json.html);
                }
            } else {
                $(element).html('Ошибка выполнения ajax-запроса');
            }
        },
        error: function () {
            $(element).html('Ошибка выполнения ajax-запроса');
        }
    });
}

function loadCottageCalendarPrev(element) {
    var page = Number($(element).parent().parent().parent().find('span.data-page').attr('data-page')) - 1;
    loadCottageCalendar($(element).parent().parent().parent().find('.cottage-calendar'), page);
}

function loadCottageCalendarNext(element) {
    var page = Number($(element).parent().parent().parent().find('span.data-page').attr('data-page')) + 1;
    loadCottageCalendar($(element).parent().parent().parent().find('.cottage-calendar'), page);
}

function addCottageToCompare(id) {
    var is_compare = 0;
    if (is_compare) {
        return;
    }
    $.ajax({
        type: 'post',
        url: '/cottage-arenda/area/msk.html',
        data: ({
            'ajax': 'AddToCompare',
            'item-id': id,
        }),
        dataType: 'json',
        success: function (json) {
            slideCottage(id, json);
        }
    });
}

function deleteCottageFromCompare(id) {
    var is_compare = 0;
    $.ajax({
        type: 'post',
        url: '/cottage-arenda/area/msk.html',
        data: ({
            'ajax': 'DeleteFromCompare',
            'item-id': id,
        }),
        dataType: 'json',
        success: function (json) {
            if (is_compare) {
                $('#cottage_' + id).slideUp(function () {
                    $('#cottage_' + id).remove();
                });
            }
            updateCompare(id, json);
        }
    });
}

function slideCottage(id, html) {
    var success = false;
    var $element = $('img#cottage_img_' + id);
    if ($element.length) {
        var $picture = $element.clone();
        var pictureOffsetOriginal = $element.offset();
        if ($picture.size())
            $picture.css({
                'position': 'absolute',
                'top': pictureOffsetOriginal.top,
                'left': pictureOffsetOriginal.left
            });
        var pictureOffset = $picture.offset();
        var cartBlockOffset = $('#compare_title').offset();
        if (cartBlockOffset != undefined && $picture.size()) {
            success = true;
            $picture.appendTo('body');
            $picture.css({
                'position': 'absolute',
                'top': $picture.css('top'),
                'left': $picture.css('left')
            })
                .animate({
                    'width': 30,
                    'height': 15,
                    'opacity': 0.2,
                    'top': cartBlockOffset.top + 10,
                    'left': cartBlockOffset.left + Math.round($('#compare_title').width() * 0.32)
                }, 1000)
                .fadeOut(100, function () {
                    updateCompare(id, html);
                });
        }
    }
    if (!success) {
        updateCompare(id, html);
    }
}

function updateCompare(id, html) {
    if (html && html.label !== undefined) {
        $('#compare_' + id).html(html.label);
    }
    if (html && html.title !== undefined) {
        $('#compare_title').html(html.title);
    }
    if (html && html.all !== undefined) {
        $('#compare_items').replaceWith(html.all);
    }
}

function sendSearchForm() {
    var params = [];
    $('#search_form input[type="hidden"]:not(.f-disabled), #search_form input[type="checkbox"]:checked, #search_form select, select[name="sort"], select[name="type"]').each(function () {
        if ($(this).attr('name')) {
            var p = $(this).attr('name');
            var v = $(this).val();
            if (p == 'area' && v === '0') {
                return;
            }
            params[params.length] = p + '/' + v;
        }
    });
    var url = '/cottage-arenda.html';
    if (params.length) {
        url = url.replace(/(\..+)$/, '/' + params.join('/') + '$1');
    }
    window.location = url;
}

$(function () {
    $.ajax({
        type: 'post',
        url: '/pay_info.html',
        data: {
            'ajax': 'FooterInfo'
        },
        dataType: 'html',
        success: function (html) {
            $('#footer-pay-info').html(html);
        }
    });
});
