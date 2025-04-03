import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <nav>
        <Link href='/' className='m-5'>Home</Link >
        <Link href='/posts' className='m-5'>Post</Link >
        <Link href='/about' className='m-5'>About</Link >
      </nav>
    </>
  )
}
