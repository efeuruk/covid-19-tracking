import React from 'react'

export default function Footer() {
    const date = new Date();
    return (
        <div>
            <strong>*N/A's are existing because of the api source that I am using.</strong>
            <p>Copyright &copy; {date.getFullYear()} Ersoy Efe Uruk</p>
        </div>
    )
}
