import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/components/header/Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div>
        <Image src={'/fut.webp'} width={75} height={75} ></Image>
        </div>
        <div>
            <Link className={styles.links} href={'/'}>Home</Link>
            <Link className={styles.links} href={''}>Cadastro</Link>
        </div>
    </div>
  )
}

export default Header