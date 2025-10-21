import React from 'react';
import { COLORS } from '../utils/constants';

export default function ColorPicker({value , onChange}) {
    return (
        <div className='flex gap-2'>
            {COLORS.map((c)=>(
                <button 
                key={c}
            onClick ={() => onChange(c)}
            className ={`w-7 h-7 rounded ${c} border $(value === c ? "ring-2 ring-offset-1 ring-blue-500" : "")`}
            aria-label ={`color-${c}`}/>
            ))}
        </div>
    );
}