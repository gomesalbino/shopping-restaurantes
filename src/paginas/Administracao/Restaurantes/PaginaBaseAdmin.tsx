import { AppBar, Box, Button, Container,  Toolbar, Typography, Link, Paper } from "@mui/material";


import {Link as RouterLink, Outlet} from "react-router-dom";

const PaginaBaseAdmin = () => {

    
    return (
        <>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography>Adiministração: </Typography>
                        <Box sx={{ display: "flex", flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/restaurantes">
                                <Button sx={{ my: 2, color: "#fff" }}>
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/restaurantes/novo">
                                <Button sx={{ my: 2, color: "#fff" }}>
                                    Novo  Restaurante
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/pratos">
                                <Button sx={{ my: 2, color: "#fff" }}>
                                    Pratos
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/pratos/novo">
                                <Button sx={{ my: 2, color: "#fff" }}>
                                  Novo  Prato
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 2 }}>
                    <Paper sx={{ p: 2 }}>
                        {/* Aqui entra o Conteudo da pagina*/}

                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    );
}

export default PaginaBaseAdmin;

