import React, { useState, useEffect } from "react";
import DynamicForm from "./DynamicForm";
import { initialFormJson } from "./formConfig";
import "./App.css";

export default function App() {
  const [formJson, setFormJson] = useState(initialFormJson);
  const [editorValue, setEditorValue] = useState(JSON.stringify(formJson, null, 2));

  useEffect(() => {
    setEditorValue(JSON.stringify(formJson, null, 2));
  }, [formJson]);

  return (
    <div className="app-container">
      <DynamicForm formJson={formJson} />

      <div className="json-editor">
        <h3>Edit Form JSON</h3>
        <textarea
          className="json-textarea"
          value={editorValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setEditorValue(newValue);
            try {
              const parsed = JSON.parse(newValue);
              setFormJson(parsed);
            } catch (_) { }
          }}
        />
      </div>
    </div>
  );
}