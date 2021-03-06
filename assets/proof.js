let cprf, cthy;

window.onload = () => {
    const config = {
        lineNumbers: true,
        mode: 'cyprf',
        extraKeys: {"Tab": cm => cm.replaceSelection("    " , "end")},
        electricChars: true,
        indentUnit: 4,
        viewportMargin: Infinity,
        height: 'auto'
    }

    cprf = CodeMirror.fromTextArea(document.getElementById('cprf'), config);
    cthy = CodeMirror.fromTextArea(document.getElementById('cthy'), config);
};