import React from "react";
import "./Form.css";
import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";
import { useState } from "react";

function Form(props) {
   const [name, setName] = useState("");
   const [job, setJob] = useState("");
   const [image, setImage] = useState("");
   const [team, setTeam] = useState("Programador");

   function handleFormSubmit(ev) {
      ev.preventDefault();
      const worker = {
         name: name,
         job: job,
         image: image,
         team: team,
      };

      props.handleNewWorker(worker);
      setName("");
      setJob("");
      setImage("");
      setTeam("");
   }

   return (
      <section className="form-container">
         <form onSubmit={handleFormSubmit}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <Input
               required={true}
               label="Nome"
               placeholder="Digite seu nome"
               inputValue={name}
               handleChange={(name) => setName(name)}
            />
            <Input
               required={true}
               label="Cargo"
               placeholder="Digite seu cargo"
               inputValue={job}
               handleChange={(job) => setJob(job)}
            />
            <Input
               label="Imagem"
               placeholder="Informe o endereço da imagem"
               inputValue={image}
               handleChange={(image) => setImage(image)}
            />
            <SelectInput
               required={true}
               label="Equipe"
               itens={props.teams}
               inputValue={team}
               handleChange={(team) => setTeam(team)}
            />
            <Button type="submit">Criar card</Button>
         </form>
      </section>
   );
}

export default Form;
