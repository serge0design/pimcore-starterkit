document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder.ajax-form').formBuilderAjaxManager();

    // $('form.formbuilder.ajax-form').formBuilderAjaxManager({
    //     validationTransformer: {
    //         addValidationMessage: function($fields, messages) {
    //             console.log($fields, messages);
    //         },
    //         removeFormValidations: function($form) {
    //             console.log($form);
    //         }
    //     }
    // });
});

$(document).ready(function () {
    $('form.ajax-form')
        .on('formbuilder.success', function (event, message, redirect, $form) {
            event.preventDefault();
            var successMessageBox = $("<div/>", {class: "alert alert-success", html: message[0].message});
            $form.slideToggle("normal", function () {
                successMessageBox.insertBefore($(this)),
                    $(this).remove(),
                    scrollToElement(successMessageBox); // function scrollToElement in init-main.js
            })

        }).on('formbuilder.fail', function (ev, messages, $form) {
        console.log(messages);
    }).on('formbuilder.error', function (ev, messages, $form) {
        console.log(messages);
    }).on('formbuilder.error-form', function (ev, messages, $form) {
        // console.error('error-form', messages);
    }).on('formbuilder.error-field', function (ev, data, $form) {
        console.log(data.field);
        console.log(data.messages);

        data.field.parent().click(function () {
            $(this).find(".invalid-feedback").addClass("d-none");
        });
    }).on('formbuilder.fatal', function (ev, response, $form) {
        // console.error('fatal', response.error, response.trace);
    });

})