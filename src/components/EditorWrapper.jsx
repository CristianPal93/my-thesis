import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
const EditorWrapper = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("Start writing");
    const config = {
        readonly: false,
        height: 800,
        width: 1000,
    };
    const handleUpdate = (event) => {
        const editorContent = event.target.innerHTML;
        setContent(editorContent);
    };

    return (
        <div className="App">
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={handleUpdate}
                onChange={(newContent) => {
                }}
            />

        </div>
    );
}
export default EditorWrapper;