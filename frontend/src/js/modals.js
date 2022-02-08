
let counter = 1;
let counter2 = 1;


let modalWrap;

const showModal = () => {

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `

         <div class="modal fade" id="myModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img src="./assets/img/Gold_capuccino_540x540_no5.jpg" class="card-img-top" style="height: 400px" alt="asado argento">
                        </div>
                    </div>    
               </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
}

const showModal2 = () => {

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `

         <div class="modal fade" id="myModal2" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img src="./assets/img/Gold_sirt_540x540_no1.jpg" class="card-img-top" style="height: 400px" alt="Gold-Tomahawk">
                        </div>
                    </div>    
               </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
}

const eventos = () => {
    const span = document.querySelectorAll('span');
    const capuchino = document.querySelector('#capuchino');
    const goldSteak = document.querySelector('#goldSteak');

    capuchino.addEventListener('click', () => {
        span[1].innerText = counter++

    });
    goldSteak.addEventListener('click', () => {
        span[3].innerText = counter2++

    });
    
}



export const modal = () => {
    showModal();
    showModal2();
    eventos();
    
}