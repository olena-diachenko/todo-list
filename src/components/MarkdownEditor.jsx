import React from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    componentDidMount() {
        this.editor = new Editor({
            el: this.divRef.current,
            hideModeSwitch: true,
        });

        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            this.props.onContentChange(content);

        });
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.removeHook('change');
            this.editor = null
        }
    }

    render() {
        return <div ref={this.divRef}></div>
    }
}

export default MarkdownEditor;