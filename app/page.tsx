"use client";
import { gerarIndiceAleatorioDeArray } from "@/utils/array";
import styles from "./page.module.css";
import { useState } from "react";
import Item from "@/components/item";

type TTipoDeAventure = "aventuraBaseadaEmEvento" | "aventuraBaseadaEmLocal";

type TChaves =
  | "reviravoltas"
  | "objetivo"
  | "acaoCausadaPeloVilao"
  | "climax"
  | "vilao"
  | "introducao";

interface IAtributo {
  chave: TChaves;
  titulo: string;
  valor: string;
  valores: Array<string>;
}

interface IBase {
  aventuraBaseadaEmLocal: {
    atributos: Array<IAtributo>;
  };
  aventuraBaseadaEmEvento: {
    atributos: Array<IAtributo>;
  };
  reviravoltas: {
    atributos: Array<IAtributo>;
  };
}

export const base: IBase = {
  aventuraBaseadaEmLocal: {
    atributos: [
      {
        chave: "introducao",
        titulo: "Introdução",
        valor: "",
        valores: [
          "Enquanto estiverem viajando pela natureza, os personagens caem num buraco que se abre sob seus pés, levando-os a um local de aventura.",
          "Enquanto estiverem viajando pela natureza, os personagens percebem a entrada de um local de aventura.",
          "Enquanto estiverem viajando por uma estrada, os personagens são atacados por monstros que fogem para o local de aventura mais próximo.",
          "Os aventureiros encontram um mapa em um cadáver. Além do mapa encontrado levar a aventura, o vilão da aventura deseja o mapa.",
          "Um item mágico misterioso ou um vilão cruel teletransporte os personagens para o local de aventura.",
          "Um estranho se aproxima dos personagens em uma taverna e os instiga a ir para o local de aventura.",
          "Uma cidade ou vila precisa de voluntários para ir ao local de aventura.",
          "Um Personagem do Mestre com quem os personagens se importam precisa deles para ir ao local de aventura.",
          "Um Personagem do Mestre que os personagens devem obedecer ordena-os a ir ao local de aventura.",
          "Um Personagem do Mestre que os personagens respeitam pede que eles vão ao local de aventura.",
          "Uma noite, todos os personagens sonham com a entrada do local de aventura.",
          "Um fantasma aparece e aterroriza uma vila. Pesquisas revelam que ele só pode ter o descanso eterno entrando no local de aventura.",
        ],
      },
      {
        chave: "vilao",
        titulo: "Vilão",
        valor: "",
        valores: [
          "Monstruosidade sem motivações específicas",
          "Aberração propensa a dominação",
          "Corruptor propenso a corrupção ou destruição",
          "Dragão propenso a dominação ou saque",
          "Gigante propenso a saquear",
          "Morto-vivo com qualquer motivação",
          "Fada com um objetivo misterioso",
          "Humanoide",
          "Humanoide conquistador",
          "Humanoide buscando vingança",
          "Humanoide conspirador buscando governar",
          "Humanoide mestre do crime",
          "Humanoide incursor ou devastador",
          "Humanoide sob uma manipulação",
          "Humanoide fanático desorientado",
        ],
      },
      {
        chave: "climax",
        titulo: "Clímax",
        valor: "",
        valores: [
          "Os aventureiros enfrentam o vilão principal e um grupo de lacaios em uma batalha sangrenta para a conclusão.",
          "Os aventureiros perseguem o vilão enquanto desviam de obstáculos colocados para impedi-los, levando ao confronto final dentro ou fora do refúgio do vilão.",
          "As ações dos aventureiros ou do vilão resultam em um evento cataclísmico o qual os aventureiros devem escapar.",
          "Os aventureiros correm até o local onde o vilão está concluindo seu plano mestre, chegando exatamente no momento que o plano está prestes a se concluir.",
          "O vilão e dois ou três tenentes realizam rituais separados em um imenso salão. Os aventureiros devem impedir todos os rituais ao mesmo tempo.",
          "Um aliado trai os aventureiros quando eles estão prestes a concluir seu objetivo. (Use esse clímax com cuidado e não abuse dele.)",
          "Um portal se abre para outro plano de existência. As criaturas do outro lado saem, forçando os aventureiros a fechar o portal e lidarem com o vilão ao mesmo tempo.",
          "Armadilhas, perigos ou objetos animados se voltam contra os aventureiros enquanto o vilão principal ataca.",
          "A masmorra começa a desmoronar enquanto os aventureiros enfrentam o vilão principal, que tenta escapar em meio ao caos.",
          "Uma ameaça mais poderosa que os aventureiros aparece, destrói o vilão principal e então volta suas atenções para os personagens.",
          "Os aventureiros devem escolher se perseguem o vilão principal em fuga ou salvam um Personagem do Mestre com quem se importam ou um grupo de inocentes.",
          "Os aventureiros devem descobrir a fraqueza secreta do vilão principal antes de terem esperança de derrotá-lo.",
        ],
      },
    ],
  },
  aventuraBaseadaEmEvento: {
    atributos: [
      {
        chave: "acaoCausadaPeloVilao",
        titulo: "Ação causada pelo vilão",
        valor: "",
        valores: [
          "Arruinar um grande evento da cidade",
          "Aumentar o crime e a desordem",
          "Aumentar a corrupção política",
          "Crimes em série",
          "Cometer um crime marcante",
          "Execução de um plano elaborado do vilão",
        ],
      },
      {
        chave: "objetivo",
        titulo: "Objetivo",
        valor: "",
        valores: [
          "Levar o vilão à justiça.",
          "Limpar o nome de um PdM inocente.",
          "Proteger ou esconder um PdM.",
          "Proteger um objeto.",
          "Descobrir a natureza e objetivo de um estranho fenômeno que pode ser o trabalho do vilão.",
          "Encontrar um fugitivo procurado.",
          "Destronar um tirano.",
          "Desvendar uma conspiração para destronar um governante.",
          "Negociar a paz entre nações ou famílias feudais inimigas.",
          "Garantir o auxílio de um governante ou conselho.",
          "Ajudar um vilão a encontrar a redenção.",
          "Negociar com o vilão.",
          "Contrabandear armas para forças rebeldes.",
          "Impedir um bando de contrabandistas.",
          "Coletar informações sobre uma força inimiga.",
          "Ganhar um torneio.",
          "Determinar a identidade do vilão.",
          "Localizar um item roubado.",
          "Garantir que um casamento se conclua sem contratempos.",
        ],
      },
    ],
  },
  reviravoltas: {
    atributos: [
      {
        chave: "reviravoltas",
        titulo: "Reviravoltas",
        valor: "",
        valores: [
          "Os aventureiros estão correndo contra outras criaturas com o mesmo objetivo ou objetivo oposto.",
          "Os aventureiros tornam-se responsáveis pela segurança de um PdM não-combatente.",
          "Os aventureiros são proibidos de matar o vilão, mas o vilão não terá remorso de mata-los.",
          "Os aventureiros tem um tempo limite.",
          "Os aventureiros receberam informações falsas ou estranhas.",
          "Concluir o objetivo de uma aventura completa uma profecia ou impede o cumprimento de uma profecia.",
          "Os aventureiros tem dois objetivos diferentes, mas só podem completar um.",
          "Completar o objetivo secretamente ajuda o vilão.",
          "Os aventureiros devem cooperar com um inimigo conhecido para alcançar o objetivo.",
          "Os aventureiros estão sob compulsão mágica (como pela magia missão) para completar seu objetivo.",
        ],
      },
    ],
  },
};

export default function Home() {
  const [tipoDeAventura, setTipoDeAventura] = useState<TTipoDeAventure>(
    "aventuraBaseadaEmEvento"
  );
  const [ganchosDeAventura, setGanchosDeAventura] = useState<Array<IAtributo>>(
    []
  );

  const gerarItem = (array: Array<string>) => {
    return array[gerarIndiceAleatorioDeArray(array.length)];
  };

  const gerarGanchoDeAventura = () => {
    const gancho: Array<IAtributo> = [];

    base[tipoDeAventura].atributos.forEach((att) => {
      gancho.push({ ...att, valor: gerarItem(att.valores) });
    });

    base.reviravoltas.atributos.forEach((att) => {
      gancho.push({ ...att, valor: gerarItem(att.valores) });
    });

    return gancho;
  };

  const atualizarGancho = (campo: TChaves) => {
    try {
      let newField: IAtributo;

      if (campo === "reviravoltas") {
        const item = base.reviravoltas.atributos.find(
          (att) => att.chave === campo
        );
        if (!item) throw new Error("Impossible error");
        newField = { ...item, valor: gerarItem(item.valores) };
      } else if (campo === "objetivo" || campo === "acaoCausadaPeloVilao") {
        const item = base.aventuraBaseadaEmEvento.atributos.find(
          (att) => att.chave === campo
        );
        if (!item) throw new Error("Impossible error");
        newField = { ...item, valor: gerarItem(item.valores) };
      } else if (
        campo === "climax" ||
        campo === "vilao" ||
        campo === "introducao"
      ) {
        const item = base.aventuraBaseadaEmLocal.atributos.find(
          (att) => att.chave === campo
        );
        if (!item) throw new Error("Impossible error");
        newField = { ...item, valor: gerarItem(item.valores) };
      }

      const novoGancho = ganchosDeAventura.map((gancho) => {
        if (gancho.chave === campo) return newField;
        return gancho;
      });

      setGanchosDeAventura(novoGancho);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.generateForm}>
        <button onClick={() => setGanchosDeAventura(gerarGanchoDeAventura())}>
          GERAR AVENTURA
        </button>

        <label htmlFor="">Tipo de aventura</label>
        <select
          id="tipoDeAventura"
          name="tipoDeAventura"
          value={tipoDeAventura}
          onChange={(e) => setTipoDeAventura(e.target.value as TTipoDeAventure)}
        >
          <option value="aventuraBaseadaEmLocal">Baseada em local</option>
          <option value="aventuraBaseadaEmEvento">Baseada em evento</option>
        </select>

        {ganchosDeAventura.length > 0 &&
          ganchosDeAventura.map((gancho) => (
            <Item
              key={gancho.chave}
              titulo={gancho.titulo}
              descricao={gancho.valor}
              nivel={gancho.chave}
              atualizarItem={atualizarGancho}
            />
          ))}
      </div>
    </main>
  );
}
