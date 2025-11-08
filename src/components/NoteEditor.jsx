import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";

export default function NoteEditor({ onSave, onClose, initial }) {

  const [title, setTitle] = useState(initial?.title || "");
  const [content, setContent] = useState(initial?.content || "");
  const [color, setColor] = useState(initial?.color || "bg-white");
  const [pinned, setPinned] = useState(initial?.pinned || false);

  useEffect(() => {
    if (initial) {
      setTitle(initial.title || "");
      setContent(initial.content || "");
      setColor(initial.color || "bg-white");
      setPinned(initial.pinned || false);
    }
  }, [initial]);

  // ✅ Handle save
  function submit() {
    if (!title && !content) return; // skip empty notes
    onSave({
      ...initial,
      title,
      content,
      color,
      pinned,
      updatedAt: Date.now(),
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-start justify-center p-6 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl">
        <div className={`p-4 rounded shadow ${color}`}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full font-semibold text-lg bg-transparent outline-none"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Take a note..."
            rows={6}
            className="w-full bg-transparent outline-none mt-2 resize-none"
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2 items-center">
              <ColorPicker value={color} onChange={setColor} />
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={pinned}
                  onChange={(e) => setPinned(e.target.checked)}
                />
                <span className="text-sm">Pin</span>
              </label>
            </div>
            <div className="flex gap-2">
              <button onClick={onClose} className="px-3 py-1">
                Cancel
              </button>
              <button
                onClick={submit}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
