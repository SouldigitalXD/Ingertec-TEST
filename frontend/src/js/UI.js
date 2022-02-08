

const body = document.body;

const crearHTML = () => {

    const html = `

        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a href="https://www.ingertec.com.ar/" class="navbar-brand">Ingertec App</a>
            </div>
        </nav>

        <div id="container-main" class="container mt-5">
            <div id="cards" class="d-flex p-2 bd-highlight flex-wrap">
                <div class="card" style="width: 16rem;">
                <img src="./assets/img/bife_costilla.jpg" id="bife" class="card-img-top" class="card-img-top" data-bs-toggle="modal" data-bs-target="#myModalPopUp" alt="asado argento">
                    <div class="card-body">
                        <p class="card-text">Asado.</p>
                            <div class="d-flex p-2 bd-highlight align-items-center " >
                                <i class="bi bi-hand-thumbs-up-fill mx-auto"></i>
                                <span class="" >0</span>
                            </div>
                    </div>
                </div>
                <div class="card" style="width: 16rem;">
                    <img src="./assets/img/Gold_capuccino_540x540_no5.jpg" id="capuchino" class="card-img-top" data-bs-toggle="modal" data-bs-target="#myModal" alt="Capuchino">
                    <div class="card-body">
                        <p class="card-text">Capuchino Nusret.</p>
                            <div class="d-flex p-2 bd-highlight " >
                                <i class="bi bi-hand-thumbs-up-fill mx-auto"></i>
                                <span class="span2" >0</span>
                            </div>
                    </div>
                </div>
                <div class="card" style="width: 16rem;"> 
                <img src="./assets/img/Cebiche_de_corvina.JPG" id="ceviche" class="card-img-top" data-bs-toggle="modal" data-bs-target="#myModalPopUp2" alt="Ceviche">
                    <div class="card-body">
                        <p class="card-text">Ceviche Peruano.</p>
                            <div class="d-flex p-2 bd-highlight">
                                <i class="bi bi-hand-thumbs-up-fill mx-auto"></i>
                                <span class="" >0</span>
                            </div>
                    </div>
                </div>
                <div class="card" style="width: 16rem;">
                    <img src="./assets/img/Gold_sirt_540x540_no1.jpg" id="goldSteak" class="card-img-top" data-bs-toggle="modal" data-bs-target="#myModal2" alt="GoldSteak">
                    <div class="card-body">
                        <p class="card-text">Gold Steak Nusret.</p>
                            <div class="d-flex p-2 bd-highlight " >
                                <i class="bi bi-hand-thumbs-up-fill mx-auto"></i>
                                <span class="span4" >0</span>
                            </div>
                    </div>
                </div>
                <div class="card" style="width: 16rem;"> 
                <img src="./assets/img/kafes_540x540_no2.jpg" id="tomahawk" class="card-img-top" data-bs-toggle="modal" data-bs-target="#myModalPopUp3" alt="Tomahawk">
                    <div class="card-body">
                        <p class="card-text">Special Nusret.</p>
                            <div class="d-flex p-2 bd-highlight " >
                                <i class="bi bi-hand-thumbs-up-fill mx-auto"></i>
                                <span class="" >0</span>
                            </div>
                    </div>
                </div>

            </div>
            
            <hr>
            
        </div>
        
    `;

    const main = document.createElement("div");
    main.innerHTML = html;

    body.append(main);

}



export {
    crearHTML,
}




