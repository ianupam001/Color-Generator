import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard')

      } catch (error) {
        toast.error('Failed copied to clipboard')
      }
    }
    else {
      toast.error('Clipboard access is not given')
    }
  }
    const { hex, weight } = color;
    return (
      <article className={index > 10 ? 'color color-light' : 'color'} style={{ background: `#${hex}` }} onClick={saveToClipboard} >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
      </article>
    )
  }


export default SingleColor;