
Mousetrap.bind({
    'mod+n': openNewInstance(),

    'mod+s': save(),

    'mod+`': () => {
        pell.exec('strikethrough')
    },

    'mod+1': () => {
        pell.exec('formatBlock', '<h1>');
    },

    'mod+2': () => {
        pell.exec('formatBlock', '<h2>');
    },

    'mod+3': () => {
        pell.exec('formatBlock', '<h3>');
    },

    'mod+4': () => {
        pell.exec('formatBlock', '<h4>');
    },

    'mod+5': () => {
        pell.exec('formatBlock', '<h5>');
    },

    'mod+6': () => {
        pell.exec('formatBlock', '<h6>');
    },

    'mod+h': () => {
        var text = window.getSelection().toString().length
        var textStyle = window.getSelection().anchorNode.parentNode.style
        if (text !== 0) {
            if (textStyle.cssText === "") {
                pell.exec('backColor', 'yellow')
            }
            else {
                textStyle.cssText = ""
            }
        }
    },

    'mod+tab': () => {
        pell.exec('indent');
    },

    'mod+shift+tab': () => {
        pell.exec('outdent');
    },

    'mod+shift+c': () => {
        pell.exec('justifyCenter');
    },

    'mod+shift+x': () => {
        pell.exec('justifyLeft');
    },

    'mod+shift+v': () => {
        pell.exec('justifyRight');
    },

    'mod+up': () => {
        pell.exec('superscript');
    },

    'mod+down': () => {
        pell.exec('subscript');
    },

    'mod+f': findInPage.openFindWindow(),

    'alt+c': () => {
        pell.exec('formatBlock', '<pre>');
    },


    'alt+a': () => {
        $('#linkModal').modal('toggle')
    },


    'alt+1': () => {
        pell.exec('insertOrderedList');
    },


    'alt+.': () => {
        pell.exec('insertUnorderedList');
    },


    'alt+l': () => {
        pell.exec('insertHorizontalRule');
    },


    'alt+t': () => {
        pell.exec('insertHTML', '<div class="todo">[❌]&nbsp</div>')
    },


    'alt+y': () => {
        const todoDiv = window.getSelection().anchorNode.parentNode
        if (todoDiv.classList.contains('todo')) {
            var text = todoDiv.innerText.replace('❌', '✔')
            todoDiv.innerText = text
            ks.sendKey('end')
        }

    },


    'alt+2': () => {
        pell.exec('fontSize', 2)
    },


    'alt+3': () => {
        pell.exec('fontSize', 4)
    },


    'alt+4': () => {
        pell.exec('fontSize', 6)
    },


    'alt+5': () => {
        pell.exec('fontSize', 7)
    },


    'alt+0': () => {
        pell.exec('insertHTML', '<div>&nbsp;</div>')
    },


    'alt+d': () => {
        const dateObj = new Date()
        pell.exec('insertHTML', `<div>${dateObj.toDateString()}</div>`)
    },

});

