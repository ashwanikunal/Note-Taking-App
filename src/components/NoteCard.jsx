import React from "react";

export default function NoteCard({ note, onEdit, onDelete, onToggleArchive, onTogglePin }) {
  return (
    <div className={`p-3 rounded shadow ${note.color} min-h-[120px] flex flex-col`}>
      <div className="flex justify-between">
        <h3 className="font-semibold">{note.title}</h3>
        <div className="flex gap-1">
          <button onClick={() => onTogglePin(note.id)} title="Pin">📌</button>
        </div>
      </div>
      <div className="mt-2 grow whitespace-pre-wrap">{note.content}</div>
      <div className="mt-3 flex justify-between items-center">
        <div className="text-xs text-gray-600">{new Date(note.updatedAt || note.createdAt).toLocaleString()}</div>
        <div className="flex gap-2">
          <button onClick={() => onToggleArchive(note.id)} className="text-sm">Archive</button>
          <button onClick={() => onEdit(note)} className="text-sm">Edit</button>
          <button onClick={() => onDelete(note.id)} className="text-sm text-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
}
