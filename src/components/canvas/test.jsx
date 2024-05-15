import { useState } from "react";
import footerimg from "../../img/_footer.jpg";
import logoSemana from '../../img/_sml.png';
import logoMED from '../../img/_mnte.png';
import logoMirex from '../../img/_mntrle.png';
import jsPDF from 'jspdf';
import BarraAzul from '../../img/corEfect.jpg';
import emailjs from '@emailjs/browser';

// Importar a biblioteca que vai conecatar o front com a API
// import Axios from 'axios';

export default function Form() {

    const centerX = (docWidth, elementWidth) => (docWidth - elementWidth) / 2;

    // Declarando uma nova variavel dados com state e atribuir o objecto
    const [data, setData] = useState({
        nome: '',
        area: '',
        instituition: '',
        country: '',
        phone1: '',
        phone2: '',
        email: '',
        tema: '',
        resumo: ''
    });

    // Declarar variavel para receber a mensagem
    // const [mensagem, setMensagem] = useState(" ");

    // Receber os valores dos campos do formulario
    const valorInput = e => setData({ ...data, [e.target.name]: e.target.value });

    // Funcao
    const enviarDados = (e) => {
        // Bloquear o carregamento da pagina
        e.preventDefault();

        if (!data.nome || !data.area || !data.instituition || !data.country || !data.phone1 || !data.phone2 || !data.email || !data.tema || !data.resumo) {
            alert("Por favor, preencha todos os campos corretamente.");
        }

        const TemplateParams = {
            from_name: data.nome,
            formatio_area: data.area,
            instituition_represent: data.instituition,
            your_country: data.country,
            your_phone1: data.phone1,
            your_phone2: data.phone2,
            email: data.email,
            tema: data.tema,
            resumo: data.resumo
        };

        emailjs.send("service_eu9k3pi", "template_xovf7ms", TemplateParams, "g315dGgdsD-S7xzVU")
            .then((response) => {
                alert("Inscrição enviado com sucesso. Confirme o downloand da sua ficha", response.status, response.text);
                // Funcao para gerar pdf
                if (!data.nome || !data.area || !data.instituition || !data.country || !data.phone1 || !data.phone2 || !data.email || !data.resumo) {
                    alert("Por favor, preencha todos os campos corretamente.");
                } else {
                    // Criar um novo objeto jsPDF
                    const doc = new jsPDF();

                    // Barra Azul
                    const BarradWidth = 500;
                    const BarraHeight = 10;
                    doc.addImage(BarraAzul, 'PNG', 0, 0, BarradWidth, BarraHeight);

                    // Adicionar as insignias MED dentro do PDF
                    const logoMedWidth = 45;
                    const logoMedHeight = 25;
                    doc.addImage(logoMED, 'PNG', 5, 10, logoMedWidth, logoMedHeight);

                    // Adicionar as insignias MED dentro do PDF
                    const logoMirexWidth = 45;
                    const logoMirexHeight = 25;
                    doc.addImage(logoMirex, 'PNG', 155, 10, logoMirexWidth, logoMirexHeight);

                    // Adicionar insígnia no centro do PDF
                    const logoSemanaWidth = 65;
                    const logoSemanaHeight = 45;
                    doc.addImage(logoSemana, 'PNG', centerX(doc.internal.pageSize.width, logoSemanaWidth), 36, logoSemanaWidth, logoSemanaHeight);

                    // Adicionar texto "Semana da Língua Portuguesa"
                    doc.setFont('Cambria', 'bold');
                    doc.setFontSize(25, 5);
                    doc.setTextColor(27, 117, 188); // Cor azul
                    doc.text("Semana da Língua Portuguesa", centerX(doc.internal.pageSize.width, 0), 90, { align: 'center' });

                    // Adicionar parágrafo "Partilha de Saberes, com vista ao Desenvolvimento da Língua Portuguesa"
                    doc.setFont('helvetica');
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0); // Cor preta
                    doc.text("“Língua, conhecimento e desenvolvimento”", centerX(doc.internal.pageSize.width, 0), 97, { align: 'center' });

                    // Adicionar parágrafo "De 5 a 11 de Maio de 2023 - 4.ª edição"
                    doc.setFont('helvetica');
                    doc.text("De 5 a 10 de Maio de 2024 - 5.ª edição", centerX(doc.internal.pageSize.width, 0), 104, { align: 'center' });

                    // Adicionar detalhes do formulário ao PDF com estilos personalizados
                    doc.setFont('helvetica');
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0); // Cor preta

                    // Adicionar campos do formulário
                    doc.text(`Nome: ${data.nome}`, 10, 140);
                    doc.text(`_________________________________________________________________________________`, 10, 141);
                    doc.text(`Área de Formação: ${data.area}`, 10, 147);
                    doc.text(`_________________________________________________________________________________`, 10, 148);
                    doc.text(`Instituição que representa: ${data.instituition}`, 10, 154);
                    doc.text(`_________________________________________________________________________________`, 10, 155);
                    doc.text(`País: ${data.country}`, 10, 161);
                    doc.text(`_________________________________________________________________________________`, 10, 162);
                    doc.text(`Contacto1: ${data.phone1}`, 10, 168);
                    doc.text(`_________________________________________________________________________________`, 10, 169);
                    doc.text(`Contacto2: ${data.phone2}`, 10, 175);
                    doc.text(`_________________________________________________________________________________`, 10, 176);
                    doc.text(`Email: ${data.email}`, 10, 182);
                    doc.text(`_________________________________________________________________________________`, 10, 183);
                    doc.text(`Tema: ${data.tema}`, 10, 189);
                    doc.text(`_________________________________________________________________________________`, 10, 190);
                    doc.text(`Resumo: ${data.resumo}`, 10, 196);

                    // Adicionar marca d'água na parte inferior do PDF
                    const footerimgWidth = 200;
                    const footerimgHeight = 10;
                    const footerimgX = (doc.internal.pageSize.width - footerimgWidth) / 2;
                    doc.addImage(footerimg, 'PNG', footerimgX, doc.internal.pageSize.height - footerimgHeight - 10, footerimgWidth, footerimgHeight);

                    // Salvar o arquivo PDF
                    doc.save(`Ficha_de_Inscricao__${data.nome}.pdf`);
                };
                setData({
                    nome: '',
                    area: '',
                    instituition: '',
                    country: '',
                    phone1: '',
                    phone2: '',
                    email: '',
                    tema: '',
                    resumo: ''
                });

            }, (err) => {
                console.log("Erro: ", err);
            });

        // Manipular os dados recebidos, por exemplo enviar os dados para API
        // Concaternar e imprimir utilizando Template strings
        // console.log(`Nome: ${data.name}`);
        // console.log(`Area: ${data.area}`);
        // console.log(`Institution: ${data.instituition}`);
        // console.log(`Country: ${data.country}`);
        // console.log(`Phone1: ${data.phone1}`);
        // console.log(`Phone2: ${data.phone2}`);
        // console.log(`Email: ${data.email}`);
        // console.log(`Resumo: ${data.resumo}`);

        // Criar a constante com os dados do cabecalho
        //const headers = {
        //'headers': {
        // Indicar que sera enviado os dados em formato de objecto
        //'Content-Type': 'application/json'
        //}
        //};

        //Fazer a requisicao para o servidor utilizando axios, indicando o metodo da requisicao, o endereco, enviar os dados do formulario e o cabecalho
        //await Axios.post('http://localhost:8080/files', data, headers)
        // Acessar o then quando a API retornar status 200 OK
        //.then((resp) => {
        // Atribuir a mensaquem no state mensagem
        //setMensagem(resp.data.mensagem);

        // Limpar os dados do formulario
        //setData({
        //nome: '',
        //area: '',
        //instituition: '',
        //                 country: '',
        //                 phone1: '',
        //                 phone2: '',
        //                 email: '',
        //                 resumo: ''
        //             })
        //         })
        //         // Acessar o then quando a API retornar erro
        //         .catch((err) => {
        //             // Atribuir a mensaquem no state mensagem
        //             setMensagem(err.resp.data.mensagem);
        //         })
    };

    return (
        <div>
            <section className="form__section">
                <div className="container form__section-container">
                    <div className="logoSemana"><img src={logoSemana} width="250" id="semana_lingua" /></div>
                    <h1 id="Tema">Semana da Língua Portuguesa</h1>
                    <h1 id="Tema1">“Língua, conhecimento e desenvolvimento”</h1>
                    <h1 id="Tema3">De 5 a 10 de Maio de 2024 - 5.ª edição</h1>
                    <h1 id="Tema5">Formulário de Inscrição</h1>


                    {/* Inicio do formulario, executar o onSubmit quando o usuario clicar no input submit e chamar a funcao enviarDados */}
                    <form action="" method="" onSubmit={enviarDados}>

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="text" name="nome" placeholder="Nome completo" onChange={valorInput} value={data.name} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="text" name="area" placeholder="Área de formação" onChange={valorInput} value={data.area} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="text" name="instituition" placeholder="Instituição que representa" onChange={valorInput} value={data.instituition} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="text" name="country" placeholder="País" onChange={valorInput} value={data.country} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="number" name="phone1" placeholder="Contacto 1" onChange={valorInput} value={data.phone1} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="number" name="phone2" placeholder="Contacto 2" onChange={valorInput} value={data.phone2} />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="email" name="email" placeholder="Endereço de correio electrónico" onChange={valorInput} value={data.email} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <input type="text" name="tema" placeholder="Título da comunicação" onChange={valorInput} value={data.tema} required />

                        {/* Criar o campo, quando o usuario digitar valor no campo, chamar com onChange a funcao valorInput*/}
                        <textarea name="resumo" id="Tema4" cols="30" rows="10" placeholder="Resumo" onChange={valorInput} value={data.resumo} required></textarea>

                        {/* Imprimir a mensagem retornada da API*/}
                        {/*mensagem ? <p>{mensagem}</p> : ""*/}

                        <input type="submit" name="Increver" value="Inscrever-se" className="btn" />
                    </form>
                    <img src={footerimg} width="780" id="_footer" />
                </div>
            </section>
        </div>
    );
}