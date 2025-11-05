import React from "react";
import NoteCard from "./NoteCard";

export default function NotesGrid({ notes, onEdit, onDelete, onToggleArchive, onTogglePin }) {
  // pinned first
  const pinned = notes.filter(n => n.pinned && !n.archived);
  const others = notes.filter(n => !n.pinned && !n.archived);

  const renderList = (list) => (
    <div className="grid gap-4 auto-rows-fr grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      {list.map(note => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} onToggleArchive={onToggleArchive} onTogglePin={onTogglePin} />
      ))}
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      {pinned.length > 0 && (
        <>
          <h4 className="text-sm font-medium text-gray-600">Pinned</h4>
          {renderList(pinned)}
        </>
      )}
      <h4 className="text-sm font-medium text-gray-600">Others</h4>
      {renderList(others)}
    </div>
  );
}
