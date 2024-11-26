// import './App.css';

const Login = () => {
  
  return (
   <>
      <div>
            <header id="top">
                <nav class="menu-simples">
                    <a href="/cliente"><h2 class="titulo"><i>Moviefy Tickets</i></h2></a>
                </nav>
            </header>

            <main style="margin-top: 140px;">
                <section id="cadastro">
                    <div class="user">
                        <div class="titulo-login">
                            <h3><b>Ainda não tem um cadastro?</b></h3>
                            <h3><b>Cadastre-se aqui!</b></h3>
                        </div>
                        <form class="form-login" action="/login" method="post">
                            <div class="inputs">
                                <div class="data">
                                    <label for="">Nome Completo</label>
                                    <input type="text" placeholder="Nome" name="nome"/>
                                </div>     
                                <div class="data">
                                    <label for="">Data de nascimento</label>
                                    <input type="date" name="dataNascimento"/>
                                </div>   
                                <div class="data">
                                    <label for="">CPF</label>
                                    <input type="text" placeholder="xxx.xxx.xxx-xx" name="cpf"/>
                                </div>
                                <div class="data">
                                    <label for="">Email</label>
                                    <input type="email" placeholder="user@email" name="email"/>
                                </div>
                                <div class="data">
                                    <label for="">Senha</label>
                                    <div class="password" style="position: relative;">
                                        <input type="password" placeholder="Insira sua senha" id="senha1" name="senha"/>
                                        <img src="/img/show.png" alt="" onclick="mostrarSenha(1)" id="img-senha1"/>
                                    </div>
                                </div>
                                <div class="data">
                                    <label for="">Confirmar senha</label>
                                    <div class="password" style="position: relative;">
                                        <input type="password" placeholder="Confirme sua senha" id="senha2"/>
                                        <img src="/img/show.png" alt="" onclick="mostrarSenha(2)" id="img-senha2"/>
                                    </div>
                                </div> 
                            </div>
                            <div class="btns-form">
                                <button type="submit" class="btn-submit">Cadastrar</button>
                                <button type="submit" class="btn-google">Cadastrar com Google</button>
                            </div>
                        </form>
                    </div>
                </section>
                    
                <section id="login">
                    <div class="user">
                        <div class="titulo-login">
                            <h3><b>Já possui uma conta?</b></h3>
                            <h3><b>Faça seu login!</b></h3>
                        </div>
                        <form class="form-login" action="/entrar" method="post">
                            <div class="inputs">
                                <div class="data">
                                    <label for="">Email</label>
                                    <input type="email" placeholder="user@email" name="emailEntrada"/>
                                </div>
                                <div class="data">
                                    <label for="">Senha</label>
                                    <div class="password" style="position: relative;">
                                        <input type="password" placeholder="Insira sua senha" id="senha3" name="senhaEntrada"/>
                                        <img src="/img/show.png" alt="" onclick="mostrarSenha(3)" id="img-senha3"/>
                                    </div>
                                </div>
                            </div>
                            <div class="btns-form">
                                <button type="submit" class="btn-submit">Entrar</button>
                                <button type="submit" class="btn-google">Entrar com Google</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer class="footer-simples">
                <p class="copyright">Copyright © 2024 Moviefy Tickets. Todos os direitos reservados.</p>
            </footer>
        </div>
   </>
  );
}

export default Login;