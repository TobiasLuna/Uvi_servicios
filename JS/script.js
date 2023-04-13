let archivo = document.querySelector('#file');
archivo.addEventListener('change', () => {
  document.querySelector('.nombre').innerText = archivo.files[0].name;
})  

//Modal
const input_plan = document.querySelector('.plan');//Input de los planes

const btn_plan_1 = document.querySelector('#btn_plan1');//Para el boton del plan 1
const btn_plan_2 = document.querySelector('#btn_plan2');//Para el boton del plan 1
const btn_plan_3 = document.querySelector('#btn_plan3');//Para el boton del plan 1

const modal = document.querySelector('.conetendor_modal'); //contenedor modal
const cerrar = document.querySelector('#salir'); //Boton de cerrar
const enviar = document.querySelector('#btn_enviar') //Para cerrar al enviar. En produccion se deberia cambiar

//Abrir modal
btn_plan_1.addEventListener('click', () => {
    modal.classList.add('mostrar');
    input_plan.value = "Plan 1";
});
btn_plan_2.addEventListener('click', () => {
    modal.classList.add('mostrar');
    input_plan.value = "Plan 2";
});
btn_plan_3.addEventListener('click', () => {
    modal.classList.add('mostrar');
    input_plan.value = "Plan 3";
});
//Cerrar modal
cerrar.addEventListener('click', () => {
    modal.classList.remove('mostrar');
})
enviar.addEventListener('click', () => {
    modal.classList.remove('mostrar');
})