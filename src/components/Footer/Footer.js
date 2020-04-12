import React from 'react'

export default function Footer() {
    const date = new Date();
    return (
        <div>
            <p>Copyright &copy; {date.getFullYear()} Ersoy Efe Uruk</p>
        </div>
    )
}
