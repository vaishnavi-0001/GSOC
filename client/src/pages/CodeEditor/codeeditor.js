import { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const CodeEditor = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on("codeUpdate", (newCode) => setCode(newCode));
  }, []);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    socket.emit("codeChange", value);
  };

  return (
    <div>
      <h2>Collaborative Code Editor</h2>
      <CodeMirror
        value={code}
        options={{ mode: "javascript", theme: "material", lineNumbers: true }}
        onBeforeChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
