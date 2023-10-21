'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import teams from '@/data/futebol';

export default function Home() {
  const [dataAPI, setData] = useState('');
  
  useEffect(() => {
    const teamsFetch = async () => {
      try {
        const data = await teams();
        setData(data);
      } catch(e) {
        throw e;
      }
    };
    teamsFetch();
  }, []); 

  return (
    <>
      <div>
        {
          dataAPI.team.map((team) => {
            <div>
              <p>{team}</p>
            </div>
          })
        }
      </div>
    </>
  )
}
