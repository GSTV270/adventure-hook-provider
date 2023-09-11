'use client'
import { gerarIndiceAleatorioDeArray } from '@/utils/array';
import styles from './page.module.css'
import { useState } from 'react'

const base = {
  starters: [
    'Joãozinho foi passear',
    'Maria foi passear',
    'Cascão foi passear',
    'Mônica foi passear',
    'Cebolinha foi passear',
  ],
  middlers: [
    'no parque',
    'no shopping',
    'no rancho',
    'na lua',
    'na disney',
  ],
  finishers: [
    'com os pais',
    'com os amigos',
    'com o Batman',
    'com o Superman',
    'com o palhaço Patati',
  ]
}

export default function Home() {
  const [ganchosDeAventura, setGanchosDeAventura] = useState({
    starters: '',
    middlers: '',
    finishers: ''
  });

  const gerarItem = (array: Array<any>) => {
    return array[gerarIndiceAleatorioDeArray(array.length)]
  };
  
  const gerarGanchoDeAventura = () => {
    return {
      starters: gerarItem(base.starters),
      middlers: gerarItem(base.middlers),
      finishers: gerarItem(base.finishers)
    }
  };

  const atualizarGancho = (campo: 'starters' | 'middlers' | 'finishers') => {
    setGanchosDeAventura({...ganchosDeAventura, [campo]: gerarItem(base[campo]) })
  };

  return (
    <main className={styles.main}>
      <div className={styles.generateForm}>
        <button onClick={() => setGanchosDeAventura(gerarGanchoDeAventura())}>GERAR AVENTURA</button>

        {(ganchosDeAventura.starters && ganchosDeAventura.middlers && ganchosDeAventura.finishers) && (
          <>
            <div className={styles.variavel}>
              <h4>QUEM:</h4>
              <p>{ganchosDeAventura.starters}</p>
              <button className={styles.botaoDeTroca} onClick={() => atualizarGancho('starters')}>TROCAR QUEM</button>
            </div>
            <div className={styles.variavel}>
              <h4>ONDE:</h4>
              <p>{ganchosDeAventura.middlers}</p>
              <button className={styles.botaoDeTroca} onClick={() => atualizarGancho('middlers')}>TROCAR ONDE</button>
            </div>
            <div className={styles.variavel}>
              <h4>COM QUEM:</h4>
              <p>{ganchosDeAventura.finishers}</p>
              <button className={styles.botaoDeTroca} onClick={() => atualizarGancho('finishers')}>TROCAR COM QUEM</button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
