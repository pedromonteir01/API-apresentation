'use client'
import { useState } from "react";
import Cadastro from "@/models/Cadastro";
import Cadastros from "@/models/Cadastros";
import style from '@/app/Cadastro/cadastro.module.css'
import { Main } from "next/document";

const cadastros = new Cadastros();

function Times() {

    const [aux, setAux] = useState(null);

    let vazia = '';
    const [nomeTime, setTime] = useState(vazia);

    const [show, setShow] = useState(false);

    const [lista, setLista] = useState(cadastros.lista);

    const showCadastros = () => {
        if (nomeTime.trim() == '') {
            alert('testando')
        } else {
            const cadastro = new Cadastro(nomeTime);
            cadastros.addCadastros(cadastro)
            setTime(vazia);

            console.log(cadastros.lista);
        }
    }
    const edit = (nomeTime, id) => {
        setShow(true);

        setTime(nomeTime);

        setAux(id);
    }

    const editCadastro = () => {
        cadastros.editarCadastro(aux, nomeTime);

        setTime(vazia);
        setLista(cadastros.lista);
        setShow(false);
        setAux(null);
    }

    const delet = (id) => {
        let already = false;

        cadastros.lista.map((cadastro) => (
            cadastro.id == id ? already = true : already
        ))

        if (already) {
            cadastros.deleteCadastros(id);
            setLista(cadastros.lista);
        }
    }

    return (
        <main>
            <div className={style.mainContent}>
                <h1>Cadastros</h1>
                <article className={style.timeform}>
                    <section className={style.input}>
                        <label>Nome do Time:</label>
                        <input type="text"
                            value={nomeTime}
                            onChange={(param) => {
                                setTime(param.target.value);
                            }}
                            className={style.infor}
                        />
                    </section>
                    <section className={style.div}>
                        {
                            show && (
                                <button onClick={editCadastro} className={style.btn}>Editar</button>
                            )
                        }
                        {
                            !show && (
                                <button onClick={showCadastros} className={style.btn}>Cadastrar</button>
                            )
                        }


                    </section>
                </article>

                <article className={style.cadastrolista}>
                    <h2>Lista</h2>
                    <section className={style.seccadastros}>
                        {
                            lista.map((cadastro) => (
                                <div key={cadastro.id} className={style.cadastros}>
                                    <div className={style.lista}>
                                        <p><strong>Nome do time:</strong>{cadastro.nomeTime}</p>
                                    </div>
                                    <div className={style.btncadastros}>
                                        <button onClick={() => edit(cadastro.nomeTime, cadastro.id)} className={style.edit}>Editar</button>
                                        <button onClick={() => delet(cadastro.id)} className={style.delet}>Excluir</button>                            </div>
                                </div>
                            ))
                        }

                    </section>
                </article>
            </div>
        </main>
    );
}

export default Times;
