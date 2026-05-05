$(document).ready(function () {
    $(document).on('input', '.js-search-input', function (e) {
        var $search = $(this).val();
        $('.js-search-link').each(function () {
            var $type = $(this).data('type');
            var $new_href;
            if ($type) {
                $new_href = '/search/' + $type + '?s=' + $search;
            } else {
                $new_href = '/search?s=' + $search;
            }
            $(this).attr('href', $new_href);
        });
    });

    $(document).on('submit', '#js-search-form', function () {
        $('input,select').each(function () {
            var $this = $(this);
            if ($this.val()) {
                $this.attr('name', $this.data('name'))
            }
        });
    });
});