import styles from "./item.module.css";

interface ItemProps {
  descricao: string;
  nivel: string;
  titulo: string;
  atualizarItem: any;
}

export default function Item({ titulo, descricao, nivel, atualizarItem }: ItemProps) {
  return (
    <div className={styles.variavel}>
      <h4>{titulo}:</h4>
      <p>{descricao}</p>
      <button
        className={styles.botaoDeTroca}
        onClick={() => atualizarItem(nivel)}
      >
        TROCAR
      </button>
    </div>
  )
}