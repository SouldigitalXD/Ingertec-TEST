
//Variables
let counter  = 1;
let counter2 = 1;
let counter3 = 1;
let modalWrap;


const showPopUpBife = () => {

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `

         <div class="modal fade" id="myModalPopUp" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                        <h5 class="modal-title" id="exampleModalLabel">Asado</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img src="./assets/img/bife_costilla.jpg" class="card-img-top" style="height: 400px" alt="asado argento">
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" id="btnOk" class="btn btn-primary">OK</button>
                      </div>
                    </div>    
               </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
}


const showPopUpCeviche = () => {

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `

         <div class="modal fade" id="myModalPopUp2" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                        <h5 class="modal-title" id="exampleModalLabel">Ceviche</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img src="./assets/img/Cebiche_de_corvina.JPG" class="card-img-top" style="height: 400px" alt="ceviche">
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" id="btnOk2" class="btn btn-primary">OK</button>
                      </div>
                    </div>    
               </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
}


const showPopUpTomahawks = () => {

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `

         <div class="modal fade " id="myModalPopUp3" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-dialog-centered ">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                        <h5 class="modal-title" id="exampleModalLabel">Tomahawk</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                        <img src="./assets/img/kafes_540x540_no2.jpg" class="card-img-top" style="height: 400px" alt="special">
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" id="btnOk3" class="btn btn-primary">OK</button>
                      </div>
                    </div>    
               </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
}


const eventos = () => {
    const span     = document.querySelectorAll('span');
    const btnOk    = document.querySelector('#btnOk');
    const btnOk2   = document.querySelector('#btnOk2');
    const btnOk3   = document.querySelector('#btnOk3');

    btnOk.addEventListener('click', () => {
        span[0].innerText = counter++
    
    });
    btnOk2.addEventListener('click', () => {
        span[2].innerText = counter2++
    
    });
    btnOk3.addEventListener('click', () => {
        span[4].innerText = counter3++
    
    });

}

export const initPopUp = () => {
    showPopUpBife();
    showPopUpCeviche();
    showPopUpTomahawks();
    eventos();
}

