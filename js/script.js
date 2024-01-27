$(document).ready(function () {
    $('.single-item').slick({
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">\n' +
            '  <g clip-path="url(#clip0_27_8)">\n' +
            '    <path d="M5.32935 9.47742L13.7908 0.176819C13.9865 -0.0384587 14.2551 -0.164517 14.547 -0.178062C14.8389 -0.191607 15.1179 -0.0909537 15.3323 0.105292L16.0152 0.729469C16.4596 1.13622 16.4912 1.82934 16.0858 2.27487L8.98048 10.085L16.7758 17.212C16.9903 17.4082 17.116 17.6772 17.1294 17.9697C17.1427 18.2625 17.042 18.5421 16.8463 18.7575L16.2232 19.4421C16.0273 19.6574 15.7589 19.7835 15.467 19.797C15.1751 19.8106 14.8961 19.7099 14.6817 19.5137L5.40013 11.0282C5.18513 10.8313 5.05964 10.561 5.04692 10.268C5.03285 9.97387 5.13319 9.6932 5.32935 9.47742Z" fill="#595555"/>\n' +
            '  </g>\n' +
            '  <defs>\n' +
            '    <clipPath id="clip0_27_8">\n' +
            '      <rect width="19.9396" height="20" fill="white" transform="matrix(-1 0 -2.22607e-08 1 20.87 0)"/>\n' +
            '    </clipPath>\n' +
            '  </defs>\n' +
            '</svg>' +
            '</button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">\n' +
            '  <g clip-path="url(#clip0_27_16)">\n' +
            '    <path d="M15.6794 10.5226L7.218 19.8232C7.02231 20.0385 6.75371 20.1645 6.46179 20.1781C6.16987 20.1916 5.89093 20.091 5.67645 19.8947L4.99357 19.2705C4.54919 18.8638 4.51756 18.1707 4.92304 17.7251L12.0283 9.91505L4.23299 2.78805C4.01851 2.5918 3.89276 2.32276 3.87941 2.03028C3.86604 1.73747 3.96676 1.45792 4.16245 1.24248L4.78559 0.557867C4.98144 0.342583 5.24988 0.216532 5.5418 0.202987C5.83371 0.189442 6.11266 0.290095 6.32714 0.48634L15.6087 8.97182C15.8237 9.16869 15.9491 9.43905 15.9619 9.73205C15.9759 10.0261 15.8756 10.3068 15.6794 10.5226Z" fill="#595555"/>\n' +
            '  </g>\n' +
            '  <defs>\n' +
            '    <clipPath id="clip0_27_16">\n' +
            '      <rect width="19.9396" height="20" fill="white" transform="matrix(1 0 2.22607e-08 -1 0.138916 20)"/>\n' +
            '    </clipPath>\n' +
            '  </defs>\n' +
            '</svg>' +
            '</button>'
    });

    $("#accordion").accordion({
        heightStyle: 'content',
        collapsible: true
    });

    let indexInput = $('#exampleInputIndex');
    $('#button').click(function () {
        let nameInput = $('#exampleInputName');
        let lastNameInput = $('#exampleInputLastName');
        let phoneInput = $('#exampleInputPhone');
        let countryInput = $('#exampleInputCountry');
        let addressInput = $('#exampleInputAddress');

        if (!nameInput.val()) {
            alert('Заполните имя');
            return;
        }
        if (!lastNameInput.val()) {
            alert('Заполните фамилию');
            return;
        }
        if (!phoneInput.val()) {
            alert('Заполните телефон');
            return;
        }
        if (!countryInput.val()) {
            alert('Заполните страну');
            return;
        }
        if (!indexInput.val()) {
            alert('Заполните индекс');
            return;
        }
        if (indexInput.val().length !== 6) {
            alert('Индекс должен содержать 6 цифр');
            return;
        }
        if (!addressInput.val()) {
            alert('Заполните адрес');
            return;
        }

        $('#form').hide();
        $('#order-title').hide();
        $('#thanks').removeClass('d-none');
    });

    indexInput.keydown((e) => {
        let number = parseInt(e.key);
        if (!(!isNaN(number) || e.key === 'Backspace')) {
            return false;
        }
    });


    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.product-image').magnificPopup({
        type:'image'
    });
});