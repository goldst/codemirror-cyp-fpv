CodeMirror.defineSimpleMode('cyprf', {
    start: [
        {regex: /^(Proof by extensionality with)/i,
        token: ["keyword", null, "variable-2"], indent: true},
        {regex: /^(Proof by case analysis on)/i,
        token: ["keyword", null], indent: true},
        {regex: /^(Proof by induction on)/i,
        token: ["keyword", null], indent: true},
        {regex: /(?:Proof)\w*$/i,
        token: "keyword", indent: true},
        {regex: /(?:To show|Lemma)\b/i,
        token: "keyword", indent: false},
        {regex: /(?:Case)\b/i,
        token: "keyword", indent: true},
        {regex: /(?:IH|forall|For|Fix|Assume|Then|Assumption)\b/,
        token: "keyword"},
        {regex: /(?:generalizing|arbitrary|fixed)\b/,
        token: "keyword"},
        {regex: /(?:def|IH)\b/,
        token: "keyword"},
        {regex: /True|False|List|Bool/, token: "atom"},
        {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
        token: "number"},
        {regex: /(\(by .*\))(.*\.=\.)/, token: ["variable-3", null]},
        {regex: /--.*/, token: "comment"},
        {regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3"},
        {regex: /\{-/, token: "comment", next: "comment"},
        {regex: /\.=\./, token: "operator"},
        {regex: /[\{\[\(]/, indent: true},
        {regex: /[\}\]\)]/, dedent: true, dedentIfLineStart: true},
        {regex: /QED/, token: "keyword", dedent: true, dedentIfLineStart: true},
        {regex: /[a-z$][\w$]*/, token: "variable"},
    ],
    steps: [
        {regex: /(.)QED/, next: "start"},
        {regex: /(.)Proof/, next: "start"}
    ],
    comment: [
        {regex: /.*-\}/, token: "comment", next: "start"},
        {regex: /.*/, token: "comment"}
    ],
    meta: {
        dontIndentStates: ["steps", "comment"],
        lineComment: "--",
        electricInput: /(QED)|[\}\]\)]/
    }
});

CodeMirror.modes['cyprf'].electricInput = {
    test: (a) => {console.log(a)}
}