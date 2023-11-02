var ckeditorOptions = {
    allowedContent: true,
    templates_files: ['/build/ckeditor/templates.js'],
    stylesSet: 'default:/build/ckeditor/styles.js',
    forcePasteAsPlainText: true,
    templates_replaceContent: true,
    skin: "flat",
    uiColor: '#dcdcdc',
    extraAllowedContent: 'i(*)',
    toolbar: 'ObjectWysiwyg',
    toolbar_ObjectWysiwyg: [
        ['Format', 'Styles', '-', 'Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
        ['Templates', '-', 'Sourcedialog']
    ],
};
if (pimcore.object && pimcore.object.tags) pimcore.object.tags.wysiwyg.defaultEditorConfig = ckeditorOptions;
