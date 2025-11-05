import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import NoteEditor from "./components/NoteEditor";
import useLocalStorage from "./hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useLocalStorage("notes_v1", []);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");

  function openNew() {
    setEditing(null);
    setEditorOpen(true);
  }

  function handleSave(note) {
    if (note.id) {
      setNotes((prev) => prev.map(n => n.id === note.id ? { ...n, ...note } : n));
    } else {
      const newNote = {
        ...note,
        id: uuidv4(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setNotes((prev) => [newNote, ...prev]);
    }
  }

  function handleEdit(note) {
    setEditing(note);
    setEditorOpen(true);
  }

  function handleDelete(id) {
    setNotes((prev) => prev.filter(n => n.id !== id));
  }

  function toggleArchive(id) {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, archived: !n.archived } : n));
  }

  function togglePin(id) {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n));
  }

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter(n => !n.archived && (n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)));
  }, [notes, query]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onOpenNew={openNew} query={query} setQuery={setQuery} />
      <main className="container mx-auto">
        <NotesGrid notes={visible} onEdit={handleEdit} onDelete={handleDelete} onToggleArchive={toggleArchive} onTogglePin={togglePin} />
      </main>

      {isEditorOpen && (
        <NoteEditor
          initial={editing}
          onSave={handleSave}
          onClose={() => { setEditorOpen(false); setEditing(null); }}
        />
      )}
    </div>
  );
}

export default App;
