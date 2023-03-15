import {  Box, Button, Container, TextField,  Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante"



const FormularioRestaurantes = () => {


    const parametros = useParams();

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomesRestaurante(resposta.data.nome))
        }
    }, [parametros])

    const [nomeRestaurante, setNomesRestaurante] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, { nome: nomeRestaurante })
                .then(() => {
                    setNomesRestaurante('')
                    alert("Restaurante atulizado com sucesso!")
                })
        } else {

            http.post("restaurantes/", { nome: nomeRestaurante })
                .then(() => {
                    setNomesRestaurante('')
                    alert("Restaurante cadastrado com sucesso!")
                })
        }

    }

    return (
        <>
          
            <Box>
                <Container maxWidth="lg" sx={{ mt: 2 }}>
                    <Paper sx={{ p: 2 }}>
                        {/* Conteudo da pagina*/}

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
                            <Box component="form" onSubmit={aoSubmeterForm} sx={{width: "100%"}}>
                                <Typography variant="h3" marginTop="35px" marginBottom="20px"> Formulário de Restaurantes </Typography>
                                <TextField
                                    value={nomeRestaurante}
                                    onChange={evento => setNomesRestaurante(evento.target.value)}
                                    label="Nome do Restaurante"
                                    variant="standard"
                                    fullWidth
                                    required
                                    autoFocus

                                />

                                <Button type="submit"
                                    fullWidth
                                    sx={{ marginTop: 2, backgroundColor: "#154580", color: "#FFF" }}
                                    variant="outlined"
                                >
                                    Salvar

                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}

export default FormularioRestaurantes;

