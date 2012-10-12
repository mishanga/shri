({
    block: 'b-page',
    title: 'ШРИ',
    head: [
        { elem: 'css', url: '_shri.css'},
        { elem: 'css', url: '_shri', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_shri.js' }
    ],
    content: {
        block: 'form',
        content: [
            {
                block: 'input',
                name: 'firstname',
                value: 'ololo'
            },
            { block: 'button', content: 'Сохранить' },
            { block: 'label' }
        ]
    }
})
